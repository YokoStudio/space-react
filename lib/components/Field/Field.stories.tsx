import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { Input } from '../Input/Input.tsx';
import { Textarea } from '../Textarea/Textarea.tsx';

const meta = {
	component: Field,
	title: 'Components/Field',
	parameters: {
		docs: {
			description: {
				component: 'Form field wrapper with label, hint, message, and compact mode. Works with Input and Textarea.',
			},
		},
	},
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render({ label, required, message, mode }) {
		return (
			<Field label={label} required={required} message={message} mode={mode}>
				<Input placeholder="Enter value" />
			</Field>
		);
	},
	args: { label: 'Email Address', required: true, message: 'Enter valid email', mode: 'compact' },
};

export const WithHint: Story = {
	render: () => (
		<Field label="Username" hint="No spaces or special chars">
			<Input placeholder="yourname" />
		</Field>
	),
};

export const WithTextarea: Story = {
	render: () => (
		<Field label="Bio" hint="Max 200 chars">
			<Textarea prependIcon={null as any} actionButton={null as any} value="" />
		</Field>
	),
};
