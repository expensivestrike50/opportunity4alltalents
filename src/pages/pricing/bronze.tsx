import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const BronzePlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Bronze | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/bronze`
  };

  return (
    <>
      <SEO
        title={`Bronze | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/bronze"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Bronze"
          description="Foundational recognition and social support for brands starting a partnership with African football talent."
        />
        <PlanDetails
          planName="Bronze"
          price="$5,000/yr"
          description="Foundational recognition and social support for brands starting a partnership with African football talent."
          features={[
            "Website recognition",
            "Social media recognition",
            "Sponsor logo",
            "2 social features",
            "Quarterly newsletter recognition",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default BronzePlan;
