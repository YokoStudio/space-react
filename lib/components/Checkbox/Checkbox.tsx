import './Checkbox.css';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from './icons/Check';
import { clsx } from 'clsx';
import { MinusIcon } from './icons/Minus';

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
    const checkedState = indeterminate ? 'indeterminate' : checked;

    return (
        <CheckboxPrimitive.Root
            className={clsx('checkbox')}
            checked={checkedState}
            disabled={disabled}
            onCheckedChange={(value) => {
                if (value === 'indeterminate') {
                    onChange(true);
                } else {
                    onChange(!!value);
                }
            }}
        >
            <CheckboxPrimitive.Indicator className="checkbox-indicator">
                {indeterminate ? <MinusIcon /> : checked ? <CheckIcon /> : null}
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
};
