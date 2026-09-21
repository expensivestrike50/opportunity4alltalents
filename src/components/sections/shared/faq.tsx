import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Opportunity 4 All Talents?",
    answer: "Opportunity 4 All Talents is a partnership platform connecting emerging African football talent with global visibility, scouts, clubs, brands, and opportunity.",
  },
  {
    question: "How can a player be considered?",
    answer: "Players, coaches, academies, and community contacts can introduce talent through our contact page. Share accurate player details, position, age group, location, and available footage so the story can be reviewed responsibly.",
  },
  {
    question: "Do you guarantee trials or club contracts?",
    answer: "No. We create visibility and relevant connections, but selection decisions always remain with scouts, academies, and clubs. We do not promise contracts or outcomes.",
  },
  {
    question: "How can scouts and clubs engage?",
    answer: "Scouts, academies, and clubs can contact us with the player profiles, positions, age groups, or locations they want to explore. We can then share relevant stories and available footage.",
  },
  {
    question: "What can a brand sponsor?",
    answer: "Brands can activate through the Hidden Gem Series, Product × Player, Player of the Month, Grassroots Access, Football Education, or Global Pathways. Each concept is shaped around the partner’s goals.",
  },
  {
    question: "How do partnerships create measurable value?",
    answer: "We agree on the story, deliverables, channels, and useful success measures before activation. Reporting can then reflect the content and engagement outcomes relevant to that partnership.",
  },
  {
    question: "Can partners support grassroots football directly?",
    answer: "Yes. Grassroots Access can support equipment, video capture, scouting showcases, or development events, with the activation designed around genuine local needs.",
  },
  {
    question: "Where do you work?",
    answer: "Our focus is emerging African football talent and the global network around it. The right pathway may involve local communities, academies, scouts, clubs, media, and international partners.",
  },
];

const FAQ = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-[507px] md:sticky static top-24 self-start">
            <AnimateOnView once blur>
              <Badge className="md:mb-4 mb-1.5">FAQs</Badge>
              <h2 className="h2 md:mb-6 mb-3">Frequently asked questions</h2>
              <Button asChild>
                <Link to="/contact">
                  Book a free call <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimateOnView>
          </div>
          <div className="md:max-w-[612px]">
            <AnimateOnView once y={40}>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl p-5">
                    <AccordionTrigger className="text-left py-0">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 data-[state=closed]:pt-0 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

