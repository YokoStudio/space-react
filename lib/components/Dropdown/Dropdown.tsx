import './Dropdown.css';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxSelectedOption,
} from '@headlessui/react';
import { AngleDown } from './icons/AngleDown.tsx';
import { DropdownListPosition, DropdownProps } from '../../types/dropdown.ts';
import { DropdownContext } from './context.ts';
import { useEffect, useState } from 'react';

export function Dropdown<T = unknown>({
    children,
    value,
    placeholder = 'Select',
    prependIcon,
    disabled,
    error,
    multiple,
    onChange,
}: DropdownProps<T>) {
    const [isMultiple, setIsMultiple] = useState<boolean | undefined>(multiple);

    useEffect(() => {
        if (multiple) {
            onChange(Array.isArray(value) ? value : ([] as T[]));
        } else {
            onChange(Array.isArray(value) ? value[0] || (null as T) : value);
        }
        setIsMultiple(multiple);
    }, [multiple]);

    return (
        <DropdownContext.Provider value={{ multiple: isMultiple }}>
            <div className="dropdown">
                <Listbox
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    invalid={error}
                    multiple={isMultiple}
                >
                    <ListboxButton
                        className="dropdown__button h-8"
                        disabled={disabled}
                    >
                        {({ value }) => (
                            <>
                                {prependIcon && (
                                    <div className="dropdown__button__icon">
                                        {prependIcon}
                                    </div>
                                )}
                                {isMultiple &&
                                Array.isArray(value) &&
                                value.length ? (
                                    <div className="dropdown__button__label">
                                        {value.length} selected
                                    </div>
                                ) : (
                                    <ListboxSelectedOption
                                        as="div"
                                        className="dropdown__button__label"
                                        options={children}
                                        placeholder={
                                            <div className="dropdown__button__label_placeholder">
                                                {placeholder}
                                            </div>
                                        }
                                    />
                                )}
                                <div className="dropdown__button__angle">
                                    <AngleDown />
                                </div>
                            </>
                        )}
                    </ListboxButton>

                    <ListboxOptions
                        className="dropdown_list w-[var(--button-width)]"
                        anchor={{ to: DropdownListPosition.Bottom, gap: 4 }}
                    >
                        {children}
                    </ListboxOptions>
                </Listbox>
            </div>
        </DropdownContext.Provider>
    );
}
