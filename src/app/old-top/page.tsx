import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Flow from "@/components/sections/Flow";
import Pricing from "@/components/sections/Pricing";
import Options from "@/components/sections/Options";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyUs />
            <Flow />
            <Pricing />
            <Options />
            <Works />
            <Contact />
        </>
    );
}

