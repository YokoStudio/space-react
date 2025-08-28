import { clsx } from "clsx";
import { Icon } from "../Icon/Icon";

export const Spinner = ({ }: { size?: string }) => {
    return <div className={clsx('spinner')}>
        <div className="spinner__icon">
            <Icon name="circle-loading" />
        </div>
        <div className="spinner__content">Loading...</div>
    </div>;
};
