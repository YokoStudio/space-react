import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider.tsx';
import { useEffect, useState } from 'react';

const meta = {
    component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render({ value, onChange: _, ...props }) {
        const [_value, setValue] = useState(value);

        useEffect(() => {
            setValue(value);
        }, [value]);

        return (
            <Slider
                value={_value}
                onChange={(e) => setValue(Number(e.target.value))}
                {...props}
            />
        );
    },
    args: {
        max: 10,
        min: 1,
        step: 1,
        value: 1,
        onChange() {},
    },
};
