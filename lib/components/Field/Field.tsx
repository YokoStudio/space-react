import { WarningCircle } from './icons/warning-circle.tsx';
import {
    Children,
    isValidElement,
    ReactNode,
    useId,
    cloneElement,
} from 'react';
import { Input } from '../Input/Input.tsx';
import { Textarea } from '../Textarea/Textarea.tsx';
import { clsx } from 'clsx';
import './Field.css';

enum FieldMode {
    Normal = 'normal',
    Compact = 'compact',
}

interface FieldProps {
    label: string;
    mode?: FieldMode;
    required?: boolean;
    message?: string;
    error?: boolean;
    hint?: string;
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Field = ({
    label,
    children: _children,
    required,
    message,
    error,
    hint,
    mode = FieldMode.Normal,
    className,
    id: propId,
}: FieldProps) => {
    const generatedId = useId();
    const fieldId = propId || generatedId;

    const validChildren = [Input, Textarea];

    const children = Children.map(_children, (child) => {
        if (
            isValidElement(child) &&
            validChildren.includes(child.type as typeof Input | typeof Textarea)
        ) {
            return cloneElement(child, {
                'aria-describedby': hint ? `${fieldId}-hint` : undefined,
                'aria-invalid': error || undefined,
            });
        }
        console.warn('Invalid child type:', child);
        return null;
    });

    return (
        <div className={clsx('field', `field--${mode}`, className)}>
            <label
                htmlFor={fieldId}
                className={clsx(
                    'field__label',
                    mode === FieldMode.Compact && 'field__label--compact',
                )}
            >
                {label}
                {required && (
                    <span className="field__required" aria-label="required">
                        *
                    </span>
                )}
            </label>

            {hint && (
                <div id={`${fieldId}-hint`} className="field__hint">
                    {hint}
                </div>
            )}

            {children}

            {message && (
                <div
                    className={clsx(
                        'field__message',
                        error && 'field__message--error',
                    )}
                    role={error ? 'alert' : 'status'}
                    aria-live={error ? 'assertive' : 'polite'}
                >
                    <WarningCircle />
                    <span>{message}</span>
                </div>
            )}
        </div>
    );
};
