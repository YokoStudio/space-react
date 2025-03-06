import { clsx } from 'clsx';
import { useRef, useState } from 'react';
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

export const Tooltip = ({
    label,
    text,
    badge,
    position = 'top',
    delay = 300,
    className,
    children,
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
    });
    const focus = useFocus(context);
    const { getFloatingProps, getReferenceProps } = useInteractions([
        hover,
        focus,
    ]);

    const { isMounted, styles } = useTransitionStyles(context);

    return (
        <>
            {isMounted && (
                <div
                    ref={refs.setFloating}
                    style={{ ...floatingStyles, ...styles }}
                    {...getFloatingProps()}
                    className={clsx(
                        'bg-neutral-1-default text-white p-2 rounded text-xs z-10 shadow-12',
                        className,
                    )}
                >
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
                    <FloatingArrow
                        context={context}
                        ref={arrowRef}
                        fill="white"
                        width={11}
                        height={6}
                        tipRadius={4}
                    />
                </div>
            )}
            <div
                className="inline-block"
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                {children}
            </div>
        </>
    );
};
