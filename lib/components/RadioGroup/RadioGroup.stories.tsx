import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta = {
	component: RadioGroup,
	title: 'Components/RadioGroup',
	parameters: { docs: { description: { component: 'Group of radio buttons with label, helper text, direction, and disabled/error states.' } } },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
	{ label: 'A', value: 'a' },
	{ label: 'B', value: 'b' },
	{ label: 'C', value: 'c' },
];

export const Default: Story = {
	args: { value: 'a', options, label: 'Pick one', direction: 'row' },
};

export const Column: Story = { args: { ...Default.args, direction: 'column' } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
export const Error: Story = { args: { ...Default.args, error: true, helperText: 'An error occurred' } };
