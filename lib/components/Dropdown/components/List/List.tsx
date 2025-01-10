import './List.css';
import { ListboxOption, ListboxOptions } from '@headlessui/react';
import {
    DropdownListPosition,
    ListItemOptions,
} from '../../../../types/dropdown.ts';
import { Checkbox } from '../../../Checkbox/Checkbox.tsx';
import { CheckIcon } from '../../icons/Check.tsx';

export type DropdownListProps = {
    width: number;
    multiple?: boolean;
    options: ListItemOptions[] | string[];
    value: ListItemOptions | string;
};

export function DropdownList({
    width,
    options,
    value,
    multiple = false,
}: DropdownListProps) {
    return (
        <>
            <ListboxOptions
                className="dropdown_list"
                style={{ width: width ? `${width}px` : 'auto' }}
                anchor={{
                    to: DropdownListPosition.Bottom,
                    gap: 4,
                }}
            >
                {options.map((option) => {
                    const isStringOption = typeof option === 'string';
                    const disabled = isStringOption ? false : option.disabled;
                    const label = isStringOption ? option : option.label;
                    const val = isStringOption ? option : option.value;
                    const isSelected = val === value;

                    return (
                        <ListboxOption
                            key={val}
                            value={val}
                            className="dropdown_listitem"
                            disabled={disabled}
                        >
                            <div className="dropdown_listitem__checkbox">
                                {multiple ? (
                                    <Checkbox
                                        checked={isSelected}
                                        onChange={() => {}}
                                        disabled={disabled}
                                    />
                                ) : (
                                    isSelected && <CheckIcon />
                                )}
                            </div>
                            <div className="dropdown_listitem__label">
                                {label}
                            </div>
                            <div className="dropdown_listitem__badge"></div>
                        </ListboxOption>
                    );
                })}
            </ListboxOptions>
        </>
    );
}
