import { render, screen } from '../../test-utils';
import { Field } from './Field';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

describe('Field', () => {
    it('renders label and required marker', () => {
        render(
            <Field label="Username" required>
                <Input placeholder="u" />
            </Field>,
        );

        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('renders hint and message (error)', () => {
        render(
            <Field
                label="Email"
                hint="We never share it"
                message="Invalid"
                error
            >
                <Input placeholder="e" />
            </Field>,
        );

        expect(screen.getByText('We never share it')).toBeInTheDocument();
        expect(screen.getByText('Invalid')).toBeInTheDocument();
    });

    it('propagates aria props to valid children', () => {
        render(
            <Field label="Bio" hint="Short" error>
                <Textarea
                    value=""
                    prependIcon={null as any}
                    actionButton={null as any}
                />
            </Field>,
        );

        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeInTheDocument();
    });
});
