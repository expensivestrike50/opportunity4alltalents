import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { people, positions, type Position } from "@/data/people";
import { appConfig } from "@/utils/app-config";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const People = () => {
  const [query, setQuery] = useState("");
  const [activePosition, setActivePosition] = useState<Position | "All">("All");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const availableLetters = useMemo(
    () => new Set(people.map((person) => person.name.charAt(0).toUpperCase())),
    []
  );

  const filteredPeople = useMemo(() => {
    return people.filter((person) => {
      const matchesQuery = person.name.toLowerCase().includes(query.toLowerCase());
      const matchesPosition = activePosition === "All" || person.position === activePosition;
      const matchesLetter = !activeLetter || person.name.toUpperCase().startsWith(activeLetter);
      return matchesQuery && matchesPosition && matchesLetter;
    });
  }, [query, activePosition, activeLetter]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `People | ${appConfig.name}`,
    description: "Players represented by Opportunity 4 All Talents.",
    url: `${appConfig.url}/people`,
  };

  return (
    <>
      <SEO
        title={`People | ${appConfig.name}`}
        description="Meet the players represented by Opportunity 4 All Talents, connecting emerging African football talent with scouts, clubs, and opportunity."
        canonicalUrl="/people"
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        {/* Hero */}
        <section className="bg-black banner-top-padding md:pb-20 xl:pb-24 pb-12">
          <Container>
            <StaggerContainer className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-8">
              <AnimateOnView once blur>
                <Badge variant="color">Represented by O4AT</Badge>
              </AnimateOnView>
              <AnimateOnView once blur delay={0.1}>
                <Badge variant="color">
                  <span>Players from grassroots to academy football.</span>
                </Badge>
              </AnimateOnView>
            </StaggerContainer>

            <AnimateOnView once blur className="text-center max-w-3xl mx-auto" delay={0.2}>
              <h1 className="h1 text-white">
                The players we represent
              </h1>
            </AnimateOnView>
          </Container>
        </section>

        {/* Directory */}
        <section className="md:py-16 py-12">
          <Container className="space-y-8">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search"
                className="bg-white text-foreground border-border pl-11 h-12"
              />
            </div>

            {/* Position filter */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActivePosition("All")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activePosition === "All"
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                All
              </button>
              {positions.map((position) => (
                <button
                  key={position}
                  onClick={() => setActivePosition(position)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activePosition === position
                      ? "bg-primary text-white"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {position}s
                </button>
              ))}
            </div>

            {/* Alphabet filter */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-border py-4">
              {ALPHABET.map((letter) => {
                const isAvailable = availableLetters.has(letter);
                const isActive = activeLetter === letter;
                return (
                  <button
                    key={letter}
                    disabled={!isAvailable}
                    onClick={() => setActiveLetter(isActive ? null : letter)}
                    className={cn(
                      "text-sm font-medium w-6 text-center transition-colors",
                      !isAvailable && "text-muted-foreground/30 cursor-not-allowed",
                      isAvailable && !isActive && "text-foreground hover:text-primary",
                      isActive && "text-primary underline underline-offset-4"
                    )}
                  >
                    {letter}
                  </button>
                );
              })}
              {(activeLetter || query || activePosition !== "All") && (
                <button
                  onClick={() => {
                    setActiveLetter(null);
                    setQuery("");
                    setActivePosition("All");
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary ml-auto uppercase"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Grid */}
            {filteredPeople.length > 0 ? (
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                {filteredPeople.map((person, index) => (
                  <AnimateOnView key={person.id} once delay={index * 0.03}>
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-sm mb-4 bg-secondary">
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-px w-8 bg-primary mb-3" />
                    <h3 className="font-medium text-foreground">{person.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{person.location}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </AnimateOnView>
                ))}
              </StaggerContainer>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No players match your search.</p>
              </div>
            )}
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default People;
