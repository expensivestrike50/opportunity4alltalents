import trainingWide from "@/assets/sports/team-training.jpg";
const stadiumCrowd = "https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?q=80&w=1200&auto=format&fit=crop";
import hiddenGemBoy from "@/assets/sports/hidden-gem-boy.jpg";
import hiddenGemGirl from "@/assets/sports/hidden-gem-girl.jpg";
import youthHuddle from "@/assets/sports/youth-huddle.jpg";
import settlements from "@/assets/lottie/settled.json";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import Lottie from "lottie-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const hiddenGemSlides = [
  { image: youthHuddle, alt: "Young footballers smiling together around a ball" },
  { image: hiddenGemBoy, alt: "Young football player dribbling through a training drill" },
  { image: hiddenGemGirl, alt: "Smiling young female football player" },
  { image: trainingWide, alt: "Emerging African footballers training together" },
];

const CoreFeatures = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % hiddenGemSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="core-features">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
          <div className="flex-1 max-w-[683px]">
            <AnimateOnView
              once
              blur
              className="md:mb-4 mb-1.5"
            >
              <Badge>
                What We Do
              </Badge>
            </AnimateOnView>

            <AnimateOnView
              once
              blur
              delay={0.2}
              className="h2 md:mb-6 mb-3"
            >
              Turn football potential into visible opportunity.
            </AnimateOnView>

            <AnimateOnView
              once
              delay={0.3}
              className="text-lg"
            >
              From player discovery to storytelling and introductions, we make talent easier to see and support.
            </AnimateOnView>
          </div>
        </div>

        <div>
          {/* Big Card */}
          <AnimateOnView
            once
            y={40}
            delay={0.5}
            className="rounded-2xl md:rounded-4xl p-6 md:p-12 lg:p-16 mb-4 overflow-hidden md:min-h-[597px] relative grid bg-black"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.img
                key={activeSlide}
                src={hiddenGemSlides[activeSlide].image}
                alt={hiddenGemSlides[activeSlide].alt}
                className="absolute inset-0 h-full w-full object-cover opacity-50"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" aria-hidden="true" />
            <div className="relative z-10 flex min-h-[469px] flex-col justify-between items-start h-full max-w-[480px]">
              <StaggerContainer>
                <AnimateOnView
                  once
                  blur
                  delay={0.3}
                >
                  <h4 className="h4 text-white mb-3 max-w-[400px]">
                    Hidden Gem Series
                  </h4>
                </AnimateOnView>
                <AnimateOnView
                  once
                  delay={0.4}
                  blur
                >
                  <p className="text-muted mb-8 leading-relaxed">
                    A recurring video and social series profiling emerging players, presented by your brand.
                  </p>
                </AnimateOnView>
              </StaggerContainer>
              <AnimateOnView
                once
                delay={0.5}
              >
                <Button asChild>
                  <Link to="/download">
                    Explore Partnerships
                      </Link>
                </Button>
              </AnimateOnView>
            </div>
          </AnimateOnView>

          {/* Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

            <AnimateOnView
              once
              y={40}
              delay={0.6}
              className="lg:col-span-7 col-span-1"
            >
              <Card className="h-full min-h-[380px] p-0 overflow-hidden relative">
                <img
                  src={stadiumCrowd}
                  alt="Packed football stadium at sunset"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden="true" />
                <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 max-w-[420px]">
                  <h3 className="h5 mb-2 text-white">
                    Grassroots Access
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Support equipment, video capture, scouting showcases, and development events where talent begins.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnView>

            <AnimateOnView
              once
              y={40}
              delay={0.7}
              className="lg:col-span-5 col-span-1"
            >
              <Card className="h-full p-0">
                <CardHeader className="flex justify-center items-center">
                  <div aria-hidden="true">
                    <Lottie
                      animationData={settlements}
                      loop={true}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 pb-10 px-6 max-w-[420px]">
                  <h3 className="h5 mb-2">
                    Global Pathways
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Follow and support talent from grassroots football toward academies, clubs, and professional environments.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreFeatures;

