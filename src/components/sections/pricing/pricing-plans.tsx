import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight, SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Bronze",
    price: "$5,000/yr",
    description: "Foundational recognition and social support for brands starting a partnership with African football talent.",
    features: [
      "Website recognition",
      "Social media recognition",
      "Sponsor logo",
      "2 social features",
      "Quarterly newsletter recognition",
    ],
    buttonVariant: "white",
    buttonLink: "/pricing/bronze",
  },
  {
    name: "Silver",
    price: "$15,000/yr",
    description: "Deeper activation with podcast sponsorship, sponsored campaigns, and player and academy content.",
    features: [
      "All Bronze benefits",
      "Podcast sponsorship",
      "4 sponsored social campaigns",
      "Website banner",
      "Player/academy content",
      "Event activation",
    ],
    buttonVariant: "default",
    highlighted: true,
    buttonLink: "/pricing/silver",
  },
  {
    name: "Gold",
    price: "$30,000/yr",
    description: "Official category partnership with monthly content integration and a branded talent-development initiative.",
    features: [
      "All Silver benefits",
      "Official category partner",
      "Monthly content integration",
      "Podcast presenting sponsorship",
      "Branded talent-development initiative",
    ],
    buttonVariant: "white",
    buttonLink: "/pricing/gold",
  },
  {
    name: "Founding",
    price: "$50,000+/yr",
    description: "A customized strategic partnership built around your brand, e.g. “O4AT × [Brand] African Talent Development Initiative.”",
    features: [
      "Customized strategic partnership",
      "e.g. “O4AT × [Brand] African Talent Development Initiative”",
    ],
    buttonVariant: "white",
    buttonLink: "/pricing/founding",
  },
];

const PricingPlans = () => {
  return (
    <section className="relative mt-[-383px] z-20 md:pb-20 xl:pb-32 pb-12">
      <Container>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <AnimateOnView
              key={plan.name}
              once
              y={40}
              delay={index * 0.1}
            >
              <Card className={`h-full flex flex-col transition-all bg-white p-0 ${plan.highlighted ? "border-primary border-2 shadow-lg" : "md:border-0 border border-border"}`}>
                <CardHeader className="space-y-4 px-6 pt-6 pb-[30px]">
                  <CardTitle className="h4">{plan.name}</CardTitle>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-1">
                      <span className="h4 text-foreground">
                        {plan.price.split('/')[0]}
                      </span>
                      <span className="text-sm text-foreground">
                        /{plan.price.split('/')[1]}
                      </span>
                    </div>
                    <CardDescription className="">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="bg-card p-6 flex-1 flex flex-col justify-between md:rounded-sm rounded">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Features</h3>
                    <ul className="space-y-[14px] flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2.5">
                          <SquareCheck className="w-5 h-5 mt-1 text-primary shrink-0" />
                          <span className="md:text-lg text-base text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant={plan.buttonVariant as "default" | "white"}
                    className="w-full"
                    asChild
                  >
                    <Link to={plan.buttonLink}>
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;
