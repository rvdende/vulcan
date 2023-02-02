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
            href: "/resourcing",
            description:
              "We provide specialist IT skillsets to supplement your existing development team.",
            icon: BriefcaseIcon,
          },
        ]}
      />

      {/* <MarketingGrid /> */}

      <Footer />
    </>
  );
};

export default Home;
