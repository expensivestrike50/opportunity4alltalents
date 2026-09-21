import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const GoldPlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Gold | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/gold`
  };

  return (
    <>
      <SEO
        title={`Gold | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/gold"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Gold"
          description="Official category partnership with monthly content integration and a branded talent-development initiative."
        />
        <PlanDetails
          planName="Gold"
          price="$30,000/yr"
          description="Official category partnership with monthly content integration and a branded talent-development initiative."
          features={[
            "All Silver benefits",
            "Official category partner",
            "Monthly content integration",
            "Podcast presenting sponsorship",
            "Branded talent-development initiative",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default GoldPlan;
