import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
	component: Slider,
	title: 'Components/Slider',
	parameters: { docs: { description: { component: 'Range slider supporting linear and section modes with accessible attributes.' } } },
	argTypes: {
		mode: { control: 'inline-radio', options: ['linear','section'] },
		min: { control: 'number' },
		max: { control: 'number' },
		step: { control: 'number' },
		value: { control: 'number' },
	},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Linear: Story = {
	args: { mode: 'linear', min: 0, max: 10, step: 1, value: 5, onChange: () => {} },
};

export const Section: Story = {
	args: { mode: 'section', min: 0, max: 10, step: 1, value: 5, onChange: () => {} },
};
