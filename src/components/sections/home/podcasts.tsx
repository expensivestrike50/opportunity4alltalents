import featuredImage from "@/assets/sports/ad-nike.jpg";
import mockupImage from "@/assets/sports/podcast-mockup.jpg";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Headphones, Play } from "lucide-react";
import { useState } from "react";

type Podcast = {
  id: string;
  title: string;
  host: string;
  description: string;
  tag: string;
};

// Spotify show IDs, verified against Spotify's oEmbed endpoint.
const PODCASTS: Podcast[] = [
  {
    id: "0J5jS7sEEgsYRLB0gFEk7s",
    title: "African Five-a-side",
    host: "Maher Mezahi",
    description: "The African continent told through football: its leagues, clubs, and the players shaping the game.",
    tag: "African football",
  },
  {
    id: "2fDn3EgvJZ5J1k5rrBwrlZ",
    title: "The Rest Is Football",
    host: "Goalhanger",
    description: "Gary Lineker, Alan Shearer and Micah Richards on football's biggest stories, three times a week.",
    tag: "Global",
  },
  {
    id: "2YiLKNHIBty5xVbBKLyjkD",
    title: "Men In Blazers",
    host: "Rog & Rory Smith",
    description: "The Premier League and everywhere the love of the beautiful game burns bright.",
    tag: "World game",
  },
  {
    id: "5DtlPY1ctacnQeuZoYLzx5",
    title: "The Game",
    host: "The Times",
    description: "Previews, tactics, transfers and international tournaments with Tom Clarke and Gregor Robertson.",
    tag: "Analysis",
  },
  {
    id: "3krKDjUjG1iYG9kHxcOPaN",
    title: "The Black Stars Podcast",
    host: "Footballco",
    description: "A documentary series on the history of Ghana's national team.",
    tag: "Documentary",
  },
  {
    id: "1F3kM4M8hh8l0s4bXk0KOe",
    title: "Nigeria Football Weekly",
    host: "Olu Oke",
    description: "Nigerian players in Europe and the Super Eagles, every week.",
    tag: "Nigeria",
  },
  {
    id: "6w8qWe0kjgHEHSWDSDGoLW",
    title: "Football Weekly",
    host: "The Guardian",
    description: "Max Rushden, Barry Glendenning and guests on the Premier League and beyond.",
    tag: "Weekly",
  },
  {
    id: "29LjKwNI41bD09xNAMkQes",
    title: "Stick to Football",
    host: "The Overlap",
    description: "Gary Neville, Jamie Carragher, Jill Scott, Ian Wright and Roy Keane talk football.",
    tag: "Pundits",
  },
  {
    id: "7j6UfGCD5EtkdhOZpD55jS",
    title: "The Sweeper",
    host: "World football",
    description: "Football beyond the big leagues, from every corner of the world.",
    tag: "World",
  },
  {
    id: "01ggY7WB11ooGvclHVXHki",
    title: "Football Inc",
    host: "Daily show",
    description: "Transfer news and the money side of the game, every day.",
    tag: "Transfers",
  },
];

const [featured, ...rest] = PODCASTS;
const listed = rest.slice(0, 3);
const pills = rest.slice(3);

// Circle colours borrowed from the player bubbles in the football mockup
const PILL_COLORS = ["bg-[#b4e66b]", "bg-[#bfe9f7]", "bg-[#f6d64a]", "bg-[#f7c6d4]", "bg-[#b4e66b]", "bg-[#bfe9f7]"];

const spotifyUrl = (id: string) => `https://open.spotify.com/show/${id}`;

const Waveform = ({ className, bars = 18 }: { className?: string; bars?: number }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div className={cn("flex h-8 items-center gap-[3px]", className)} aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => {
        const base = 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7));
        return (
          <motion.span
            key={i}
            className="h-full w-[3px] origin-center rounded-full bg-current"
            initial={{ scaleY: base }}
            animate={reduceMotion ? undefined : { scaleY: [base, 0.25 + (1 - base) * 0.75, base] }}
            transition={{ duration: 1.1 + (i % 5) * 0.15, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
};

const ListenButton = ({ onClick, className, label = "Listen" }: { onClick: () => void; className?: string; label?: string }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-current px-4 py-1.5 text-sm font-medium transition-colors",
      className,
    )}
  >
    <Play className="h-3.5 w-3.5 fill-current" />
    {label}
  </button>
);

