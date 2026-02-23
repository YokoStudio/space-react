import { createContext, useContext, useRef, useCallback } from 'react';

export type DropdownContextValue = {
    multiple?: boolean;
    value: unknown | unknown[];
    onChange: (value: unknown | unknown[]) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    registerOption: (value: unknown, label: string) => void;
    getLabel: (value: unknown) => string | undefined;
};

export const DropdownContext = createContext<DropdownContextValue | undefined>(
    undefined,
);

export const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDropdownContext must be used within a Dropdown');
    }
    return context;
};

export function useDropdownContextProvider(
    multiple: boolean | undefined,
    value: unknown | unknown[],
    onChange: (value: unknown | unknown[]) => void,
    open: boolean,
    setOpen: (open: boolean) => void,
): DropdownContextValue {
    const optionsMapRef = useRef(new Map<unknown, string>());

    const registerOption = useCallback((val: unknown, label: string) => {
        optionsMapRef.current.set(val, label);
    }, []);

    const getLabel = useCallback((val: unknown) => {
        return optionsMapRef.current.get(val);
    }, []);

    return {
        multiple,
        value,
        onChange,
        open,
        setOpen,
        registerOption,
        getLabel,
    };
}
