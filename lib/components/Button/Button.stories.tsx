import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckIcon } from './icons/Check';
import { MinusIcon } from './icons/Minus';

import { Button } from './Button';

const meta = {
    component: Button,
    argTypes: {
        size: {
            type: 'string',
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        variant: {
            type: 'string',
            control: 'radio',
            options: ['filled', 'outlined', 'ghost'],
        },
        color: {
            type: 'string',
            control: 'radio',
            options: ['primary', 'secondary', 'error'],
        },
        disabled: {
            type: 'boolean',
            control: 'boolean',
        },
        loading: {
            type: 'boolean',
            control: 'boolean',
        },
        block: {
            type: 'boolean',
            control: 'boolean',
        },
        type: {
            type: 'string',
            control: 'radio',
            options: ['button', 'submit', 'reset'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        variant: 'filled',
        children: 'Secondary Button',
    },
};

export const Error: Story = {
    args: {
        color: 'error',
        variant: 'filled',
        children: 'Error Button',
    },
};

export const WithPrependIcon: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'With Icon',
        prependIcon: <CheckIcon />,
    },
};

export const WithAppendIcon: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'With Icon',
        appendIcon: <MinusIcon />,
    },
};

export const Loading: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'Loading Button',
        loading: true,
    },
};

export const Block: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'Block Button',
        block: true,
    },
};

export const Disabled: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'Disabled Button',
        disabled: true,
    },
};

export const SubmitButton: Story = {
    args: {
        color: 'primary',
        variant: 'filled',
        children: 'Submit Form',
        type: 'submit',
    },
};

export const AllVariants: Story = {
    args: {
        children: 'Button',
    },
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button color="primary" variant="filled">Primary Filled</Button>
                <Button color="primary" variant="outlined">Primary Outlined</Button>
                <Button color="primary" variant="ghost">Primary Ghost</Button>
            </div>
            <div className="flex gap-2">
                <Button color="secondary" variant="filled">Secondary Filled</Button>
                <Button color="secondary" variant="outlined">Secondary Outlined</Button>
                <Button color="secondary" variant="ghost">Secondary Ghost</Button>
            </div>
            <div className="flex gap-2">
                <Button color="error" variant="filled">Error Filled</Button>
                <Button color="error" variant="outlined">Error Outlined</Button>
                <Button color="error" variant="ghost">Error Ghost</Button>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    args: {
        children: 'Button',
    },
    render: () => (
        <div className="flex items-center gap-2">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
        </div>
    ),
};
