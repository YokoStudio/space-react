import React, { useState } from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Radio } from './Radio';
import { RadioGroup as HUIRadioGroup } from '@headlessui/react';

describe('Radio', () => {
  const Wrapper: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
    const [value, setValue] = useState('a');
    return (
      <HUIRadioGroup value={value} onChange={setValue} disabled={disabled}>
        <Radio value="a" />
      </HUIRadioGroup>
    );
  };

  it('renders radio', () => {
    render(<Wrapper />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('supports disabled', () => {
    render(<Wrapper disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-disabled', 'true');
  });

  it('changes selection on click', () => {
    const Component: React.FC = () => {
      const [value, setValue] = useState('b');
      return (
        <HUIRadioGroup value={value} onChange={setValue}>
          <Radio value="a" />
          <Radio value="b" />
        </HUIRadioGroup>
      );
    };

    render(<Component />);
    const radios = screen.getAllByRole('radio');
    fireEvent.click(radios[0]);
    expect(radios[0]).toHaveAttribute('aria-checked', 'true');
  });
});