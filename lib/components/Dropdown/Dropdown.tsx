import './Dropdown.css';
import { AngleDown } from './icons/AngleDown';
import { DropdownProps } from '../../types/dropdown';
import { DropdownContext, useDropdownContextProvider } from './context';
import { useEffect, useRef, useState } from 'react';
import { computePosition, autoUpdate, offset, flip } from '@floating-ui/dom';

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
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const contextValue = useDropdownContextProvider(
        multiple,
        value,
        onChange as (v: unknown | unknown[]) => void,
        open,
        setOpen,
    );

    const updatePosition = () => {
        const button = buttonRef.current;
        const content = contentRef.current;
        if (!button || !content) return;

        computePosition(button, content, {
            placement: 'bottom-start',
            middleware: [offset(4), flip()],
        }).then(({ x, y }) => {
            content.style.transform = `translate(${x}px, ${y}px)`;
        });
    };

    useEffect(() => {
        if (!open || !buttonRef.current || !contentRef.current) return;
        contentRef.current.style.position = 'fixed';
        contentRef.current.style.top = '0';
        contentRef.current.style.left = '0';
        updatePosition();
        const cleanup = autoUpdate(
            buttonRef.current,
            contentRef.current,
            updatePosition,
        );
        return cleanup;
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                open &&
                buttonRef.current &&
                contentRef.current &&
                !buttonRef.current.contains(e.target as Node) &&
                !contentRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const currentValue = Array.isArray(value) ? value : value;
    const isMulti = multiple === true;
    const singleValue = !Array.isArray(currentValue)
        ? currentValue
        : currentValue[0];
    const singleLabel =
        singleValue != null ? contextValue.getLabel(singleValue) : null;

    const buttonLabel = isMulti
        ? Array.isArray(currentValue) && currentValue.length > 0
            ? `${currentValue.length} selected`
            : null
        : singleLabel;

    useEffect(() => {
        const w = buttonRef.current?.offsetWidth;
        if (containerRef.current && w != null) {
            containerRef.current.style.setProperty('--button-width', `${w}px`);
        }
    }, [open]);

    return (
        <DropdownContext.Provider value={contextValue}>
            <div
                ref={containerRef}
                className="dropdown"
                data-open={open ? '' : undefined}
                data-disabled={disabled ? '' : undefined}
                data-invalid={error ? '' : undefined}
            >
                <button
                    ref={buttonRef}
                    type="button"
                    className="dropdown__button h-8"
                    disabled={disabled}
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    {prependIcon && (
                        <div className="dropdown__button__icon">
                            {prependIcon}
                        </div>
                    )}
                    <div className="dropdown__button__label">
                        {buttonLabel ? (
                            <span>{buttonLabel}</span>
                        ) : (
                            <div className="dropdown__button_label_placeholder">
                                {placeholder}
                            </div>
                        )}
                    </div>
                    <div className="dropdown__button__angle">
                        <AngleDown />
                    </div>
                </button>

                {open && (
                    <div
                        ref={contentRef}
                        role="listbox"
                        aria-multiselectable={isMulti ?? undefined}
                        className="dropdown_list w-[var(--button-width)]"
                        style={{ minWidth: 256 }}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setOpen(false);
                        }}
                    >
                        {children}
                    </div>
                )}
            </div>
        </DropdownContext.Provider>
    );
}
