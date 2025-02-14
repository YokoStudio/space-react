import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea.tsx';

const meta = {
    component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        prependIcon: <i className="icon icon-book" />,
        value: 'salam',
    },
};
