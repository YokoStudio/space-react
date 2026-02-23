import { ReactNode } from 'react';

export enum RadioGroupDirection {
    Row = 'row',
    Column = 'col',
}

export type OptionSlotProps = {
    value: string;
    disabled?: boolean;
};

export type RadioGroupProps = {
    value?: string | null;
    defaultValue?: string;
    options?: string[];
    direction?: RadioGroupDirection;
    optionSlot?: (props: OptionSlotProps) => ReactNode;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    onChange?: (value: string) => void;
};
