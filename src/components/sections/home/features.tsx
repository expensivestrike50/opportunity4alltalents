import Container from "@/components/container";
import FeatureCard from "@/components/ui/feature-card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

type FeatureItem = {
  id: string;
  type: "feature";
  number: string;
  title: string;
  description: string;
};

const items: FeatureItem[] = [
  {
    id: "fast-reliable",
    type: "feature",
    number: "01",
    title: "Talent Discovery",
    description: "Finding emerging players with potential and purpose."
  },
  {
    id: "flex-integrations",
    type: "feature",
    number: "02",
    title: "Global Visibility",
    description: "Player stories and profiles built for scouts and clubs."
  },
  {
    id: "transparent-pricing",
    type: "feature",
    number: "03",
    title: "Partnership Value",
    description: "Clear activations with stories and measurable value."
  },
  {
    id: "global-reach",
    type: "feature",
    number: "04",
    title: "Global Pathways",
    description: "Connecting grassroots talent to wider football networks."
  },
];

const Features = () => {
  return (
    <section className="md:pt-20 xl:pt-[100px] pt-12 md:pb-20 pb-12" id="features">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section header */}
        <AnimateOnView>
          <h2 className="h4 text-center max-w-[389px] mx-auto mb-4">
            Talent-focused, credible, and connected <span className="text-muted-foreground">football pathways</span>
          </h2>
        </AnimateOnView>

        {/* Features grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {items.map((item, index) => (
            <AnimateOnView
              key={item.id}
              once
              y={40}
              delay={index * 0.1}
              className="relative z-10"
            >
              <FeatureCard number={item.number} title={item.title} description={item.description} />
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;