import { ReactNode } from 'react';

export interface DropdownProps {
    icon?: ReactNode;
    placeholder?: string;
    options: ListItemOptions[] | string[];
    value: string | ListItemOptions;
    disabled?: boolean;
    error?: boolean;
    multiple?: boolean;
    labelGetterFunc?: (item: ListItemOptions) => string;
}

export type ListItemOptions = {
    label: string;
    value: string | number;
    disabled?: boolean;
};

export enum DropdownListPosition {
    Bottom = 'bottom start',
    Top = 'top end',
}
