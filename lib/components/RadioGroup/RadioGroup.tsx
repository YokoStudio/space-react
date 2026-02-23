import './RadioGroup.css';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { clsx } from 'clsx';
import type { RadioGroupProps } from '../../types/radioGroup';
import { Radio } from '../Radio/Radio';

export const RadioGroup = ({
    value,
    defaultValue,
    options = [],
    disabled,
    direction,
    className,
    children,
    onChange,
}: RadioGroupProps) => {
    const orientation =
        direction === 'col' ? 'vertical' : ('horizontal' as const);

    return (
        <RadioGroupPrimitive.Root
            value={value ?? undefined}
            defaultValue={defaultValue}
            onValueChange={onChange}
            disabled={disabled}
            orientation={orientation}
            className={clsx(
                'flex',
                'gap-4',
                {
                    'flex-row': direction === 'row' || !direction,
                    'flex-col': direction === 'col',
                },
                className,
            )}
        >
            {children ??
                options.map((option) => (
                    <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Radio value={option} disabled={disabled} />
                        <span>{option}</span>
                    </label>
                ))}
        </RadioGroupPrimitive.Root>
    );
};
