import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../ui/badge";

const FeaturesHero = () => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding pb-[120px] md:pb-[140px] lg:pb-[160px] xl:pb-[180px]">
      <Container className="relative z-10">
        {/* Trust badges */}
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <AnimateOnView blur>
            <Badge variant="color">Talent is everywhere. Opportunity isn’t.</Badge>
          </AnimateOnView>
          <AnimateOnView blur delay={0.1}>
            <Badge variant="color">
              <span>Built for players, scouts, clubs, and partners.</span>
            </Badge>
          </AnimateOnView>
        </StaggerContainer>

        {/* Main headline */}
        <AnimateOnView blur className="text-center max-w-3xl mx-auto mb-10" delay={0.2}>
          <h1 className="h1 text-white">
            Everything talent needs to be seen.
          </h1>
        </AnimateOnView>

        {/* CTAs */}
        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <Link to="/contact">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link> 
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="link" asChild>
              <Link to="/company">
                Our Mission
              </Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default FeaturesHero;

