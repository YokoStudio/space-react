import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta = {
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A versatile button component with support for multiple variants, colors, sizes, loading states, and icons. Built with accessibility in mind and follows UI kit best practices.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Button content',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        color: {
            control: 'radio',
            options: ['primary', 'secondary', 'error'],
            description: 'Color scheme of the button',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: 'primary | secondary | error' },
            },
        },
        variant: {
            control: 'radio',
            options: ['filled', 'outlined', 'ghost'],
            description: 'Visual style variant of the button',
            table: {
                defaultValue: { summary: 'filled' },
                type: { summary: 'filled | outlined | ghost' },
            },
        },
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Size of the button',
            table: {
                defaultValue: { summary: 'md' },
                type: { summary: 'xs | sm | md | lg | xl' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        loading: {
            control: 'boolean',
            description: 'Shows loading spinner and disables the button',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        block: {
            control: 'boolean',
            description: 'Makes the button full width',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        type: {
            control: 'radio',
            options: ['button', 'submit', 'reset'],
            description: 'HTML button type',
            table: {
                defaultValue: { summary: 'button' },
                category: 'Form',
            },
        },
        prependIcon: {
            control: false,
            description: 'Icon or element to display before the button content',
            table: {
                type: { summary: 'string | ReactNode' },
            },
        },
        appendIcon: {
            control: false,
            description: 'Icon or element to display after the button content',
            table: {
                type: { summary: 'string | ReactNode' },
            },
        },
        ariaLabel: {
            control: 'text',
            description: 'Accessible label for the button',
            table: {
                category: 'Accessibility',
            },
        },
        ariaDescribedby: {
            control: 'text',
            description: 'ID of element that describes the button',
            table: {
                category: 'Accessibility',
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Callback fired when the button is clicked',
            table: {
                category: 'Events',
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        color: 'primary',
        variant: 'filled',
        size: 'md',
        onClick: action('clicked'),
    },
};

export const Primary: Story = {
    args: {
        ...Default.args,
        color: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        ...Default.args,
        color: 'secondary',
        children: 'Secondary Button',
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        color: 'error',
        children: 'Error Button',
    },
};

export const WithPrependIcon: Story = {
    args: {
        ...Default.args,
        children: 'Search',
        prependIcon: 'search' as const,
    },
};

export const WithAppendIcon: Story = {
    args: {
        ...Default.args,
        children: 'Clear',
        appendIcon: 'cross-circle' as const,
    },
};

export const WithBothIcons: Story = {
    args: {
        ...Default.args,
        children: 'Action',
        prependIcon: 'search' as const,
        appendIcon: 'cross-circle' as const,
    },
};

export const Loading: Story = {
    args: {
        ...Default.args,
        children: 'Loading Button',
        loading: true,
    },
};

export const Block: Story = {
    args: {
        ...Default.args,
        children: 'Full Width Button',
        block: true,
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        children: 'Disabled Button',
        disabled: true,
    },
};

export const SubmitButton: Story = {
    args: {
        ...Default.args,
        children: 'Submit Form',
        type: 'submit',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button
                    color="primary"
                    variant="filled"
                    onClick={action('clicked')}
                >
                    Primary Filled
                </Button>
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={action('clicked')}
                >
                    Primary Outlined
                </Button>
                <Button
                    color="primary"
                    variant="ghost"
                    onClick={action('clicked')}
                >
                    Primary Ghost
                </Button>
            </div>
            <div className="flex gap-2">
                <Button
                    color="secondary"
                    variant="filled"
                    onClick={action('clicked')}
                >
                    Secondary Filled
                </Button>
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={action('clicked')}
                >
                    Secondary Outlined
                </Button>
                <Button
                    color="secondary"
                    variant="ghost"
                    onClick={action('clicked')}
                >
                    Secondary Ghost
                </Button>
            </div>
            <div className="flex gap-2">
                <Button
                    color="error"
                    variant="filled"
                    onClick={action('clicked')}
                >
                    Error Filled
                </Button>
                <Button
                    color="error"
                    variant="outlined"
                    onClick={action('clicked')}
                >
                    Error Outlined
                </Button>
                <Button
                    color="error"
                    variant="ghost"
                    onClick={action('clicked')}
                >
                    Error Ghost
                </Button>
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-2 flex-wrap">
            <Button size="xs" onClick={action('clicked')}>
                Extra Small
            </Button>
            <Button size="sm" onClick={action('clicked')}>
                Small
            </Button>
            <Button size="md" onClick={action('clicked')}>
                Medium
            </Button>
            <Button size="lg" onClick={action('clicked')}>
                Large
            </Button>
            <Button size="xl" onClick={action('clicked')}>
                Extra Large
            </Button>
        </div>
    ),
};

export const WithCustomIcon: Story = {
    render: () => (
        <div className="flex gap-2">
            <Button
                prependIcon={<Icon name="search" size="md" />}
                onClick={action('clicked')}
            >
                Custom Icon
            </Button>
            <Button
                appendIcon={<Icon name="cross-circle" size="md" />}
                onClick={action('clicked')}
            >
                Custom Icon
            </Button>
        </div>
    ),
};
