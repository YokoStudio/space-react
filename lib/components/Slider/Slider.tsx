import './Slider.css';
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from 'react';
import { SliderProps } from '../../types/slider.ts';
import { useSliderTrack } from '../../hooks/useSliderTrack';

export const Slider = React.memo((props: SliderProps) => {
    const { mode = 'linear', ...sliderProps } = props;

    const Component = useMemo(() => {
        const modes = {
            linear: LinearSlider,
            section: SectionSlider,
        };
        return modes[mode as keyof typeof modes] || LinearSlider;
    }, [mode]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = Math.min(
                Math.max(Number(e.target.value), props.min),
                props.max,
            );
            props.onChange({ ...e, target: { ...e.target, value: newValue } });
        },
        [props.min, props.max, props.onChange],
    );

    return <Component {...sliderProps} onChange={handleChange} mode={mode} />;
});

Slider.displayName = 'Slider';

const SectionSlider = ({
    step = 1,
    min,
    max,
    value,
    onChange,
}: SliderProps) => {
    const sliderRef = useRef<HTMLInputElement>(null);
    const {
        trackItemWidth,
        steps,
        stepIndex,
        updateTrackWidth,
        validateValue,
    } = useSliderTrack({
        min,
        max,
        step,
        value,
    });

    useEffect(() => {
        if (sliderRef.current) {
            const trackWidth = sliderRef.current.offsetWidth;
            updateTrackWidth(trackWidth);
        }
    }, [updateTrackWidth]);

    useEffect(() => {
        validateValue(value);
    }, [value, validateValue]);

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
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
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
    const sliderRef = useRef<HTMLInputElement>(null);
    const {
        trackItemWidth,
        steps,
        stepIndex,
        updateTrackWidth,
        validateValue,
    } = useSliderTrack({
        min,
        max,
        step,
        value,
    });

    useEffect(() => {
        if (sliderRef.current) {
            const trackWidth = sliderRef.current.offsetWidth;
            updateTrackWidth(trackWidth);
        }
    }, [updateTrackWidth]);

    useEffect(() => {
        validateValue(value);
    }, [value, validateValue]);

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
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
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
