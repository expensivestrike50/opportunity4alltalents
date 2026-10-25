import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const CareersHero = () => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
      <Container className="relative z-10">
        <AnimateOnView blur className="text-center max-w-3xl mx-auto lg:mb-10 md:mb-8 mb-6" delay={0.2}>
          <h1 className="h1 text-white">
            Help talent travel further.
          </h1>
        </AnimateOnView>

        <StaggerContainer className="flex flex-col items-center gap-6 text-center">
          <AnimateOnView delay={0.3}>
            <p className="max-w-[560px] text-lg text-white/70">
              Join a team connecting emerging footballers with scouts, clubs, and partners around the world.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <a href="#open-roles">View Open Roles</a>
            </Button>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default CareersHero;
