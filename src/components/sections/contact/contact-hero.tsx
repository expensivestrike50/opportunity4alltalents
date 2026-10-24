import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const ContactHero = () => {
    return (
        <section className="relative bg-black overflow-hidden banner-top-padding pb-[80px] md:pb-[100px] lg:pb-[160px] xl:pb-[180px]">
            <Container className="relative z-10">
                {/* Main headline */}
                <AnimateOnView blur className="text-center max-w-2xl mx-auto lg:mb-10 md:mb-8 mb-4" delay={0.2}>
                    <h1 className="h1 text-white">
                        Let’s create more football opportunity.
                    </h1>
                </AnimateOnView>
            </Container>
        </section>
    );
};

export default ContactHero;

