import { Textarea as BaseTextarea } from '@headlessui/react';
import './Textarea.css';
import { ReactNode } from 'react';
import { CrossCircle } from './icons/cross-circle.tsx';

export type TextareaProps = {
    prependIcon: ReactNode;
    name?: string;
    value: string;
    defaultValue?: string;
};

export const Textarea = ({
    name,
    value,
    defaultValue,
    prependIcon,
}: TextareaProps) => {
    return (
        <div className="textarea">
            <BaseTextarea name={name} value={value} defaultValue={defaultValue}>
                <span className="textarea-prependicon">{prependIcon}</span>
                {(defaultValue || value) && (
                    <span className="textarea-action">
                        <CrossCircle />
                    </span>
                )}
            </BaseTextarea>
        </div>
    );
};
