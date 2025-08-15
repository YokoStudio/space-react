import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch.tsx';

const meta = {
	component: Switch,
	title: 'Components/Switch',
	parameters: { docs: { description: { component: 'Toggle switch with label, description, error and disabled states.' } } },
	argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { checked: true, disabled: false, label: 'Airplane mode', description: 'Disable connectivity' },
};

export const Disabled: Story = { ...Default, args: { ...Default.args, disabled: true } };
export const Error: Story = { ...Default, args: { ...Default.args, error: true } };
