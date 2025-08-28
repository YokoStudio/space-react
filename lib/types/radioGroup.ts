import type { RadioGroupProps as BaseRadioGroupProps } from '@headlessui/react';
import { ReactNode } from 'react';

export enum RadioGroupDirection {
    Row = 'row',
    Column = 'col',
}

export type OptionSlotProps = {
    value: string;
    disabled?: boolean;
};

export type RadioGroupProps = BaseRadioGroupProps & {
    options: string[];
    direction?: RadioGroupDirection;
    optionSlot?: ({ value, disabled }: OptionSlotProps) => ReactNode;
};
