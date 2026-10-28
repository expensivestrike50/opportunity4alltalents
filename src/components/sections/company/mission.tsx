import missionImage from "@/assets/sports/ad-puma.jpg";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Gem } from "lucide-react";
import { Link } from "react-router-dom";

const coreValues: { number: string; title: string; description: string }[] = [
    {
        number: "01",
        title: "Finding hidden gems",
        description: "Finding emerging players and helping their ability reach the right audience.",
    },
    {
        number: "02",
        title: "Protecting player stories",
        description: "Sharing talent responsibly, with context, consent, and credibility.",
    },
    {
        number: "03",
        title: "Building visibility",
        description: "Creating useful profiles and stories for scouts, clubs, and partners.",
    },
    {
        number: "04",
        title: "Creating opportunity",
        description: "Connecting football potential with pathways that can move careers forward.",
    },
];

const Mission = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                {/* Section Title */}
                <StaggerContainer>
                    <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
                        <Badge>
                            Our Mission
                        </Badge>
                    </AnimateOnView>
                    <AnimateOnView once blur delay={0.1}>
                        <h2 className="h2 text-balance lg:whitespace-nowrap">
                            Why we exist and what drives us
                        </h2>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4">
                    {/* Mission statement */}
                    <AnimateOnView
                        once
                        y={40}
                        className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-2xl md:rounded-4xl bg-[#0f2418] p-6 md:p-12 text-white flex flex-col justify-between gap-10 min-h-[440px]"
                    >
                        <svg
                            className="pointer-events-none absolute -bottom-56 -right-56 h-[640px] w-[640px] text-white/[0.06]"
                            viewBox="0 0 640 640"
                            fill="none"
                            aria-hidden="true"
                        >
                            {Array.from({ length: 8 }, (_, i) => (
                                <circle key={i} cx="320" cy="320" r={110 + i * 28} stroke="currentColor" strokeWidth="1.5" />
                            ))}
                        </svg>

                        <div className="relative">
                            <h2 className="h3 text-white max-w-[560px]">
                                Help emerging African talent become visible to the people who can{" "}
                                <span className="text-[#b4e66b]">move careers forward.</span>
                            </h2>
                        </div>

                        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                            <p className="max-w-[340px] text-white/70">
                                Scouts, clubs, partners, and pathways. Talent is everywhere. Opportunity isn’t.
                            </p>
                            <Button asChild className="bg-[#b4e66b] text-[#0f2418] hover:bg-[#b4e66b]/90 w-fit">
                                <Link to="/contact">
                                    Partner With Us
                                </Link>
                            </Button>
                        </div>
                    </AnimateOnView>

                    {/* Photo */}
                    <AnimateOnView
                        once
                        y={40}
                        delay={0.1}
                        className="col-span-12 lg:col-span-5 relative min-h-[360px] overflow-hidden rounded-2xl md:rounded-4xl"
                    >
                        <img
                            src={missionImage}
                            alt="Smiling young female footballer on a grassroots pitch"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                            loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                        <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-[#0f2418] shadow-xl">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b4e66b]">
                                <Gem className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium">Every player has a story</span>
                        </div>
                    </AnimateOnView>
                </div>

                {/* Core values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {coreValues.map((value, index) => {
                        return (
                            <AnimateOnView key={value.number} once y={30} delay={0.2 + index * 0.08} className="h-full">
                                <Card className="h-full rounded-3xl flex flex-col justify-between gap-10 hover:shadow-lg transition-shadow">
                                    <CardContent className="p-0">
                                        <span className="text-6xl font-semibold leading-none tracking-tight text-primary tabular-nums">
                                            {value.number}
                                        </span>
                                    </CardContent>
                                    <CardContent className="p-0">
                                        <h3 className="h5 text-foreground mb-2">{value.title}</h3>
                                        <p className="card-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </AnimateOnView>
                        );
                    })}
                </div>
                </div>
            </Container>
        </section>
    );
};

export default Mission;
