import { DropdownOptionProp } from '../../types/dropdown.ts';
import { ListboxOption } from '@headlessui/react';
import { Checkbox } from '../Checkbox/Checkbox.tsx';
import { CheckIcon } from './icons/Check.tsx';
import { useRef } from 'react';
import { useDropdownContext } from './context.ts';

export function DropdownOption<T>({
    label,
    value,
    badge,
    prependIcon,
    disabled,
}: DropdownOptionProp<T>) {
    const optionRef = useRef<HTMLDivElement>(null);
    const { multiple } = useDropdownContext();

    return (
        <ListboxOption
            as="div"
            className="dropdown_listitem"
            value={value}
            disabled={disabled}
            ref={optionRef}
        >
            {({ selected, selectedOption }) => {
                if (selectedOption) {
                    return (
                        <div className="text-body-b1 text-neutral-2-default">
                            {label}
                        </div>
                    );
                }

                return (
                    <>
                        <div className="dropdown_listitem__checkbox">
                            {multiple ? (
                                <Checkbox
                                    onChange={() => optionRef.current?.click()}
                                    checked={selected}
                                    disabled={disabled}
                                />
                            ) : (
                                selected && <CheckIcon />
                            )}
                        </div>
                        <div className="grow flex gap-1">
                            {prependIcon && <div>{prependIcon}</div>}
                            <div className="dropdown_listitem__label">
                                {label}
                            </div>
                            {badge && <div></div>}
                        </div>
                    </>
                );
            }}
        </ListboxOption>
    );
}
