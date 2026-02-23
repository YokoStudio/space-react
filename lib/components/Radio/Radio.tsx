import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';

export type RadioProps = {
    value: string;
    disabled?: boolean;
    className?: string;
};

export const Radio = ({ value, disabled, className }: RadioProps) => {
    return (
        <RadioGroupPrimitive.Item
            value={value}
            disabled={disabled}
            className={clsx('radio', className)}
        >
            <RadioGroupPrimitive.Indicator />
        </RadioGroupPrimitive.Item>
    );
};
