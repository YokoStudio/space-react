import './Tab.css';
import { clsx } from 'clsx';
import { TabGroup, TabList, Tab as BaseTab } from '@headlessui/react';
import { TabMode, TabProps } from '../../types/tab.ts';
import React, { useCallback, useMemo } from 'react';

export const Tab = React.memo(
    ({
        className,
        items,
        mode = TabMode.Filled,
        selectedIndex,
        defaultIndex,
        onChange,
        disabled = false,
        fullWidth = false,
    }: TabProps) => {
        // Validation and warning handling
        React.useEffect(() => {
            if (selectedIndex !== undefined && defaultIndex !== undefined) {
                console.warn(
                    'Tab: Only one of selectedIndex or defaultIndex should be provided. Using selectedIndex.',
                );
            }
        }, [selectedIndex, defaultIndex]);

        // Memoize the change handler
        const handleChange = useCallback(
            (index: number) => {
                if (!disabled) {
                    onChange?.(index);
                }
            },
            [onChange, disabled],
        );

        // Memoize the tab items to prevent unnecessary re-renders
        const tabItems = useMemo(
            () =>
                items.map(({ key, label, disabled: itemDisabled }, index) => ({
                    key,
                    label,
                    disabled: itemDisabled || disabled,
                    index,
                })),
            [items, disabled],
        );

        return (
            <div
                className={clsx('tab-container', {
                    'tab-container--full-width': fullWidth,
                    'tab-container--disabled': disabled,
                })}
            >
                <TabGroup
                    onChange={handleChange}
                    selectedIndex={selectedIndex}
                    defaultIndex={defaultIndex}
                >
                    <TabList
                        className={clsx(
                            'tab',
                            `tab--${mode}`,
                            {
                                'tab--full-width': fullWidth,
                            },
                            className,
                        )}
                        aria-label="Tab navigation"
                    >
                        {tabItems.map(
                            ({ key, label, disabled: itemDisabled, index }) => (
                                <BaseTab
                                    key={key}
                                    className={clsx(
                                        'tab__item',
                                        `tab__item--${mode}`,
                                        {
                                            'tab__item--disabled': itemDisabled,
                                            'tab__item--selected':
                                                selectedIndex === index,
                                        },
                                        'transition-all duration-300',
                                    )}
                                    disabled={itemDisabled}
                                    aria-selected={
                                        selectedIndex === index
                                            ? 'true'
                                            : 'false'
                                    }
                                    aria-label={label}
                                    aria-controls={`panel-${key}`}
                                >
                                    {label}
                                </BaseTab>
                            ),
                        )}
                    </TabList>
                </TabGroup>
            </div>
        );
    },
);

Tab.displayName = 'Tab';
