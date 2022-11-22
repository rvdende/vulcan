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
import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { classNames } from './classNames'
import SessionAvatar from './sessionAvatar'
import { NavbarMobileUser } from './navbar_mobile_user'


const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]



export default function NavBar(props: {
    navigation: { name: string, href: string, current: boolean }[]
}) {
    const navigation = props.navigation;

    const { data: sessionData } = useSession();

    return (
        <Disclosure as="header" className="bg-gray-800 pt-4">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="relative z-10 flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center cursor-pointer hover:opacity-90 relative">
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
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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

                                {sessionData ? <button
                                    type="submit"
                                    onClick={() => signOut()}
                                    className="flex whitespace-nowrap w-full justify-center rounded-md border border-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:border-white focus:outline-none focus:ring-1 focus:ring-white-600 p-1 mr-4 transition-all"
                                >
                                    Sign out
                                </button> : <button
                                    type="submit"
                                    onClick={() => signIn()}
                                    className="flex whitespace-nowrap w-full justify-center rounded-md border border-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:border-white focus:outline-none focus:ring-1 focus:ring-white-600 p-1 mr-4 transition-all"
                                >
                                    Sign in
                                </button>}

                                <button
                                    type="submit"
                                    className="flex whitespace-nowrap w-full justify-center rounded-md border border-transparent border-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:border-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 p-1 mr-4"

                                >
                                    Get Started
                                </button>

                            </div>
                        </div>
                        <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden bg-slate-900 mx-4 rounded-lg" aria-label="Global">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
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
    )
}
