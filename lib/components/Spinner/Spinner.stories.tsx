import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner.tsx';

const meta = {
    component: Spinner,
    argTypes: {
        direction: {
            control: {
                type: 'radio',
            },
            options: ['row', 'column'],
        },
        size: {
            control: {
                type: 'radio',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        direction: 'row',
        size: 'md',
        content: 'Loading',
    },
};