const Podcasts = () => {
  const [active, setActive] = useState<Podcast | null>(null);

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12" id="podcasts">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Header */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <StaggerContainer className="max-w-[567px] md:max-w-none">
            <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
              <Badge>
                Podcasts
              </Badge>
            </AnimateOnView>
            <AnimateOnView once blur delay={0.1}>
              <h2 className="h2">
                Conversations on players, pathways,<br className="hidden sm:block" /> and the global game
              </h2>
            </AnimateOnView>
            <AnimateOnView once delay={0.2} className="md:mt-8 mt-6">
              <a href="https://open.spotify.com/search/football/podcasts" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <Headphones className="h-4 w-4" />
                  Listen on Spotify
                </Button>
              </a>
            </AnimateOnView>
          </StaggerContainer>

          <AnimateOnView once y={40} delay={0.2}>
            <img
              src={mockupImage}
              alt="Forest green football website design with players and an audio waveform"
              className="w-full rounded-2xl md:rounded-4xl object-cover shadow-[0_20px_60px_rgba(15,36,24,0.25)]"
              width="1400"
              height="1050"
              loading="lazy"
            />
          </AnimateOnView>
        </div>

        <div className="relative overflow-hidden rounded-2xl md:rounded-4xl bg-[#0f2418] p-5 md:p-10 xl:p-14 text-white">
          {/* Concentric rings, as in the mockup */}
          <svg
            className="pointer-events-none absolute -right-40 -top-40 h-[720px] w-[720px] text-white/[0.06]"
            viewBox="0 0 720 720"
            fill="none"
            aria-hidden="true"
          >
            {Array.from({ length: 9 }, (_, i) => (
              <circle key={i} cx="360" cy="360" r={120 + i * 28} stroke="currentColor" strokeWidth="1.5" />
            ))}
          </svg>

          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Featured podcast */}
              <AnimateOnView
                once
                y={40}
                className="col-span-12 lg:col-span-5 relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl bg-[#173323] p-6 md:p-8"
              >
                <div className="absolute -bottom-10 -right-16 h-[340px] w-[260px] rotate-[18deg] rounded-full bg-[#b4e66b]" aria-hidden="true" />
                <img
                  src={featuredImage}
                  alt="Young footballer in front of a goal"
                  className="absolute bottom-0 right-4 h-[220px] w-[150px] sm:h-[300px] sm:w-[200px] rounded-t-full object-cover object-top"
                  loading="lazy"
                />

                <div className="relative max-w-[55%] sm:max-w-[240px]">
                  <span className="text-xs uppercase tracking-wider text-[#b4e66b]">Featured · {featured.tag}</span>
                  <h3 className="h5 mt-2 text-white">{featured.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{featured.host}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{featured.description}</p>
                </div>

                {/* Waveform pill */}
                <button
                  type="button"
                  onClick={() => setActive(featured)}
                  className="relative mt-8 flex w-fit items-center gap-3 rounded-full bg-[#b4e66b] py-2 pl-2 pr-5 text-[#0f2418] shadow-lg transition-transform hover:scale-[1.03]"
                  aria-label={`Listen to ${featured.title}`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2418] text-[#b4e66b]">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                  <Waveform />
                  <span className="text-sm font-semibold">Listen now</span>
                </button>
              </AnimateOnView>

              {/* Top picks list */}
              <AnimateOnView
                once
                y={40}
                delay={0.1}
                className="col-span-12 lg:col-span-7 rounded-2xl bg-white/[0.04] p-2 ring-1 ring-white/10"
              >
                <ul className="divide-y divide-white/10">
                  {listed.map((podcast, i) => (
                    <li key={podcast.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center md:p-6">
                      <span className="text-3xl font-semibold text-[#b4e66b]/80 tabular-nums">0{i + 2}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-medium text-white">{podcast.title}</h3>
                          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{podcast.tag}</span>
                        </div>
                        <p className="mt-1 text-sm text-white/60">{podcast.host}</p>
                        <p className="mt-2 text-sm text-white/80">{podcast.description}</p>
                      </div>
                      <ListenButton
                        onClick={() => setActive(podcast)}
                        className="self-start text-[#b4e66b] hover:bg-[#b4e66b] hover:text-[#0f2418] sm:self-center"
                      />
                    </li>
                  ))}
                </ul>
              </AnimateOnView>

              {/* Pill cards */}
              {pills.map((podcast, i) => (
                <AnimateOnView
                  once
                  y={30}
                  delay={0.1 + (i % 3) * 0.08}
                  key={podcast.id}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 flex items-center gap-4 rounded-full bg-white py-3 pl-3 pr-5 text-[#0f2418]"
                >
                  <div className={cn("flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full", PILL_COLORS[i])}>
                    <Waveform bars={5} className="h-6 text-[#0f2418]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{podcast.title}</h3>
                    <p className="truncate text-xs text-[#0f2418]/60">{podcast.host} · {podcast.tag}</p>
                    <ListenButton
                      onClick={() => setActive(podcast)}
                      className="mt-1.5 border-transparent px-0 py-0 hover:text-[#2f6b1f]"
                    />
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-xl overflow-hidden border-none bg-[#0f2418] p-0 text-white">
          {active && (
            <>
              <div className="px-6 pt-6">
                <DialogTitle className="text-xl text-white">{active.title}</DialogTitle>
                <DialogDescription className="text-white/60">{active.host}</DialogDescription>
              </div>
              <iframe
                src={`https://open.spotify.com/embed/show/${active.id}?theme=0`}
                title={`${active.title} on Spotify`}
                className="h-[352px] w-full"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              <a
                href={spotifyUrl(active.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 pb-6 text-sm text-[#b4e66b] hover:underline"
              >
                Open in Spotify
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Podcasts;
