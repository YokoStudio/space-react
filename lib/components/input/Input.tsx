import './Input.css';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
}

export const Input = ({ placeholder, error = false, disabled = false, ...props}: InputProps) => {
    return <>
        <input className={`input ${error && 'error'}`} disabled={disabled} placeholder={placeholder} { ...props }/>
    </>
}
