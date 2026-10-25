import mentorship from "@/assets/sports/player-with-ball.jpg";
import teamCommunity from "@/assets/sports/youth-huddle.jpg";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import TestimonialCard from "@/components/ui/testimonial-card";
import VideoTestimonialCard from "@/components/ui/video-testimonial-card";
import { publicUrl } from "@/lib/utils";

// Third-party videos, embedded with credit to their creators
const GRASSROOTS_VIDEO = {
  url: "https://www.youtube.com/watch?v=sfxtJMw-1tA",
  credit: {
    title: "Grassroots Football: What Parents Need to Know",
    channel: "E.ON Energy UK",
    channelUrl: "https://www.youtube.com/@eonenergyuk",
  },
};

const BRIXTON_VIDEO = {
  url: "https://www.youtube.com/watch?v=kdy4MIYtorw",
  credit: {
    title: "Tough Love: a documentary about grassroots football in Brixton, south London",
    channel: "Fat Toad Films",
    channelUrl: "https://www.youtube.com/@fattoadfilms",
  },
};

const Testimonials = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="testimonials">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Header */}
        <StaggerContainer
          className="max-w-[683px]"
        >
          <AnimateOnView
            once
            blur
            className="flex items-center gap-2 md:mb-4 mb-1.5">
            <Badge>
              Why It Matters
            </Badge>
          </AnimateOnView>
          <AnimateOnView
            once
            blur
            delay={0.1}
          >
            <h2 className="h3">
              Built for people who believe football talent deserves a fair chance to be seen.
            </h2>
          </AnimateOnView>
        </StaggerContainer>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-12 gap-4">
          <TestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-5 sm:order-1 lg:order-1"
            companyLogo={publicUrl("/images/homepage/partner-fielda.svg")}
            text="Talent should be judged by ability and potential, not by how far a player lives from the nearest scout."
            avatar={publicUrl("/images/homepage/avatar-1.png")}
            author="For Players"
            designation="Visibility with context"
          />
          <VideoTestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-3 sm:order-2 lg:order-2"
            thumbnail={mentorship}
            videoUrl={GRASSROOTS_VIDEO.url}
            credit={GRASSROOTS_VIDEO.credit}
          />
          <TestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-4 sm:order-4 lg:order-3"
            companyLogo={publicUrl("/images/homepage/partner-scoutline.svg")}
            text="Clear player profiles and credible footage help football decision-makers discover talent more efficiently."
            avatar={publicUrl("/images/homepage/avatar-1.png")}
            author="For Scouts & Clubs"
            designation="Relevant discovery"
          />
          <VideoTestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-3 sm:order-3 lg:order-4"
            thumbnail={teamCommunity}
            videoUrl={BRIXTON_VIDEO.url}
            credit={BRIXTON_VIDEO.credit}
          />
          <TestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-4 sm:order-5 lg:order-5"
            companyLogo={publicUrl("/images/homepage/partner-mark.svg")}
            text="The best sponsorship activations add value to football while giving brands an authentic role in the story."
            avatar={publicUrl("/images/homepage/avatar-1.png")}
            author="For Partners"
            designation="Stories with purpose"
          />
          <TestimonialCard
            className="col-span-12 sm:col-span-6 lg:col-span-5 sm:order-6 lg:order-6"
            companyLogo={publicUrl("/images/homepage/partner-grassfield.svg")}
            text="Equipment, education, video capture, and showcases can strengthen the environments where talent begins."
            avatar={publicUrl("/images/homepage/avatar-1.png")}
            author="For Communities"
            designation="Grassroots access"
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

