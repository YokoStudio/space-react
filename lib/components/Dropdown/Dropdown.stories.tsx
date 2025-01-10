import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown.tsx';

const meta = {
    component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                label: 'Vue.js',
                value: 'vue',
            },
            {
                label: 'React.js',
                value: 'react',
                disabled: true,
            },
            {
                label: 'Svelte',
                value: 'svelte',
            },
        ],
        error: false,
        disabled: false,
        multiple: false,
    },
};
