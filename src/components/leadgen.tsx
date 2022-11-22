export const LeadGen = () => {
    return <div className="bg-white w-full sm:overflow-hidden sm:rounded-lg lg:mr-10 lg:w-auto md:w-auto md:mx-10">

        <div className=" bg-gray-50 px-4 py-4 sm:px-8">

            <h4 className="font-bold tracking-tight text-slate-600 pt-6">
                Tell us about your needs:
            </h4>

        </div>

        <div className="px-4 py-8 sm:px-8">



            <div className="mt-0">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full rounded-md border-2 border-gray-200  focus:border-cyan-200 focus:ring-cyan-200 sm:text-sm p-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                        </label>
                        <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Mobile number or email"
                            required
                            className="block w-full rounded-md border-2 border-gray-200  focus:border-cyan-200 focus:ring-cyan-200 sm:text-sm p-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <textarea required placeholder="Message"
                            className="block w-full rounded-md border-2 border-gray-200  focus:border-cyan-200 focus:ring-cyan-200 sm:text-sm p-3"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-4 px-4 text-lg font-semibold text-white shadow-sm
                             hover:bg-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Get in touch
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
            <p className="text-xs leading-5 text-gray-500">
                View our {' '}
                <a href="#" className="font-medium text-gray-900 hover:underline">
                    Terms
                </a>
                ,{' '}
                <a href="#" className="font-medium text-gray-900 hover:underline">
                    Data Policy
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-gray-900 hover:underline">
                    Cookies Policy
                </a>
                .
            </p>
        </div>
    </div>
}