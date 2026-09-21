import Layout from "@/components/layout";
import PlanDetails from "@/components/sections/pricing/plan-details";
import PlanHero from "@/components/sections/pricing/plan-hero";
import FAQ from "@/components/sections/shared/faq";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const FoundingPlan = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Founding | ${appConfig.name}`,
    "description": `${appConfig.description}`,
    "url": `${appConfig.url}/pricing/founding`
  };

  return (
    <>
      <SEO
        title={`Founding | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl="/pricing/founding"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <PlanHero
          title="Founding"
          description="A customized strategic partnership built around your brand and shared goals."
        />
        <PlanDetails
          planName="Founding"
          price="$50,000+/yr"
          description="A customized strategic partnership built around your brand, e.g. “O4AT × [Brand] African Talent Development Initiative.”"
          features={[
            "Customized strategic partnership",
            "e.g. “O4AT × [Brand] African Talent Development Initiative”",
          ]}
        />
        <FAQ />
      </Layout>
    </>
  );
};

export default FoundingPlan;
