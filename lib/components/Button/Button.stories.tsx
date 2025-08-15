import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
    component: Button,
    argTypes: {
        size: {
            type: 'string',
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        status: {
            type: 'string',
            control: 'radio',
            options: ['filled', 'outlined', 'ghost'],
        },
        variant: {
            type: 'string',
            control: 'radio',
            options: ['primary', 'secondary', 'error'],
        },
        disabled: {
            type: 'boolean',
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        status: 'filled',
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        status: 'filled',
        children: 'Secondary',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        status: 'filled',
        children: 'Error',
    },
};
