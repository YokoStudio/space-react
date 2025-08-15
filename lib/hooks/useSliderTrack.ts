import { useState, useEffect, useCallback } from 'react';

interface UseSliderTrackProps {
    min: number;
    max: number;
    step: number;
    value: number;
}

export const useSliderTrack = ({
    min,
    max,
    step,
    value,
}: UseSliderTrackProps) => {
    const [trackItemWidth, setTrackItemWidth] = useState(0);
    const [steps, setSteps] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);

    const calculateSteps = useCallback(() => {
        const totalSteps = Math.max(Math.floor((max - min) / step), 1);
        setSteps(totalSteps);
        setStepIndex(
            Math.max(0, Math.min(Math.floor((value - min) / step), totalSteps)),
        );
    }, [min, max, step, value]);

    useEffect(() => {
        calculateSteps();
    }, [calculateSteps]);

    const updateTrackWidth = useCallback(
        (containerWidth: number) => {
            if (containerWidth > 0) {
                setTrackItemWidth((containerWidth - 16) / steps);
            }
        },
        [steps],
    );

    const validateValue = useCallback(
        (val: number) => {
            if (val < min) {
                console.warn(
                    `Slider: The value cannot be smaller than the minimum value (${min}).`,
                );
            }
            if (val > max) {
                console.warn(
                    `Slider: The value cannot be larger than the maximum value (${max}).`,
                );
            }
        },
        [min, max],
    );

    return {
        trackItemWidth,
        steps,
        stepIndex,
        updateTrackWidth,
        calculateSteps,
        validateValue,
    };
};
