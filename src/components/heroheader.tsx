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
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { LeadGen } from './leadgen'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function HeroHeader(props: {
  headline: string
  pitchtext: string
}) {
  return (
    <div className="relative overflow-hidden bg-gray-800 pb-6">
      
      <div className="relative pt-6 pb-4">


        <main className="mt-4 sm:mt-6">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12">
              <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div >
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-rose-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      We&apos;re hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    {props.headline}
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {props.pitchtext}
                  </p>
                  <p className="mt-8 text-base font-semibold text-white sm:mt-10">Used by</p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                        <Image
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                          alt="Tuple"
                          width={105}
                          height={48}
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <Image
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                          alt="Workcation"
                          width={105}
                          height={48}
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <Image
                          className="h-9 sm:h-10"
                          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                          alt="StaticKit"
                          width={105}
                          height={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <LeadGen />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
