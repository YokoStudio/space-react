import {
    Radio as BaseRadio,
    type RadioProps as BaseRadioProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import './Radio.css';

export const Radio = ({ className, ...props }: BaseRadioProps) => {
    return <BaseRadio className={clsx('radio', className)} {...props} />;
};
