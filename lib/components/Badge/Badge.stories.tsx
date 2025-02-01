import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeType, BadgeVariant } from './Badge';

const meta = {
    component: Badge,
    argTypes: {
        type: {
            options: Object.values(BadgeType),
            control: { type: 'radio' },
        },
        variant: {
            options: Object.values(BadgeVariant),
            control: { type: 'inline-radio' },
        },
        text: {
            type: 'string',
            if: {
                arg: 'type',
                neq: 'line',
            },
            control: { type: 'text' },
        },
        icon: {
            type: 'string',
            if: {
                arg: 'type',
                neq: 'line',
            },
            control: { type: 'text' },
        },
        prependIcon: {
            type: 'string',
            if: {
                arg: 'type',
                neq: 'line',
            },
            control: { type: 'text' },
        },
        appendIcon: {
            type: 'string',
            if: {
                arg: 'type',
                neq: 'line',
            },
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: BadgeType.Rectangle,
        variant: BadgeVariant.Primary,
        text: 'Sample Text',
    },
};

export const TextWithIcon: Story = {
    args: {
        type: BadgeType.Rectangle,
        variant: BadgeVariant.Primary,
        text: 'Sample Text',
        prependIcon: <i className="icon icon-book" />,
    },
};

export const Icon: Story = {
    args: {
        type: BadgeType.Rectangle,
        variant: BadgeVariant.Primary,
        icon: <i className="icon icon-book" />,
    },
};

export const Status: Story = {
    args: {
        type: BadgeType.Rectangle,
        variant: BadgeVariant.Primary,
    },
};
