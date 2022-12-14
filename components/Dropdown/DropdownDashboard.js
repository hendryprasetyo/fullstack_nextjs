import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownDashboard(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
          <AiOutlineSetting />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[-10rem] top-[-5rem] z-10 mt-2 w-36 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard/settings"
                  className={classNames(
                    active ? " text-gray-900" : "text-gray-700",
                    "flex w-full px-4 py-2 text-left text-sm gap-3"
                  )}
                >
                  <AiOutlineSetting className="text-lg text-gray-700" />
                  <span className="text-gray-700">settings</span>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex w-full px-4 py-2 text-left text-sm gap-3"
                  )}
                  onClick={() => props.setTrigger(false)}
                >
                  <AiOutlineLogout className="text-lg" />
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownDashboard;
