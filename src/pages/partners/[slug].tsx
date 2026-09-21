import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { getPartnerBySlug } from "@/data/partners";
import { appConfig } from "@/utils/app-config";
import { cn } from "@/lib/utils";
import { SquareCheck } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const PartnerDetail = () => {
  const { slug } = useParams();
  const partner = getPartnerBySlug(slug || "");

  if (!partner) {
    return <Navigate to="/company" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: partner.headline,
    author: { "@type": "Person", name: partner.name },
    url: `${appConfig.url}/partners/${partner.slug}`,
  };

  return (
    <>
      <SEO
        title={`${partner.name} | ${appConfig.name}`}
        description={partner.headline}
        canonicalUrl={`/partners/${partner.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Layout>
        {/* Hero */}
        <section className="bg-black banner-top-padding md:pb-20 xl:pb-24 pb-12">
          <Container>
            <div className="flex items-center justify-between gap-4 mb-10 md:mb-16">
              <AnimateOnView once blur className="text-sm text-white/60">
                <Link to="/company" className="hover:text-white transition-colors">
                  Partners
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white uppercase">{partner.firm}</span>
              </AnimateOnView>
              <AnimateOnView once blur className="text-xs text-white/40 tracking-widest">
                [{partner.issue}]
              </AnimateOnView>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <AnimateOnView once blur delay={0.1} className="h1 text-white mb-10">
                  {partner.headline}
                </AnimateOnView>

                <AnimateOnView once blur delay={0.2}>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    A conversation with
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
                        partner.color
                      )}
                    >
                      {partner.initial}
                    </span>
                    <div>
                      <p className="font-medium text-white">{partner.name}</p>
                      <p className="text-white/60 text-sm">{partner.title}</p>
                    </div>
                  </div>
                </AnimateOnView>
              </div>

              <AnimateOnView once y={30} delay={0.3}>
                <div className="aspect-square w-full rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={partner.heroImage}
                    alt={partner.headline}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimateOnView>
            </div>
          </Container>
        </section>

        {/* Challenge / Solution */}
        <section className="md:pt-20 xl:pt-24 pt-12 pb-12 md:pb-16 border-b border-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <AnimateOnView once blur>
                <h2 className="h4 mb-4">Challenge</h2>
                <p className="text-lg text-foreground leading-relaxed">{partner.challenge}</p>
              </AnimateOnView>
              <AnimateOnView once blur delay={0.1}>
                <h2 className="h4 mb-4">Solution</h2>
                <p className="text-lg text-foreground leading-relaxed">{partner.solution}</p>
              </AnimateOnView>
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="md:py-16 py-12 border-b border-border">
          <Container>
            <AnimateOnView once blur className="mb-8">
              <h2 className="h4">Results</h2>
            </AnimateOnView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {partner.results.map((result, index) => (
                <AnimateOnView
                  key={index}
                  once
                  delay={index * 0.05}
                  className="flex items-start gap-3"
                >
                  <SquareCheck className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <span className="text-lg text-foreground">{result}</span>
                </AnimateOnView>
              ))}
            </div>
          </Container>
        </section>

        {/* Sidebar + article */}
        <section className="md:py-20 py-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
                        partner.color
                      )}
                    >
                      {partner.initial}
                    </span>
                    <p className="text-lg font-medium text-foreground">{partner.firm}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-1">About</h3>
                    <p className="text-muted-foreground">{partner.about}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-1">Focus area</h3>
                    <p className="text-muted-foreground">{partner.focusArea}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-1">Partnership tier</h3>
                    <p className="text-muted-foreground">{partner.tier}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">{partner.headquarters}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-1">Partner since</h3>
                    <p className="text-muted-foreground">{partner.partnerSince}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-3">Key contributions</h3>
                    <ul className="space-y-2.5">
                      {partner.keyContributions.map(({ icon: Icon, label }, index) => (
                        <li key={index} className="flex items-center gap-2.5 text-muted-foreground">
                          <Icon className="w-4 h-4 text-primary shrink-0" />
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Article */}
              <div className="lg:col-span-8 space-y-10">
                {partner.sections.map((section, index) => (
                  <AnimateOnView key={index} once blur delay={index * 0.1} className="space-y-4">
                    <h2 className="h4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.quote && (
                      <blockquote className="text-xl font-medium text-foreground border-l-2 border-primary pl-5 py-1">
                        “{section.quote}”
                      </blockquote>
                    )}
                  </AnimateOnView>
                ))}

                <AnimateOnView once blur className="pt-4">
                  <blockquote className="text-2xl font-medium text-foreground leading-snug">
                    “{partner.closingQuote}”
                  </blockquote>
                </AnimateOnView>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default PartnerDetail;
