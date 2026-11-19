import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { publicUrl } from "@/lib/utils";

// Official UN SDG icons, used under the UN's guidelines for non-UN entities
// (informational use only; no UN emblem, no implied endorsement).
const goals: { number: number; icon: string; title: string; description: string }[] = [
    {
        number: 5,
        icon: "/images/sdg/sdg-05.png",
        title: "Gender Equality",
        description:
            "Girls and women deserve the same scouting, visibility, and pathways as boys and men. We work to make their talent seen.",
    },
    {
        number: 10,
        icon: "/images/sdg/sdg-10.png",
        title: "Reduced Inequalities",
        description:
            "Talent should be judged by ability, not by how far a player lives from the nearest scout. We connect grassroots players across Africa to global opportunity.",
    },
    {
        number: 8,
        icon: "/images/sdg/sdg-08.png",
        title: "Decent Work and Economic Growth",
        description:
            "Football creates careers on and off the pitch. We help young people turn potential into pathways that can move careers forward.",
    },
    {
        number: 17,
        icon: "/images/sdg/sdg-17.png",
        title: "Partnerships for the Goals",
        description:
            "Clubs, scouts, brands, and communities achieve more together. Our partnerships put resources where talent begins.",
    },
];

const SdgGoals = () => {
    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                <StaggerContainer>
                    <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
                        <Badge>Our Impact</Badge>
                    </AnimateOnView>
                    <AnimateOnView once blur delay={0.1}>
                        <h2 className="h2 text-balance lg:whitespace-nowrap lg:text-[min(56px,calc((100vw-80px)/22.5))]">
                            Supporting the UN Sustainable Development Goals
                        </h2>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Subgrid keeps icons, titles and descriptions aligned across cards,
                    even when a title wraps onto more lines than its neighbours. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-0">
                    {goals.map((goal, index) => (
                        <AnimateOnView key={goal.number} once y={30} delay={0.2 + index * 0.08} className="row-span-3 grid grid-rows-subgrid gap-y-0 mb-4">
                            <Card className="row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl hover:shadow-lg transition-shadow">
                                <img
                                    src={publicUrl(goal.icon)}
                                    alt={`UN Sustainable Development Goal ${goal.number}: ${goal.title}`}
                                    width={400}
                                    height={400}
                                    loading="lazy"
                                    className="w-28 h-28 md:w-32 md:h-32 rounded-lg mb-6"
                                />
                                <h3 className="h5 text-foreground mb-2">
                                    SDG {goal.number}: {goal.title}
                                </h3>
                                <p className="card-foreground">{goal.description}</p>
                            </Card>
                        </AnimateOnView>
                    ))}
                </div>

                <p className="text-sm text-muted-foreground">
                    Learn more about the goals at{" "}
                    <a
                        href="https://sdgs.un.org/goals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        sdgs.un.org
                    </a>
                    . The content of this website has not been approved by the United Nations and does not
                    reflect the views of the United Nations or its officials or Member States.
                </p>
            </Container>
        </section>
    );
};

export default SdgGoals;
