import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const BlogHero = () => {
  return (
    <section className="relative bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px]">
      <Container className="relative z-10">
        {/* Main headline */}
        <AnimateOnView blur className="text-center max-w-3xl mx-auto" delay={0.2}>
          <h1 className="h1 text-white">
            Football talent, pathways, and partnership stories.
          </h1>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default BlogHero;
