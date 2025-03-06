import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip.tsx';
import { Badge, BadgeType, BadgeVariant } from '../Badge/Badge.tsx';

const meta = {
    component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function Render(args) {
        return (
            <div className="m-72">
                <Tooltip {...args}>
                    <span>Hover me!</span>
                </Tooltip>
            </div>
        );
    },
    args: {
        badge: (
            <Badge
                variant={BadgeVariant.Primary}
                type={BadgeType.Rectangle}
                text={'25'}
            />
        ),
        text: 'Text',
        label: 'Label',
        children: null,
        position: 'top',
    },
};
