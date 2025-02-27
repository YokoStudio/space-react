import './Tab.css';
import { clsx } from 'clsx';
import { TabGroup, TabList, Tab as BaseTab } from '@headlessui/react';

enum TabMode {
    Filled = 'filled',
    Outlined = 'outlined',
}

type TabProps = {
    className?: string;
    items: { key: string; label: string }[];
    mode?: TabMode;
    selectedIndex?: number;
    defaultIndex?: number;
    onChange: (index: number) => void;
};

export const Tab = ({
    className,
    items,
    mode = TabMode.Filled,
    selectedIndex,
    defaultIndex,
    onChange,
}: TabProps) => {
    return (
        <TabGroup
            onChange={onChange}
            selectedIndex={selectedIndex}
            defaultIndex={defaultIndex}
        >
            <TabList className={clsx('tab', mode, className)}>
                {items.map(({ key, label }) => (
                    <BaseTab key={key}>{label}</BaseTab>
                ))}
            </TabList>
        </TabGroup>
    );
};
