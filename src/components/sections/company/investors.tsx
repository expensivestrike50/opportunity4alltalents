import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { partners } from "@/data/partners";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </AnimateOnView>
                </div>

                {/* Partners Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {partners.map((partner, index) => (
                        <AnimateOnView key={partner.slug} delay={0.1 + index * 0.05} className="h-full">
                            <Link to={`/partners/${partner.slug}`} className="block h-full group">
                                <Card className="h-full bg-white border border-neutral-200 rounded-2xl p-5 overflow-hidden group-hover:border-primary group-hover:shadow-lg transition-all">
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

                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors">
                                                <ArrowUpRight className="w-4 h-4" />
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
                            </Link>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default Investors;
