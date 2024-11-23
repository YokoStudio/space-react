import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    status: 'filled',
    children: 'Primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    status: 'filled',
    children: 'Secondary'
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    status: 'filled',
    children: 'Error'
  }
}
