import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ['circle-loading'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
        className: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'circle-loading',
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        name: 'circle-loading',
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        name: 'circle-loading',
        size: 'sm',
    },
};

export const WithCustomClass: Story = {
    args: {
        name: 'circle-loading',
        size: 'md',
        className: 'text-blue-500',
    },
};
