import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Link } from "react-router-dom";

const PartnershipsCompliance = () => {
  const features = [
    {
      title: "Talent-first Standards",
      description: "We approach every player story with care, consent, and respect for the people behind the potential.",
      highlighted: false,
    },
    {
      title: "Measurable Partner Value",
      description: "Campaigns are shaped around clear deliverables, meaningful audience touchpoints, and useful reporting.",
      highlighted: true,
    },
    {
      title: "Authentic Football Access",
      description: "Partnerships connect with real training, match preparation, player journeys, and grassroots communities.",
      highlighted: false,
    },
  ];

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="security-compliance">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
          <div className="flex-1">
            <AnimateOnView
              once
              blur
              className="flex items-center gap-2 md:mb-4 mb-1.5"
            >
              <Badge>
                Partnerships
              </Badge>
            </AnimateOnView>

            <AnimateOnView
              once
              blur
              delay={0.1}
              className="h2 whitespace-nowrap max-sm:text-[24px]"
            >
              Partnerships & Compliance
            </AnimateOnView>
          </div>

          <AnimateOnView
            once
            delay={0.3}
          >
            <Button asChild>
              <Link to="/contact">
                Become a Partner
              </Link>
            </Button>
          </AnimateOnView>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateOnView
              key={index}
              once
              delay={index * 0.1}
            >

              <Card className="h-full p-[30px] hover:scale-[0.9] hover:bg-revio-light-pink transition-all">
                <CardContent className="flex flex-col justify-between gap-y-[100px] h-full">
                  <h3 className="h5 max-w-[235px]">
                    {feature.title}
                  </h3>
                  <p className="text-card-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnershipsCompliance;

