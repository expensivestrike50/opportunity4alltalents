import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import globalPathway from "@/assets/sports/global-pathway.jpg";

const Vision = () => {

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                {/* Section Title */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
                    <StaggerContainer className="flex-1 max-w-[683px]">
                        <AnimateOnView
                            once
                            blur
                            className="flex items-center gap-2 md:mb-4 mb-1.5"
                        >
                            <Badge>
                                Our Vision
                            </Badge>
                        </AnimateOnView>

                        <AnimateOnView
                            once
                            blur
                            delay={0.2}
                            className="h2"
                        >
                            A world where geography never hides potential
                        </AnimateOnView>
                    </StaggerContainer>

                    <AnimateOnView
                        once
                        delay={0.4}
                    >
                        <Button asChild>
                            <Link to="/contact">
                                Partner With Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </AnimateOnView>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <AnimateOnView
                        once
                        blur
                        className="max-w-[465px] w-full md:sticky static top-[60px] self-start"
                    >
                        <img
                            src={globalPathway}
                            alt="Our Vision"
                            loading="lazy" />
                    </AnimateOnView>
                    <AnimateOnView className="space-y-8 max-w-[715px] w-full">
                        <div className="space-y-4">
                            <h3 className="h5">
                                A Borderless View of Talent
                            </h3>
                            <p>
                                We envision a football world where a player’s location does not decide whether their ability is seen. Better storytelling, footage, context, and connections can widen the field of opportunity.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="h5">
                                Credibility Before Hype
                            </h3>
                            <p>
                                Visibility only matters when it is credible. We aim to present players honestly, respect their stories, and give scouts, clubs, and partners useful context rather than empty promotion.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Stories That Travel
                            </h3>
                            <p>
                                A strong player story can move from a local pitch to a global audience. We combine human stories, football footage, and focused profiles that can travel across platforms and networks.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Opportunity With Purpose
                            </h3>
                            <p>
                                The goal is not attention for its own sake. It is the right attention: a relevant scout, a club pathway, useful education, equipment support, or a partnership that helps talent progress.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Listen to the Game
                            </h3>
                            <p>
                                Players, parents, coaches, scouts, clubs, and communities all see a different part of the pathway. We listen across that network and shape work around real needs.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="h5">
                                Build Better Pathways
                            </h3>
                            <p>
                                We connect visibility with preparation. Football education, professionalism, responsible storytelling, and relevant introductions help opportunity become more useful and sustainable.
                            </p>
                        </div>
                    </AnimateOnView>
                </div>
            </Container>
        </section>
    );
};

export default Vision;