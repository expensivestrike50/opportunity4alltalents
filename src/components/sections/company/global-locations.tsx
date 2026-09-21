import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const GlobalLocations = () => {
    const locations = [
        {
            title: "Players & Families",
            location: "Clearer pathways",
            description: "Practical visibility, preparation, and football education for the people closest to the journey."
        },
        {
            title: "Scouts & Clubs",
            location: "Relevant discovery",
            description: "Player stories and useful context designed to make early talent identification more informed."
        },
        {
            title: "Brands & Partners",
            location: "Authentic activation",
            description: "Football-led stories and measurable deliverables that connect sponsorship with real value."
        },
        {
            title: "Grassroots Football",
            location: "Stronger foundations",
            description: "Support for equipment, video capture, showcases, education, and development environments."
        }
    ];

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                <StaggerContainer className="text-center max-w-3xl mx-auto">
                    <AnimateOnView blur>
                        <Badge>
                            One Football Network
                        </Badge>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <h2 className="h2 text-foreground mb-6">
                            Connecting the people who create opportunity
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <p className="max-w-[560px] mx-auto">
                            Sustainable pathways take a network. Our platform is designed to help every participant contribute with greater clarity and purpose.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Network Cards Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-[822px] w-full mx-auto">
                    {locations.map((location, index) => (
                        <AnimateOnView key={index} delay={0.1 + index * 0.1} className="h-full">
                            <Card className="h-full rounded-3xl">
                                <CardHeader className="mb-6">
                                    <h3 className="h5 text-foreground mb-2">
                                        {location.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-lg font-medium mb-3">
                                        {location.location}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {location.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
};

export default GlobalLocations;

