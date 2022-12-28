import { type NextPage } from "next";
import Link from "next/link";

import MarketingGrid from "components/grid_with_offset_icons";
import Footer from "components/footer";
import HeroHeader from "components/heroheader";
import MarketingServices from "components/marketingServices";

// marketing services
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  // const test = trpc.actionplans.test.useQuery({ text: "blah" });

  return (
    <>
      <HeroHeader
        headline="Let's build something amazing!"
        pitchtext="Leading edge software product development services through all stages of production."
      />

      <MarketingServices
        heading="Our Services"
        subheading="Partner with Vulcan Labs and Get It Done!"
        content={[
          {
            name: "Custom Development",
            href: "#",
            description:
              "Bespoke software development for your project from inception to production.",
            icon: BuildingOfficeIcon,
          },
          {
            name: "Dedicated Team",
            href: "#",
            description:
              "We provide a dedicated team at your service to rapidly build solutions and add value.",
            icon: UserGroupIcon,
          },
          {
            name: "Specialist IT Resourcing",
            href: "#",
            description:
              "We provide specialist IT skillsets to supplement your existing development team.",
            icon: BriefcaseIcon,
          },
        ]}
      />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            Hello Vulcan Team!
          </h1>
          <h1 className="text-2xl font-extrabold tracking-tight text-white ">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App is
            awesome :)
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main>

      <MarketingGrid />

      <Footer />
    </>
  );
};

export default Home;
