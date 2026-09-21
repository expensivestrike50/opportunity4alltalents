import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { publicUrl } from "@/lib/utils";
import { Link } from "react-router-dom";

const DownloadHero = () => {
    return (
        <section className="bg-black banner-top-padding md:pb-20 xl:pb-32 pb-12">
            <Container className="relative z-10 pt-20">
                {/* Main headline */}
                <AnimateOnView once blur className="text-center max-w-4xl mx-auto mb-10" delay={0.2}>
                    <h1 className="h1 text-white lg:mb-6 md:mb-4 mb-2">
                        Explore the Talent Pathway
                    </h1>
                    <p className="text-lg text-muted leading-relaxed lg:mb-[60px] md:mb-10 mb-6 max-w-[622px] mx-auto">
                        Discover player stories, scouting perspectives, partnership activations, and the work creating wider visibility for emerging talent.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild>
                            <Link to="/contact">
                                <img src={publicUrl("/images/common/revio-signup.svg")} alt="Apple" loading="lazy"/>
                                Share an Opportunity
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="text-white">
                            <Link to="/contact">
                                <img src={publicUrl("/images/common/revio-download.svg")} alt="Apple" loading="lazy"/>
                                Become a Partner
                            </Link>
                        </Button>
                    </div>
                </AnimateOnView>
            </Container>
        </section>
    );
};

export default DownloadHero;

