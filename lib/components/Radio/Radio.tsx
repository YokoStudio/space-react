import {
    Radio as BaseRadio,
    type RadioProps as BaseRadioProps,
} from '@headlessui/react';
import { clsx } from 'clsx';

export const Radio = ({ className, ...props }: BaseRadioProps) => {
    return <BaseRadio className={clsx('radio', className)} {...props} />;
};
