import type { Meta, StoryObj } from '@storybook/react';

import { Divider, DividerPosition } from './Divider.tsx';

const meta = {
	component: Divider,
	title: 'Components/Divider',
	parameters: {
		docs: {
			description: {
				component:
					'Divider separates content with optional text or icon and flexible positioning.',
			},
		},
	},
	argTypes: {
		position: { control: { type: 'radio' }, options: Object.values(DividerPosition) },
		text: { control: 'text' },
		icon: { control: false },
		prependIcon: { control: false },
		appendIcon: { control: false },
	},
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { text: 'Sample Text', position: DividerPosition.Middle },
};

export const TextWithIcon: Story = {
	args: {
		text: 'Sample Text',
		position: DividerPosition.Middle,
		prependIcon: <i className="icon icon-book" />,
		appendIcon: <i className="icon icon-chevron-down" />,
	},
};

export const Icon: Story = {
	args: { position: DividerPosition.Middle, icon: <i className="icon icon-book" /> },
};
