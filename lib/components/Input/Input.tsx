import './Input.css';
import { Input as BaseInput } from '@headlessui/react';
import type { InputProps } from '../../types/input.ts';
import { clsx } from 'clsx';
import useClassNames from '../../hooks/useClassName.ts';
import { forwardRef, Fragment, useRef, useState } from 'react';
import { Icon } from '../Icon/Icon.tsx';
import { Spinner } from '../Spinner/Spinner.tsx';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            placeholder,
            error = false,
            disabled = false,
            className,
            size,
            prependIcon,
            clearButton = false,
            loading = false,
            onChange,
            ...props
        }: InputProps,
        ref,
    ) => {
        const bemClass = useClassNames('text-input');
        const inputRef = useRef<HTMLInputElement>(null);
        const [isInputFocused, setIsInputFocused] = useState(false);

        const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsInputFocused(true);
            props.onFocus?.(e);
        };

        const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsInputFocused(false);
            props.onBlur?.(e);
        };

        const onClickClearButton = () => {
            const inputElement = (
                ref && 'current' in ref ? ref.current : inputRef.current
            ) as HTMLInputElement | null;

            inputElement?.focus();

            if (onChange) {
                onChange('');
            } else if (inputElement) {
                inputElement.value = '';
            }
        };

        return (
            <BaseInput disabled={disabled} ref={ref} {...props} as={Fragment}>
                {({ disabled, hover, autofocus }) => (
                    <div
                        className={clsx(bemClass(), bemClass('size', size), {
                            [bemClass('', 'error')]: error,
                        })}
                        autoFocus={autofocus}
                        {...(isInputFocused && {
                            'data-focus': isInputFocused,
                        })}
                        {...(hover && { 'data-hover': hover })}
                        {...(disabled && { 'data-disabled': disabled })}
                    >
                        <div
                            className={clsx(bemClass('action-box'))}
                            data-active={String(!!prependIcon)}
                        >
                            {prependIcon}
                        </div>
                        <input
                            className={clsx(bemClass('input'), className)}
                            placeholder={placeholder}
                            disabled={disabled}
                            ref={ref || inputRef}
                            {...props}
                            onChange={(e) => onChange?.(e.target.value)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                        <div
                            className={clsx(bemClass('action-box'))}
                            data-active={String(clearButton || loading)}
                        >
                            {clearButton && (
                                <button onClick={onClickClearButton}>
                                    <Icon name="cross-circle" size="md" />
                                </button>
                            )}
                            {loading && <Spinner direction="row" size="md" />}
                        </div>
                    </div>
                )}
            </BaseInput>
        );
    },
);
