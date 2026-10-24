import adidasImage from "@/assets/sports/ad-adidas.jpg";
import newBalanceImage from "@/assets/sports/ad-new-balance.jpg";
import nikeImage from "@/assets/sports/ad-nike.jpg";
import pumaImage from "@/assets/sports/ad-puma.jpg";
import underArmourImage from "@/assets/sports/ad-under-armour.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

const DISMISS_KEY = "o4at-ad-popup-dismissed";
const SHOW_DELAY_MS = 4000;
const AUTO_ADVANCE_MS = 5000;
const SWIPE_THRESHOLD = 60;

const logoClass = "h-6 w-auto";

const NikeLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Nike" className={logoClass}>
        <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z" />
    </svg>
);

const AdidasLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Adidas" className={logoClass}>
        <path d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z" />
    </svg>
);

const PumaLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Puma" className={logoClass}>
        <path d="M23.845 3.008c-.417-.533-1.146-.106-1.467.08-2.284 1.346-2.621 3.716-3.417 5.077-.626 1.09-1.652 1.89-2.58 1.952-.686.049-1.43-.084-2.168-.405-1.807-.781-2.78-1.792-3.017-1.97-.487-.37-4.23-4.015-7.28-4.164 0 0-.372-.75-.465-.763-.222-.025-.45.451-.616.501-.15.053-.413-.512-.565-.487-.153.02-.302.586-.6.877-.22.213-.486.2-.637.463-.052.096-.034.265-.093.42-.127.32-.551.354-.555.697 0 .381.357.454.669.72.248.212.265.362.554.461.258.088.632-.187.964-.088.277.081.543.14.602.423.054.256 0 .658-.34.613-.112-.015-.598-.174-1.198-.11-.725.077-1.553.309-1.634 1.11-.041.447.514.97 1.055.866.371-.071.196-.506.399-.716.267-.27 1.772.944 3.172.944.593 0 1.031-.15 1.467-.605.04-.029.093-.102.155-.11a.632.632 0 01.195.088c1.131.897 1.984 2.7 6.13 2.721.582.007 1.25.279 1.796.777.48.433.764 1.125 1.037 1.825.418 1.053 1.161 2.069 2.292 3.203.06.068.99.78 1.06.833.012.01.084.167.053.255-.02.69-.123 2.67 1.365 2.753.366.02.275-.231.275-.41-.005-.341-.065-.685.113-1.04.253-.478-.526-.709-.509-1.756.019-.784-.645-.651-.984-1.25-.19-.343-.368-.532-.35-.946.073-2.38-.517-3.948-.805-4.327-.227-.294-.423-.403-.207-.54 1.24-.815 1.525-1.574 1.525-1.574.66-1.541 1.256-2.945 2.075-3.57.166-.12.589-.44.852-.56.763-.362 1.173-.578 1.388-.788.356-.337.635-1.053.294-1.48z" />
    </svg>
);

const UnderArmourLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="Under Armour" className={logoClass}>
        <path d="M15.954 12c-.089.066-.195.142-.324.233-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985A36.43 36.43 0 018.042 12c.09-.067.196-.143.324-.234.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985.129.09.235.167.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765-1.672-.61-3.254-.985-4.981-.985-1.728 0-3.308.375-4.98.985-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365 1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764 1.672.61 3.252.983 4.98.983 1.727 0 3.309-.374 4.98-.983.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365-.093-1.927-1.78-3.64-4.435-4.819 2.657-1.182 4.343-2.888 4.435-4.82" />
    </svg>
);

const NewBalanceLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label="New Balance" className={logoClass}>
        <path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z" />
    </svg>
);

type Advert = {
    id: string;
    image: string;
    logo: ReactNode;
    title: string;
    body: string;
    cta: string;
    href: string;
};

