import React from 'react';
import { render, screen } from '../../test-utils';
import { Divider, DividerPosition } from './Divider';

describe('Divider', () => {
  it('renders icon variant', () => {
    const { container } = render(<Divider icon={<span data-testid="icon">*</span>} position={DividerPosition.Middle} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveClass('divider');
    expect(root).toHaveAttribute('data-position', DividerPosition.Middle);
  });

  it('renders text variant with prepend and append icons', () => {
    const { container } = render(
      <Divider
        text="Hello"
        prependIcon={<span data-testid="pre">P</span>}
        appendIcon={<span data-testid="app">A</span>}
        position={DividerPosition.Left}
      />
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('pre')).toBeInTheDocument();
    expect(screen.getByTestId('app')).toBeInTheDocument();
    const root = container.firstElementChild as HTMLElement;
    expect(root).toHaveAttribute('data-position', DividerPosition.Left);
  });
});