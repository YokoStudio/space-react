import './Badge.css';
import { ReactNode } from 'react';

export enum BadgeType {
    Circle = 'circle',
    Rectangle = 'rectangle',
    Line = 'line',
}

export enum BadgeVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Ghost = 'ghost',
    Error = 'error',
    Warning = 'warning',
    Success = 'success',
}

export type BadgeProps = {
    variant: BadgeVariant;
} & (
    | ({ type: BadgeType.Circle | BadgeType.Rectangle; text?: string } & (
          | { icon?: ReactNode }
          | { prependIcon?: ReactNode; appendIcon?: ReactNode }
      ))
    | { type: BadgeType.Line }
);

export function Badge(props: BadgeProps) {
    if (props.type === BadgeType.Line) {
        return (
            <div
                data-type={props.type}
                data-variant={props.variant}
                className="badge"
            />
        );
    } else {
        return (
            <div
                data-type={props.type}
                data-variant={props.variant}
                className="badge"
            >
                <div className="badge__content">
                    {'icon' in props ? (
                        <div className="badge__content--icon">{props.icon}</div>
                    ) : (
                        <>
                            {'prependIcon' in props && props.prependIcon && (
                                <div className="badge__content--icon">
                                    {props.prependIcon}
                                </div>
                            )}
                            <div className="badge__content--text">
                                {props.text}
                            </div>
                            {'appendIcon' in props && props.appendIcon && (
                                <div className="badge__content--icon">
                                    {props.appendIcon}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    }
}
