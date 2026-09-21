import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const TermsAndConditionPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Terms & Conditions | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/legal/terms-&-condition`
    };

    return (
        <>
            <SEO
                title={`Terms & Conditions | ${appConfig.name}`}
                description={appConfig.description}
                canonicalUrl={`/legal/terms-&-condition`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Terms & Conditions`}
                    description={`Terms & Conditions | Opportunity 4 All Talents - Legal`}
                />
                <section>

                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px] prose prose-lg">
                            <p className="lead text-xl text-muted-foreground mb-8">
                                Opportunity 4 All Talents connects emerging football talent with visibility, storytelling, scouts, clubs, and partnership opportunities.
                            </p>

                            <h3>The backbone of global expansion</h3>
                            <p>
                                Information shared through this site should be accurate, respectful, and provided with the appropriate consent, especially when it relates to players and young people.
                            </p>

                            <p>
                                Submitting information does not guarantee publication, representation, a trial, a contract, or any other football outcome. Selection decisions remain with the relevant scouts, academies, and clubs.
                            </p>

                            <h3>Security: Where trust meets technology</h3>
                            <p>
                                We may use submitted contact details to respond to enquiries and assess relevant talent, scouting, club, or partnership opportunities.
                            </p>

                            <blockquote>
                                “Talent is everywhere. Opportunity isn’t.”
                            </blockquote>

                            <h3>Responsible visibility</h3>
                            <p>
                                As we move forward, AI-driven fraud detection and decentralized finance (DeFi) integrations are set to redefine the standards again. Businesses that adapt to these changes will lead the charge in the next decade of digital innovation.
                            </p>

                            <h3>Player and partner choices</h3>
                            <p>
                                Players and partners should understand how their stories, images, footage, and information may be used before participating in an activation.
                            </p>

                            <h3>Why flexibility matters</h3>
                            <p>
                                Any agreed campaign deliverables, usage, and reporting should be documented clearly between the participating parties.
                            </p>

                            <h3>Connecting the football network</h3>
                            <p>
                                Our work may connect players, parents, coaches, scouts, clubs, communities, and brands across different locations and football environments.
                            </p>

                            <h3>How the platform supports opportunity</h3>
                            <p>
                                By making player stories and football context easier to discover, the platform aims to widen access to relevant audiences and potential pathways.
                            </p>

                            <h3>Conclusion: The currency of innovation</h3>
                            <p>
                                As the platform develops, these terms and policies may be updated to reflect new services, partnerships, and legal requirements.
                            </p>
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default TermsAndConditionPage;