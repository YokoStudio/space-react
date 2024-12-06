import './Radio.css';

export interface RadioProps {
    id: string,
    value: boolean,
    disabled?: boolean,
    onClick?: () => void
}

export const Radio = ({id, value, disabled, onClick}: RadioProps) => {
    return (<>
            <span
                className="radio"
                id={id}
                aria-disabled={disabled}
                aria-checked={value}
                tabIndex={disabled ? -1 : 0}
                role="radio"
                onClick={!disabled ? onClick : undefined}
                onKeyDown={(e) => {
                    if (!disabled && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        onClick?.();
                    }
                }}
            />
        </>
    )
}
