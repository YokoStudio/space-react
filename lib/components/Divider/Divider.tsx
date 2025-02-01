import './Divider.css';
import { ReactNode } from 'react';

export enum DividerPosition {
    Middle = 'middle',
    Left = 'left',
    Right = 'right',
    LeftEnd = 'left-end',
    RightEnd = 'right-end',
}

export type DividerProps =
    | {
          position?: DividerPosition;
          icon: ReactNode;
      }
    | {
          position?: DividerPosition;
          text: string;
          prependIcon?: ReactNode;
          appendIcon?: ReactNode;
      };

export function Divider(props: DividerProps) {
    if ('icon' in props) {
        return (
            <div className="divider" data-position={props.position}>
                <div className="divider__content">
                    <span className="divider__content--icon">{props.icon}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="divider" data-position={props.position}>
                <div className="divider__content">
                    {props.prependIcon && (
                        <span className="divider__content--icon">
                            {props.prependIcon}
                        </span>
                    )}
                    {props.text}
                    {props.appendIcon && (
                        <span className="divider__content--icon">
                            {props.appendIcon}
                        </span>
                    )}
                </div>
            </div>
        );
    }
}
