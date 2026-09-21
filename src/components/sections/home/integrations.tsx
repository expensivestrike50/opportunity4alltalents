import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import teamCommunity from "@/assets/sports/team-community.jpg";

const Integrations = () => {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden md:min-h-[600px]" id="integrations">
      <img
        src={teamCommunity}
        alt="Football players and their coach celebrating together at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <Container className="relative z-10">
        <AnimateOnView>
          <h2 className="h2 text-center max-w-[644px] mx-auto mb-4 text-white">
            Connect talent with <span className="text-white/70">scouts, clubs, brands, and opportunity</span>
          </h2>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default Integrations;
