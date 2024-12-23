import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch.tsx';

const meta = {
    component: Switch,
    argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: true,
        disabled: false,
    },
};

export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        disabled: true,
    },
};
