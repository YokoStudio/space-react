import { DropdownGroupProp } from '../../types/dropdown.ts';
import { ListboxOption } from '@headlessui/react';

export function DropdownGroup({ label }: DropdownGroupProp) {
    return (
        <ListboxOption
            value={undefined}
            className="flex gap-1 items-center px-1 text-body-b2 text-neutral-6-default after:content-[''] after:block after:grow after:border-b after:border-neutral-9-default select-none"
        >
            {label}
        </ListboxOption>
    );
}
