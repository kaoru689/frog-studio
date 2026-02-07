"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { topics } from "@/lib/kohaku-topics";

export default function KohakuTopicsList() {
    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            {/* Page Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 text-center md:text-left"
            >
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#e5e5e5] mb-4">STORIES</h1>
                <p className="font-cinzel text-[#cfab7f] tracking-[0.5em] text-sm md:pl-2">NEWS & TOPICS</p>
            </motion.div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {topics.map((topic, index) => (
                    <motion.div
                        key={topic.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                        <Link href={`/works/kohaku/topics/${topic.id}`} className="group block h-full">
                            {/* Image */}
                            <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-sm filter brightness-90 group-hover:brightness-100 transition-all duration-700">
                                <Image
                                    src={topic.image}
                                    alt={topic.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                    unoptimized
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 border border-[#cfab7f]/30">
                                    <span className="font-cinzel text-[#cfab7f] text-xs tracking-widest">{topic.category}</span>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="border-l border-[#cfab7f]/20 pl-6 group-hover:border-[#cfab7f] transition-colors duration-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="font-cinzel text-xs text-[#e5e5e5]/50 tracking-widest">{topic.date}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif text-[#e5e5e5] leading-snug mb-4 group-hover:text-[#cfab7f] transition-colors duration-300">
                                    {topic.title}
                                </h2>
                                <p className="text-sm text-[#e5e5e5]/60 font-lato leading-loose line-clamp-3">
                                    {topic.excerpt}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#cfab7f] text-xs font-cinzel tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                    READ STORY &rarr;
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
