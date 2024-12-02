import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../utils/classnames";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../../stores/useAuthStore";
import { UserIcon } from "@heroicons/react/24/outline";


/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */
export default function UserMenu() {
  const { resetUserData, userData } = useAuthStore((state) => state);
  const navigate = useNavigate();
  const user = userData;

  const userNavigation = user?.email
  ? [{ name: "Sign Out", href: "/sign-out" }]
  : [{ name: "Sign In", href: "/sign-in" }];

  const handler = (path: string) => {
    if (path === "/sign-out") {
      resetUserData();
      toast.success("You’ve been signed out securely.");
      navigate("/sign-in");
    } else  {
      navigate(path);
    }
  };

  return (
    <div>
      <div className="mr-5 flex items-center gap-4">
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex items-center w-full rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 h-max">
              <span className="sr-only">Open user menu</span>
              <UserIcon className="w-8 text-black hover:text-secondary-light" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      onClick={() => handler(item.href)}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 w-full"
                      )}
                    >
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        {/* User Info */}
        <div className="hidden lg:flex flex-col text-left">
          <p className="text-typography-dark text-base font-medium">
            {user.firstName || ""}
          </p>
          {user.email ? (
            <p className="text-typography-dark/60 text-sm">{user.email}</p>
          ) : (
            <a className="text-typography-dark text-base hover:text-secondary-light" href="/sign-in" >Sign In</a>
          )}
        </div>
      </div>
    </div>
  );
}