import React, { useMemo } from 'react';
import { iconsMap } from '../../constants/icons-map';
import clsx from 'clsx';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface IconProps {
    name: keyof typeof iconsMap;
    size?: IconSize;
    className?: string;
    onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 'md',
    className = '',
    onClick
}) => {
    const IconComponent = iconsMap[name];
    const sizeClass = useMemo(() => {
        switch (size) {
            case 'xs': return 'w-2 h-2';
            case 'sm': return 'w-3 h-3';
            case 'md': return 'w-6 h-6';
            case 'lg': return 'w-8 h-8';
            case 'xl': return 'w-10 h-10';
            case '2xl': return 'w-12 h-12';
            case '3xl': return 'w-14 h-14';
            default: return 'w-6 h-6';
        }
    }, [size]);

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in icons map`);
        return null;
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={clsx(sizeClass, className)}
            onClick={onClick}
        />
    );
};
