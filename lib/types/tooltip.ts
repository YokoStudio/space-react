import { ReactNode } from 'react';

export type TooltipProps = {
    label?: string;
    text: string;
    badge?: ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    children: ReactNode;
};
