"use client";

import KohakuHeader from "@/components/works/kohaku/KohakuHeader";
import { AnimatePresence } from "framer-motion";

export default function WorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#020804] min-h-screen text-white selection:bg-[#cfab7f] selection:text-black pt-32">
            <KohakuHeader />
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </div>
    );
}
