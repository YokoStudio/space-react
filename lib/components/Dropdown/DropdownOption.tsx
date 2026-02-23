import { DropdownOptionProp } from '../../types/dropdown';
import { Checkbox } from '../Checkbox/Checkbox';
import { CheckIcon } from './icons/Check';
import { useDropdownContext } from './context';
import { useEffect } from 'react';

export function DropdownOption<T>({
    label,
    value,
    badge,
    prependIcon,
    disabled,
}: DropdownOptionProp<T>) {
    const {
        multiple,
        value: selectedValue,
        onChange,
        setOpen,
        registerOption,
    } = useDropdownContext();

    useEffect(() => {
        registerOption(value, label);
    }, [value, label, registerOption]);

    const isArray = Array.isArray(selectedValue);
    const selected = isArray
        ? (selectedValue as unknown[]).includes(value)
        : (selectedValue as unknown) === value;

    const handleClick = () => {
        if (disabled) return;
        if (multiple) {
            const arr = (selectedValue as unknown[]) ?? [];
            const next = arr.includes(value)
                ? arr.filter((v) => v !== value)
                : [...arr, value];
            onChange(next);
        } else {
            onChange(value);
            setOpen(false);
        }
    };

    return (
        <div
            role="option"
            aria-selected={selected}
            aria-disabled={disabled}
            className="dropdown_listitem"
            data-disabled={disabled ? '' : undefined}
            onClick={handleClick}
        >
            <div className="dropdown_listitem__checkbox">
                {multiple ? (
                    <Checkbox
                        onChange={() => handleClick()}
                        checked={selected}
                        disabled={disabled}
                    />
                ) : (
                    selected && <CheckIcon />
                )}
            </div>
            <div className="grow flex gap-1">
                {prependIcon && <div>{prependIcon}</div>}
                <div className="dropdown_listitem__label">{label}</div>
                {badge && <div />}
            </div>
        </div>
    );
}
