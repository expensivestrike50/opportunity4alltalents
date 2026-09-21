import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../container";
import { Badge } from "../../ui/badge";

const heroImage = "https://images.unsplash.com/photo-1652665314612-c48e10a01598?q=80&w=1920&auto=format&fit=crop";

const Hero = ({ heroRef }: {
  heroRef?: React.RefObject<HTMLElement> | null
}) => {
  return (
    <section ref={heroRef} className="relative min-h-screen bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
      <img
        src={heroImage}
        alt="A group of young African footballers playing a game with the ball on a dusty pitch"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <Container className="relative z-10">
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-8">
          <AnimateOnView>
            <Badge variant="color">African football talent platform</Badge>
          </AnimateOnView>
        </StaggerContainer>

        <AnimateOnView blur className="text-center max-w-3xl mx-auto lg:mb-10 md:mb-8 mb-4" delay={0.2}>
          <h1 className="h1 text-white">
            Talent is everywhere. Opportunity isn’t.
          </h1>
        </AnimateOnView>

        <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <AnimateOnView delay={0.4}>
            <Button asChild>
              <Link to="/contact">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </AnimateOnView>
          <AnimateOnView delay={0.5}>
            <Button variant="link" className="text-orange-400 hover:text-orange-300" asChild>
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

export default Hero;
