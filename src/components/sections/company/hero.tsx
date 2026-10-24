import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Link } from "react-router-dom";

const CompanyHero = () => {
    return (
        <section className="relative bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
            <Container className="relative z-10">
                <AnimateOnView blur className="text-center max-w-3xl mx-auto lg:mb-10 md:mb-8 mb-4" delay={0.2}>
                    <h1 className="h1 text-white">
                        Opportunity should travel as far as talent can.
                    </h1>
                </AnimateOnView>

                <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <AnimateOnView delay={0.4}>
                        <Button asChild className="bg-primary text-white hover:bg-primary/90">
                            <Link to="/contact">
                                Partner With Us
                            </Link>
                        </Button>
                    </AnimateOnView>
                    <AnimateOnView delay={0.5}>
                        <Button asChild className="bg-primary text-white hover:bg-primary/90">
                            <Link to="/features">
                                Explore Our Work
                            </Link>
                        </Button>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default CompanyHero;
