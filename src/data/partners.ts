import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  GraduationCap,
  Video,
  Users,
  Handshake,
  Trophy,
  Radio,
  Globe,
  Newspaper,
  ShieldCheck,
  HeartHandshake,
  Rocket,
} from "lucide-react";

import grassrootsMatch from "@/assets/sports/grassroots-match.jpg";
import trainingWide from "@/assets/sports/training-wide.jpg";
import scouting from "@/assets/sports/scouting.jpg";
import matchPrep from "@/assets/sports/match-prep.jpg";
import mentorship from "@/assets/sports/mentorship.jpg";
import globalPathway from "@/assets/sports/global-pathway.jpg";
import actionSquare from "@/assets/sports/action-square.jpg";
import playerPortrait from "@/assets/sports/player-portrait.jpg";
import teamCommunity from "@/assets/sports/team-community.jpg";
import heroPlayer from "@/assets/sports/hero-player.jpg";

export interface PartnerSection {
  heading: string;
  paragraphs: string[];
  quote?: string;
}

export interface PartnerCaseStudy {
  slug: string;
  name: string;
  title: string;
  firm: string;
  initial: string;
  color: string;
  issue: string;
  tier: "Bronze" | "Silver" | "Gold" | "Founding";
  headline: string;
  heroImage: string;
  about: string;
  focusArea: string;
  headquarters: string;
  partnerSince: string;
  keyContributions: { icon: LucideIcon; label: string }[];
  challenge: string;
  solution: string;
  results: string[];
  sections: PartnerSection[];
  closingQuote: string;
}

