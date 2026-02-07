"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

// カテゴリタイプ
type Category = "All" | "News" | "Science" | "Lifestyle" | "Media";

// 記事データ型
interface Article {
    id: string;
    slug: string;
    category: Exclude<Category, "All">;
    date: string;
    title: string;
    subtitle: string;
    image: string;
}

// 記事データ - 拡張版
const articles: Article[] = [
    // 最新記事: 酸素カプセル
    {
        id: "oxygen-capsule",
        slug: "oxygen-capsule",
        category: "News",
        date: "2024.02.01",
        title: "最新型高気圧酸素カプセル導入のお知らせ",
        subtitle: "細胞レベルでの回復を実現。NASAも採用する最先端テクノロジー。",
        image: "/works/stellar/news/oxygen-capsule.jpg",
    },
    // 既存記事
    {
        id: "hyper-recovery",
        slug: "hyper-recovery",
        category: "Science",
        date: "2023.11.02",
        title: "「超回復」の嘘と真実。",
        subtitle: "バイオメカニクスが解明する至高の休息。",
        image: "/works/stellar/news/hyper-recovery.png",
    },
    {
        id: "meal-strategy",
        slug: "meal-strategy",
        category: "Lifestyle",
        date: "2023.10.28",
        title: "エグゼクティブのための食事戦略。",
        subtitle: "「空腹」を武器にする方法。",
        image: "/works/stellar/news/article-hero-meal.jpg",
    },
    {
        id: "autumn-campaign",
        slug: "autumn-campaign",
        category: "News",
        date: "2023.10.15",
        title: "秋の入会キャンペーン開始のお知らせ。",
        subtitle: "限定5名のプレミアム枠を開放。",
        image: "/works/stellar/news/thumb-facility.png",
    },
    {
        id: "brain-correlation",
        slug: "brain-correlation",
        category: "Science",
        date: "2023.10.08",
        title: "脳機能と筋出力の相関性。",
        subtitle: "集中力を可視化する最新デバイス導入。",
        image: "/works/stellar/news/brain-correlation.png",
    },
    {
        id: "aoyama-sanctuary",
        slug: "aoyama-sanctuary",
        category: "Lifestyle",
        date: "2023.09.24",
        title: "南青山というサンクチュアリ。",
        subtitle: "移動時間さえもコンディショニングに変える。",
        image: "/works/stellar/news/article-hero-sanctuary.jpg",
    },
    {
        id: "goethe-feature",
        slug: "goethe-feature",
        category: "Media",
        date: "2023.09.20",
        title: "雑誌「GOETHE」11月号掲載。",
        subtitle: "経営者が選ぶ隠れ家ジム特集。",
        image: "/works/stellar/news/article-hero-goethe.jpg",
    },
    // 新規追加記事
    {
        id: "sleep-optimization",
        slug: "sleep-optimization",
        category: "Science",
        date: "2023.09.15",
        title: "睡眠の質が経営判断を左右する。",
        subtitle: "クロノタイプ別・最適な就寝戦略とは。",
        image: "/works/stellar/news/sleep-optimization.png",
    },
    {
        id: "ceo-morning-routine",
        slug: "ceo-morning-routine",
        category: "Lifestyle",
        date: "2023.09.10",
        title: "トップCEOが実践する朝5時の習慣。",
        subtitle: "1日の生産性を3倍にするモーニングルーティン。",
        image: "/works/stellar/news/morning-routine.png",
    },
    {
        id: "stress-hormones",
        slug: "stress-hormones",
        category: "Science",
        date: "2023.08.28",
        title: "コルチゾールを味方につける。",
        subtitle: "ストレスホルモンを成長エンジンに変換する科学。",
        image: "/works/stellar/news/stress-hormones.png",
    },
    {
        id: "executive-detox",
        slug: "executive-detox",
        category: "Lifestyle",
        date: "2023.08.20",
        title: "デジタルデトックスの週末。",
        subtitle: "経営者が選ぶ「オフグリッド」体験の効能。",
        image: "/works/stellar/news/digital-detox-realistic.png",
    },
];

