import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Option } from '../types/common';
/* -------------------------------------------------------------------------- */
/*                                 types                                  */
/* -------------------------------------------------------------------------- */
type SelectProps = {
  options: Option[];
  select: Option;
  onSelect: React.Dispatch<React.SetStateAction<Option>>;
  buttonLabel?: string;
};
/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */
export default function Select({ options, onSelect, buttonLabel = "Options", select }: SelectProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center text-typography-light hover:text-secondary-light">
        {select.name ?? buttonLabel}
        <ChevronDownIcon
          aria-hidden="true"
          className="w-5 h-5 ml-1 text-white hover:text-secondary-light"
        />
      </MenuButton>
      <MenuItems
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.id}>
              {({ active }) => (
                <button
                  onClick={() => onSelect(option)}
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {option.name}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
