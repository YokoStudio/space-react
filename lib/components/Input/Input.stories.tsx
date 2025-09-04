import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
    component: Input,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['sm', 'md', 'lg'],
            },
        },
        clearButton: {
            control: {
                type: 'boolean',
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Search',
        size: 'md',
        loading: false,
        onChange: (e) => {
            console.log(e);
        },
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        error: true,
    },
};

export const Disable: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};
