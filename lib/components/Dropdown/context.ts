import { createContext, useContext } from 'react';

export const DropdownContext = createContext<
    { multiple?: boolean } | undefined
>(undefined);

export const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDropdownContext must be used within a Dropdown');
    }

    return context;
};
