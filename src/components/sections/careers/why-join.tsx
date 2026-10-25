import teamImage from "@/assets/sports/blog-world-college.jpg";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const reasons = [
  {
    number: "01",
    title: "Work with purpose",
    description: "Everything we do helps a player be seen by the people who can move their career forward.",
  },
  {
    number: "02",
    title: "A global team",
    description: "Collaborate with people across countries and time zones who share a love of the game.",
  },
  {
    number: "03",
    title: "Learn the whole pathway",
    description: "Get close to scouting, storytelling, partnerships, and player development in one place.",
  },
  {
    number: "04",
    title: "Grow with us",
    description: "We are early, so your ideas shape how the platform and the team develop.",
  },
];

const WhyJoin = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        <StaggerContainer className="max-w-[683px]">
          <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
            <Badge>
              Why Join Us
            </Badge>
          </AnimateOnView>
          <AnimateOnView once blur delay={0.1}>
            <h2 className="h2">
              Build something the game <span className="text-muted-foreground">has been missing.</span>
            </h2>
          </AnimateOnView>
        </StaggerContainer>

        <div className="grid grid-cols-12 gap-4">
          <AnimateOnView once y={40} className="col-span-12 lg:col-span-5 relative min-h-[320px] overflow-hidden rounded-2xl md:rounded-4xl">
            <img
              src={teamImage}
              alt="Young footballers competing in a match"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </AnimateOnView>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <AnimateOnView key={reason.number} once y={30} delay={0.1 + index * 0.08} className="h-full">
                <Card className="h-full rounded-3xl flex flex-col justify-between gap-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <span className="text-5xl font-semibold leading-none tracking-tight text-primary tabular-nums">
                      {reason.number}
                    </span>
                  </CardContent>
                  <CardContent className="p-0">
                    <h3 className="h5 text-foreground mb-2">{reason.title}</h3>
                    <p className="card-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyJoin;
