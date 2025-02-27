import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab.tsx';

const meta = {
    component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                key: '1',
                label: 'yes',
            },
            {
                key: '2',
                label: 'no',
            },
            {
                key: '3',
                label: 'unknown',
            },
        ],
        mode: 'outlined',
    },
};
