import { BookmarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <BookmarkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        12k
      </button>
    </span>
  )
}
