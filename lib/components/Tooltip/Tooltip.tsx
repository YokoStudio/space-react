import { clsx } from 'clsx';
import { useRef, useState, useEffect, useCallback } from 'react';
import { TooltipProps } from '../../types/tooltip';
import {
    computePosition,
    autoUpdate,
    offset,
    arrow as arrowMiddleware,
    flip,
} from '@floating-ui/dom';

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
    const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
    const [placement, setPlacement] = useState<
        'top' | 'bottom' | 'left' | 'right'
    >(position);
    const [arrowData, setArrowData] = useState<{
        x: number;
        y: number;
        centerOffset: number;
    } | null>(null);
    const referenceRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const delayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const updatePosition = useCallback(() => {
        const reference = referenceRef.current;
        const floating = floatingRef.current;
        const arrowEl = arrowRef.current;
        if (!reference || !floating) return;

        const middleware = [
            offset(10),
            flip(),
            ...(arrowEl ? [arrowMiddleware({ element: arrowEl })] : []),
        ];

        computePosition(reference, floating, {
            placement: position,
            middleware,
        }).then(({ x, y, placement: resolvedPlacement, middlewareData }) => {
            setCoords({ x, y });
            setPlacement(
                resolvedPlacement as 'top' | 'bottom' | 'left' | 'right',
            );
            const data = middlewareData.arrow;
            if (data && arrowEl) {
                setArrowData({
                    x: data.x ?? 0,
                    y: data.y ?? 0,
                    centerOffset: data.centerOffset ?? 0,
                });
            } else {
                setArrowData(null);
            }
        });
    }, [position]);

    useEffect(() => {
        if (!isOpen || !referenceRef.current || !floatingRef.current) {
            setCoords(null);
            setArrowData(null);
            return;
        }
        updatePosition();
        const cleanup = autoUpdate(
            referenceRef.current,
            floatingRef.current,
            updatePosition,
        );
        return cleanup;
    }, [isOpen, position, updatePosition]);

    const showTooltip = () => {
        if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = setTimeout(() => setIsOpen(true), delay);
    };

    const hideTooltip = () => {
        if (delayTimeoutRef.current) {
            clearTimeout(delayTimeoutRef.current);
            delayTimeoutRef.current = null;
        }
        setIsOpen(false);
    };

    useEffect(() => {
        return () => {
            if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
        };
    }, []);

    const triggerProps = {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
    };

    return (
        <>
            {isOpen && (
                <div
                    ref={floatingRef}
                    role="tooltip"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        ...(coords
                            ? {
                                  transform: `translate(${coords.x}px, ${coords.y}px)`,
                              }
                            : {}),
                    }}
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
                    <div
                        ref={arrowRef}
                        style={{
                            position: 'absolute',
                            left: arrowData?.x ?? 0,
                            top: arrowData?.y ?? 0,
                            width: 11,
                            height: 6,
                            backgroundColor: 'white',
                            clipPath:
                                placement === 'top'
                                    ? 'polygon(50% 100%, 0 0, 100% 0)'
                                    : placement === 'bottom'
                                      ? 'polygon(50% 0%, 0 100%, 100% 100%)'
                                      : placement === 'left'
                                        ? 'polygon(100% 50%, 0 0, 0 100%)'
                                        : 'polygon(0 50%, 100% 0, 100% 100%)',
                            transform: 'translate(-50%, -50%)',
                            visibility: arrowData ? 'visible' : 'hidden',
                        }}
                    />
                </div>
            )}
            <div className="inline-block" ref={referenceRef} {...triggerProps}>
                {children}
            </div>
        </>
    );
};
