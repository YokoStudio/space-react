import './Textarea.css';
import { ReactNode, forwardRef } from 'react';

export type TextareaProps = {
    prependIcon?: ReactNode;
    name?: string;
    value?: string;
    actionButton?: ReactNode;
    defaultValue?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        { name, value, defaultValue, prependIcon, actionButton }: TextareaProps,
        ref,
    ) => {
        return (
            <div className="textarea">
                {prependIcon && (
                    <span className="textarea-prependicon">{prependIcon}</span>
                )}
                <textarea
                    ref={ref}
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                />
                {actionButton && (
                    <span className="textarea-action">{actionButton}</span>
                )}
            </div>
        );
    },
);

Textarea.displayName = 'Textarea';
