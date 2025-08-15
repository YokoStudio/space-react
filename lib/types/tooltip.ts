import { ReactNode } from 'react';

export interface TooltipProps {
    label?: string;
    text: string;
    badge?: ReactNode;
    position?:
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'left-start'
        | 'left-end'
        | 'right-start'
        | 'right-end';
    delay?: number;
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    maxWidth?: number;
    showArrow?: boolean;
}
