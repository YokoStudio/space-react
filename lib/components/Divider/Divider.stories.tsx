import type { Meta, StoryObj } from '@storybook/react';

import { Divider, DividerPosition } from './Divider.tsx';

const meta = {
    component: Divider,
    argTypes: {
        position: {
            type: 'string',
            options: Object.values(DividerPosition),
            control: {
                type: 'radio',
            },
        },
        text: {
            type: 'string',
        },
        icon: {
            type: 'string',
        },
        prependIcon: {
            type: 'string',
        },
        appendIcon: {
            type: 'string',
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Sample Text',
        position: DividerPosition.Middle,
    },
};

export const TextWithIcon: Story = {
    args: {
        text: 'Sample Text',
        position: DividerPosition.Middle,
        prependIcon: <i className="icon icon-book"></i>,
        appendIcon: <i className="icon icon-chevron-down"></i>,
    },
};

export const Icon: Story = {
    args: {
        position: DividerPosition.Middle,
        icon: <i className="icon icon-book"></i>,
    },
};
