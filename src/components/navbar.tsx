/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { classNames } from "./classNames";
import SessionAvatar from "./sessionAvatar";
import { NavbarMobileUser } from "./navbar_mobile_user";

import { useState, useEffect } from "react";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export interface NavItem {
  name: string;
  href: string;
  subnav?: NavItem[];
}

export default function NavBar(props: { navigation: NavItem[] }) {
  const navigation = props.navigation;
  const { data: sessionData } = useSession();

  const [loaded, loaded_set] = useState(false);

  useEffect(() => {
    loaded_set(true);
  }, []);

  if (!loaded) return <div>loading...</div>;

  return (
    <Disclosure as="header" className="bg-gray-800 pt-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="relative flex flex-shrink-0 cursor-pointer items-center hover:opacity-90">
                  <Image
                    alt="Vulcan Labs"
                    src="/logo_White115H_X_758W.png"
                    className="transition duration-300 hover:drop-shadow-[0_0px_8px_rgba(200,255,255,0.5)]"
                    width={758 / 6}
                    height={115 / 6}
                  />
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* <button
                                    type="button"
                                    className="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                {/* Profile dropdown */}
                <SessionAvatar
                  sessionData={sessionData}
                  userNavigation={userNavigation}
                />

                {sessionData ? (
                  <button
                    type="submit"
                    onClick={() => signOut()}
                    className="focus:ring-white-600 mr-4 flex w-full justify-center whitespace-nowrap rounded-md border border-slate-500 p-1 py-2 px-4 text-sm font-medium text-white shadow-sm transition-all hover:border-white focus:outline-none focus:ring-1"
                  >
                    Sign out
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => signIn()}
                    className="focus:ring-white-600 mr-4 flex w-full justify-center whitespace-nowrap rounded-md border border-slate-500 p-1 py-2 px-4 text-sm font-medium text-white shadow-sm transition-all hover:border-white focus:outline-none focus:ring-1"
                  >
                    Sign in
                  </button>
                )}

                <button
                  type="submit"
                  className="mr-4 flex w-full justify-center whitespace-nowrap rounded-md border border-transparent border-lime-600 p-1 py-2 px-4 text-sm font-medium text-white shadow-sm hover:border-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  Get Started
                </button>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2"
              aria-label="Global"
            >
              {navigation.map((item, id) => (
                <FlyOutMenu key={id} item={item} />

                // <a
                //   key={item.name}
                //   href={item.href}
                //   className={classNames(
                //     // item.current
                //     // ? "bg-gray-900 text-white"
                //     "text-gray-300 hover:bg-gray-700 hover:text-white",
                //     "inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
                //   )}
                //   aria-current={"page"}
                // >
                //   {item.name}
                // </a>
              ))}
            </nav>
          </div>

          <Disclosure.Panel
            as="nav"
            className="mx-4 rounded-lg bg-slate-900 lg:hidden"
            aria-label="Global"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    // item.current
                    // ? "bg-gray-900 text-white"
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={"page"}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <NavbarMobileUser sessionData={sessionData} />
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function FlyOutMenu(props: { item: NavItem }) {
  const RenderButton = () => {
    return (
      <button className="group inline-flex items-center rounded-md p-2 text-base font-medium text-gray-500 outline-red-300 hover:text-gray-200 focus:outline">
        <span>{props.item.name}</span>

        {props.item.subnav && (
          <ChevronDownIcon
            className={classNames("ml-2 h-5 w-5 group-hover:text-gray-500")}
            aria-hidden="true"
          />
        )}
      </button>
    );
  };

  if (!props.item.subnav) {
    return RenderButton();
  }

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(open ? "text-white" : "")}
          >
            {RenderButton()}
          </Popover.Button>

          {props.item.subnav && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {props.item.subnav.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
}
