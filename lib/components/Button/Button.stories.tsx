import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
A versatile button component that supports multiple variants, sizes, and states.

## Features
- **Multiple Variants**: Primary, Secondary, Error, Ghost
- **Different Statuses**: Filled, Outlined, Ghost
- **Size Options**: xs, sm, md, lg, xl
- **States**: Default, Disabled, Loading
- **Accessibility**: Full ARIA support and keyboard navigation
- **Icons**: Support for left and right icons
- **Full Width**: Option to span full container width

## Usage
\`\`\`tsx
import { Button } from '@/components/Button';

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="primary" size="lg">Large Primary</Button>

// With loading state
<Button loading>Processing...</Button>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'error', 'ghost'],
            description: 'The visual style variant of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
        },
        status: {
            control: { type: 'select' },
            options: ['filled', 'outlined', 'ghost'],
            description: 'The fill style of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'filled' },
            },
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'md' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the button is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        loading: {
            control: { type: 'boolean' },
            description: 'Whether the button is in loading state',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: 'Whether the button should span full width',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        children: {
            control: { type: 'text' },
            description: 'The content inside the button',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Callback fired when the button is clicked',
            table: {
                type: { summary: 'function' },
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Error Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

// Status Stories
export const Outlined: Story = {
    args: {
        status: 'outlined',
        children: 'Outlined Button',
    },
};

export const Filled: Story = {
    args: {
        status: 'filled',
        children: 'Filled Button',
    },
};

// Size Stories
export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        children: 'Extra Small',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        children: 'Medium',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large',
    },
};

export const ExtraLarge: Story = {
    args: {
        size: 'xl',
        children: 'Extra Large',
    },
};

// State Stories
export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        children: 'Loading Button',
    },
};

export const LoadingWithText: Story = {
    args: {
        loading: true,
        loadingText: 'Processing...',
        children: 'Loading Button',
    },
};

// Icon Stories
export const WithLeftIcon: Story = {
    args: {
        leftIcon: <span>←</span>,
        children: 'Back',
    },
};

export const WithRightIcon: Story = {
    args: {
        rightIcon: <span>→</span>,
        children: 'Next',
    },
};

export const WithBothIcons: Story = {
    args: {
        leftIcon: <span>📧</span>,
        rightIcon: <span>→</span>,
        children: 'Send Email',
    },
};

// Layout Stories
export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'Full Width Button',
    },
    parameters: {
        layout: 'padded',
    },
};

// Interactive Stories
export const Interactive: Story = {
    args: {
        children: 'Click me!',
    },
    parameters: {
        docs: {
            description: {
                story: 'This button has an interactive click handler. Check the Actions panel to see the click events.',
            },
        },
    },
};

// Accessibility Stories
export const Accessible: Story = {
    args: {
        'aria-label': 'Custom accessible label',
        children: 'Accessible Button',
    },
    parameters: {
        docs: {
            description: {
                story: 'This button demonstrates proper accessibility with custom ARIA labels.',
            },
        },
    },
};

// All Variants Grid
export const AllVariants: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            }}
        >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="error">Error</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" status="outlined">
                Primary Outlined
            </Button>
            <Button variant="secondary" status="outlined">
                Secondary Outlined
            </Button>
            <Button variant="error" status="outlined">
                Error Outlined
            </Button>
            <Button variant="primary" status="ghost">
                Primary Ghost
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All button variants and statuses displayed in a grid layout.',
            },
        },
    },
};

// All Sizes Grid
export const AllSizes: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All button sizes displayed in a horizontal layout.',
            },
        },
    },
};
