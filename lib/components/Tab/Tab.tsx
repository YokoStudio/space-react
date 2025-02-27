import './Tab.css';
import { clsx } from 'clsx';
import { TabGroup, TabList, Tab as BaseTab } from '@headlessui/react';
import { TabMode, TabProps } from '../../types/tab.ts';

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

    return (
        <TabGroup
            onChange={onChange}
            selectedIndex={selectedIndex}
            defaultIndex={defaultIndex}
        >
            <TabList className={clsx('tab', mode, className, 'tab-list')}>
                {items.map(({ key, label }, index) => (
                    <BaseTab
                        key={key}
                        className={clsx('transition-all duration-300')}
                        aria-selected={
                            selectedIndex === index ? 'true' : 'false'
                        }
                        aria-label={label}
                    >
                        {label}
                    </BaseTab>
                ))}
            </TabList>
        </TabGroup>
    );
};
