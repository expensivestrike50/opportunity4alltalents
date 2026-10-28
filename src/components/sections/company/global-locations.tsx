import approachImage from "@/assets/sports/ad-under-armour.jpg";
import logoImage from "@/assets/brand/opportunities-for-all-talent.png";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Handshake, Search, Users } from "lucide-react";
import { useLayoutEffect, useRef, useState, type ComponentType } from "react";

// Goalpost with net and ball, drawn to match the lucide line style
const GoalIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M3 19V5h18v14" />
        <path d="M7 5v7M11 5v7M15 5v7M3 8.5h18M3 12h18" strokeWidth="1.1" opacity="0.6" />
        <circle cx="12" cy="17" r="3" fill="currentColor" stroke="none" />
    </svg>
);

type Node = {
    title: string;
    tag: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
};

// Bubble colours borrowed from the forest green football mockup
const nodes: Node[] = [
    {
        title: "Players & Families",
        tag: "Clearer pathways",
        description: "Practical visibility, preparation, and football education for the people closest to the journey.",
        icon: Users,
        color: "bg-[#b4e66b]",
    },
    {
        title: "Scouts & Clubs",
        tag: "Relevant discovery",
        description: "Player stories and useful context designed to make early talent identification more informed.",
        icon: Search,
        color: "bg-[#bfe9f7]",
    },
    {
        title: "Brands & Partners",
        tag: "Authentic activation",
        description: "Football-led stories and measurable deliverables that connect sponsorship with real value.",
        icon: Handshake,
        color: "bg-[#f6d64a]",
    },
    {
        title: "Grassroots Football",
        tag: "Stronger foundations",
        description: "Support for equipment, video capture, showcases, education, and development environments.",
        icon: GoalIcon,
        color: "bg-[#f7c6d4]",
    },
];

const NodeCard = ({ node, delay, cardRef }: { node: Node; delay: number; cardRef: (el: HTMLDivElement | null) => void }) => {
    const Icon = node.icon;
    return (
        <AnimateOnView once y={30} delay={delay} className="relative">
            <div ref={cardRef} className="relative h-full rounded-[28px] bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <span className={cn("flex h-12 w-12 items-center justify-center rounded-full text-[#0f2418]", node.color)}>
                        <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground">
                        {node.tag}
                    </span>
                </div>
                <h3 className="h5 text-foreground mb-2">{node.title}</h3>
                <p className="text-muted-foreground">{node.description}</p>
            </div>
        </AnimateOnView>
    );
};

type Connector = { d: string; end: { x: number; y: number } };

// Radius of the hub circle plus its lime ring, where connectors stop
const HUB_EDGE = 80;

// Layout box relative to an ancestor. Uses offsets rather than getBoundingClientRect
// so the cards' entrance animations (transforms) don't skew the measurements.
const boxWithin = (el: HTMLElement, ancestor: HTMLElement) => {
    let x = 0;
    let y = 0;
    let node: HTMLElement | null = el;
    while (node && node !== ancestor) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
    }
    return { left: x, top: y, width: el.offsetWidth, height: el.offsetHeight };
};

