import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const SilverPlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Silver | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/silver`
  };

  return (
    <>
      <SEO
        title={`Silver | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/silver"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Silver"
          description="Deeper activation with podcast sponsorship, sponsored campaigns, and player and academy content."
        />
        <PlanDetails
          planName="Silver"
          price="$15,000/yr"
          description="Deeper activation with podcast sponsorship, sponsored campaigns, and player and academy content."
          features={[
            "All Bronze benefits",
            "Podcast sponsorship",
            "4 sponsored social campaigns",
            "Website banner",
            "Player/academy content",
            "Event activation",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default SilverPlan;
