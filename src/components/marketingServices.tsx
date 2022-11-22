
export default function MarketingServices(props: {
    heading: string
    subheading: string
    content: {
        name: string,
        href: string
        description: string
        icon: React.ElementType,
    }[]
}) {
    return (
        <div className="bg-slate-900">
            {/* Header */}
            <div className="relative bg-slate-900 pb-16 bg-gradient-to-b from-slate-800 to-slate-900">
                <div className="relative mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
                    <p className="mt-6 mb-20 max-w-3xl text-xl text-gray-300">
                        {props.subheading}
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 auto-rows-max ">
                    {props.content.map((link) => (
                        <a key={link.name} href={link.href}>
                            <div className="flex flex-col rounded-2xl overflow-hidden transition-all bg-white
                             border border-teal-700 shadow-xl 
                             hover:bg-cyan-100 
                             hover:border-white                             
                             hover:-translate-y-2 min-h-full drop-shadow-[0_0px_48px_rgba(50,255,255,0.1)] 
                             hover:drop-shadow-[0_0px_48px_rgba(50,255,255,0.3)]">
                                <div className="relative flex-1 text-center">

                                    <div className="p-6">
                                        <div className="text-center w-full mb-4 "><link.icon className="h-16 w-16 text-cyan-500 inline-block" aria-hidden="true" /></div>
                                        <h3 className="text-xl text-center font-bold text-gray-800">{link.name}</h3>
                                        <p className="mt-4 text-base text-gray-500">{link.description}</p>
                                    </div>


                                    <div className=" bg-gray-50 px-4 py-6 mt-4 sm:px-10">
                                        <p className="text-xs leading-5 text-gray-500">
                                            More details...
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}
