import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import "./Button.css";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'error',
    status?: 'filled' | 'outlined' | 'ghost',
    disabled?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    children: ReactNode,
}

export const Button = ({variant = 'primary', status = 'filled', size = 'md', disabled, children, ...props}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`button ${variant} ${status} size-${size}`}
            {...props}>
                {children}
        </button>
    );
}
