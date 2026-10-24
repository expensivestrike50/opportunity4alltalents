import subscribeImage from "@/assets/sports/subscribe-juggling.jpg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Check, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const DISMISS_KEY = "o4at-subscribe-popup-seen";
// Show once the visitor has scrolled through this share of the page
const SCROLL_TRIGGER = 0.5;

const PERKS = ["New player stories every month", "Podcast and video picks", "Partnership and pathway news"];

const SubscribePopup = () => {
    const [open, setOpen] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        try {
            if (sessionStorage.getItem(DISMISS_KEY)) return;
        } catch {
            // Storage unavailable — still show the popup once
        }

        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable <= 0 || window.scrollY / scrollable < SCROLL_TRIGGER) return;
            setOpen(true);
            window.removeEventListener("scroll", onScroll);
            try {
                sessionStorage.setItem(DISMISS_KEY, "1");
            } catch {
                // Ignore storage errors
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubscribed(true);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[calc(100%_-_2rem)] max-h-[calc(100dvh_-_2rem)] overflow-y-auto max-w-[760px] gap-0 overflow-hidden rounded-2xl md:rounded-4xl border-none bg-[#0f2418] p-0 text-white sm:rounded-4xl [&>button]:right-4 [&>button]:top-4 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-black/40 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100">
                <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                    {/* Photo */}
                    <div className="relative h-40 md:h-auto">
                        <img
                            src={subscribeImage}
                            alt="Young footballer juggling a ball"
                            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-[#0f2418]/60" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className="relative overflow-hidden p-6 md:p-10">
                        <svg
                            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] text-white/[0.06]"
                            viewBox="0 0 420 420"
                            fill="none"
                            aria-hidden="true"
                        >
                            {Array.from({ length: 6 }, (_, i) => (
                                <circle key={i} cx="210" cy="210" r={70 + i * 26} stroke="currentColor" strokeWidth="1.5" />
                            ))}
                        </svg>

                        <div className="relative">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#b4e66b] px-3 py-1 text-xs font-medium text-[#0f2418]">
                                <Mail className="h-3.5 w-3.5" />
                                Newsletter
                            </span>

                            {subscribed ? (
                                <div className="py-10">
                                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#b4e66b] text-[#0f2418]">
                                        <Check className="h-7 w-7" />
                                    </span>
                                    <DialogTitle className="h4 text-white">You’re on the list.</DialogTitle>
                                    <DialogDescription className="mt-3 text-white/70">
                                        Thanks for subscribing. The next player story is heading your way.
                                    </DialogDescription>
                                </div>
                            ) : (
                                <>
                                    <DialogTitle className="h4 mt-5 text-white">
                                        Stay close to the <span className="text-[#b4e66b]">talent.</span>
                                    </DialogTitle>
                                    <DialogDescription className="mt-3 text-white/70">
                                        Get the stories of emerging players from around the world, straight to your inbox.
                                    </DialogDescription>

                                    <ul className="mt-6 space-y-2.5">
                                        {PERKS.map((perk) => (
                                            <li key={perk} className="flex items-center gap-3 text-sm text-white/85">
                                                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#b4e66b]/20 text-[#b4e66b]">
                                                    <Check className="h-3 w-3" />
                                                </span>
                                                {perk}
                                            </li>
                                        ))}
                                    </ul>

                                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2 sm:flex-row">
                                        <label htmlFor="subscribe-email" className="sr-only">Email address</label>
                                        <input
                                            id="subscribe-email"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Your email"
                                            className="h-12 w-full rounded-full border border-white/15 bg-white/10 px-5 text-white placeholder:text-white/50 focus:border-[#b4e66b] focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="h-12 flex-shrink-0 rounded-full bg-[#b4e66b] px-6 font-medium text-[#0f2418] transition-transform hover:scale-[1.03]"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                    <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SubscribePopup;
