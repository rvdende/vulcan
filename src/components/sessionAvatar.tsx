import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from 'next/image'
import type { Session } from "next-auth";
import { classNames } from "components/classNames";

export default function SessionAvatar(props: {
    userNavigation: { name: string, href: string }[]
    sessionData: Session | null
}) {

    if (!props.sessionData) return null;

    return <Menu as="div" className="relative ml-4 flex-shrink-0 mr-4">
        <div>
            <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <Image className="h-8 w-8 rounded-full"
                    width={256}
                    height={256}
                    src={props.sessionData?.user?.image || ''} alt="" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {props.userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                        {({ active }) => (
                            <a
                                href={item.href}
                                className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                )}
                            >
                                {item.name}
                            </a>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Transition>
    </Menu>
}