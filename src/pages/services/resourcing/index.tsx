import { CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
export default function Resourcing() {
  const pstyle = "my-6 text-lg";
  return (
    <div>
      <div>
        <h1>
          Custom Software Development
        </h1>
        <p className="mt-5 ml-20 text-right text-2xl font-bold">
          Bespoke software development for your project from inception to
          production.
        </p>
        <p className={pstyle}>
          Vulcan Labs can help you kick start your software project so that you
          can focus on your business instead of managing developers. Your
          project will get a dedicated team made up of a Team Lead, Quality
          Assurance engineers and Software Engineers.
        </p>
        <p className={pstyle}>
          Following an Agile Methodology, we deliver your project through a
          series of sprints, while maintaining the flexibility to re-prioritise
          items as needed. This methodology allows us you get working code out
          for review and refactored as efficiently as possible.
        </p>
        <p className={pstyle}>
          Our team of highly skilled engineers can start on your project
          immediately, using modern software practices and tooling. Your project
          gets the cumulative benefit of our excellent track record delivering
          quality projects across a broad range of business verticals, covering
          the finance, retail, engineering and agricultural sectors.
        </p>
      </div>
      <div className="flex justify-center p-6">
        <Steps />
      </div>
    </div>
  );
}

const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "current",
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "upcoming",
  },
];

export function Steps() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-10" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === "current" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={step.href}
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
