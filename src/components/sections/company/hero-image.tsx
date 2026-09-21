import heroPlayer from "@/assets/sports/hero-player.jpg";
import grassrootsMatch from "@/assets/sports/grassroots-match.jpg";
import teamCommunity from "@/assets/sports/team-community.jpg";
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const HeroImage = () => {
    return (
        <section className="relative mt-[-383px] z-20">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-3 h-auto lg:h-[600px]">
                {/* Left Large Image */}
                <AnimateOnView delay={0.2} className="h-full w-full">
                    <div className="w-full h-full min-h-[300px] rounded-3xl overflow-hidden relative group">
                        <img
                            src={heroPlayer}
                            alt="Emerging African footballer"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </AnimateOnView>

                {/* Right Column - Two Stacked Images */}
                <div className="flex md:flex-col sm:flex-row flex-col gap-4 h-full">
                    <AnimateOnView delay={0.3} className="flex-1 w-full">
                        <div className="w-full h-full min-h-[250px] rounded-3xl overflow-hidden relative group">
                            <img
                                src={grassrootsMatch}
                                alt="Grassroots football match"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnView>
                    <AnimateOnView delay={0.4} className="flex-1 w-full">
                        <div className="w-full h-full min-h-[250px] rounded-3xl overflow-hidden relative group">
                            <img
                                src={teamCommunity}
                                alt="Football players and coach together"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnView>
                </div>
            </Container>
        </section>
    );
};

export default HeroImage;
