import './RadioGroup.css';
import { Field, Label, RadioGroup as BaseRadioGroup } from '@headlessui/react';
import { clsx } from 'clsx';
import type { RadioGroupProps } from '../../types/radioGroup.ts';
import { Radio } from '../Radio/Radio.tsx';

export const RadioGroup = ({
    value,
    options = [],
    disabled,
    direction,
    className,
    children,
    onChange,
}: RadioGroupProps) => {
    return (
        <BaseRadioGroup
            value={value}
            className={clsx(
                'flex',
                'gap-4',
                {
                    [`flex-${direction}`]: direction,
                },
                className,
            )}
            disabled={disabled}
            onChange={onChange}
        >
            {children ||
                (options.length &&
                    options.map((option) => (
                        <Field className={'flex items-center gap-2'}>
                            <Radio value={option} />
                            <Label>{option}</Label>
                        </Field>
                    )))}
        </BaseRadioGroup>
    );
};
