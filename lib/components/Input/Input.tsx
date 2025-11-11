import './Input.css';
import type { InputProps } from '../../types/input';
import { clsx } from 'clsx';
import useClassNames from '../../hooks/useClassName';
import {
    forwardRef,
    useRef,
    useState,
    useCallback,
    useImperativeHandle,
    useEffect,
} from 'react';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';
import { Button } from '../Button/Button';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            placeholder,
            error = false,
            disabled = false,
            className,
            size = 'md',
            prependIcon,
            clearButton = false,
            loading = false,
            onChange,
            onFocus,
            onBlur,
            type = 'text',
            id,
            name,
            value,
            defaultValue,
            autoFocus,
            ...props
        }: InputProps,
        ref,
    ) => {
        const bemClass = useClassNames('text-input');
        const internalRef = useRef<HTMLInputElement>(null);
        const [isFocused, setIsFocused] = useState(false);
        const [hasValue, setHasValue] = useState(() => {
            // Check if component has initial value (controlled or uncontrolled)
            if (value !== undefined) return value !== '';
            if (defaultValue !== undefined) return String(defaultValue) !== '';
            return false;
        });

        // Merge forwarded ref with internal ref
        useImperativeHandle(
            ref,
            () => internalRef.current as HTMLInputElement,
            [],
        );

        // Sync hasValue with value prop for controlled components
        useEffect(() => {
            if (value !== undefined) {
                setHasValue(value !== '');
            }
        }, [value]);

        const handleFocus = useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
                setIsFocused(true);
                onFocus?.(e);
            },
            [onFocus],
        );

        const handleBlur = useCallback(
            (e: React.FocusEvent<HTMLInputElement>) => {
                setIsFocused(false);
                onBlur?.(e);
            },
            [onBlur],
        );

        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.value;
                setHasValue(newValue !== '');

                // Support both controlled and uncontrolled components
                if (onChange) {
                    onChange(newValue);
                } else {
                    // For uncontrolled components, let the native input handle it
                    // We just track the value for UI purposes
                }
            },
            [onChange],
        );

        const handleClear = useCallback(() => {
            const inputElement = internalRef.current;
            if (!inputElement) return;

            // Clear the input value
            if (onChange) {
                // Controlled component: call onChange with empty string
                onChange('');
                // Trigger native change event for form libraries
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLInputElement.prototype,
                    'value',
                )?.set;
                nativeInputValueSetter?.call(inputElement, '');
                inputElement.dispatchEvent(
                    new Event('input', { bubbles: true }),
                );
            } else {
                // Uncontrolled component: directly set value
                inputElement.value = '';
                inputElement.dispatchEvent(
                    new Event('input', { bubbles: true }),
                );
                inputElement.dispatchEvent(
                    new Event('change', { bubbles: true }),
                );
            }

            setHasValue(false);
            inputElement.focus();
        }, [onChange]);

        // Determine if clear button should be visible
        const showClearButton =
            clearButton && hasValue && !disabled && !loading;
        const showLoading = loading && !disabled;

        return (
            <div
                className={clsx(bemClass(), bemClass('size', size), {
                    [bemClass('', 'error')]: error,
                })}
                data-focus={isFocused || undefined}
                data-disabled={disabled || undefined}
            >
                {prependIcon && (
                    <div
                        className={clsx(bemClass('action-box'))}
                        data-active={String(!!prependIcon)}
                        aria-hidden="true"
                    >
                        {prependIcon}
                    </div>
                )}
                <input
                    ref={internalRef}
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    className={clsx(bemClass('input'), className)}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    aria-invalid={error || undefined}
                    aria-disabled={disabled || undefined}
                    {...props}
                />
                {(showClearButton || showLoading) && (
                    <div
                        className={clsx(bemClass('action-box'))}
                        data-active="true"
                        aria-hidden="true"
                    >
                        {showClearButton && (
                            <Button
                                type="button"
                                onClick={handleClear}
                                disabled={disabled}
                                aria-label="Clear input"
                                tabIndex={-1}
                                variant="ghost"
                                color="secondary"
                                size="md"
                            >
                                <Icon name="cross-circle" size="md" />
                            </Button>
                        )}
                        {showLoading && <Spinner direction="row" size="md" />}
                    </div>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';
