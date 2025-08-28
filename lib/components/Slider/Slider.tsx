import './Slider.css';
import React, { useState, useEffect, useRef } from 'react';
import { SliderProps } from '../../types/slider.ts';

export const Slider = (props: SliderProps) => {
    const modes = {
        linear: LinearSlider,
        section: SectionSlider,
    };

    let { mode } = props;

    if (!mode || !['linear', 'section'].includes(mode)) {
        mode ??= 'linear';
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.min(
            Math.max(Number(e.target.value), props.min),
            props.max,
        );
        props.onChange({ ...e, target: { ...e.target, value: newValue } });
    };

    const Component = modes[mode];

    return <Component {...props} onChange={onChange} mode={mode} />;
};

const SectionSlider = ({
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
                onInput={onChange}
            />
            <div className="slider__trackbar end-0">
                {Array.from({
                    length: steps - stepIndex,
                }).map((_, idx) => (
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

const LinearSlider = ({ step = 1, min, max, value, onChange }: SliderProps) => {
    const [trackItemWidth, setTrackItemWidth] = useState(0);
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
            setTrackItemWidth((trackWidth - 16) / steps);
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

    const startTrackWidth =
        trackItemWidth * stepIndex > 2 ? trackItemWidth * stepIndex - 2 : 0;

    const endTrackWidth =
        trackItemWidth * (steps - stepIndex) > 2
            ? trackItemWidth * (steps - stepIndex) - 2
            : 0;

    return (
        <>
            <div className="slider" ref={sliderRef}>
                <div className="slider__trackbar start-0">
                    <div
                        style={{ width: `${startTrackWidth}px` }}
                        className="slider__track slider__track--filled"
                    />
                </div>
                <input
                    className="w-full"
                    type="range"
                    value={value}
                    step={step}
                    min={min}
                    max={max}
                    onInput={onChange}
                />
                <div className="slider__trackbar end-0">
                    <div
                        style={{
                            width: `${endTrackWidth}px`,
                        }}
                        className="slider__track"
                    />
                </div>
            </div>
            <div className="flex justify-between text-body-b2 mt-2">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </>
    );
};
