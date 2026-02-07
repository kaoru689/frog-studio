"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { topics } from "@/lib/kohaku-topics";
import { useState } from "react";

export default function KohakuHome() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    const [activeTopicImage, setActiveTopicImage] = useState<string | null>(null);

    // Take top 3 topics
    const latestTopics = topics.slice(0, 3);

    return (
        <main className="relative w-full overflow-hidden bg-[#020804]">
            {/* Hero Section (UNCHANGED) */}
            <section className="relative h-screen w-full overflow-hidden">
                <motion.div style={{ scale, y, opacity }} className="absolute inset-0 z-0">
                    <Image
                        src="/kohaku/hero_grand.png"
                        alt="Kohaku Grand Hall"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-[#020804]/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020804] via-transparent to-[#020804]/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020804]/40 to-[#020804]" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24">
                    <div className="flex flex-row-reverse items-start justify-between h-full py-32">
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="writing-vertical-rl text-white border-l border-[#cfab7f]/40 pl-8 md:pl-12 h-[65vh] flex justify-between mix-blend-exclusion"
                        >
                            <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-widest drop-shadow-2xl">
                                琥珀
                            </h2>
                            <span className="font-cinzel text-sm tracking-[0.5em] text-[#cfab7f] rotate-180 mb-4 opacity-80">
                                THE GRAND CAFE 1924
                            </span>
                        </motion.div>

                        <div className="hidden md:flex flex-col justify-end h-full pb-16 w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                            >
                                <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8 drop-shadow-lg">
                                    A Masterpiece of<br />
                                    <span className="text-[#cfab7f] italic">Silence</span>.
                                </h3>
                                <p className="font-lato text-sm text-white/90 leading-loose mb-12 tracking-wide text-justify drop-shadow-md border-l-2 border-[#cfab7f]/30 pl-6">
                                    Beyond the heavy velvet curtains lies a world untouched by time.
                                    Experience the pinnacle of coffee craftsmanship in a space designed for the soul.
                                </p>
                                {/* Changed link to Space page */}
                                <Link href="/works/kohaku/about" className="group flex items-center gap-4 text-[#cfab7f] uppercase tracking-[0.2em] text-xs font-cinzel hover:text-white transition-colors duration-300">
                                    Explore the Space
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Latest Stories Section */}
            <section className="relative py-32 px-6 md:px-24">
                {/* Background Image Effect for Topics */}
                <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out">
                    {latestTopics.map(topic => (
                        <div key={topic.id} className={`absolute inset-0 transition-opacity duration-700 ${activeTopicImage === topic.image ? "opacity-20" : "opacity-0"}`}>
                            <Image src={topic.image} alt="Background" fill className="object-cover blur-sm" unoptimized />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b border-[#cfab7f]/20 pb-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#e5e5e5]">LATEST STORIES</h2>
                        <Link href="/works/kohaku/topics" className="font-cinzel text-xs text-[#cfab7f] tracking-widest hover:text-white transition-colors">VIEW ALL &rarr;</Link>
                    </div>

                    <div className="space-y-0">
                        {latestTopics.map((topic, i) => (
                            <Link
                                key={topic.id}
                                href={`/works/kohaku/topics/${topic.id}`}
                                onMouseEnter={() => setActiveTopicImage(topic.image)}
                                onMouseLeave={() => setActiveTopicImage(null)}
                                className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#cfab7f]/10 hover:border-[#cfab7f] transition-all duration-500"
                            >
                                <div className="w-32 font-cinzel text-xs text-[#cfab7f]/70 group-hover:text-[#cfab7f] mb-2 md:mb-0">{topic.date}</div>
                                <div className="flex-1 md:pl-12">
                                    <h3 className="text-xl md:text-2xl font-serif text-[#e5e5e5] group-hover:tracking-wider transition-all duration-300">
                                        {topic.title}
                                    </h3>
                                </div>
                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                                    <ArrowRight className="w-5 h-5 text-[#cfab7f]" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
                className="fixed inset-0 bg-[#020804] z-50 pointer-events-none"
            />
        </main>
    );
}
