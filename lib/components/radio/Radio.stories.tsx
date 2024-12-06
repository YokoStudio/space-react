import type {Meta, StoryObj} from '@storybook/react';

import {Radio, RadioProps} from './Radio.tsx';
import {useState} from "react";

const meta = {
    component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = ({id, value, disabled}: RadioProps) => {
    const [selected, setSelected] = useState(value);

    return (
        <Radio id={id} value={selected} disabled={disabled} onClick={() => {
            setSelected(!selected);
        }}/>
    )
}

export const Default: Story = {
    render: Template,
    args: {
        id: 'test',
        value: true,
        disabled: false,
    }
}
