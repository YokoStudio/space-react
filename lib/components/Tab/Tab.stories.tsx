import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab.tsx';
import { TabMode } from '../../types/tab.ts';

const meta = {
    component: Tab,
    argTypes: {
        mode: {
            type: 'string',
            control: {
                type: 'radio',
                labels: {
                    filled: 'Filled',
                    outlined: 'Outlined',
                },
            },
            options: [TabMode.Filled, TabMode.Outlined],
        },
    },
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
        mode: TabMode.Filled,
    },
};
