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

export interface RadioGroupOption {
    value: any;
    label: string;
    disabled?: boolean;
}

export interface RadioGroupProps {
    value: any;
    options?: RadioGroupOption[];
    disabled?: boolean;
    direction?: 'row' | 'column';
    className?: string;
    children?: React.ReactNode;
    onChange?: (value: any) => void;
    label?: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    name?: string;
}
