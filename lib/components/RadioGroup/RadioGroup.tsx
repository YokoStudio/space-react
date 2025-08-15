import './RadioGroup.css';
import { Field, Label, RadioGroup as BaseRadioGroup } from '@headlessui/react';
import { clsx } from 'clsx';
import type { RadioGroupProps } from '../../types/radioGroup.ts';
import { Radio } from '../Radio/Radio.tsx';
import React, { useCallback, useMemo } from 'react';

export const RadioGroup = React.memo(
    ({
        value,
        options = [],
        disabled,
        direction = 'row',
        className,
        children,
        onChange,
        label,
        required = false,
        error = false,
        helperText,
        name,
    }: RadioGroupProps) => {
        const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

        const handleChange = useCallback(
            (newValue: unknown) => {
                if (!disabled) {
                    onChange?.(newValue);
                }
            },
            [onChange, disabled],
        );

        const radioOptions = useMemo(
            () =>
                options.map((option, index) => ({
                    ...option,
                    id: `${groupId}-option-${index}`,
                    disabled: option.disabled || disabled,
                })),
            [options, disabled, groupId],
        );

        const renderOptions = useCallback(() => {
            if (children) {
                return children;
            }

            if (options.length) {
                return radioOptions.map((option) => (
                    <Field
                        key={option.id}
                        className={'flex items-center gap-2'}
                    >
                        <Radio
                            value={option.value}
                            disabled={option.disabled}
                            aria-describedby={
                                helperText ? `${groupId}-helper` : undefined
                            }
                        />
                        <Label
                            htmlFor={option.id}
                            className={clsx(
                                'radio-group__label',
                                option.disabled &&
                                    'radio-group__label--disabled',
                            )}
                        >
                            {option.label}
                        </Label>
                    </Field>
                ));
            }

            return null;
        }, [children, options, radioOptions, groupId, helperText]);

        return (
            <div
                className={clsx(
                    'radio-group-wrapper',
                    {
                        'radio-group-wrapper--error': error,
                        'radio-group-wrapper--disabled': disabled,
                    },
                    className,
                )}
            >
                {label && (
                    <div className="radio-group__header">
                        <legend className="radio-group__legend">
                            {label}
                            {required && (
                                <span
                                    className="radio-group__required"
                                    aria-label="required"
                                >
                                    *
                                </span>
                            )}
                        </legend>
                    </div>
                )}

                <BaseRadioGroup
                    value={value}
                    className={clsx(
                        'radio-group',
                        'flex',
                        'gap-4',
                        {
                            [`radio-group--${direction}`]: direction,
                            'radio-group--error': error,
                            'radio-group--disabled': disabled,
                        },
                        className,
                    )}
                    disabled={disabled}
                    onChange={handleChange}
                    name={name}
                    aria-labelledby={label ? `${groupId}-legend` : undefined}
                    aria-describedby={
                        helperText ? `${groupId}-helper` : undefined
                    }
                    aria-invalid={error}
                >
                    {renderOptions()}
                </BaseRadioGroup>

                {helperText && (
                    <div
                        id={`${groupId}-helper`}
                        className={clsx(
                            'radio-group__helper-text',
                            error && 'radio-group__helper-text--error',
                        )}
                    >
                        {helperText}
                    </div>
                )}
            </div>
        );
    },
);

RadioGroup.displayName = 'RadioGroup';
