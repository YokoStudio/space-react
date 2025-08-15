import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders and toggles', () => {
    const onChange = jest.fn();
    render(<Checkbox checked={false} onChange={onChange} label="Accept" />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('renders indeterminate state', () => {
    render(<Checkbox checked={false} indeterminate onChange={() => {}} />);
    const cb = screen.getByRole('checkbox');
    expect(cb).toBeInTheDocument();
  });

  it('renders helper text and error state', () => {
    render(<Checkbox checked onChange={() => {}} helperText="Help" error />);
    expect(screen.getByText('Help')).toHaveClass('checkbox__helper-text--error');
  });

  it('supports disabled state', () => {
    const onChange = jest.fn();
    render(<Checkbox checked disabled onChange={onChange} label="Opt" />);
    const cb = screen.getByRole('checkbox');
    expect(cb).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(cb);
    expect(onChange).not.toHaveBeenCalled();
  });
});