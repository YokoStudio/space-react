import { Textarea as BaseTextarea } from '@headlessui/react';
import './Textarea.css';
import { ReactNode } from 'react';

export type TextareaProps = {
    prependIcon: ReactNode;
    name?: string;
    value: string;
    actionButton: ReactNode;
    defaultValue?: string;
};

export const Textarea = ({
    name,
    value,
    defaultValue,
    prependIcon,
    actionButton,
}: TextareaProps) => {
    return (
        <div className="textarea">
            <span className="textarea-prependicon">{prependIcon}</span>
            <BaseTextarea
                name={name}
                value={value}
                defaultValue={defaultValue}
            ></BaseTextarea>
            {actionButton && (
                <span className="textarea-action">{actionButton}</span>
            )}
        </div>
    );
};
