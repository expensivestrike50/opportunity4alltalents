import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, MapPin, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Role = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const ROLES: Role[] = [
  {
    id: "talent-scout",
    title: "Regional Talent Scout",
    team: "Scouting",
    location: "Remote · Worldwide",
    type: "Part-time",
    summary: "Identify promising grassroots players in your region and help build credible profiles around them.",
    responsibilities: [
      "Attend local matches, tournaments, and training sessions",
      "Write clear, honest scouting notes with football context",
      "Work with coaches and families to gather footage and consent",
    ],
    requirements: [
      "Strong understanding of the game and youth development",
      "Good judgement and a respectful, player-first approach",
      "Experience in coaching or scouting is a plus",
    ],
  },
  {
    id: "video-producer",
    title: "Football Video Producer",
    team: "Content",
    location: "Remote",
    type: "Full-time",
    summary: "Turn match footage and player interviews into clips and stories that scouts and fans can trust.",
    responsibilities: [
      "Edit match footage into clear player profiles and highlights",
      "Produce short-form stories for social channels",
      "Set filming standards for coaches and partners",
    ],
    requirements: [
      "A portfolio of sports or documentary video work",
      "Confidence with professional editing software",
      "An eye for honest, human storytelling",
    ],
  },
  {
    id: "partnerships-manager",
    title: "Partnerships Manager",
    team: "Partnerships",
    location: "Remote · Europe or Africa time zones",
    type: "Full-time",
    summary: "Build and grow relationships with brands that want to back emerging talent in a meaningful way.",
    responsibilities: [
      "Develop partnerships across our Bronze to Founding tiers",
      "Shape activations that deliver real value for partners and players",
      "Report on results and keep partners closely involved",
    ],
    requirements: [
      "Experience in sponsorship, partnerships, or sports sales",
      "Strong communication and relationship-building skills",
      "Genuine interest in football and community impact",
    ],
  },
  {
    id: "content-writer",
    title: "Football Content Writer",
    team: "Content",
    location: "Remote",
    type: "Freelance",
    summary: "Write player stories, pathway guides, and articles for our blog and newsletter.",
    responsibilities: [
      "Interview players, coaches, and families with care",
      "Write clear, well-researched articles and profiles",
      "Help plan the editorial calendar",
    ],
    requirements: [
      "Published writing samples, ideally about sport",
      "Excellent written English; other languages are a plus",
      "Respect for consent and accuracy",
    ],
  },
  {
    id: "community-coordinator",
    title: "Grassroots Community Coordinator",
    team: "Operations",
    location: "Hybrid · Accra or Lagos",
    type: "Full-time",
    summary: "Be our link with local clubs, schools, and academies, and help run showcases and events.",
    responsibilities: [
      "Build relationships with grassroots clubs and coaches",
      "Coordinate showcases, filming days, and equipment support",
      "Make sure players and families feel informed and respected",
    ],
    requirements: [
      "Experience organising community or sports programmes",
      "Strong local network in grassroots football",
      "Organised, reliable, and calm under pressure",
    ],
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    team: "Content",
    location: "Remote",
    type: "Full-time",
    summary: "Grow our channels and bring player stories and podcast picks to a global football audience.",
    responsibilities: [
      "Plan and publish content across our social channels",
      "Engage with players, fans, clubs, and partners",
      "Track what works and keep improving it",
    ],
    requirements: [
      "Experience running social accounts for a brand or creator",
      "Strong visual sense and concise writing",
      "Up to date with football culture online",
    ],
  },
];

const TEAMS = ["All", ...Array.from(new Set(ROLES.map((role) => role.team)))];

const OpenRoles = () => {
  const [team, setTeam] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const roles = team === "All" ? ROLES : ROLES.filter((role) => role.team === team);

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12 scroll-mt-24" id="open-roles">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between md:gap-8 gap-4">
          <StaggerContainer className="max-w-[683px]">
            <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
              <Badge>
                Open Roles
              </Badge>
            </AnimateOnView>
            <AnimateOnView once blur delay={0.1}>
              <h2 className="h2">
                Find your place<br className="hidden sm:block" /> on the team
              </h2>
            </AnimateOnView>
          </StaggerContainer>

          <AnimateOnView once delay={0.2} className="flex flex-wrap gap-2">
            {TEAMS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setTeam(name)}
                aria-pressed={team === name}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  team === name ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-border",
                )}
              >
                {name}
              </button>
            ))}
          </AnimateOnView>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {roles.map((role) => {
            const isOpen = openId === role.id;
            return (
              <li key={role.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : role.id)}
                  aria-expanded={isOpen}
                  aria-controls={`role-${role.id}`}
                  className="group flex w-full flex-col gap-4 py-6 text-left md:flex-row md:items-center md:gap-8"
                >
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary">{role.team}</span>
                    <h3 className="h5 mt-1 text-foreground">{role.title}</h3>
                    <p className="mt-2 max-w-[560px] text-muted-foreground">{role.summary}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm">
                      <Clock className="h-3.5 w-3.5" />
                      {role.type}
                    </span>
                    <span
                      className={cn(
                        "ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:text-primary",
                        isOpen && "rotate-45 border-primary bg-primary text-primary-foreground group-hover:text-primary-foreground",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`role-${role.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 rounded-3xl bg-card p-6 md:grid-cols-2 md:p-8 mb-6">
                        <div>
                          <h4 className="mb-3 font-medium text-foreground">What you will do</h4>
                          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                            {role.responsibilities.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-3 font-medium text-foreground">What you will bring</h4>
                          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                            {role.requirements.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                        <div className="md:col-span-2">
                          <Button asChild>
                            <Link to={`/contact?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>
                              Apply for this role
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Open application */}
        <AnimateOnView
          once
          y={20}
          className="flex flex-col gap-6 rounded-3xl bg-card p-6 md:p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-lg text-foreground">
            Don’t see the right role? We would still love to hear from you.
          </p>
          <Button asChild className="w-fit flex-shrink-0">
            <Link to={`/contact?subject=${encodeURIComponent("Open application")}`}>
              Send an Open Application
            </Link>
          </Button>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default OpenRoles;
