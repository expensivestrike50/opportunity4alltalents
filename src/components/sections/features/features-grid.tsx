import matchPrep from "@/assets/sports/match-prep.jpg";
import scouting from "@/assets/sports/scouting.jpg";
import actionSquare from "@/assets/sports/action-square.jpg";
import Container from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { publicUrl } from "@/lib/utils";

const chartData = [
  {
    icon: publicUrl("/images/icons/shield-green.svg"),
    title: "Player Visibility Profiles",
    description: "Present emerging players through focused profiles, footage, stories, and performance context.",
    image: matchPrep
  },
  {
    icon: publicUrl("/images/icons/timeline.svg"),
    title: "Scouting & Club Connections",
    description: "Make relevant talent easier for scouts, academies, and clubs to discover and assess.",
    image: scouting
  },
  {
    icon: publicUrl("/images/icons/growth.svg"),
    title: "Partnership Activation",
    description: "Turn sponsorship into authentic stories, football access, and measurable brand value.",
    image: actionSquare
  }
]

const FeaturesGrid = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">

        <AnimateOnView once blur className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2">
            A partnership platform built around talent, visibility, and opportunity.
          </h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            chartData.map((item, index) => (
              <AnimateOnView key={item.title} once y={40} delay={0.2 + index * 0.1}>
                <Card className="h-full border-border border overflow-hidden shadow-sm p-0">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 h-10 object-cover mb-4"
                        loading="lazy" />
                      <h3 className="h5 mb-[14px]">
                        {item.title}
                      </h3>
                      <p className="">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-[379/352] max-w-[379px] w-full h-full object-cover" />
                    </div>

                  </CardContent>
                </Card>
              </AnimateOnView>
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid;

