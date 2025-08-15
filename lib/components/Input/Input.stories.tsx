import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
	component: Input,
	title: 'Components/Input',
	parameters: {
		docs: {
			description: {
				component: `
Accessible text input with sizes, icons, clearable behavior, and helper text.

- **Sizes**: sm, md, lg
- **States**: error, disabled
- **Decorators**: left/right icons, clear button
- **Label/Helper**: built-in label and helper text

Usage (controlled):
\`\`\`tsx
<Input value={value} onChange={e => setValue(e.target.value)} />
\`\`\`

Usage (uncontrolled):
\`\`\`tsx
<Input defaultValue="hello" />
\`\`\`
				`,
			},
		},
	},
	argTypes: {
		placeholder: { control: 'text' },
		size: { control: 'inline-radio', options: ['sm','md','lg'] },
		error: { control: 'boolean' },
		disabled: { control: 'boolean' },
		label: { control: 'text' },
		required: { control: 'boolean' },
		helperText: { control: 'text' },
		fullWidth: { control: 'boolean' },
		leftIcon: { control: false },
		rightIcon: { control: false },
		clearable: { control: 'boolean' },
		onClear: { action: 'clear', table: { subcategory: 'Actions' } },
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { placeholder: 'yoko search...' },
};

export const WithLabelAndHelper: Story = {
	args: { label: 'Email', placeholder: 'Enter email', helperText: 'We never share your email' },
};

export const Error: Story = {
	args: { placeholder: 'Invalid', error: true, helperText: 'Please correct the value' },
};

export const Disabled: Story = {
	args: { placeholder: 'Disabled', disabled: true },
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-3 w-[320px]">
			<Input size="sm" placeholder="Small" />
			<Input size="md" placeholder="Medium" />
			<Input size="lg" placeholder="Large" />
		</div>
	),
};

export const WithIcons: Story = {
	args: {
		placeholder: 'Search',
		leftIcon: <span className="icon icon-search" />,
		rightIcon: <span className="icon icon-copy" />,
	},
};

export const Clearable: Story = {
	args: { placeholder: 'Type then clear', clearable: true, value: 'hello' },
};
