"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { href: "/works/kohaku", label: "トップ" },
    { href: "/works/kohaku/about", label: "コンセプト" },
    { href: "/works/kohaku/menu", label: "お品書き" },
    { href: "/works/kohaku/topics", label: "お知らせ" },
    { href: "/works/kohaku/access", label: "アクセス" },
];

export default function KohakuHeader() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#020804] border-b border-[#cfab7f]/20 h-14 flex items-center justify-center shadow-lg"
        >
            <nav className="flex items-center gap-8 md:gap-12">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-xs md:text-sm font-serif tracking-widest transition-colors duration-300 ${isActive ? "text-[#cfab7f] font-bold" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {link.label}
                            {isActive && (
                                <motion.div
                                    layoutId="kohaku-underline"
                                    className="absolute -bottom-4 left-0 right-0 h-[1px] bg-[#cfab7f]"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </motion.header>
    );
}