export const partners: PartnerCaseStudy[] = [
  {
    slug: "laura-mitchell",
    name: "Laura Mitchell",
    title: "Venture Partner",
    firm: "Ventures",
    initial: "V",
    color: "bg-orange-500",
    issue: "P 01",
    tier: "Bronze",
    headline: "How Ventures backs grassroots talent before the spotlight finds it",
    heroImage: grassrootsMatch,
    about: "Ventures backs early-stage ideas and, increasingly, the people behind them off the balance sheet too.",
    focusArea: "Grassroots visibility",
    headquarters: "London, UK",
    partnerSince: "2025",
    keyContributions: [
      { icon: Megaphone, label: "Website & social recognition" },
      { icon: Users, label: "2 social features per year" },
      { icon: Newspaper, label: "Quarterly newsletter placement" },
    ],
    challenge:
      "Ventures wanted to support grassroots football but had no reliable way to find, verify, or follow emerging talent worth backing.",
    solution:
      "Opportunity 4 All Talents gave Ventures direct access to verified player profiles and grassroots match footage, turning cold outreach into informed sponsorship decisions.",
    results: [
      "12 grassroots players featured in sponsored profiles",
      "3x faster path from discovery to first sponsorship conversation",
      "Recognition across every featured story, on and off platform",
    ],
    sections: [
      {
        heading: "Backing talent before the spotlight finds it",
        paragraphs: [
          "Ventures had capital to put behind young African footballers, but no dependable way to know who deserved it. Highlight clips circulated without context, and the players most worth backing were often the hardest to find.",
          "Working with O4AT, Ventures got access to verified player profiles built from real match footage, coach input, and development history, rather than reach alone.",
        ],
        quote: "We didn't want to sponsor a logo wall. We wanted to back the player nobody else had found yet.",
      },
      {
        heading: "From recognition to relationship",
        paragraphs: [
          "What started as a Bronze-tier sponsorship placement grew into something closer to a relationship: Laura now reviews new grassroots profiles each quarter and has personally followed three players from first feature to academy trial.",
        ],
      },
    ],
    closingQuote: "Opportunity 4 All Talents made grassroots sponsorship feel personal again.",
  },
  {
    slug: "david-chen",
    name: "David Chen",
    title: "Managing Partner",
    firm: "BrightPath",
    initial: "B",
    color: "bg-violet-500",
    issue: "P 02",
    tier: "Silver",
    headline: "How BrightPath turned a single sponsorship into a recurring content engine",
    heroImage: trainingWide,
    about: "BrightPath invests in consumer brands looking for authentic, long-term audience relationships.",
    focusArea: "Podcast & academy content",
    headquarters: "Singapore",
    partnerSince: "2025",
    keyContributions: [
      { icon: Radio, label: "Podcast sponsorship" },
      { icon: Video, label: "4 sponsored social campaigns" },
      { icon: Megaphone, label: "Standing website banner" },
    ],
    challenge:
      "BrightPath wanted consistent brand visibility tied to football content, not a one-off placement that disappeared after a single campaign.",
    solution:
      "O4AT built a recurring podcast sponsorship and a player and academy content series, co-branded with BrightPath across every episode and post.",
    results: [
      "4 sponsored social campaigns delivered every year",
      "A podcast sponsorship reaching a growing football-education audience",
      "A standing website banner placement across the partnerships page",
    ],
    sections: [
      {
        heading: "A sponsorship that compounds",
        paragraphs: [
          "David's first conversation with O4AT was about a single podcast read. A year later, BrightPath's name opens every academy content episode and appears across four sponsored campaigns a year.",
          "The shift mattered because BrightPath's audience overlaps heavily with football-education viewers: parents, coaches, and young players researching the pathway themselves.",
        ],
        quote: "Now, our name shows up where the actual decisions get made, not just in a highlight reel.",
      },
      {
        heading: "Measuring what a Silver partnership actually returns",
        paragraphs: [
          "BrightPath tracks engagement on every co-branded post and academy feature. Four campaigns in, click-through from football-education content already outperforms BrightPath's other consumer sponsorships.",
        ],
      },
    ],
    closingQuote: "This is the first sponsorship where I can point to exactly who saw our name and why it mattered.",
  },
  {
    slug: "anika-sharma",
    name: "Anika Sharma",
    title: "Founding Partner",
    firm: "NextWave",
    initial: "N",
    color: "bg-red-500",
    issue: "P 03",
    tier: "Founding",
    headline: "Inside the O4AT × NextWave African Talent Development Initiative",
    heroImage: scouting,
    about: "NextWave backs founders and causes it believes will still matter in twenty years.",
    focusArea: "Strategic talent development",
    headquarters: "Lagos, Nigeria",
    partnerSince: "2024",
    keyContributions: [
      { icon: Rocket, label: "Customized strategic partnership" },
      { icon: GraduationCap, label: "Co-branded development initiative" },
      { icon: Globe, label: "Multi-country pathway support" },
    ],
    challenge:
      "NextWave wanted a partnership with real structural impact on African football talent, not a sponsorship that ended at a logo placement.",
    solution:
      "O4AT and NextWave built a named initiative — the O4AT × NextWave African Talent Development Initiative — spanning grassroots access, education content, and pathway support across three countries.",
    results: [
      "A dedicated, co-branded talent-development initiative",
      "Grassroots access support extended into two new regions",
      "A shared measurement plan reviewed with NextWave every quarter",
    ],
    sections: [
      {
        heading: "Founding partnerships need founding-level commitment",
        paragraphs: [
          "As a Founding partner, NextWave didn't want a package. Anika asked for a shared initiative with a name, a scope, and a plan that could outlast a single sponsorship cycle.",
          "The result is a program that funds grassroots access in two additional regions, alongside education content built specifically around the players it supports.",
        ],
        quote: "This isn't a partnership we renew every year out of habit. It's one we built to still matter in five.",
      },
      {
        heading: "What a shared initiative actually requires",
        paragraphs: [
          "Building the initiative meant agreeing on shared goals up front: which regions, which age groups, and what success looks like beyond visibility. That groundwork is what makes the quarterly reviews useful instead of ceremonial.",
        ],
      },
    ],
    closingQuote: "When I think about legacy investing, I think about this initiative first.",
  },
  {
    slug: "robert-hayes",
    name: "Robert Hayes",
    title: "Investment Director",
    firm: "Equity",
    initial: "E",
    color: "bg-neutral-900",
    issue: "P 04",
    tier: "Gold",
    headline: "How Equity became the official category partner for player development",
    heroImage: matchPrep,
    about: "Equity backs category leaders across sport, media, and consumer technology.",
    focusArea: "Official category partnership",
    headquarters: "New York, USA",
    partnerSince: "2025",
    keyContributions: [
      { icon: ShieldCheck, label: "Official category partner" },
      { icon: Newspaper, label: "Monthly content integration" },
      { icon: Radio, label: "Podcast presenting sponsorship" },
    ],
    challenge:
      "Equity wanted to own a category — player development — rather than compete for attention alongside every other sponsor on the page.",
    solution:
      "O4AT gave Equity exclusive category positioning as the official player-development partner, with monthly content integration and presenting rights on the podcast.",
    results: [
      "Exclusive positioning as the official category partner",
      "Monthly content integration across player-development stories",
      "Podcast presenting sponsorship on every development-focused episode",
    ],
    sections: [
      {
        heading: "Owning a category instead of sharing a page",
        paragraphs: [
          "Robert's team had tried logo-wall sponsorships before and found the return hard to defend internally. Category exclusivity changed that calculus: Equity now presents every player-development story O4AT publishes.",
        ],
        quote: "Official category partner isn't a title we take lightly. It has to mean something every month, not just at signing.",
      },
      {
        heading: "Making a Gold partnership visible internally",
        paragraphs: [
          "Monthly content integration gives Equity's own team a steady stream of material to point to — not just an annual case study, but ongoing proof the partnership is working.",
        ],
      },
    ],
    closingQuote: "This is the sponsorship I actually forward to our investment committee.",
  },
  {
    slug: "sofia-alvarez",
    name: "Sofia Alvarez",
    title: "Partner",
    firm: "Velocity",
    initial: "V",
    color: "bg-indigo-500",
    issue: "P 05",
    tier: "Bronze",
    headline: "How Velocity turned a small sponsorship into a talent-scouting habit",
    heroImage: playerPortrait,
    about: "Velocity is an early-stage fund focused on sport, media, and creator technology.",
    focusArea: "Player recognition",
    headquarters: "Madrid, Spain",
    partnerSince: "2025",
    keyContributions: [
      { icon: Megaphone, label: "Website recognition" },
      { icon: Users, label: "Sponsor logo placement" },
      { icon: Newspaper, label: "Quarterly newsletter recognition" },
    ],
    challenge:
      "Velocity wanted a low-commitment way to stay close to emerging football talent without building an in-house scouting function.",
    solution:
      "A Bronze partnership gave Velocity steady visibility across O4AT's player stories, with quarterly newsletter recognition keeping the team close to new talent without extra overhead.",
    results: [
      "Consistent visibility across every published player story",
      "A standing sponsor logo placement site-wide",
      "Quarterly newsletter recognition reaching O4AT's full subscriber base",
    ],
    sections: [
      {
        heading: "A small commitment that paid attention back",
        paragraphs: [
          "Sofia expected a Bronze sponsorship to be mostly passive. Instead, the quarterly newsletter became a habit: Velocity's team now reads every issue for names worth tracking before they reach wider visibility.",
        ],
        quote: "We signed up for logo placement and ended up with an actual scouting signal.",
      },
    ],
    closingQuote: "It's the cheapest, most useful subscription on our sponsorship budget.",
  },
  {
    slug: "elena-petrova",
    name: "Elena Petrova",
    title: "Principal",
    firm: "NorthBrid",
    initial: "N",
    color: "bg-blue-500",
    issue: "P 06",
    tier: "Silver",
    headline: "How NorthBrid built a season-long presence around academy players",
    heroImage: mentorship,
    about: "NorthBrid invests across media, sport, and youth development ventures.",
    focusArea: "Academy content",
    headquarters: "Amsterdam, Netherlands",
    partnerSince: "2025",
    keyContributions: [
      { icon: Video, label: "Player & academy content" },
      { icon: Users, label: "4 sponsored social campaigns" },
      { icon: Handshake, label: "Event activation" },
    ],
    challenge:
      "NorthBrid wanted a presence around academy players that felt seasonal and ongoing, not a single sponsored post that vanished in a week.",
    solution:
      "O4AT built a season-long content plan around academy players for NorthBrid, combining sponsored campaigns, academy features, and an in-person event activation.",
    results: [
      "A full season of player and academy content",
      "4 sponsored social campaigns spaced across the year",
      "One in-person event activation reaching academy families directly",
    ],
    sections: [
      {
        heading: "Designing for a season, not a post",
        paragraphs: [
          "Elena's brief was simple: don't make this feel like a one-off. The resulting plan followed a cohort of academy players across a full season, with campaigns timed to real milestones rather than a fixed sponsorship calendar.",
        ],
        quote: "Families remember who showed up all season, not who bought one ad.",
      },
      {
        heading: "What the event activation actually changed",
        paragraphs: [
          "The in-person activation gave NorthBrid direct contact with the families behind the academy content it had been sponsoring online, closing a loop that pure content sponsorship couldn't.",
        ],
      },
    ],
    closingQuote: "This partnership finally connects our name to the people who are actually there.",
  },
  {
    slug: "oliver-grant",
    name: "Oliver Grant",
    title: "Investment Partner",
    firm: "Futurefund",
    initial: "F",
    color: "bg-purple-500",
    issue: "P 07",
    tier: "Gold",
    headline: "How Futurefund funds a branded talent-development initiative",
    heroImage: globalPathway,
    about: "Futurefund backs long-horizon bets in education, sport, and workforce development.",
    focusArea: "Talent-development initiative",
    headquarters: "Toronto, Canada",
    partnerSince: "2024",
    keyContributions: [
      { icon: GraduationCap, label: "Branded talent-development initiative" },
      { icon: Newspaper, label: "Monthly content integration" },
      { icon: Radio, label: "Podcast presenting sponsorship" },
    ],
    challenge:
      "Futurefund wanted its Gold-tier sponsorship to fund something specific and named, rather than sit alongside every other partner as a generic supporter.",
    solution:
      "O4AT built a branded talent-development initiative under Futurefund's name, with monthly content integration and presenting rights on the podcast to keep the initiative visible year-round.",
    results: [
      "A named, branded talent-development initiative",
      "Monthly content integration across the initiative's players",
      "Podcast presenting sponsorship on every related episode",
    ],
    sections: [
      {
        heading: "Funding something with a name attached",
        paragraphs: [
          "Oliver's team wanted a specific answer when asked what their sponsorship dollars funded. The branded initiative gives Futurefund a concrete, named program to point to, with players and outcomes attached to it directly.",
        ],
        quote: "We can tell our LPs exactly what this money built. That's rare in sponsorship.",
      },
    ],
    closingQuote: "Official category status was good. Having a named initiative is better.",
  },
  {
    slug: "isabelle-laurent",
    name: "Isabelle Laurent",
    title: "Managing Director",
    firm: "BlueOcean",
    initial: "B",
    color: "bg-slate-800",
    issue: "P 08",
    tier: "Founding",
    headline: "How BlueOcean shaped the O4AT × BlueOcean African Talent Development Initiative",
    heroImage: teamCommunity,
    about: "BlueOcean is a growth-stage fund with a long history in sport and media investment.",
    focusArea: "Strategic partnership",
    headquarters: "Paris, France",
    partnerSince: "2024",
    keyContributions: [
      { icon: Rocket, label: "Customized strategic partnership" },
      { icon: Globe, label: "Multi-region talent pathways" },
      { icon: HeartHandshake, label: "Shared measurement plan" },
    ],
    challenge:
      "BlueOcean wanted its Founding partnership to shape O4AT's roadmap, not just fund a slice of it after the fact.",
    solution:
      "Isabelle and O4AT co-designed the O4AT × BlueOcean African Talent Development Initiative together from the outset, agreeing on regions, milestones, and shared reporting before a single dollar moved.",
    results: [
      "A co-designed initiative shaped from the ground up",
      "Talent pathways supported across three regions",
      "A shared measurement plan reviewed jointly each quarter",
    ],
    sections: [
      {
        heading: "Designing the initiative together, not after the fact",
        paragraphs: [
          "Most Founding conversations start with a proposal. Isabelle's started with a working session: which regions mattered most to BlueOcean, and where O4AT already had grassroots relationships worth building on.",
        ],
        quote: "We didn't buy a seat at the table. We helped build the table.",
      },
      {
        heading: "Reviewing progress as partners, not sponsors",
        paragraphs: [
          "The shared measurement plan means BlueOcean sees the same data O4AT does, every quarter, which has made the relationship feel more like a joint venture than a sponsorship.",
        ],
      },
    ],
    closingQuote: "Founding partner isn't a tier to us. It's a description of how involved we actually are.",
  },
  {
    slug: "kenji-tanaka",
    name: "Kenji Tanaka",
    title: "Partner",
    firm: "NovaSphe",
    initial: "N",
    color: "bg-orange-500",
    issue: "P 09",
    tier: "Bronze",
    headline: "How NovaSphe stays close to grassroots football from across the world",
    heroImage: actionSquare,
    about: "NovaSphe invests in consumer and sport ventures across Asia-Pacific.",
    focusArea: "Grassroots recognition",
    headquarters: "Tokyo, Japan",
    partnerSince: "2025",
    keyContributions: [
      { icon: Megaphone, label: "Social media recognition" },
      { icon: Users, label: "2 social features per year" },
      { icon: Newspaper, label: "Quarterly newsletter recognition" },
    ],
    challenge:
      "NovaSphe wanted visibility into African grassroots football without a local presence to build that relationship directly.",
    solution:
      "A Bronze partnership gave NovaSphe recognition across O4AT's social channels and player stories, keeping the fund connected to grassroots talent from across the world.",
    results: [
      "Social media recognition across every featured player story",
      "2 dedicated social features each year",
      "Quarterly newsletter recognition reaching a growing subscriber base",
    ],
    sections: [
      {
        heading: "Staying close without being local",
        paragraphs: [
          "Kenji's team had no presence on the ground in Africa, and no easy way to build one. The sponsorship gave NovaSphe a direct, low-friction way to follow grassroots football without opening a local office.",
        ],
        quote: "We get a closer view of grassroots talent than most funds twice our size.",
      },
    ],
    closingQuote: "This is how a small fund keeps a global view.",
  },
  {
    slug: "michael-oreilly",
    name: "Michael O'Reilly",
    title: "Founding Partner",
    firm: "Peakstone",
    initial: "P",
    color: "bg-neutral-900",
    issue: "P 10",
    tier: "Silver",
    headline: "How Peakstone built a podcast presence around player pathways",
    heroImage: heroPlayer,
    about: "Peakstone backs founders building in sport, media, and community platforms.",
    focusArea: "Podcast sponsorship",
    headquarters: "Dublin, Ireland",
    partnerSince: "2025",
    keyContributions: [
      { icon: Radio, label: "Podcast sponsorship" },
      { icon: Video, label: "4 sponsored social campaigns" },
      { icon: Handshake, label: "Event activation" },
    ],
    challenge:
      "Peakstone wanted a sponsorship that let its team speak directly to football-education audiences, not just appear alongside them.",
    solution:
      "O4AT gave Peakstone a recurring podcast sponsorship, four sponsored campaigns a year, and an event activation that put the team in front of players and families directly.",
    results: [
      "A recurring podcast sponsorship across development-focused episodes",
      "4 sponsored social campaigns delivered each year",
      "One event activation connecting Peakstone with players and families",
    ],
    sections: [
      {
        heading: "From passive sponsor to active voice",
        paragraphs: [
          "Michael wanted Peakstone's name attached to conversations, not just campaigns. The podcast sponsorship gives the team recurring visibility in exactly the format football-education audiences already trust.",
        ],
        quote: "People remember a voice in their headphones longer than a banner on a page.",
      },
    ],
    closingQuote: "This is the first sponsorship where our team actually gets recognized by name.",
  },
  {
    slug: "fatima-khan",
    name: "Fatima Khan",
    title: "Investment Director",
    firm: "Aurora",
    initial: "A",
    color: "bg-amber-700",
    issue: "P 11",
    tier: "Gold",
    headline: "How Aurora became the presenting partner behind player development stories",
    heroImage: scouting,
    about: "Aurora invests in media, sport, and consumer platforms with global reach.",
    focusArea: "Category presenting partner",
    headquarters: "Dubai, UAE",
    partnerSince: "2025",
    keyContributions: [
      { icon: ShieldCheck, label: "Official category partner" },
      { icon: Newspaper, label: "Monthly content integration" },
      { icon: Radio, label: "Podcast presenting sponsorship" },
    ],
    challenge:
      "Aurora wanted to be known specifically for player development, in a market where sponsors are usually remembered for a single campaign, not a category.",
    solution:
      "O4AT positioned Aurora as the official category partner for player development, with monthly content integration and podcast presenting rights that kept the association consistent all year.",
    results: [
      "Official category partner recognition across every development story",
      "Monthly content integration tied to Aurora's brand",
      "Presenting sponsorship across every development-focused podcast episode",
    ],
    sections: [
      {
        heading: "A category, not a campaign",
        paragraphs: [
          "Fatima's team had run one-off campaigns before with limited recall. Category ownership changed that: Aurora's name is now the first association O4AT's audience makes with player development content specifically.",
        ],
        quote: "People don't remember our campaign. They remember that we're the player-development partner.",
      },
    ],
    closingQuote: "This is the sponsorship that finally built brand memory, not just impressions.",
  },
  {
    slug: "mark-jensen",
    name: "Mark Jensen",
    title: "Co-Founder",
    firm: "FinTech",
    initial: "F",
    color: "bg-violet-600",
    issue: "P 12",
    tier: "Founding",
    headline: "How FinTech co-built a Founding initiative around player pathways",
    heroImage: teamCommunity,
    about: "FinTech is a growth investor backing platforms across finance, sport, and media.",
    focusArea: "Founding-tier initiative",
    headquarters: "San Francisco, USA",
    partnerSince: "2024",
    keyContributions: [
      { icon: Rocket, label: "Customized strategic partnership" },
      { icon: Globe, label: "Cross-border pathway support" },
      { icon: HeartHandshake, label: "Shared measurement plan" },
    ],
    challenge:
      "FinTech wanted a Founding partnership built around a specific outcome, not a bundle of benefits inherited from smaller tiers.",
    solution:
      "Mark worked directly with O4AT to define the O4AT × FinTech African Talent Development Initiative, scoped specifically around pathway support that crosses borders as players move between academies and clubs.",
    results: [
      "A named, co-built strategic initiative",
      "Cross-border pathway support for players changing academies or clubs",
      "A shared measurement plan reviewed jointly every quarter",
    ],
    sections: [
      {
        heading: "Solving for the hardest part of the pathway",
        paragraphs: [
          "Mark's team noticed that players lost the most momentum exactly when moving between academies, countries, or clubs. The initiative was built specifically to close that gap, rather than sponsor whichever content performed best that month.",
        ],
        quote: "Every other sponsorship we've done optimized for reach. This one optimized for the one moment that actually breaks careers.",
      },
      {
        heading: "What a shared measurement plan changes",
        paragraphs: [
          "Because FinTech and O4AT review the same pathway data quarterly, the initiative has already been adjusted twice based on where players were actually losing momentum, not where the original plan assumed they would.",
        ],
      },
    ],
    closingQuote: "When I think about impact investing, I think of this initiative first.",
  },
];

export const getPartnerBySlug = (slug: string) => partners.find((partner) => partner.slug === slug);
