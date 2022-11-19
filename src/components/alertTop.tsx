import { XMarkIcon } from '@heroicons/react/24/outline'



export default function AlertTop(props: {
  text: {
    sm: string
    md: string
  },
  buttonText: string
  href: string
}) {
  return (
    <div className="relative bg-gray-900">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span className="md:hidden">{props.text.sm}</span>
            <span className="hidden md:inline">{props.text.md}</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href={props.href} className="font-bold text-white underline">
                {props.buttonText}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
