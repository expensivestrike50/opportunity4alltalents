import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
    {
        id: 1,
        avatar: "/images/company/team/team-1.png",
        name: "James Whitaker",
        role: "Parent",
        quote: "O4AT kept us informed at every step, from the first trial invite to the final academy offer. That mattered more than we expected."
    },
    {
        id: 2,
        avatar: "/images/company/team/team-2.png",
        name: "Emily Rodriguez",
        role: "Player",
        quote: "I'd been playing on the same pitch for three years with nobody watching. Within a season of working with O4AT, I had two academy trials."
    },
    {
        id: 3,
        avatar: "/images/company/team/team-3.png",
        name: "David Kim",
        role: "Youth Coach",
        quote: "I finally have a simple way to document my players properly instead of just hoping someone notices them."
    },
    {
        id: 4,
        avatar: "/images/company/team/team-4.png",
        name: "Lisa Anderson",
        role: "Club Recruitment Scout",
        quote: "The match reports O4AT sends over are honest. That's rarer than it should be, and it's why we keep responding to their emails."
    },
    {
        id: 5,
        avatar: "/images/company/team/team-5.png",
        name: "Robert Taylor",
        role: "Football Agent",
        quote: "Before I take on a young player, I want a credible history, not a highlight reel. O4AT profiles give me exactly that."
    },
    {
        id: 6,
        avatar: "/images/company/team/team-6.png",
        name: "Maria Garcia",
        role: "Parent",
        quote: "Nobody explained the trial process to us the way O4AT did. We knew exactly what to expect and what to ask."
    },
    {
        id: 7,
        avatar: "/images/company/team/team-7.png",
        name: "John Williams",
        role: "Academy Director",
        quote: "Every introduction we've had from O4AT has come with real context. That saves us weeks of back and forth."
    },
    {
        id: 8,
        avatar: "/images/company/team/team-8.png",
        name: "Jennifer Brown",
        role: "Sponsor",
        quote: "We've sponsored plenty of teams. This is the first one where we can point to an actual player's story we helped fund."
    },
    {
        id: 9,
        avatar: "/images/company/team/team-9.png",
        name: "Christopher Lee",
        role: "Player",
        quote: "They filmed my matches for months before anything happened. Then one email changed everything."
    },
    {
        id: 10,
        avatar: "/images/company/team/team-10.png",
        name: "Amanda White",
        role: "Parent",
        quote: "As a parent, the hardest part is knowing who to trust. O4AT was the first group that felt genuinely on our side."
    },
    {
        id: 11,
        avatar: "/images/company/team/team-11.png",
        name: "Kevin Harris",
        role: "Grassroots Coach",
        quote: "I've sent dozens of players' footage to O4AT. They actually watch it, and they actually reply."
    },
    {
        id: 12,
        avatar: "/images/company/team/team-12.png",
        name: "Michelle Clark",
        role: "Club Recruitment Manager",
        quote: "O4AT sends us fewer players than most scouts, but a higher share of them are worth a trial."
    },
    {
        id: 13,
        avatar: "/images/company/team/team-13.png",
        name: "Brian Lewis",
        role: "Player",
        quote: "I didn't think anyone outside my town had seen me play. Turns out a scout had, because of O4AT."
    },
    {
        id: 14,
        avatar: "/images/company/team/team-14.png",
        name: "Stephanie Walker",
        role: "Parent",
        quote: "They never once oversold what my son's chances actually were. That honesty is why we trusted them."
    },
    {
        id: 15,
        avatar: "/images/company/team/team-15.png",
        name: "Jason Hall",
        role: "Academy Coach",
        quote: "The players O4AT sends us usually already know how to carry themselves in a trial. That's not an accident."
    },
    {
        id: 16,
        avatar: "/images/company/team/team-16.png",
        name: "Lauren Allen",
        role: "Sponsor",
        quote: "Our brand went from being a name on a banner to being part of an actual initiative supporting players."
    },
    {
        id: 17,
        avatar: "/images/company/team/team-17.png",
        name: "Eric Young",
        role: "Club Scout",
        quote: "Full match footage, not a highlight reel. It's a small thing, but it's why I trust what O4AT sends."
    },
    {
        id: 18,
        avatar: "/images/company/team/team-18.png",
        name: "Nicole Jackson",
        role: "Player",
        quote: "They treated my story like it mattered before any club had said yes to anything."
    },
    {
        id: 19,
        avatar: "/images/company/team/team-19.png",
        name: "Ryan Thompson",
        role: "Youth Coach",
        quote: "One tip I gave them turned into a trial for one of my players three months later."
    },
    {
        id: 20,
        avatar: "/images/company/team/team-20.png",
        name: "Ashley Moore",
        role: "Parent",
        quote: "We had a hundred questions before our daughter's first trial. O4AT answered all of them, twice."
    },
    {
        id: 21,
        avatar: "/images/company/team/team-21.png",
        name: "Andrew Davis",
        role: "Football Agent",
        quote: "Working across borders is messy. O4AT's paperwork and documentation made a transfer that should have taken months take weeks."
    },
    {
        id: 22,
        avatar: "/images/company/team/team-22.png",
        name: "Olivia Martinez",
        role: "Sponsor",
        quote: "They turned our sponsorship into a story our own team actually talks about internally."
    },
    {
        id: 23,
        avatar: "/images/company/team/team-23.png",
        name: "William Lee",
        role: "Club Director",
        quote: "We've signed two players through O4AT introductions. Both are still with us."
    },
    {
        id: 24,
        avatar: "/images/company/team/team-24.png",
        name: "Sophia Chen",
        role: "Player",
        quote: "The support didn't stop after I signed. They checked in for months after."
    },
    {
        id: 25,
        avatar: "/images/company/team/team-25.png",
        name: "Daniel Osei",
        role: "Grassroots Coach",
        quote: "O4AT is one of the only groups that actually shows up to the pitches nobody else visits."
    },
    {
        id: 26,
        avatar: "/images/company/team/team-26.png",
        name: "Grace Mensah",
        role: "Parent",
        quote: "They spoke to my son directly, not just to me. He felt respected, not just recruited."
    },
    {
        id: 27,
        avatar: "/images/company/team/team-27.png",
        name: "Victor Odhiambo",
        role: "Youth Coach",
        quote: "I've worked with a few scouting groups. O4AT is the only one that follows up months later to see how the player is doing."
    }
];

