import huddleImage from "@/assets/sports/blog-youth-huddle.jpg";
import dribblingImage from "@/assets/sports/blog-cone-dribbling.jpg";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { Eye, Globe2, Handshake, Search, type LucideIcon } from "lucide-react";

type FeatureItem = {
  type: "feature";
  id: string;
  number: string;
  title: string;
  description: string;
  audience: string;
  icon: LucideIcon;
  className: string;
};

type PhotoItem = {
  type: "photo";
  id: string;
  image: string;
  alt: string;
  label: string;
  className: string;
};

// Same 5/3/4 · 3/4/5 rhythm as the "Why It Matters" grid
const items: (FeatureItem | PhotoItem)[] = [
  {
    type: "feature",
    id: "talent-discovery",
    number: "01",
    title: "Talent Discovery",
    description: "Finding emerging players with potential and purpose.",
    audience: "For players",
    icon: Search,
    className: "sm:col-span-6 lg:col-span-5",
  },
  {
    type: "photo",
    id: "photo-huddle",
    image: huddleImage,
    alt: "Young footballers huddled around a ball",
    label: "Grassroots",
    className: "sm:col-span-6 lg:col-span-3",
  },
  {
    type: "feature",
    id: "global-visibility",
    number: "02",
    title: "Global Visibility",
    description: "Player stories and profiles built for scouts and clubs.",
    audience: "For scouts & clubs",
    icon: Eye,
    className: "sm:col-span-6 lg:col-span-4",
  },
  {
    type: "photo",
    id: "photo-dribbling",
    image: dribblingImage,
    alt: "Young player dribbling through training cones",
    label: "Development",
    className: "sm:col-span-6 lg:col-span-3",
  },
  {
    type: "feature",
    id: "partnership-value",
    number: "03",
    title: "Partnership Value",
    description: "Clear activations with stories and measurable value.",
    audience: "For partners",
    icon: Handshake,
    className: "sm:col-span-6 lg:col-span-4",
  },
  {
    type: "feature",
    id: "global-pathways",
    number: "04",
    title: "Global Pathways",
    description: "Connecting grassroots talent to wider football networks.",
    audience: "For communities",
    icon: Globe2,
    className: "sm:col-span-6 lg:col-span-5",
  },
];

const FeatureTile = ({ item }: { item: FeatureItem }) => {
  const Icon = item.icon;
  return (
    <Card className="h-full flex flex-col justify-between items-start gap-10 hover:shadow-lg transition-shadow">
      <CardHeader>
        <span className="text-6xl md:text-7xl font-semibold leading-none tracking-tight text-primary tabular-nums">{item.number}</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-10 max-w-[313px]">
        <p className="text-lg">{item.description}</p>
        <div className="flex items-center gap-4">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-black">{item.title}</h3>
            <p className="text-muted-foreground">{item.audience}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PhotoTile = ({ item }: { item: PhotoItem }) => (
  <Card className="relative h-[240px] sm:h-full min-h-[240px] overflow-hidden p-0 flex items-end group">
    <img
      src={item.image}
      alt={item.alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 testimonial-video-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    <CardContent className="relative z-10 p-6">
      <span className="rounded-[8px] bg-[rgba(0,0,0,0.37)] px-3 py-1.5 text-xs text-white backdrop-blur-[5px]">
        {item.label}
      </span>
    </CardContent>
  </Card>
);

const Features = () => {
  return (
    <section className="md:pt-20 xl:pt-[100px] pt-12 md:pb-20 pb-12" id="features">
      <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
        {/* Section Header */}
        <StaggerContainer className="max-w-[683px]">
          <AnimateOnView once blur className="flex items-center gap-2 md:mb-4 mb-1.5">
            <Badge>
              What We Stand For
            </Badge>
          </AnimateOnView>
          <AnimateOnView once blur delay={0.1}>
            <h2 className="h3">
              Talent-focused, credible, and connected <span className="text-muted-foreground">football pathways.</span>
            </h2>
          </AnimateOnView>
        </StaggerContainer>

        {/* Features Grid */}
        <div className="grid grid-cols-12 gap-4">
          {items.map((item, index) => (
            <AnimateOnView
              key={item.id}
              once
              y={40}
              delay={index * 0.08}
              className={cn("col-span-12", item.className)}
            >
              {item.type === "feature" ? <FeatureTile item={item} /> : <PhotoTile item={item} />}
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
