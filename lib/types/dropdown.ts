import { ReactElement, ReactNode } from 'react';
import { DropdownGroup, DropdownOption } from '../components/Dropdown';

export type DropdownChildren =
    | ReactElement<typeof DropdownOption>
    | ReactElement<typeof DropdownGroup>;

export interface DropdownProps<T = unknown> {
    name?: string;
    error?: boolean;
    disabled?: boolean;
    prependIcon?: ReactNode;
    placeholder?: string;
    multiple?: boolean;
    defaultValue?: T | T[];
    value: T | T[];
    children: DropdownChildren | DropdownChildren[];
    onChange: (value: DropdownProps['value']) => void;
}

export interface DropdownOptionProp<T> {
    value: T;
    label: string;
    prependIcon?: ReactNode;
    disabled?: boolean;
    badge?: boolean;
}

export type DropdownGroupProp = {
    label: string;
};

export enum DropdownListPosition {
    Bottom = 'bottom start',
    Top = 'top end',
}
