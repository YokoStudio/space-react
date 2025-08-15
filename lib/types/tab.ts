export interface TabItem {
    key: string;
    label: string;
    disabled?: boolean;
    content?: React.ReactNode;
}

export enum TabMode {
    Filled = 'filled',
    Outlined = 'outlined',
    Minimal = 'minimal',
}

export interface TabProps {
    items: TabItem[];
    mode?: TabMode;
    selectedIndex?: number;
    defaultIndex?: number;
    onChange?: (index: number) => void;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
}
