import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const PricingHero = () => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding md:pb-[479px] pb-[400px]">
      <Container className="relative z-10">
        {/* Main headline */}
        <AnimateOnView once blur className="text-center max-w-4xl mx-auto mb-12" delay={0.2}>
          <h1 className="h1 text-white">
            Sponsorship and partnership opportunities
          </h1>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default PricingHero;
