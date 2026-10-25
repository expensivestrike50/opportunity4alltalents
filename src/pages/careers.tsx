import Layout from "@/components/layout";
import CareersHero from "@/components/sections/careers/hero";
import OpenRoles from "@/components/sections/careers/open-roles";
import WhyJoin from "@/components/sections/careers/why-join";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const Careers = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Careers | ${appConfig.name}`,
    "description": "Join the team connecting emerging football talent with scouts, clubs, and partners around the world.",
    "url": `${appConfig.url}/careers`,
  };

  return (
    <>
      <SEO
        title={`Careers | ${appConfig.name}`}
        description="Join the team connecting emerging football talent with scouts, clubs, and partners around the world."
        canonicalUrl="/careers"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <CareersHero />
        <WhyJoin />
        <OpenRoles />
      </Layout>
    </>
  );
};

export default Careers;
