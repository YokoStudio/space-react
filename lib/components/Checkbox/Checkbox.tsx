import './Checkbox.css';
import { Checkbox as BaseCheckbox } from '@headlessui/react';
import { CheckIcon } from './icons/Check.tsx';
import { clsx } from 'clsx';
import { MinusIcon } from './icons/Minus.tsx';

export type CheckboxProps = {
    label?: string;
    indeterminate?: boolean;
    checked: boolean;
    disabled?: boolean;
    onChange: (value: CheckboxProps['checked']) => void;
};

export const Checkbox = ({
    checked,
    onChange,
    disabled = false,
    indeterminate = false,
}: CheckboxProps) => {
    return (
        <BaseCheckbox
            indeterminate={indeterminate}
            className={clsx(`checkbox`)}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
        >
            {indeterminate ? <MinusIcon /> : checked ? <CheckIcon /> : null}
        </BaseCheckbox>
    );
};
