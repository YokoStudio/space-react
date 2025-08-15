import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Dropdown } from './Dropdown';
import { DropdownGroup } from './DropdownGroup';
import { DropdownOption } from './DropdownOption';

const options = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
];

describe('Dropdown', () => {
    it('renders with placeholder', () => {
        const onChange = jest.fn();
        render(
            <Dropdown value={null} onChange={onChange}>
                {options.map((o) => (
                    <DropdownOption
                        key={o.value}
                        label={o.label}
                        value={o.value}
                    />
                ))}
            </Dropdown>,
        );

        expect(screen.getByText('Select')).toBeInTheDocument();
    });

    it('opens list and selects a single option', () => {
        const onChange = jest.fn();
        render(
            <Dropdown value={null} onChange={onChange}>
                {options.map((o) => (
                    <DropdownOption
                        key={o.value}
                        label={o.label}
                        value={o.value}
                    />
                ))}
            </Dropdown>,
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        fireEvent.click(screen.getByText('Two'));

        expect(onChange).toHaveBeenCalled();
    });

    it('supports multiple selection', () => {
        const onChange = jest.fn();
        render(
            <Dropdown value={[]} multiple onChange={onChange}>
                <DropdownGroup label="Numbers" />
                {options.map((o) => (
                    <DropdownOption
                        key={o.value}
                        label={o.label}
                        value={o.value}
                    />
                ))}
            </Dropdown>,
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        fireEvent.click(screen.getByText('One'));
        fireEvent.click(screen.getByText('Three'));

        expect(onChange).toHaveBeenCalled();
    });
});
