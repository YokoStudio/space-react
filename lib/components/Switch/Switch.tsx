import {
    Switch as BaseSwitch,
    SwitchProps as BaseSwitchProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import './Switch.css';

export const Switch = (props: BaseSwitchProps) => {
    return (
        <BaseSwitch className={clsx('switch', 'group')} {...props}>
            <span className={clsx('switch__action')} />
        </BaseSwitch>
    );
};
