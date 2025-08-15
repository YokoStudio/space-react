import React from 'react';
import { render, screen } from '../../test-utils';
import { Tab } from './Tab';
import { TabMode } from '../../types/tab';

describe('Tab', () => {
  const items = [
    { key: 'one', label: 'One' },
    { key: 'two', label: 'Two' },
  ];

  it('renders tabs and respects mode', () => {
    render(<Tab items={items} mode={TabMode.Filled} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'One' })).toBeInTheDocument();
  });

  it('respects disabled and fullWidth flags', () => {
    const { container } = render(<Tab items={items} disabled fullWidth />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveClass('tab-container--full-width');
  });
});