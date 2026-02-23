import './Tab.css';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { TabMode, TabProps } from '../../types/tab';

export const Tab = ({
    className,
    items,
    mode = TabMode.Filled,
    selectedIndex,
    defaultIndex,
    onChange,
}: TabProps) => {
    if (selectedIndex !== undefined && defaultIndex !== undefined) {
        console.warn(
            'Only one of selectedIndex or defaultIndex should be provided',
        );
    }

    const value =
        selectedIndex !== undefined && items[selectedIndex]
            ? items[selectedIndex].key
            : undefined;
    const defaultValue =
        defaultIndex !== undefined && items[defaultIndex]
            ? items[defaultIndex].key
            : undefined;

    const handleValueChange = (key: string) => {
        const index = items.findIndex((item) => item.key === key);
        if (index >= 0) onChange(index);
    };

    return (
        <TabsPrimitive.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={handleValueChange}
        >
            <TabsPrimitive.List
                className={clsx('tab', mode, className, 'tab-list')}
            >
                {items.map(({ key, label }) => (
                    <TabsPrimitive.Trigger
                        key={key}
                        value={key}
                        className={clsx('transition-all duration-300')}
                        aria-label={label}
                    >
                        {label}
                    </TabsPrimitive.Trigger>
                ))}
            </TabsPrimitive.List>
        </TabsPrimitive.Root>
    );
};
