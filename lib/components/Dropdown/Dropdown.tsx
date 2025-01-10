import './Dropdown.css';
import { Listbox, ListboxButton } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { AngleDown } from './icons/AngleDown.tsx';
import type { ListItemOptions, DropdownProps } from '../../types/dropdown.ts';
import { DropdownList } from './components/List/List.tsx';

const labelGetterFunction = (item: ListItemOptions) => {
    return item.label;
};

const onChangeItem = (
    item: ListItemOptions | ListItemOptions[] | string | string[],
) => {
    console.log(item);
};

export function Dropdown({
    options,
    value,
    placeholder = 'Select',
    labelGetterFunc,
    icon,
    disabled,
    error,
    multiple = false,
}: DropdownProps) {
    const [selected] = useState<Array<ListItemOptions>>([]);
    const labelGetter = labelGetterFunc ?? labelGetterFunction;
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [listWidth, setListWidth] = useState<number>(0);

    useEffect(() => {
        setListWidth(buttonRef.current?.offsetWidth ?? 0);
    }, [buttonRef.current?.offsetWidth]);

    return (
        <div className="dropdown">
            <Listbox
                value={value}
                onChange={onChangeItem}
                multiple={multiple}
                disabled={disabled}
                invalid={error}
            >
                <ListboxButton className="dropdown__button" ref={buttonRef}>
                    {icon && <div className="dropdown__button__icon"></div>}
                    <div className="dropdown__button__label">
                        {selected.length
                            ? labelGetter(selected[0])
                            : placeholder}
                    </div>
                    <div className="dropdown__button__angle">
                        <AngleDown />
                    </div>
                </ListboxButton>

                <DropdownList
                    width={listWidth}
                    options={options}
                    value={''}
                    multiple={multiple}
                />
            </Listbox>
        </div>
    );
}
