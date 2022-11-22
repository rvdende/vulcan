import { Session } from "next-auth"
import Image from 'next/image'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const NavbarMobileUser = (props: {
    sessionData: Session | null
}) => {
    return                             <div className="flex items-center px-4">
    <div className="flex-shrink-0">
        <Image className="h-10 w-10 rounded-full" 
        width={40}
        height={40}
        src={props.sessionData?.user?.image || ''} alt="" />
    </div>
    <div className="ml-3">
        <div className="text-base font-medium text-white">{props.sessionData?.user?.name}</div>
        <div className="text-sm font-medium text-gray-400">{props.sessionData?.user?.email}</div>
    </div>
    <button
        type="button"
        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
</div>
}