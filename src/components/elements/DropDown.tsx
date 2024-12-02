import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid'; // Hamburger menu icon
import React from 'react';

type DropdownOption = {
  label: string;
  icon: React.ElementType; // A React component for the icon
  onClick?: () => void; // Optional function to call on item click
};

type DropdownProps = {
  options: DropdownOption[];
};

export default function Dropdown({ options }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center justify-center rounded-md p-2 text-typography-light hover:text-secondary-light focus:outline-none">
          <div className="text-typography-light hover:text-typography-dark flex items-center">
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            <span className="ml-2  text-base font-medium">Shop Categories</span>
          </div>
        </MenuButton>
      </div>

      <MenuItems
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        {options.map((option, index) => (
          <div key={index} className="py-1">
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={option.onClick}
                  className={`flex items-center w-full px-4 py-2 text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  <option.icon
                    aria-hidden="true"
                    className={`mr-3 w-5 h-5 ${
                      active ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  />
                  {option.label}
                </button>
              )}
            </MenuItem>
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}

