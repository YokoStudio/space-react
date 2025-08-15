import React from 'react';
import { render, screen } from '../../test-utils';
import { Badge, BadgeType, BadgeVariant } from './Badge';

describe('Badge', () => {
  it('renders line type with data attributes', () => {
    const { container } = render(<Badge type={BadgeType.Line} variant={BadgeVariant.Primary} />);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('badge');
    expect(el).toHaveAttribute('data-type', BadgeType.Line);
    expect(el).toHaveAttribute('data-variant', BadgeVariant.Primary);
  });

  it('renders rectangle with text and icons', () => {
    render(
      <Badge
        type={BadgeType.Rectangle}
        variant={BadgeVariant.Secondary}
        text="Hello"
        prependIcon={<span data-testid="pre">P</span>}
        appendIcon={<span data-testid="app">A</span>}
      />
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('pre')).toBeInTheDocument();
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('renders circle with single icon', () => {
    render(
      <Badge
        type={BadgeType.Circle}
        variant={BadgeVariant.Ghost}
        icon={<span data-testid="icon">I</span>}
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});