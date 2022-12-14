import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-transparent px-2 py-1 text-2xl font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100 ">
          <AiOutlineUser />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard/settings"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    " px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <AiOutlineSetting className="text-lg" />
                  Settings
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

export default Dropdown;