const ADVERTS: Advert[] = [
    {
        id: "nike",
        image: nikeImage,
        logo: <NikeLogo />,
        title: "Gear up for match day",
        body: "Boots, kits and training wear built for players chasing the next level.",
        cta: "Shop Nike Football",
        href: "https://www.nike.com/w/football-1gdj0",
    },
    {
        id: "adidas",
        image: adidasImage,
        logo: <AdidasLogo />,
        title: "Impossible is nothing",
        body: "Discover the latest adidas football collection for training and competition.",
        cta: "Shop adidas Football",
        href: "https://www.adidas.com/us/soccer",
    },
    {
        id: "puma",
        image: pumaImage,
        logo: <PumaLogo />,
        title: "Fast never stops",
        body: "Lightweight boots and performance kit for players who live for speed.",
        cta: "Shop PUMA Football",
        href: "https://us.puma.com/us/en/sports/football",
    },
    {
        id: "under-armour",
        image: underArmourImage,
        logo: <UnderArmourLogo />,
        title: "Train harder, recover faster",
        body: "Performance apparel engineered to keep you strong from first whistle to last.",
        cta: "Shop Under Armour",
        href: "https://www.underarmour.com/en-us/c/sports/soccer/",
    },
    {
        id: "new-balance",
        image: newBalanceImage,
        logo: <NewBalanceLogo />,
        title: "Made for the beautiful game",
        body: "Football boots and team wear designed for comfort, control and confidence.",
        cta: "Shop New Balance",
        href: "https://www.newbalance.com/soccer/",
    },
];

const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

const AdPopup = () => {
    const [open, setOpen] = useState(false);
    const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        try {
            if (sessionStorage.getItem(DISMISS_KEY)) return;
        } catch {
            // Storage unavailable — show the popup anyway
        }
        const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
        return () => window.clearTimeout(timer);
    }, []);

    const paginate = useCallback((step: number) => {
        setSlide(([current]) => [(current + step + ADVERTS.length) % ADVERTS.length, step]);
    }, []);

    useEffect(() => {
        if (!open || paused) return;
        const timer = window.setInterval(() => paginate(1), AUTO_ADVANCE_MS);
        return () => window.clearInterval(timer);
    }, [open, paused, paginate]);

    const dismiss = () => {
        setOpen(false);
        try {
            sessionStorage.setItem(DISMISS_KEY, "1");
        } catch {
            // Ignore storage errors
        }
    };

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
        else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
    };

    const ad = ADVERTS[index];

    return (
        <AnimatePresence>
            {open && (
                <motion.aside
                    role="dialog"
                    aria-label="Partner adverts"
                    aria-roledescription="carousel"
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 sm:w-[360px] overflow-hidden rounded-2xl bg-black text-white shadow-[0_20px_60px_rgba(20,20,20,0.35)] ring-1 ring-white/10"
                >
                    <button
                        type="button"
                        onClick={dismiss}
                        aria-label="Close"
                        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="relative overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={ad.id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ x: { type: "spring", stiffness: 300, damping: 32 }, opacity: { duration: 0.2 } }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.6}
                                onDragEnd={handleDragEnd}
                                className="relative h-[460px] cursor-grab touch-pan-y active:cursor-grabbing"
                                aria-roledescription="slide"
                                aria-label={`${index + 1} of ${ADVERTS.length}`}
                            >
                                <img
                                    src={ad.image}
                                    alt=""
                                    draggable={false}
                                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black from-25% via-black/70 via-50% to-transparent to-75%" />
                                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium">
                                    Sponsored
                                </span>

                                <div className="absolute inset-x-0 bottom-0 px-5 pb-11">
                                    <span className="mb-3 block text-white">{ad.logo}</span>
                                    <h3 className="text-xl font-semibold leading-tight tracking-tight">
                                        {ad.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/75">{ad.body}</p>
                                    <Button asChild className="mt-4 w-full">
                                        <a href={ad.href} target="_blank" rel="noopener noreferrer sponsored">
                                            {ad.cta}
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
                        {ADVERTS.map((item, i) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSlide([i, i > index ? 1 : -1])}
                                aria-label={`Show advert ${i + 1}`}
                                aria-current={i === index}
                                className={cn(
                                    "h-1.5 rounded-full transition-all",
                                    i === index ? "w-6 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70",
                                )}
                            />
                        ))}
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default AdPopup;
