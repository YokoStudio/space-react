import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dropdown } from './Dropdown.tsx';
import { useEffect, useState } from 'react';
import { action } from 'storybook/actions';
import { DropdownOption } from './DropdownOption.tsx';
import { DropdownProps } from '../../types/dropdown.ts';
import { DropdownGroup } from './DropdownGroup.tsx';

const meta = {
    component: Dropdown,
    argTypes: {
        children: {
            required: true,
            type: 'string',
            description:
                'Accepts `DropdownOption` and `DropdownGroup` components',
            control: false,
        },
        value: {
            type: 'string',
            description:
                'The value of the component, can be a string, number, or other type based on your `T`.',
            control: false,
            table: {
                subcategory: 'Props',
            },
        },
        defaultValue: {
            type: 'string',
            description:
                'The value of the component, can be a string, number, or other type based on your `T`.',
            control: false,
            table: {
                subcategory: 'Props',
            },
        },
        error: {
            description:
                'Indicates whether there is an error with the component. Set to true to display error state styles.',
            table: {
                subcategory: 'Props',
            },
        },
        disabled: {
            description:
                'Disables the component, preventing user interaction. When true, the component will be visually styled as disabled, and interactions like clicks or selections are ignored.',
            table: {
                subcategory: 'Props',
            },
        },
        multiple: {
            description:
                'Allows multiple selections if set to true. When enabled, the value prop will be treated as an array, and users can select multiple items.',
            table: {
                subcategory: 'Props',
            },
        },
        onChange: {
            description: 'Callback function triggered when the value changes.',
            action: 'changed',
            table: {
                subcategory: 'Actions',
            },
        },
    },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultTemplate = ({
    value,
    multiple,
    error,
    disabled,
    onChange,
    defaultValue,
}: DropdownProps) => {
    const [selected, setSelected] = useState<Array<unknown> | unknown>(
        defaultValue,
    );

    useEffect(() => {
        setSelected(value);
    }, [value]);

    return (
        <Dropdown
            prependIcon={<i className="icon icon-search" />}
            error={error}
            disabled={disabled}
            value={selected}
            multiple={multiple}
            onChange={(value) => {
                onChange?.(value);
                setSelected(value);
            }}
        >
            <DropdownOption
                value={'react'}
                label={'React.js'}
                prependIcon={<i className="icon icon-copy" />}
            />
            <DropdownOption value={'vue'} label={'Vue.js'} />
            <DropdownOption value={'svelte'} label={'Svelte.js'} />
            <DropdownOption
                value={'angular'}
                label={'Angular.js'}
                disabled={true}
            />
        </Dropdown>
    );
};

export const Default: Story = {
    render: DefaultTemplate,
    args: {
        value: null,
        error: false,
        disabled: false,
        multiple: false,
        onChange(value) {
            action('onChange')(value);
        },
    },
};

const GroupingTemplate = ({ value, multiple, onChange }: DropdownProps) => {
    const [selected, setSelected] = useState<Array<unknown> | unknown>();

    useEffect(() => {
        setSelected(value);
    }, [value]);

    return (
        <Dropdown
            prependIcon={<i className="icon icon-search" />}
            value={selected}
            multiple={multiple}
            onChange={(value) => {
                onChange?.(value);
                setSelected(value);
            }}
        >
            <DropdownGroup label={'Group 1'} />
            <DropdownOption value={'react'} label={'React.js'} />
            <DropdownOption value={'vue'} label={'Vue.js'} />
            <DropdownGroup label={'Group 2'} />
            <DropdownOption value={'svelte'} label={'Svelte.js'} />
            <DropdownOption
                value={'angular'}
                label={'Angular.js'}
                disabled={true}
            />
        </Dropdown>
    );
};

export const Grouping: Story = {
    render: GroupingTemplate,
    args: {
        ...Default.args,
    },
};

export const MultipleSelection: Story = {
    ...Default,
    args: {
        ...Default.args,
        value: [],
        multiple: true,
    },
};
