import { FormEventHandler } from 'react';

export interface SliderProps {
    step?: number;
    min: number;
    max: number;
    value: number;
    mode?: 'section' | 'linear';
    onChange: FormEventHandler<HTMLInputElement>;
}
