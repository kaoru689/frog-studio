"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { topics } from "@/lib/kohaku-topics";
import { ArrowLeft } from "lucide-react";

export default function KohakuTopicDetail() {
    const { slug } = useParams();
    const topic = topics.find((t) => t.id === slug);

    if (!topic) {
        return <div className="min-h-screen grid place-items-center text-white">Topic not found.</div>;
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            {/* Full Screen Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[60vh] md:h-[80vh]"
            >
                <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 pb-12">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-6 mb-6"
                        >
                            <span className="font-cinzel text-[#cfab7f] text-sm tracking-widest border border-[#cfab7f] px-3 py-1">{topic.category}</span>
                            <span className="font-cinzel text-white/70 text-sm tracking-widest">{topic.date}</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight drop-shadow-2xl"
                        >
                            {topic.title}
                        </motion.h1>
                    </div>
                </div>
            </motion.div>

            {/* Content Body */}
            <article className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="prose prose-invert prose-lg md:prose-xl font-serif text-[#e5e5e5]/90 leading-loose"
                    dangerouslySetInnerHTML={{ __html: topic.content }}
                />

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 border-t border-[#cfab7f]/20 pt-12 text-center"
                >
                    <Link href="/works/kohaku/topics" className="inline-flex items-center gap-4 text-[#cfab7f] font-cinzel hover:text-white transition-colors duration-300">
                        <ArrowLeft className="w-4 h-4" />
                        BACK TO STORIES
                    </Link>
                </motion.div>
            </article>
        </main>
    );
}
