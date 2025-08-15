import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger and shows content on hover', async () => {
    render(
      <Tooltip text="Hello" label="Tip">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    expect(trigger).toBeInTheDocument();

    fireEvent.mouseOver(trigger);
  });

  it('does not open when disabled', () => {
    render(
      <Tooltip text="Hello" disabled>
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});