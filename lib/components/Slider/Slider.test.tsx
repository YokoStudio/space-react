import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders linear slider with aria attributes', () => {
    const onChange = jest.fn();
    render(<Slider min={0} max={10} value={5} step={1} onChange={onChange} mode="linear" />);
    const input = screen.getByRole('slider');
    expect(input).toHaveAttribute('aria-valuemin', '0');
    expect(input).toHaveAttribute('aria-valuemax', '10');
    expect(input).toHaveAttribute('aria-valuenow', '5');
  });

  it('handles change within bounds', () => {
    const onChange = jest.fn();
    render(<Slider min={0} max={10} value={5} step={1} onChange={onChange} mode="linear" />);
    const input = screen.getByRole('slider') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '7' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('renders section mode', () => {
    const onChange = jest.fn();
    render(<Slider min={0} max={10} value={5} step={1} onChange={onChange} mode="section" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});