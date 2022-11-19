import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis ratione.
          </p>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute mt-1 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
