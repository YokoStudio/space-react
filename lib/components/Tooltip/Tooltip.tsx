import { clsx } from 'clsx';
import { useRef, useState, useCallback, useMemo } from 'react';
import { TooltipProps } from '../../types/tooltip.ts';
import {
    useFloating,
    useHover,
    useInteractions,
    useTransitionStyles,
    FloatingArrow,
    arrow,
    offset,
    useFocus,
} from '@floating-ui/react';
import React from 'react';

export const Tooltip = React.memo(
    ({
        label,
        text,
        badge,
        position = 'top',
        delay = 300,
        className,
        children,
        disabled = false,
        maxWidth = 300,
        showArrow = true,
    }: TooltipProps) => {
        const [isOpen, setIsOpen] = useState(false);
        const arrowRef = useRef(null);

        const { refs, floatingStyles, context } = useFloating({
            open: isOpen,
            onOpenChange: setIsOpen,
            placement: position,
            middleware: [
                arrow({
                    element: arrowRef,
                }),
                offset(6 + 4),
            ],
        });

        const hover = useHover(context, {
            delay,
            restMs: 150,
            enabled: !disabled,
        });

        const focus = useFocus(context, {
            enabled: !disabled,
        });

        const { getFloatingProps, getReferenceProps } = useInteractions([
            hover,
            focus,
        ]);

        const { isMounted, styles } = useTransitionStyles(context);

        const handleOpenChange = useCallback(
            (open: boolean) => {
                if (!disabled) {
                    setIsOpen(open);
                }
            },
            [disabled],
        );

        const tooltipContent = useMemo(
            () => (
                <>
                    {label && <div className="tooltip__label">{label}</div>}
                    <div className="tooltip__content">
                        {badge && (
                            <span className="tooltip__badge" aria-hidden="true">
                                {badge}
                            </span>
                        )}
                        <span className="tooltip__text">{text}</span>
                    </div>
                    {showArrow && (
                        <FloatingArrow
                            context={context}
                            ref={arrowRef}
                            fill="white"
                            width={11}
                            height={6}
                            tipRadius={4}
                        />
                    )}
                </>
            ),
            [label, badge, text, showArrow, context],
        );

        if (disabled) {
            return <>{children}</>;
        }

        return (
            <>
                {isMounted && (
                    <div
                        ref={refs.setFloating}
                        style={{
                            ...floatingStyles,
                            ...styles,
                            maxWidth: `${maxWidth}px`,
                        }}
                        {...getFloatingProps()}
                        className={clsx(
                            'tooltip',
                            'bg-neutral-1-default text-white p-2 rounded text-xs z-10 shadow-12',
                            className,
                        )}
                        role="tooltip"
                        aria-hidden={!isOpen}
                    >
                        {tooltipContent}
                    </div>
                )}
                <div
                    className="tooltip__trigger inline-block"
                    ref={refs.setReference}
                    {...getReferenceProps()}
                >
                    {children}
                </div>
            </>
        );
    },
);

Tooltip.displayName = 'Tooltip';
