import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const FeaturesHero = () => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
      <Container className="relative z-10">
        {/* Main headline */}
        <AnimateOnView blur className="text-center max-w-3xl lg:max-w-none mx-auto" delay={0.2}>
          <h1 className="h1 text-white text-balance lg:text-[54px] xl:text-[68px] lg:whitespace-nowrap">
            Everything talent needs to be seen.
          </h1>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default FeaturesHero;
