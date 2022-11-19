
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
        <div className="bg-[#15162c]">
            {/* Header */}
            <div className="relative bg-slate-800 pb-16 bg-gradient-to-b from-slate-800 to-[#15162c]">
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
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {props.content.map((link) => (
                        <a key={link.name} href={link.href}>
                            <div className="flex flex-col rounded-2xl transition-all bg-transparent
                             border border-cyan-700 shadow-xl hover:bg-slate-900 hover:border-white 
                             
                             hover:-translate-y-2">
                                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                    <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-black border border-cyan-700 p-2 shadow-lg">
                                        <link.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-100">{link.name}</h3>
                                    <p className="mt-4 text-base text-gray-400">{link.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}
