import './Slider.css';
import React, { useState, useEffect, useRef } from 'react';
import { SliderProps } from '../../types/slider.ts';

export const Slider = ({
    step = 1,
    min,
    max,
    value,
    onChange,
}: SliderProps) => {
    const [trackItemWidth, setTrackItemWidth] = useState(1);
    const [steps, setSteps] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);

    const sliderRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const totalSteps = Math.max(Math.floor((max - min) / step), 1);
        setSteps(totalSteps);
        setStepIndex(
            Math.max(0, Math.min(Math.floor((value - min) / step), totalSteps)),
        );
    }, [min, max, step, value]);

    useEffect(() => {
        if (sliderRef.current) {
            const trackWidth = sliderRef.current.offsetWidth;
            setTrackItemWidth((trackWidth - (16 + steps * 2)) / steps);
        }
    }, [steps, sliderRef.current?.offsetWidth]);

    useEffect(() => {
        if (value < min) {
            console.warn(
                `Slider: The value cannot be smaller than the minimum value (${min}).`,
            );
        }
        if (value > max) {
            console.warn(
                `Slider: The value cannot be larger than the maximum value (${max}).`,
            );
        }
    }, [value, min, max]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.min(Math.max(Number(e.target.value), min), max);
        onChange({ ...e, target: { ...e.target, value: newValue } });
    };

    return (
        <div className="slider" ref={sliderRef}>
            <div className="slider__trackbar start-0">
                {Array.from({ length: stepIndex }).map((_, idx) => (
                    <div
                        key={idx}
                        style={{ width: `${trackItemWidth}px` }}
                        className="slider__track slider__track--filled"
                    />
                ))}
            </div>
            <input
                className="w-full"
                type="range"
                value={value}
                step={step}
                min={min}
                max={max}
                onInput={handleInputChange}
            />
            <div className="slider__trackbar end-0">
                {Array.from({ length: steps - stepIndex }).map((_, idx) => (
                    <div
                        key={idx}
                        style={{ width: `${trackItemWidth}px` }}
                        className="slider__track"
                    />
                ))}
            </div>
        </div>
    );
};
