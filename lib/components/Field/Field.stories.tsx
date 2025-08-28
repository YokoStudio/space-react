import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from './Field';
import { Input } from '../Input/Input.tsx';

const meta = {
    component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render({ label, required, message, mode }) {
        return (
            <Field
                label={label}
                required={required}
                message={message}
                mode={mode}
            >
                <Input />
            </Field>
        );
    },
    args: {
        children: null,
        label: 'Email Address',
        required: true,
        message: 'Enter valid email',
        mode: 'compact',
    },
};
