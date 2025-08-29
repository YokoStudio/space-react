import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";
import './style.css'
import useClassName from "../../hooks/useClassName";

export interface SpinnerProp {
    direction?: 'row' | 'column';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    content?: string;
    className?: string;
    classNameContent?: string;
    classNameIcon?: string;
}

export const Spinner = ({ direction = 'row', size = 'md', content, className, classNameContent, classNameIcon }: SpinnerProp) => {
    const bemClass = useClassName('spinner');

    return <div className={clsx(bemClass(), bemClass('direction', direction), className)}>
        <div className={bemClass('icon')}>
            <Icon name="circle-loading" size={size} className={clsx(bemClass('icon', 'svg'), classNameIcon)} />
        </div>
        {content && <div className={clsx(bemClass('content'), bemClass('content', size), classNameContent)}>
            {content}
        </div>}
    </div>;
};
