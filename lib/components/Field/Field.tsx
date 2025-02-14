import { WarningCircle } from './icons/warning-circle.tsx';
import {
    Children,
    isValidElement,
    JSXElementConstructor,
    ReactNode,
} from 'react';
import { Input } from '../Input/Input.tsx';
import { clsx } from 'clsx';

enum FieldMode {
    Normal = 'normal',
    Compact = 'compact',
}

type FieldProps = {
    label: string;
    mode?: FieldMode;
    required?: boolean;
    message?: string;
    children: ReactNode;
    className: string;
};

export const Field = ({
    label,
    children: _children,
    required,
    message,
    mode,
    className,
}: FieldProps) => {
    const validChildren: (JSXElementConstructor<any> | string)[] = [Input];

    const children = Children.map(_children, (child) => {
        if (isValidElement(child) && validChildren.includes(child.type)) {
            return child;
        }
        console.warn('Invalid child type:', child);
        return null;
    });

    return (
        <div className={clsx('flex flex-col', className)}>
            <label
                htmlFor={'text'}
                className={`self-start relative bg-neutral-1-default px-0.5 transition ease-in-out ${mode === FieldMode.Compact && '-mb-2 ms-2'}`}
            >
                {label}
                {required && (
                    <span className="ms-1 text-error-1-default">*</span>
                )}
            </label>
            {children}
            {message && (
                <div className="flex gap-1 text-caption-c1 text-neutral-5-default mt-1">
                    <WarningCircle />
                    {message}
                </div>
            )}
        </div>
    );
};
