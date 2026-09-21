import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import mentorship from "@/assets/sports/mentorship.jpg";

const CEOProfile = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="flex sm:flex-row flex-col gap-10 md:gap-20 justify-center sm:items-start items-center">
                {/* Left Column */}
                <AnimateOnView delay={0.2}>
                    <div className="w-full aspect-[444/513] max-w-[444px] mx-auto lg:mx-0 rounded-3xl overflow-hidden relative group bg-gradient-to-br from-primary/20 to-primary/5">
                        <img
                            src={mentorship}
                            alt="A mentor speaking with an emerging footballer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </AnimateOnView>

                {/* Right Column */}
                <StaggerContainer className="max-w-[507px] w-full sm:text-left text-center">
                    <AnimateOnView blur>
                        <Badge className="mb-[14px]">
                            Our Approach
                        </Badge>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <h2 className="h5 text-foreground mb-4">
                            Put the player and the pathway first
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <div className="space-y-4 md:mb-[30px] mb-6">
                            <p>
                                Opportunity 4 All Talents exists to help emerging African football talent become easier to see, understand, and support.
                            </p>
                            <p>
                                We bring together player stories, football context, credible visibility, and partnership activation without making promises about trials, contracts, or selection.
                            </p>
                            <p>
                                “Talent is everywhere. Opportunity isn’t.”
                            </p>
                        </div>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default CEOProfile;

