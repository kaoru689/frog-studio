"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    subtitle: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    subtitle,
    title,
    description,
    align = "center",
}: SectionTitleProps) {
    const alignClass = align === "center" ? "text-center" : "text-left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`max-w-2xl ${align === "center" ? "mx-auto" : ""} ${alignClass}`}
        >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                {subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-slate-600 dark:text-slate-400">{description}</p>
            )}
        </motion.div>
    );
}
