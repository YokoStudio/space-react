import './Button.css';
import { Button as BaseButton } from '@headlessui/react';
import { clsx } from 'clsx';
import type { ButtonProps } from '../../types/button.ts';
import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon/Icon.tsx';
import { Spinner } from '../Spinner/Spinner.tsx';
import useClassNames from '../../hooks/useClassName.ts';
import { iconsMap } from '../../constants/icons-map.ts';

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

        const IconAttachment = (icon: ButtonProps['prependIcon'] | ButtonProps['appendIcon']) => {
            if (typeof icon === 'string' && !!iconsMap[icon as IconProps['name']]) {
                return (
                    <div className={clsx(bemClass('prepend-icon'))}>
                        <Icon name={icon as IconProps['name']} size="lg" />
                    </div>
                );
            }

            return <div className={clsx(bemClass('prepend-icon'))}>{icon}</div>;
        }

        return (
            <BaseButton
                className={clsx(
                    bemClass(),
                    bemClass('color', color),
                    bemClass('variant', variant),
                    bemClass('size', size),
                    {
                        'w-full': block,
                    },
                    className,
                )}
                disabled={disabled}
                type={type}
                ref={ref}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedby}
                {...props}
            >
                {
                    loading
                        ? <Spinner direction="row" size="md" classNameIcon={clsx({ '!text-neutral-10-default': color === 'primary' })} />
                        : <>
                            {prependIcon && IconAttachment(prependIcon)}
                            {children}
                            {appendIcon && IconAttachment(appendIcon)}
                        </>
                }
            </BaseButton>
        );
    },
);

Button.displayName = 'Button';
