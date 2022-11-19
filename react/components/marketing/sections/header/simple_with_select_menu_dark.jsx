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
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Pricing Plans</h2>
          <p className="mt-5 text-xl text-gray-400">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <label htmlFor="currency" className="block text-base font-medium text-gray-300">
            Currency
          </label>
          <div className="relative mt-1.5">
            <select
              id="currency"
              name="currency"
              className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
              defaultValue="United States (USD)"
            >
              <option>Argentina (ARS)</option>
              <option>Australia (AUD)</option>
              <option>United States (USD)</option>
              <option>Canada (CAD)</option>
              <option>France (EUR)</option>
              <option>Japan (JPY)</option>
              <option>Nigeria (NGN)</option>
              <option>Switzerland (CHF)</option>
              <option>United Kingdom (GBP)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