const GlobalLocations = () => {
    const reduceMotion = useReducedMotion();
    const [first, second, third, fourth] = nodes;
    const networkRef = useRef<HTMLDivElement>(null);
    const hubRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [connectors, setConnectors] = useState<Connector[]>([]);

    // Measure the cards and hub so each dashed path runs from a card's inner edge into the hub
    useLayoutEffect(() => {
        const network = networkRef.current;
        const hub = hubRef.current;
        if (!network || !hub) return;
        const desktop = window.matchMedia("(min-width: 1024px)");

        const measure = () => {
            if (!desktop.matches) {
                setConnectors([]);
                return;
            }
            const h = boxWithin(hub, network);
            const cx = h.left + h.width / 2;
            const cy = h.top + h.height / 2;
            setConnectors(
                cardRefs.current.flatMap((card, i) => {
                    if (!card) return [];
                    const r = boxWithin(card, network);
                    const fromLeft = i < 2;
                    const sx = fromLeft ? r.left + r.width : r.left;
                    const sy = r.top + r.height / 2;
                    const angle = Math.atan2(sy - cy, sx - cx);
                    const ex = cx + HUB_EDGE * Math.cos(angle);
                    const ey = cy + HUB_EDGE * Math.sin(angle);
                    const mx = (sx + ex) / 2;
                    return [{ d: `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`, end: { x: ex, y: ey } }];
                }),
            );
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(network);
        desktop.addEventListener("change", measure);
        return () => {
            observer.disconnect();
            desktop.removeEventListener("change", measure);
        };
    }, []);

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container className="md:space-y-10 xl:space-y-2xl space-y-8">
                <StaggerContainer className="text-center max-w-3xl mx-auto">
                    <AnimateOnView blur className="md:mb-4 mb-1.5">
                        <Badge>
                            One Football Network
                        </Badge>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <h2 className="h2 text-foreground mb-6">
                            Connecting the people who create opportunity
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <p className="max-w-[560px] mx-auto text-muted-foreground">
                            Sustainable pathways take a network. Our platform is designed to help every participant contribute with greater clarity and purpose.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div ref={networkRef} className="relative grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] lg:gap-10">
                    {/* Animated connectors (desktop): dashes flow from each group into the hub */}
                    {connectors.length > 0 && (
                        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" fill="none" aria-hidden="true">
                            {connectors.map((connector, i) => (
                                <g key={i}>
                                    <motion.path
                                        d={connector.d}
                                        stroke="#141414"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeDasharray="5 7"
                                        initial={{ strokeDashoffset: 0 }}
                                        animate={reduceMotion ? undefined : { strokeDashoffset: [24, 0] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                    />
                                    <circle cx={connector.end.x} cy={connector.end.y} r="4" fill="#141414" />
                                </g>
                            ))}
                        </svg>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
                        <NodeCard node={first} delay={0.1} cardRef={(el) => (cardRefs.current[0] = el)} />
                        <NodeCard node={second} delay={0.2} cardRef={(el) => (cardRefs.current[1] = el)} />
                    </div>

                    {/* Hub */}
                    <AnimateOnView once delay={0.15} className="relative mx-auto my-6 flex h-[300px] w-[300px] items-center justify-center lg:my-0">
                        <svg className="absolute inset-0 h-full w-full text-[#0f2418]/10" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                            {Array.from({ length: 5 }, (_, i) => (
                                <circle key={i} cx="150" cy="150" r={70 + i * 19} stroke="currentColor" strokeWidth="1.5" strokeDasharray={i % 2 ? "4 6" : undefined} />
                            ))}
                        </svg>
                        {!reduceMotion && (
                            <motion.span
                                className="absolute h-[140px] w-[140px] rounded-full bg-[#b4e66b]"
                                animate={{ scale: [1, 1.35], opacity: [0.45, 0] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                                aria-hidden="true"
                            />
                        )}
                        <div ref={hubRef} className="relative flex h-[140px] w-[140px] flex-col items-center justify-center gap-1 rounded-full bg-[#0f2418] shadow-[0_20px_60px_rgba(15,36,24,0.35)] ring-8 ring-[#b4e66b]">
                            <img src={logoImage} alt="Opportunity4AllTalents" className="h-12 w-auto" loading="lazy" />
                            <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">The hub</span>
                        </div>
                    </AnimateOnView>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
                        <NodeCard node={third} delay={0.3} cardRef={(el) => (cardRefs.current[2] = el)} />
                        <NodeCard node={fourth} delay={0.4} cardRef={(el) => (cardRefs.current[3] = el)} />
                    </div>
                </div>

                {/* Our Approach: how the network works in practice */}
                <div className="grid items-center gap-10 rounded-2xl md:rounded-4xl bg-card p-5 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:p-14">
                    <AnimateOnView once y={30} className="relative mx-auto w-full max-w-[444px] lg:mx-0">
                        <img
                            src={approachImage}
                            alt="Young female footballer holding a ball on a grassroots pitch"
                            className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
                            loading="lazy"
                        />
                    </AnimateOnView>

                    <StaggerContainer>
                        <AnimateOnView once blur className="md:mb-4 mb-1.5">
                            <Badge>
                                Our Approach
                            </Badge>
                        </AnimateOnView>
                        <AnimateOnView once blur delay={0.1}>
                            <h2 className="h2 text-foreground md:mb-6 mb-4">
                                Put the player and the pathway first
                            </h2>
                        </AnimateOnView>
                        <AnimateOnView once delay={0.2} className="space-y-4">
                            <p>
                                Opportunity4AllTalents exists to help emerging African football talent become easier to see, understand, and support.
                            </p>
                            <p>
                                We bring together player stories, football context, credible visibility, and partnership activation without making promises about trials, contracts, or selection.
                            </p>
                        </AnimateOnView>
                        <AnimateOnView once delay={0.3}>
                            <blockquote className="mt-8 border-l-4 border-primary pl-5 text-xl font-medium text-foreground md:text-2xl">
                                “Talent is everywhere. Opportunity isn’t.”
                            </blockquote>
                        </AnimateOnView>
                    </StaggerContainer>
                </div>
            </Container>
        </section>
    );
};

export default GlobalLocations;
