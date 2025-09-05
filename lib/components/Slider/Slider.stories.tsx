import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider.tsx';
import { useEffect, useState } from 'react';

const meta = {
    component: Slider,
    argTypes: {
        mode: {
            control: {
                type: 'radio',
            },
            options: ['linear', 'section'],
        },
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render({ value, onChange: _onChange, ...props }) {
        const [_value, setValue] = useState(value);

        useEffect(() => {
            setValue(value);
        }, [value]);

        return (
            <Slider
                value={_value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(Number(e.target.value));
                    _onChange?.(e);
                }}
                {...props}
            />
        );
    },
    args: {
        max: 10,
        min: 1,
        step: 1,
        value: 1,
        mode: 'linear',
        onChange() {},
    },
};
