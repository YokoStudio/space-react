import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
    renderCount: number;
    averageRenderTime: number;
    lastRenderTime: number;
    totalRenderTime: number;
}

interface UsePerformanceMonitorOptions {
    enabled?: boolean;
    logToConsole?: boolean;
    threshold?: number; // milliseconds
    onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

export const usePerformanceMonitor = (
    componentName: string,
    options: UsePerformanceMonitorOptions = {},
) => {
    const {
        enabled = process.env.NODE_ENV === 'development',
        logToConsole = true,
        threshold = 16, // 60fps threshold
        onThresholdExceeded,
    } = options;

    const metricsRef = useRef<PerformanceMetrics>({
        renderCount: 0,
        averageRenderTime: 0,
        lastRenderTime: 0,
        totalRenderTime: 0,
    });

    const startTimeRef = useRef<number>(0);

    const startRender = useCallback(() => {
        if (!enabled) return;
        startTimeRef.current = performance.now();
    }, [enabled]);

    const endRender = useCallback(() => {
        if (!enabled) return;

        const endTime = performance.now();
        const renderTime = endTime - startTimeRef.current;

        const metrics = metricsRef.current;
        metrics.renderCount++;
        metrics.lastRenderTime = renderTime;
        metrics.totalRenderTime += renderTime;
        metrics.averageRenderTime =
            metrics.totalRenderTime / metrics.renderCount;

        if (logToConsole) {
            console.log(
                `[${componentName}] Render #${metrics.renderCount}: ${renderTime.toFixed(2)}ms (avg: ${metrics.averageRenderTime.toFixed(2)}ms)`,
            );
        }

        if (renderTime > threshold && onThresholdExceeded) {
            onThresholdExceeded(metrics);
        }
    }, [enabled, componentName, logToConsole, threshold, onThresholdExceeded]);

    const getMetrics = useCallback(() => ({ ...metricsRef.current }), []);

    const resetMetrics = useCallback(() => {
        metricsRef.current = {
            renderCount: 0,
            averageRenderTime: 0,
            lastRenderTime: 0,
            totalRenderTime: 0,
        };
    }, []);

    useEffect(() => {
        startRender();
        return () => {
            endRender();
        };
    });

    return {
        startRender,
        endRender,
        getMetrics,
        resetMetrics,
        metrics: metricsRef.current,
    };
};
