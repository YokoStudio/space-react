import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta = {
    component: Checkbox,
    argTypes: {
        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
            table: {
                defaultValue: {
                    summary: 'false',
                },
                subcategory: 'Props',
            },
        },
        checked: {
            control: { type: 'boolean' },
            table: {
                subcategory: 'Props',
            },
        },
        onChange: {
            type: 'function',
            description:
                "The onChange method handles checkbox state changes and doesn't trigger when disabled.",
            table: {
                subcategory: 'Actions',
            },
        },
        indeterminate: {
            type: 'boolean',
            description:
                'The indeterminate property visually sets a checkbox to an intermediate state (neither checked nor unchecked). It takes precedence over the checked prop when both are applied.',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                subcategory: 'Props',
            },
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

export const Disabled = {
    ...Default,
    args: {
        ...Default.args,
        disabled: true,
    },
};
