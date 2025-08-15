import React from 'react';
import { render, screen } from '../../test-utils';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders with prepend icon and action button', () => {
    render(
      <Textarea
        name="bio"
        value=""
        prependIcon={<span data-testid="icon">I</span>}
        actionButton={<button data-testid="action">A</button>}
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByTestId('action')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('supports defaultValue when uncontrolled', () => {
    // Omit value prop intentionally to render uncontrolled textarea with defaultValue
    const props: any = {
      name: 'bio',
      defaultValue: 'hello',
      prependIcon: null,
      actionButton: null,
    };
    render(<Textarea {...props} />);
    const el = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(el.value).toBe('hello');
  });
});