import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { SquareCheck } from "lucide-react";
import { useState } from "react";
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

const presetAmounts = [50, 100, 250, 500, 1000];
const MIN_AMOUNT = 10;

const formatAmount = (amount: number) => `$${amount.toLocaleString("en-US")}`;

// For individuals and small businesses who want to back talent below the Bronze tier
const CustomAmount = () => {
  const [amount, setAmount] = useState("100");
  const value = Number(amount);
  const isValid = Number.isFinite(value) && value >= MIN_AMOUNT;

  const subject = `Custom contribution: ${formatAmount(value)}`;
  const message = `Hi, I'd like to contribute ${formatAmount(value)} to support emerging African football talent.`;
  const contactLink = `/contact?subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;

  return (
    <AnimateOnView once y={40} delay={0.2}>
      <Card className="bg-white p-0 border border-border">
        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div className="space-y-3">
            <Badge>Custom Amount</Badge>
            <h3 className="h4">Back emerging talent with any amount</h3>
            <p className="text-muted-foreground max-w-[520px]">
              Not ready for a full partnership? Individuals and small businesses can contribute whatever works for them. Every contribution helps a young player get seen.
            </p>
          </div>

          <div className="space-y-4 lg:w-[420px]">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Suggested amounts">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(String(preset))}
                  aria-pressed={value === preset}
                  className={cn(
                    "h-10 rounded-[10px] border px-4 text-sm font-medium transition-colors",
                    value === preset
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-foreground hover:border-primary",
                  )}
                >
                  {formatAmount(preset)}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <label className="relative flex-1">
                <span className="sr-only">Custom amount in US dollars</span>
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={MIN_AMOUNT}
                  step={1}
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="Enter amount"
                  className="h-[46px] bg-white pl-7 text-foreground"
                />
              </label>
              {isValid ? (
                <Button asChild>
                  <Link to={contactLink}>Contribute {formatAmount(value)}</Link>
                </Button>
              ) : (
                <Button type="button" disabled>
                  Contribute
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Minimum {formatAmount(MIN_AMOUNT)}. We'll follow up by email to arrange your contribution.
            </p>
          </div>
        </div>
      </Card>
    </AnimateOnView>
  );
};

const PricingPlans = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="partnership-tiers">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
          <StaggerContainer className="max-w-[683px]">
            <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
              <Badge>
                Partnership Tiers
              </Badge>
            </AnimateOnView>
            <AnimateOnView once blur delay={0.1}>
              <h2 className="h2">
                Choose how your brand<br className="hidden sm:block" /> backs emerging talent
              </h2>
            </AnimateOnView>
          </StaggerContainer>
          <AnimateOnView once delay={0.2} className="max-w-[360px] text-muted-foreground">
            Four annual tiers, from foundational recognition to a fully customised founding partnership, or contribute any amount.
          </AnimateOnView>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <AnimateOnView
              key={plan.name}
              once
              y={40}
              delay={index * 0.1}
            >
              <Card className={`h-full flex flex-col transition-all bg-white p-0 ${plan.highlighted ? "border-primary border-2 shadow-lg" : "border border-border"}`}>
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
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnView>
          ))}
        </div>

        <CustomAmount />
      </Container>
    </section>
  );
};

export default PricingPlans;
