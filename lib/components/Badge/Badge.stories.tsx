import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeType, BadgeVariant } from './Badge';

const meta = {
	component: Badge,
	title: 'Components/Badge',
	parameters: {
		docs: {
			description: {
				component:
					'Badge supports line, circle, and rectangle types with variants and optional icons.',
			},
		},
	},
	argTypes: {
		type: { options: Object.values(BadgeType), control: { type: 'radio' } },
		variant: { options: Object.values(BadgeVariant), control: { type: 'inline-radio' } },
		text: { control: 'text', if: { arg: 'type', neq: 'line' } },
		icon: { control: false, if: { arg: 'type', neq: 'line' } },
		prependIcon: { control: false, if: { arg: 'type', neq: 'line' } },
		appendIcon: { control: false, if: { arg: 'type', neq: 'line' } },
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: { type: BadgeType.Rectangle, variant: BadgeVariant.Primary, text: 'Sample Text' },
};

export const TextWithIcon: Story = {
	args: {
		type: BadgeType.Rectangle,
		variant: BadgeVariant.Primary,
		text: 'Sample Text',
		prependIcon: <i className="icon icon-book" />,
	},
};

export const Icon: Story = {
	args: { type: BadgeType.Rectangle, variant: BadgeVariant.Primary, icon: <i className="icon icon-book" /> },
};

export const Status: Story = {
	args: { type: BadgeType.Rectangle, variant: BadgeVariant.Primary },
};
