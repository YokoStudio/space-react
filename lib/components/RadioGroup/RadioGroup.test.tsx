import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
];

describe('RadioGroup', () => {
  it('renders options and label', () => {
    render(
      <RadioGroup value={"a"} options={options} label="Pick one" onChange={() => {}} />
    );
    expect(screen.getByText('Pick one')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('calls onChange when selecting', () => {
    const onChange = jest.fn();
    render(
      <RadioGroup value={"a"} options={options} onChange={onChange} />
    );
    const radios = screen.getAllByRole('radio');
    fireEvent.click(radios[1]);
    expect(onChange).toHaveBeenCalled();
  });

  it('shows helper text and error styles', () => {
    render(
      <RadioGroup value={"a"} options={options} helperText="Help" error />
    );
    expect(screen.getByText('Help')).toHaveClass('radio-group__helper-text--error');
  });
});