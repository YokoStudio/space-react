import './Tooltip.css';
import { clsx } from 'clsx';

export const Tooltip = ({ label, text, badge, children, position }) => {
    const direction = {
        up: 'bottom-full -translate-y-2 end-0',
        down: 'top-full translate-y-2 end-0',
        right: 'left-full translate-x-2',
        left: 'right-full -translate-x-2',
    };

    return (
        <div className="relative w-fit">
            <div
                className={clsx(
                    'bg-neutral-1-default p-1 absolute w-fit shadow-18 rounded-md tooltip-arrow',
                    direction[position],
                    `tooltip-arrow__${position}`,
                )}
            >
                <div className="text-body-b2">{label}</div>
                <div className="flex gap-1 items-center translate-x-">
                    {badge}
                    <span className="grow text-body-b2 text-start">{text}</span>
                </div>
            </div>
            {children}
        </div>
    );
};
