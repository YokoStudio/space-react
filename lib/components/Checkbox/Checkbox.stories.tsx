import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta = {
	component: Checkbox,
	title: 'Components/Checkbox',
	parameters: {
		docs: {
			description: {
				component:
					'Accessible checkbox with indeterminate, helper text, and error styling. Use controlled mode for reliable state.',
			},
		},
	},
	argTypes: {
		disabled: {
			type: 'boolean',
			control: { type: 'boolean' },
			table: { defaultValue: { summary: 'false' }, subcategory: 'Props' },
		},
		checked: { control: { type: 'boolean' }, table: { subcategory: 'Props' } },
		onChange: {
			type: 'function',
			description:
				"Handles checkbox state changes. Won't fire when disabled.",
			table: { subcategory: 'Actions' },
		},
		indeterminate: {
			type: 'boolean',
			description:
				'Visual intermediate state. Takes precedence over checked when both true.',
			table: { defaultValue: { summary: 'false' }, subcategory: 'Props' },
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: CheckboxProps) => {
	const [checked, setChecked] = useState(args.checked);

	useEffect(() => {
		setChecked(args.checked);
	}, [args.checked]);

	return (
		<Checkbox
			{...args}
			indeterminate={args.indeterminate}
			checked={checked}
			onChange={(value) => {
				setChecked(value);
				args.onChange(value);
			}}
		/>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		checked: true,
		indeterminate: false,
		disabled: false,
		onChange(value: CheckboxProps['checked']) {
			action('onChange')(value);
		},
	},
};

export const Disabled = { ...Default, args: { ...Default.args, disabled: true } };
export const Indeterminate = { ...Default, args: { ...Default.args, indeterminate: true } };
