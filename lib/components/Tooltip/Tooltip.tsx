import './Tooltip.css';
import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { TooltipProps } from '../../types/tooltip.ts';

export const Tooltip = ({
    label,
    text,
    badge,
    position = 'top',
    delay = 300,
    className,
    children,
}: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState(position);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setTimeout(() => setIsVisible(true), delay);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const updatePosition = () => {
            if (!targetRef.current || !tooltipRef.current) return;

            const targetRect = targetRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let newPosition: 'top' | 'bottom' | 'left' | 'right' = position;

            if (position === 'top') {
                if (targetRect.top - tooltipRect.height < 0) {
                    newPosition = 'bottom';
                }
            } else if (position === 'bottom') {
                if (targetRect.bottom + tooltipRect.height > viewportHeight) {
                    newPosition = 'top';
                }
            } else if (position === 'left') {
                if (targetRect.left - tooltipRect.width < 0) {
                    newPosition = 'right';
                }
            } else if (position === 'right') {
                if (targetRect.right + tooltipRect.width > viewportWidth) {
                    newPosition = 'left';
                }
            }

            setTooltipPosition(newPosition);
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, [position]);

    const arrowClass = clsx(
        'tooltip-arrow',
        tooltipPosition === 'top' && 'tooltip-arrow-top',
        tooltipPosition === 'bottom' && 'tooltip-arrow-bottom',
        tooltipPosition === 'left' && 'tooltip-arrow-left',
        tooltipPosition === 'right' && 'tooltip-arrow-right',
    );

    const tooltipClass = clsx(
        'tooltip',
        tooltipPosition && `tooltip-${tooltipPosition}`,
        isVisible ? 'tooltip-visible' : 'tooltip-hidden',
        className,
    );

    return (
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={targetRef}
        >
            <div ref={tooltipRef} className={tooltipClass}>
                {label && (
                    <div className="text-neutral-1-default text-caption-c1 mb-1">
                        {label}
                    </div>
                )}
                <div className="flex items-center gap-0.5">
                    {badge}
                    <span className="text-neutral-1-default text-caption-c1">
                        {text}
                    </span>
                </div>
                <div className={arrowClass} />
            </div>
            <div className="tooltip-target">{children}</div>
        </div>
    );
};
