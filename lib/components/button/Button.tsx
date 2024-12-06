import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import "./Button.css";
import { Button as BaseButton }from '@headlessui/react';
import { clsx } from "clsx";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'error',
    status?: 'filled' | 'outlined' | 'ghost',
    disabled?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    children: ReactNode,
}

export const Button = ({variant = 'primary', status = 'filled', size = 'md', disabled, children, ...props}: ButtonProps) => {
    console.log(variant, status, size, disabled, children, props)
    return (
        <BaseButton className={clsx('button', variant, status, 'size-'+size)}>
            { children }
        </BaseButton>
    );
}
