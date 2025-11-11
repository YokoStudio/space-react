import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { useState } from 'react';
import { Input } from './Input';
import { Icon } from '../Icon/Icon';
import type { InputProps } from '../../types/input';

const meta = {
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A versatile input component that supports controlled and uncontrolled modes, with built-in support for icons, loading states, and clear functionality.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the input field',
            table: {
                defaultValue: { summary: 'md' },
                type: { summary: 'sm | md | lg' },
            },
        },
        type: {
            control: 'select',
            options: [
                'text',
                'email',
                'password',
                'number',
                'tel',
                'url',
                'search',
                'date',
                'time',
                'datetime-local',
            ],
            description: 'HTML input type',
            table: {
                defaultValue: { summary: 'text' },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        value: {
            control: 'text',
            description: 'Controlled value (for controlled components)',
            table: {
                category: 'Form',
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Default value (for uncontrolled components)',
            table: {
                category: 'Form',
            },
        },
        id: {
            control: 'text',
            description: 'HTML id attribute for form association',
            table: {
                category: 'Form',
            },
        },
        name: {
            control: 'text',
            description: 'HTML name attribute for form submission',
            table: {
                category: 'Form',
            },
        },
        error: {
            control: 'boolean',
            description: 'Shows error state styling',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Shows loading spinner',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        clearButton: {
            control: 'boolean',
            description:
                'Shows clear button when input has value (only visible when input has content)',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        prependIcon: {
            control: false,
            description: 'Icon or element to display before the input',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        autoFocus: {
            control: 'boolean',
            description: 'Automatically focus the input on mount',
            table: {
                category: 'Form',
            },
        },
        onChange: {
            action: 'changed',
            description: 'Callback fired when the value changes',
            table: {
                category: 'Events',
            },
        },
        onFocus: {
            action: 'focused',
            description: 'Callback fired when the input receives focus',
            table: {
                category: 'Events',
            },
        },
        onBlur: {
            action: 'blurred',
            description: 'Callback fired when the input loses focus',
            table: {
                category: 'Events',
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        size: 'md',
        type: 'text',
        onChange: action('onChange'),
        onFocus: action('onFocus'),
        onBlur: action('onBlur'),
    },
};

export const WithValue: Story = {
    args: {
        ...Default.args,
        defaultValue: 'Initial value',
    },
};

const ControlledInput = (args: InputProps) => {
    const [value, setValue] = useState('Controlled value');
    return (
        <Input
            {...args}
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                action('onChange')(newValue);
            }}
        />
    );
};

export const Controlled: Story = {
    render: ControlledInput,
    args: {
        ...Default.args,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-64">
            <Input placeholder="Small input" size="sm" />
            <Input placeholder="Medium input" size="md" />
            <Input placeholder="Large input" size="lg" />
        </div>
    ),
};

export const Types: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-64">
            <Input type="text" placeholder="Text input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input type="number" placeholder="Number input" />
            <Input type="tel" placeholder="Phone input" />
            <Input type="url" placeholder="URL input" />
            <Input type="search" placeholder="Search input" />
        </div>
    ),
};

export const WithPrependIcon: Story = {
    args: {
        ...Default.args,
        placeholder: 'Search...',
        prependIcon: <Icon name="search" size="md" />,
    },
};

export const WithClearButton: Story = {
    args: {
        ...Default.args,
        placeholder: 'Type to see clear button',
        clearButton: true,
        defaultValue: 'Sample text',
    },
};

export const WithLoading: Story = {
    args: {
        ...Default.args,
        placeholder: 'Loading state',
        loading: true,
    },
};

export const WithIconAndClear: Story = {
    args: {
        ...Default.args,
        placeholder: 'Search with clear',
        prependIcon: <Icon name="search" size="md" />,
        clearButton: true,
        defaultValue: 'Search term',
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        placeholder: 'Input with error',
        error: true,
        defaultValue: 'Invalid value',
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        placeholder: 'Disabled input',
        disabled: true,
        defaultValue: 'Cannot edit',
    },
};
