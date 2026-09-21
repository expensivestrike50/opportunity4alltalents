import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight, SquareCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanDetailsProps {
  planName: string;
  price: string;
  description: string;
  features: string[];
}

const PlanDetails = ({ planName, price, description, features }: PlanDetailsProps) => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container className="flex flex-col md:flex-row justify-between gap-12">
        {/* Pricing Card */}
        <div className="max-w-[402px] w-full md:sticky static top-24 self-start">
          <AnimateOnView once y={40} className="space-y-4">
            <Card className="p-0">
              <CardHeader className="space-y-4 px-6 pt-6 pb-[30px]">
                <CardTitle className="h4">{planName}</CardTitle>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-1">
                    <span className="h4 text-foreground">
                      {price.split('/')[0]}
                    </span>
                    <span className="text-sm text-foreground">
                      /{price.split('/')[1]}
                    </span>
                  </div>
                  <CardDescription className="">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="white"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimateOnView>
        </div>

        {/* Plan Details */}
        <div className="max-w-[612px] w-full space-y-8">
          <AnimateOnView once blur>
            <div>
              <h2 className="h4 mb-4">About the {planName} tier</h2>
              <p className="text-lg text-foreground leading-relaxed">
                The {planName} partnership gives brands a clear way to support emerging African football talent through
                credible stories, useful visibility, and activation concepts shaped around shared goals.
              </p>
            </div>
          </AnimateOnView>

          {/* Features */}
          <AnimateOnView once blur delay={0.1}>
            <div>
              <h2 className="h4 mb-4">Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <SquareCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnView>

          {/* Why choose the plan */}
          <AnimateOnView once blur delay={0.2}>
            <div>
              <h2 className="h4 mb-4">Why choose this tier?</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Choose this partnership when you want authentic football access rather than a logo-only
                sponsorship. We agree on the story, audience, deliverables, and useful measures together.
              </p>
            </div>
          </AnimateOnView>

          {/* Benefits of the plan */}
          <AnimateOnView once blur delay={0.3}>
            <div>
              <h2 className="h4 mb-4">Benefits of the plan</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Your brand becomes part of a real pathway: helping players be seen, supporting grassroots
                access, or giving players and parents better preparation for the journey ahead.
              </p>
            </div>
          </AnimateOnView>
        </div>
      </Container>
    </section>
  );
};

export default PlanDetails;