const categories: Category[] = ["All", "News", "Science", "Lifestyle", "Media"];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredArticles = activeCategory === "All"
        ? articles
        : articles.filter(article => article.category === activeCategory);

    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            <style>{`
                .font-display { font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif; }
                .font-body { font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif; }
                .font-serif { font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif; }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
            `}</style>

            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-8 md:px-16 transition-all duration-500 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <Link className="group flex items-center gap-4" href="/works/stellar">
                        <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors !text-[20px]">arrow_back</span>
                        <span className="font-display text-white text-[10px] font-light tracking-super-wide uppercase group-hover:text-[#D4AF37] transition-colors">Top</span>
                    </Link>
                </div>
                <h1 className="font-display text-white text-[10px] md:text-xs font-light tracking-[0.5em] uppercase absolute left-1/2 -translate-x-1/2 opacity-0 md:opacity-100 transition-opacity">News & Column</h1>
                <div className="flex items-center gap-8">
                    <Link href="/works/stellar#reservation" className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-6 bg-white/30 origin-right transition-all group-hover:w-10 group-hover:bg-[#D4AF37]"></span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow w-full pt-32 md:pt-48 px-8 md:px-16 pb-32">
                <div className="max-w-7xl mx-auto">
                    {/* ヘッダー部分 */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32">
                        <motion.h2
                            className="font-serif text-4xl md:text-6xl font-light text-white leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Latest<br />
                            Updates.
                        </motion.h2>

                        {/* カテゴリフィルター */}
                        <motion.div
                            className="flex gap-6 md:gap-8 mt-12 md:mt-0 flex-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-[10px] tracking-super-wide uppercase transition-all duration-300 pb-2 border-b-2 ${activeCategory === category
                                        ? "text-[#D4AF37] border-[#D4AF37]"
                                        : "text-gray-500 hover:text-white border-transparent"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* 記事グリッド */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredArticles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link href={`/works/stellar/news/${article.slug}`} className="group cursor-pointer flex flex-col">
                                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#121212] mb-8">
                                            <Image
                                                alt={article.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                                src={article.image}
                                                width={800}
                                                height={600}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out"></div>
                                        </div>
                                        <div className="flex flex-col items-start gap-4">
                                            <div className="flex w-full items-center justify-between border-b border-white/10 pb-4 group-hover:border-[#D4AF37]/30 transition-colors">
                                                <span className="text-[9px] tracking-super-wide text-[#D4AF37] uppercase">{article.category}</span>
                                                <span className="font-display text-[10px] tracking-widest text-gray-500">{article.date}</span>
                                            </div>
                                            <h2 className="text-lg md:text-xl font-serif font-light leading-relaxed text-gray-200 group-hover:text-white transition-colors">
                                                {article.title}<br />{article.subtitle}
                                            </h2>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* ページネーション */}
                    <div className="flex justify-center mt-32">
                        <div className="flex items-center gap-8">
                            <button className="text-[10px] tracking-widest text-gray-600 hover:text-white transition-colors uppercase">Prev</button>
                            <span className="text-[10px] tracking-widest text-[#D4AF37]">1</span>
                            <button className="text-[10px] tracking-widest text-gray-600 hover:text-white transition-colors uppercase">Next</button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-16">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-10">
                                <span className="material-symbols-outlined text-[#D4AF37] !text-[18px]">diamond</span>
                                <h2 className="font-display text-white text-sm font-light tracking-super-wide uppercase">STELLAR</h2>
                            </div>
                            <p className="text-gray-600 text-[10px] tracking-widest leading-loose uppercase">
                                Executive Private Gym<br />
                                Minami Aoyama, Tokyo
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] tracking-super-wide uppercase mb-8 opacity-40">Section</h4>
                            <ul className="space-y-4 text-[10px] tracking-widest text-gray-500 uppercase">
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar#concept">Concept</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/gallery">Gallery</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">Program</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/price">Price</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] tracking-super-wide uppercase mb-8 opacity-40">Information</h4>
                            <ul className="space-y-4 text-[10px] tracking-widest text-gray-500 uppercase">
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#">FAQ</a></li>
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#">Contact</a></li>
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#">Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] tracking-super-wide uppercase mb-8 opacity-40">Social</h4>
                            <div className="flex gap-6">
                                <a className="text-gray-500 hover:text-white transition-colors" href="#">Instagram</a>
                                <a className="text-gray-500 hover:text-white transition-colors" href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/5 pt-12">
                        <p className="text-[9px] tracking-extra-wide text-gray-700 uppercase">© 2024 STELLAR Fitness. Excellence Defined.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
