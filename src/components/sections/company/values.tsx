import global from "@/assets/lottie/o4at-global-pathways.json";
import security from "@/assets/lottie/o4at-verified-security.json";
import payment from "@/assets/lottie/o4at-player-pathways.json";
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import Lottie from "lottie-react";

const Values = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                {/* Section Header */}
                <AnimateOnView className="text-center">
                    <h2 className="h2">
                        Talent, visibility,<br />and pathways without borders
                    </h2>
                </AnimateOnView>

                {/* Values Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

                    <AnimateOnView delay={0.1} className="h-full">
                        <div role="img" aria-label="O4AT verified security: illustrative animation of a protected player profile with enterprise-level data security.">
                            <Lottie animationData={security} loop={true} />
                        </div>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2} className="h-full">
                        <div role="img" aria-label="O4AT player pathways: illustrative animation of scouted players moving through trials to signings.">
                            <Lottie animationData={payment} loop={true} />
                        </div>
                    </AnimateOnView>

                    <AnimateOnView delay={0.3} className="h-full">
                        <div role="img" aria-label="O4AT global pathways: animated illustration of a football connecting talent pathways across regions.">
                            <Lottie animationData={global} loop={true} />
                        </div>
                    </AnimateOnView>

                </StaggerContainer>
            </Container>
        </section>
    );
};

export default Values;
