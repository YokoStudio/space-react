import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <ErrorBoundary>{children}</ErrorBoundary>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Test data generators
export const createMockUser = () => ({
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
});

export const createMockEvent = (type: string, target?: any) => ({
    type,
    target: target || { value: 'test value' },
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
});

// Common test assertions
export const expectElementToBeVisible = (element: HTMLElement) => {
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
};

export const expectElementToBeHidden = (element: HTMLElement) => {
    expect(element).toBeInTheDocument();
    expect(element).not.toBeVisible();
};

export const expectElementToHaveClass = (
    element: HTMLElement,
    className: string,
) => {
    expect(element).toHaveClass(className);
};

export const expectElementToHaveAttribute = (
    element: HTMLElement,
    attribute: string,
    value?: string,
) => {
    if (value) {
        expect(element).toHaveAttribute(attribute, value);
    } else {
        expect(element).toHaveAttribute(attribute);
    }
};

// Accessibility test helpers
export const expectElementToBeAccessible = (element: HTMLElement) => {
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('role');
};

export const expectElementToHaveAriaLabel = (
    element: HTMLElement,
    label: string,
) => {
    expect(element).toHaveAttribute('aria-label', label);
};

// Form test helpers
export const expectFormElementToBeValid = (element: HTMLElement) => {
    expect(element).not.toHaveAttribute('aria-invalid', 'true');
};

export const expectFormElementToBeInvalid = (element: HTMLElement) => {
    expect(element).toHaveAttribute('aria-invalid', 'true');
};

// Component test helpers
export const expectComponentToRender = (
    Component: React.ComponentType<any>,
    props = {},
) => {
    const { container } = render(<Component {...props} />);
    expect(container.firstChild).toBeInTheDocument();
};

export const expectComponentToMatchSnapshot = (
    Component: React.ComponentType<any>,
    props = {},
) => {
    const { container } = render(<Component {...props} />);
    expect(container.firstChild).toMatchSnapshot();
};
