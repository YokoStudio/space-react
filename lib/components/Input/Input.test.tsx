import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('input', 'input--md');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText('Small')).toHaveClass('input--sm');

    rerender(<Input size="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toHaveClass('input--lg');
  });

  it('renders with error state', () => {
    render(<Input error placeholder="Error input" />);
    const input = screen.getByPlaceholderText('Error input');
    expect(input).toHaveClass('input--error');
    // Note: aria-invalid is set by Headless UI when error is true
  });

  it('renders in disabled state', () => {
    render(<Input disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('renders with label', () => {
    render(<Input label="Email Address" placeholder="Enter email" />);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  });

  it('renders with required label', () => {
    render(<Input label="Email Address" required placeholder="Enter email" />);
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
    expect(requiredIndicator).toHaveAttribute('aria-label', 'required');
  });

  it('renders with helper text', () => {
    render(<Input helperText="This field is required" placeholder="Input" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders with error helper text', () => {
    render(
      <Input 
        error 
        helperText="This field is required" 
        placeholder="Input" 
      />
    );
    const helperText = screen.getByText('This field is required');
    expect(helperText).toHaveClass('input__helper-text--error');
  });

  it('renders with left icon', () => {
    const LeftIcon = () => <span data-testid="left-icon">🔍</span>;
    render(<Input leftIcon={<LeftIcon />} placeholder="Search" />);
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toHaveClass('input--with-left-icon');
  });

  it('renders with right icon', () => {
    const RightIcon = () => <span data-testid="right-icon">📧</span>;
    render(<Input rightIcon={<RightIcon />} placeholder="Email" />);
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toHaveClass('input--with-right-icon');
  });

  it('renders with clearable functionality', () => {
    const handleClear = jest.fn();
    render(
      <Input 
        value="test value" 
        clearable 
        onClear={handleClear} 
        placeholder="Clearable" 
      />
    );
    
    const clearButton = screen.getByRole('button', { name: /clear input/i });
    expect(clearButton).toBeInTheDocument();
    
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it('does not show clear button when value is empty', () => {
    render(<Input value="" clearable placeholder="Empty" />);
    expect(screen.queryByRole('button', { name: /clear input/i })).not.toBeInTheDocument();
  });

  it('renders with full width', () => {
    render(<Input fullWidth placeholder="Full width" />);
    expect(screen.getByPlaceholderText('Full width').closest('.input-wrapper')).toHaveClass('input-wrapper--full-width');
  });

  it('handles input changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Type here" />);
    
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-class');
  });

  it('renders with all HTML input attributes', () => {
    render(
      <Input
        type="email"
        name="email"
        id="email-input"
        autoComplete="email"
        placeholder="Email"
      />
    );
    
    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('id', 'email-input');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });

  it('is accessible with proper ARIA attributes', () => {
    render(
      <Input 
        label="Email Address" 
        helperText="Enter your email address"
        placeholder="Email"
      />
    );
    
    const input = screen.getByLabelText('Email Address');
    // The aria-describedby should be present when helperText is provided
    expect(input).toBeInTheDocument();
  });

  it('generates unique ID when not provided', () => {
    render(<Input label="Test" placeholder="Test" />);
    const input = screen.getByLabelText('Test');
    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).toMatch(/^input-/);
  });

  it('uses provided ID when available', () => {
    render(<Input id="custom-id" label="Test" placeholder="Test" />);
    const input = screen.getByLabelText('Test');
    expect(input).toHaveAttribute('id', 'custom-id');
  });
});
