import { DropdownGroupProp } from '../../types/dropdown';

export function DropdownGroup({ label }: DropdownGroupProp) {
    return (
        <div
            role="group"
            aria-label={label}
            className="flex gap-1 items-center px-1 text-body-b2 text-neutral-6-default after:content-[''] after:block after:grow after:border-b after:border-neutral-9-default select-none"
        >
            {label}
        </div>
    );
}
