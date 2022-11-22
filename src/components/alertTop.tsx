import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import classNames from 'classnames'



export default function AlertTop(props: {
  text: {
    sm: string
    md: string
  },
  buttonText: string
  href: string
}) {
  const [hidden, hide] = useState(false);

  // let translateY = `-translate-y-${ hidden ? 12 : 10}`
  let translateY = '';

  return (
    <div className='bg-slate-800 h-12'>
      <div className={classNames(`absolute top-0 left-0 right-0 bg-slate-900 transition-all shadow-2xl duration-500 ${translateY}`)}
        style={{ translate: `0 ${hidden ? -12 : 0}rem` }}
      >
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
              onClick={() => { hide(true); }}
              className="flex rounded-full p-2 hover:bg-slate-800 focus:outline-none focus:ring-2
              group  transition-all duration-500"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-200 transition-all duration-250" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
