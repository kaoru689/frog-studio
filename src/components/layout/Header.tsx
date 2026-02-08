"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
    { href: "/#about", label: "選ばれる理由" },
    { href: "/#pricing", label: "料金プラン" },
    { href: "/#works", label: "制作実績" },
    { href: "/#faq", label: "よくある質問" },
    { href: "/blog", label: "BLOG" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // ダークモードの初期設定
        if (typeof window !== "undefined") {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(prefersDark);
            if (prefersDark) {
                document.documentElement.classList.add("dark");
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const pathname = usePathname();
    const isStellarPage = pathname?.startsWith("/works/stellar");
    const isGrandCelestialPage = pathname?.startsWith("/works/grand-celestial");

    if (isStellarPage || isGrandCelestialPage) return null;

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-primary/20 bg-background-dark/90 backdrop-blur-xl shadow-[0_1px_10px_rgba(13,242,89,0.2)]">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative size-8 flex items-center justify-center bg-primary/10 rounded border border-primary text-primary overflow-hidden shadow-[0_0_15px_rgba(13,242,89,0.8),0_0_30px_rgba(13,242,89,0.4)]">
                        <span className="material-symbols-outlined relative z-10 drop-shadow-[0_0_8px_rgba(13,242,89,1)] text-white">terminal</span>
                        <div className="absolute inset-0 bg-primary/20 blur-sm group-hover:bg-primary/40 transition-all"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-xl tracking-tight leading-none text-white group-hover:text-primary transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">FROG Studio</span>
                        <span className="text-[9px] text-primary/100 font-mono tracking-widest leading-none">SYS.VER.4.0</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 font-display text-sm font-medium tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-400 hover:text-primary transition-colors hover:shadow-[0_2px_0_0_#0df259]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/#contact"
                    className="btn-glitch hidden md:flex relative overflow-hidden group bg-black/20 border-2 border-primary text-white px-6 py-2 rounded font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(13,242,89,0.6)]"
                >
                    <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
                        お問い合わせ
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                    <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                </Link>

                {/* Mobile Menu Button (Preserved) */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="ダークモード切り替え"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-slate-600" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="メニューを開く"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 bg-background-dark/95 backdrop-blur-xl absolute top-16 left-0 right-0 z-40"
                    >
                        <div className="flex flex-col gap-4 pt-4 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-400 hover:text-primary font-medium transition-colors py-2 block text-center"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-center bg-primary text-black font-bold py-3 rounded"
                            >
                                無料相談する
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
