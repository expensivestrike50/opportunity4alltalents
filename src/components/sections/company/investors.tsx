import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { partners } from "@/data/partners";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Investors = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
                    <StaggerContainer className="flex-1 max-w-[683px]">
                        <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
                            <Badge>Investors &amp; Partners</Badge>
                        </AnimateOnView>

                        <AnimateOnView once blur delay={0.2} className="h2">
                            Trusted by leading investors &amp; partners
                        </AnimateOnView>
                    </StaggerContainer>

                    <AnimateOnView once delay={0.4}>
                        <Button asChild>
                            <Link to="/contact">
                                Join Us Now
                            </Link>
                        </Button>
                    </AnimateOnView>
                </div>

                {/* Partners Grid: blurred preview until partners are announced */}
                <div className="relative">
                <StaggerContainer
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 blur-md select-none pointer-events-none"
                    aria-hidden="true"
                >
                    {partners.map((partner, index) => (
                        <AnimateOnView key={partner.slug} delay={0.1 + index * 0.05} className="h-full">
                            <div className="block h-full">
                                <Card className="h-full bg-white border border-neutral-200 rounded-2xl p-5 overflow-hidden">
                                    <CardContent className="p-0 flex flex-col justify-between h-full gap-10">
                                        <div className="flex items-center justify-between gap-1.5">
                                            <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-neutral-200 py-1 pl-1 pr-3">
                                                <span
                                                    className={cn(
                                                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
                                                        partner.color
                                                    )}
                                                >
                                                    {partner.initial}
                                                </span>
                                                <span className="text-sm font-medium text-foreground truncate">
                                                    {partner.firm}
                                                </span>
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-foreground">
                                                {partner.name}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {partner.title}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>

                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimateOnView once delay={0.3} className="flex flex-col items-center gap-3 rounded-3xl bg-white/80 px-8 py-6 text-center shadow-[0_20px_60px_rgba(20,20,20,0.12)] backdrop-blur">
                        <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                            Coming soon
                        </span>
                        <p className="max-w-[300px] text-muted-foreground">
                            Our founding partners will be announced here soon.
                        </p>
                    </AnimateOnView>
                </div>
                </div>
            </Container>
        </section>
    );
};

export default Investors;
