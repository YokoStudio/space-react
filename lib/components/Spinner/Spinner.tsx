import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";
import './style.css'
import useClassName from "../../utilities/useClassName";

export interface SpinnerProp {
    direction?: 'row' | 'column';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    content: string;
    className?: string;
}

export const Spinner = ({ direction = 'row', size = 'md', content, className }: SpinnerProp) => {
    const bemClass = useClassName('spinner');

    return <div className={clsx(bemClass(), bemClass('direction', direction), className)}>
        <div className={bemClass('icon')}>
            <Icon name="circle-loading" size={size} className={bemClass('icon', 'svg')} />
        </div>
        <div className={clsx(bemClass('content'), bemClass('content', size))}>
            {content}
        </div>
    </div>;
};