const TeamOverview = () => {

    const [hoveredMember, setHoveredMember] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close tooltip on mobile devices
    useEffect(() => {
        if (!isMobile) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setHoveredMember(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMobile]);

    // Show on click for mobile/tablet
    const handleMemberClick = (memberId: number) => {
        if (isMobile) {
            setHoveredMember(hoveredMember === memberId ? null : memberId);
        }
    };

    // Show on hover for desktop
    const handleMemberHover = (memberId: number) => {
        if (!isMobile) {
            setHoveredMember(memberId);
        }
    };

    const handleMemberLeave = () => {
        if (!isMobile) {
            setHoveredMember(null);
        }
    };

    // Tooltip component with smart positioning
    const Tooltip = ({ member, gridIndex }: { member: typeof teamMembers[0], gridIndex?: number }) => {
        const tooltipRef = useRef<HTMLDivElement>(null);
        const [position, setPosition] = useState<'left' | 'center' | 'right'>('center');

        useEffect(() => {
            if (!tooltipRef.current) return;

            // Use a small timeout to ensure the tooltip is rendered and positioned
            const timeoutId = setTimeout(() => {
                if (!tooltipRef.current) return;

                const tooltip = tooltipRef.current;
                const rect = tooltip.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const padding = 16; // 1rem padding

                // Check if tooltip overflows on the left
                if (rect.left < padding) {
                    setPosition('left');
                }
                // Check if tooltip overflows on the right
                else if (rect.right > viewportWidth - padding) {
                    setPosition('right');
                }
                else {
                    setPosition('center');
                }
            }, 0);

            return () => clearTimeout(timeoutId);
        });

        const positionClasses = {
            left: 'left-0',
            center: 'left-1/2 -translate-x-1/2',
            right: 'right-0'
        };

        return (
            <div
                ref={tooltipRef}
                className={`absolute top-full ${positionClasses[position]} mt-3 z-30 w-72 sm:w-80 bg-white rounded-2xl p-4 border border-border shadow-xl text-left animate-in fade-in-0 slide-in-from-bottom-2 duration-200`}
            >
                <div className="flex items-center gap-2.5 mb-2">
                    <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-9 w-9 rounded-full object-cover shrink-0"
                    />
                    <p className="text-sm leading-tight">
                        <span className="font-bold text-foreground">{member.name}</span>
                        {" · "}
                        <span className="text-muted-foreground">{member.role}</span>
                    </p>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                    {member.quote}
                </p>
            </div>
        );
    };

    return (
        <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
            <Container>
                <StaggerContainer className="text-center max-w-xl mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 text-foreground mb-6">
                            Trusted by players, families, and clubs across Africa
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <p className="mb-8">
                            Real feedback from the players, parents, coaches, clubs, and sponsors we've worked with along the pathway.
                        </p>
                    </AnimateOnView>

                    <AnimateOnView delay={0.2}>
                        <Button asChild className="bg-primary text-white hover:bg-primary/90">
                            <Link to="/contact">
                                Join Us Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Team Grid */}
                <div className="mt-16" ref={containerRef}>
                    <StaggerContainer className="space-y-4">
                        {/* Helper function to render team member */}
                        {(() => {
                            const renderMember = (member: typeof teamMembers[0], index: number, baseDelay: number, gridIndex?: number) => {
                                const isHovered = hoveredMember === member.id;

                                return (
                                    <div key={member.id} className="relative">
                                        <AnimateOnView
                                            delay={baseDelay + index * 0.02}
                                            className="aspect-square"
                                        >
                                            <div
                                                className={`w-full h-full rounded-sm md:rounded-[20px] overflow-hidden relative transition-all duration-300 cursor-pointer ${isHovered
                                                    ? 'scale-110 z-20 ring-2 ring-primary shadow-lg'
                                                    : hoveredMember !== null
                                                        ? 'blur-sm opacity-60 scale-95'
                                                        : 'group'
                                                    }`}
                                                onMouseEnter={() => handleMemberHover(member.id)}
                                                onMouseLeave={handleMemberLeave}
                                                onClick={() => handleMemberClick(member.id)}
                                            >
                                                <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500 text-xs">
                                                    Team {member.id}
                                                </div>
                                                <img
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </AnimateOnView>
                                        {/* Info Tooltip */}
                                        {isHovered && (
                                            <Tooltip member={member} gridIndex={gridIndex} />
                                        )}
                                    </div>
                                );
                            };

                            // Use all 27 members
                            const displayMembers = teamMembers;
                            const itemsPerRow = 12;

                            // First row: 3 members, 6 empty spaces (3-8), member at 9, empty at 10, member at 11 (total 5 members)
                            const firstRowMembers = displayMembers.slice(0, 5);
                            const remainingMembers = displayMembers.slice(5);

                            // Split remaining members into rows of 12
                            const rows: (typeof teamMembers)[] = [];
                            for (let i = 0; i < remainingMembers.length; i += itemsPerRow) {
                                rows.push(remainingMembers.slice(i, i + itemsPerRow));
                            }

                            return (
                                <>
                                    {/* First row */}
                                    {/* grid-cols-6 for < 1024px, lg:grid-cols-12 for > 1024px */}
                                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
                                        {firstRowMembers.slice(0, 3).map((member, index) =>
                                            renderMember(member, index, 0.05, index)
                                        )}
                                        {/* Empty items */}
                                        {Array.from({ length: 6 }).map((_, index) => (
                                            <div key={`empty-${index}`}></div>
                                        ))}
                                        {/* Member at index 9 */}
                                        {firstRowMembers.slice(3, 4).map((member, index) =>
                                            renderMember(member, 9, 0.05, 9)
                                        )}
                                        {/* Empty at index 10 */}
                                        <div key="empty-10"></div>
                                        {/* Member at index 11 */}
                                        {firstRowMembers.slice(4, 5).map((member, index) =>
                                            renderMember(member, 11, 0.05, 11)
                                        )}
                                    </div>

                                    {/* Other rows */}
                                    {rows.map((row, rowIndex) => {
                                        const isRow3 = rowIndex === 1; // Row 3 (second row after first row)

                                        if (isRow3) {
                                            // Row 3: empty at indices 1 and 7
                                            let memberIndex = 0;
                                            return (
                                                <div key={rowIndex + 1} className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
                                                    {Array.from({ length: 12 }).map((_, gridIndex) => {
                                                        if (gridIndex === 1 || gridIndex === 7) {
                                                            return <div key={`empty-${gridIndex}`}></div>;
                                                        }
                                                        if (memberIndex < row.length) {
                                                            const member = row[memberIndex];
                                                            memberIndex++;
                                                            return renderMember(member, gridIndex, 0.05 + (rowIndex + 1) * 0.15, gridIndex);
                                                        }
                                                        return <div key={`empty-${gridIndex}`}></div>;
                                                    })}
                                                </div>
                                            );
                                        }

                                        // Normal rows
                                        // On mobile/tablet (grid-cols-6), the 12 items will automatically wrap:
                                        // 6 items on line 1, 6 items on line 2.
                                        return (
                                            <div key={rowIndex + 1} className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
                                                {row.map((member, index) =>
                                                    renderMember(member, index, 0.05 + (rowIndex + 1) * 0.15, index)
                                                )}
                                            </div>
                                        );
                                    })}
                                </>
                            );
                        })()}
                    </StaggerContainer>
                </div>
            </Container>
        </section>
    );
};

export default TeamOverview;