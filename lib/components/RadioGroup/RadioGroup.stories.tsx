import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup.tsx';
import {
    type RadioGroupProps,
    RadioGroupDirection,
} from '../../types/radioGroup.ts';
import { useEffect, useState } from 'react';

const meta = {
    component: RadioGroup,
    argTypes: {
        direction: {
            options: Object.values(RadioGroupDirection),
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = ({ value, options, disabled, direction }: RadioGroupProps) => {
    const [selected, setSelected] = useState<typeof value>();

    useEffect(() => {
        setSelected(value);
    }, [value]);

    return (
        <RadioGroup
            options={options}
            value={selected}
            disabled={disabled}
            direction={direction}
            onChange={(option) => {
                setSelected(option);
            }}
        />
    );
};

export const Default: Story = {
    render: Template,
    args: {
        options: ['reza', 'ali', 'mahdi'],
        value: 'mahdi',
        disabled: false,
        direction: RadioGroupDirection.Row,
        onChange: () => {},
    },
};

export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        disabled: true,
    },
};
