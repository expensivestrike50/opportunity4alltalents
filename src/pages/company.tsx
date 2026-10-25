import Layout from "@/components/layout";
import GlobalLocations from "@/components/sections/company/global-locations";
import CompanyHero from "@/components/sections/company/hero";
import Investors from "@/components/sections/company/investors";
import Mission from "@/components/sections/company/mission";
import TeamOverview from "@/components/sections/company/team-overview";
import Vision from "@/components/sections/company/vision";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { lazy, Suspense } from "react";
const Values = lazy(() => import("@/components/sections/company/values"));

const CompanyPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": `About | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/company`
    };

    return (
        <>
            <SEO
                title={`Company | ${appConfig.name}`}
                description={`${appConfig.description}`}
                canonicalUrl="/company"
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <CompanyHero />
                <Suspense fallback={null}>
                    <Values />
                </Suspense>
                <Suspense fallback={null}>
                    <Vision />
                </Suspense>
                <Suspense fallback={null}>
                    <Mission />
                </Suspense>
                <Suspense fallback={null}>
                    <Investors />
                </Suspense>
                <Suspense fallback={null}>
                    <GlobalLocations />
                </Suspense>
                <Suspense fallback={null}>
                    <TeamOverview />
                </Suspense>
            </Layout>
        </>
    )
}

export default CompanyPage;
