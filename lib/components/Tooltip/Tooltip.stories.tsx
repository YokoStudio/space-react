import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip.tsx';
import { Badge, BadgeType, BadgeVariant } from '../Badge/Badge.tsx';
import { Button } from '../Button/Button.tsx';

const meta = {
    component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
        children: <Button>salam</Button>,
        position: 'up',
    },
};
