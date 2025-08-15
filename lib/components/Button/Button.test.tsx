import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Button } from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(
            'button',
            'button--primary',
            'button--filled',
            'button--md',
        );
    });

    it('renders with different variants', () => {
        const { rerender } = render(
            <Button variant="secondary">Secondary</Button>,
        );
        expect(screen.getByRole('button')).toHaveClass('button--secondary');

        rerender(<Button variant="error">Error</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--error');

        rerender(<Button variant="ghost">Ghost</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--ghost');
    });

    it('renders with different statuses', () => {
        const { rerender } = render(
            <Button status="outlined">Outlined</Button>,
        );
        expect(screen.getByRole('button')).toHaveClass('button--outlined');

        rerender(<Button status="ghost">Ghost</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--ghost');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="xs">Extra Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--xs');

        rerender(<Button size="sm">Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--sm');

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--lg');

        rerender(<Button size="xl">Extra Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('button--xl');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders in disabled state', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('renders in loading state', () => {
        render(<Button loading>Loading</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(screen.getByText('⏳')).toBeInTheDocument();
    });

    it('renders with loading text', () => {
        render(
            <Button loading loadingText="Processing...">
                Loading
            </Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-label', 'Processing...');
    });

    it('renders with full width', () => {
        render(<Button fullWidth>Full Width</Button>);
        expect(screen.getByRole('button')).toHaveClass('w-full');
    });

    it('renders with left and right icons', () => {
        const LeftIcon = () => <span data-testid="left-icon">←</span>;
        const RightIcon = () => <span data-testid="right-icon">→</span>;

        render(
            <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
                With Icons
            </Button>,
        );

        expect(screen.getByTestId('left-icon')).toBeInTheDocument();
        expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('does not render icons when loading', () => {
        const LeftIcon = () => <span data-testid="left-icon">←</span>;
        const RightIcon = () => <span data-testid="right-icon">→</span>;

        render(
            <Button loading leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
                Loading
            </Button>,
        );

        expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Ref Test</Button>);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Custom</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders with all HTML button attributes', () => {
        render(
            <Button
                type="submit"
                form="test-form"
                name="test-button"
                value="test-value"
            >
                Submit
            </Button>,
        );

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
        expect(button).toHaveAttribute('form', 'test-form');
        expect(button).toHaveAttribute('name', 'test-button');
        expect(button).toHaveAttribute('value', 'test-value');
    });

    it('is accessible with proper ARIA attributes', () => {
        render(<Button aria-label="Custom label">Button</Button>);
        const button = screen.getByRole('button', { name: /custom label/i });
        expect(button).toBeInTheDocument();
    });
});
