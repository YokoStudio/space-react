import * as SwitchPrimitive from '@radix-ui/react-switch';
import { clsx } from 'clsx';
import './Switch.css';

import type { SwitchProps } from '../../types/switch';

export const Switch = ({
    checked,
    defaultChecked,
    onCheckedChange,
    disabled,
    className,
    ...props
}: SwitchProps) => {
    return (
        <SwitchPrimitive.Root
            className={clsx('switch', 'group', className)}
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            {...props}
        >
            <SwitchPrimitive.Thumb className={clsx('switch__action')} />
        </SwitchPrimitive.Root>
    );
};
