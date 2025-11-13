import './Button.css';
import { clsx } from 'clsx';
import type { ButtonProps } from '../../types/button';
import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';
import useClassNames from '../../hooks/useClassName';
import { iconsMap } from '../../constants/icons-map';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            color = 'primary',
            variant = 'filled',
            size = 'md',
            className,
            children,
            prependIcon,
            appendIcon,
            loading = false,
            block = false,
            disabled = false,
            type = 'button',
            ariaLabel,
            ariaDescribedby,
            ...props
        }: ButtonProps,
        ref,
    ) => {
        const bemClass = useClassNames('button');

        const IconAttachment = (
            icon: ButtonProps['prependIcon'] | ButtonProps['appendIcon'],
            position: 'prepend' | 'append',
        ) => {
            if (
                typeof icon === 'string' &&
                !!iconsMap[icon as IconProps['name']]
            ) {
                return (
                    <div
                        className={clsx(bemClass(`${position}-icon`))}
                        aria-hidden="true"
                    >
                        <Icon name={icon as IconProps['name']} size="lg" />
                    </div>
                );
            }

            return (
                <div
                    className={clsx(bemClass(`${position}-icon`))}
                    aria-hidden="true"
                >
                    {icon}
                </div>
            );
        };

        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                type={type}
                disabled={isDisabled}
                className={clsx(
                    bemClass(),
                    bemClass('color', color),
                    bemClass('variant', variant),
                    bemClass('size', size),
                    {
                        [bemClass('', 'loading')]: loading,
                        'w-full': block,
                    },
                    className,
                )}
                data-loading={loading || undefined}
                data-disabled={disabled || undefined}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedby}
                aria-busy={loading || undefined}
                {...props}
            >
                {loading ? (
                    <Spinner
                        direction="row"
                        size="md"
                        classNameIcon={clsx({
                            '!text-neutral-10-default': color === 'primary',
                        })}
                    />
                ) : (
                    <>
                        {prependIcon && IconAttachment(prependIcon, 'prepend')}
                        {children}
                        {appendIcon && IconAttachment(appendIcon, 'append')}
                    </>
                )}
            </button>
        );
    },
);

Button.displayName = 'Button';
