export type TabProps = {
    className?: string;
    items: TabItem[];
    mode?: TabMode;
    selectedIndex?: number;
    defaultIndex?: number;
    onChange: (index: number) => void;
};

export enum TabMode {
    Filled = 'filled',
    Outlined = 'outlined',
}

export interface TabItem {
    key: string;
    label: string;
}
