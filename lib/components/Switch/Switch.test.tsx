import React from 'react';
import { render, screen } from '../../test-utils';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders with label and description', () => {
    render(<Switch label="Airplane mode" description="Disable connectivity" />);
    expect(screen.getByText('Airplane mode')).toBeInTheDocument();
    expect(screen.getByText('Disable connectivity')).toBeInTheDocument();
  });

  it('supports disabled and error states', () => {
    render(<Switch disabled error label="Status" description="Desc" />);
    const button = screen.getByRole('switch');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-invalid', 'true');
  });
});