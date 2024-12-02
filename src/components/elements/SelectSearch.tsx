import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../../utils/classnames";
import { Option } from "../../types/common";

/* -------------------------------------------------------------------------- */
/*                                 types                                      */
/* -------------------------------------------------------------------------- */

type Props = {
  options: Option[];
  selected: Option;
  setSelected: React.Dispatch<React.SetStateAction<Option>>;
  setQuary?: React.Dispatch<React.SetStateAction<string | undefined>>;
  short?: boolean;
  handleQuary?: (query: string) => void;
};

/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */

export default function SelectSearch({
  options,
  selected,
  setSelected,
  setQuary,
  short = false,
  handleQuary,
}: Props) {
  return (
    <form>
      <div className={classNames("flex", short ? "flex-col" : "flex-row")}>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div
                className={classNames(
                  "relative mt-2",
                  short ? "w-full" : "w-40"
                )}
              >
                <Listbox.Button
                  className="relative w-full md:w-40 cursor-default rounded-xl md:rounded-r-none bg-light py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                >
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    className="absolute z-10 mt-1 max-h-60 w-full md:w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        className={({ active }) =>
                          classNames(
                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                            "relative cursor-default select-none py-4 pl-3 pr-9"
                          )
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.name}
                            </span>
                            {selected && (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        {short ? (
          <div className="relative mt-2 flex items-center w-full">
            <input
              className="relative w-full cursor-default rounded-xl bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
              onChange={(event) =>
                setQuary ? setQuary(event.target.value) : null
              }
            />
            <div className="absolute inset-y-0 right-1 flex py-1.5 pr-1.5 items-center">
              <span className="text-gray-500 sm:text-sm" id="search-icon">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        ) : (
          <div className="relative mt-2 flex w-72 items-center">
            <input
              className="relative w-full cursor-default rounded-xl rounded-l-none bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
              onChange={(event) =>
                handleQuary ? handleQuary(event.target.value) : null
              }
            />
            <div className="absolute inset-y-0 right-1 flex py-1.5 pr-1.5 items-center">
              <span className="text-gray-500 sm:text-sm" id="search-icon">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
