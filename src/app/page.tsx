"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

// Lazy load framer-motion to reduce main thread blocking
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
    ssr: false,
    loading: () => <div />
});

// Direct import for AnimatePresence (needed for mounting)
import { motion, AnimatePresence } from "framer-motion";

// --- Components for Cyber Effects ---

const ScrambleText = ({ text, className, trigger = true }: { text: string; className?: string, trigger?: boolean }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";

    useEffect(() => {
        if (!trigger) return;
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(text
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return <span className={className}>{display}</span>;
}

const CRTOverlay = () => (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
        {/* Flicker */}
        <div className="absolute inset-0 bg-white/5 animate-[flicker_0.15s_infinite] pointer-events-none" />
    </div>
);

const ProcessCard = ({ step, i }: { step: { id: string, title: string, en: string, desc: string }, i: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 mb-20 group ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
        >
            {/* TEXT CONTENT */}
            <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'justify-end md:text-right' : 'justify-start md:text-left'} order-2 md:order-1 items-center`}>
                <div className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:border-cyber-primary group-hover:bg-cyber-primary/5 group-hover:shadow-[0_0_30px_rgba(13,242,89,0.1)]`}>
                    {/* Hover Hologram Effect for Box */}
                    <div className="absolute -right-10 -top-10 w-20 h-20 border border-cyber-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_5s_linear_infinite]"></div>
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 border border-cyber-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_8s_linear_infinite_reverse]"></div>

                    <div className={`text-cyber-primary font-mono text-xs mb-2 opacity-50 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        // STEP_{step.id} // {step.en}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors flex items-center gap-2 md:block">
                        <span className="md:hidden text-cyber-primary font-mono text-sm">{step.id}.</span>
                        <ScrambleText text={step.title} trigger={isHovered} />
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {step.desc}
                    </p>
                </div>
            </div>

            {/* CENTER NODE */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 top-0 size-12 z-20 flex items-center justify-center">
                <div className="relative size-full bg-black rounded-full border-2 border-white/20 group-hover:border-cyber-primary transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-125 duration-300">
                    <div className="absolute inset-0 rounded-full bg-cyber-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center justify-center w-full h-full text-white font-mono font-bold text-sm z-10 group-hover:text-cyber-primary">
                        {step.id}
                    </div>
                    {/* Orbiting Ring */}
                    <div className="absolute inset-[-4px] border border-cyber-primary/50 rounded-full border-t-transparent border-l-transparent opacity-0 group-hover:opacity-100 animate-[spin_2s_linear_infinite]"></div>
                </div>
            </div>

            {/* SPACER */}
            <div className="md:w-1/2 order-3 md:order-2"></div>
        </motion.div>
    );
};


// Font Configuration moved to layout.tsx for optimal loading
// Using inherited CSS variables: --font-space-grotesk, --font-noto-sans-jp

export default function TestTopPage() {
    return (
        <div className="font-body bg-[#020617] text-white selection:bg-cyber-primary selection:text-black min-h-screen overflow-x-hidden">
            <style jsx global>{`
                @keyframes terminal-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
            {/* External Resources: Material Symbols loaded in layout.tsx */}

            {/* Main Content */}
            {/* Main Content */}
            {/* Header removed to use Global Header from layout.tsx */}

            <header className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
                {/* Cyber Grid Background */}
                <div className="absolute inset-0 bg-cyber-lines opacity-20 pointer-events-none z-0"></div>
                {/* Radial Mask for Grid */}
                <div className="absolute inset-0 bg-cyber-bgDark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] z-0 pointer-events-none"></div>

                {/* Enhanced Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,rgba(13,242,89,0.15),transparent)] pointer-events-none z-0"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-cyber-deepEmerald/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

                {/* MOBILE: Hero Background - LCP optimized */}
                <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
                    <Image
                        src="/image_f58bc3.jpg"
                        alt="Hero Background"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        quality={60}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAQMEAgIDAAAAAAAAAAAAAQIDBAUGEQcSABMhQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBEQCEAPwCk3M8e0+Qaq1F/cJMaQ4hDy2ykpQvskrI+yMHx9dPOw6o6mQlUlm0k9e4kLJUCPH39+A0k//Z"
                        className="object-cover opacity-40 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
                </div>


                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 flex flex-col gap-6 relative z-20">
                        <div className="flex items-center gap-3 text-cyber-primary/80 font-mono text-xs tracking-[0.2em] mb-2">
                            <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse shadow-[0_0_8px_#0df259]"></span>
                            <span>SYSTEM_READY: ONLINE</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-primary/30 bg-cyber-primary/5 rounded text-cyber-primary text-xs font-bold tracking-wide w-fit">
                            <span className="material-symbols-outlined text-sm">code</span>
                            <span>WordPressの常識を覆す、Next.js + microCMSによる次世代構成</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            <span className="block relative z-10 neon-text drop-shadow-xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>CVRが跳ねる、</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-primary to-emerald-400">次世代の<br />爆速LP制作</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white font-medium max-w-2xl bg-cyber-surfaceDark/80 backdrop-blur-sm border-l-4 border-cyber-primary pl-6 py-4 rounded-r-lg">
                            ビジネスの解像度を高める、戦略設計からのフルカスタマイズ
                            <span className="block text-sm text-gray-400 font-normal mt-2">圧倒的な技術力で、あなたのビジネスを加速させます。</span>
                        </p>

                        {/* MOBILE: Hero Image & Emblem (Interleaved) */}


                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a className="btn-glitch relative h-14 px-8 flex items-center justify-center bg-black/20 border-2 border-cyber-primary text-white font-bold text-lg rounded tracking-wider overflow-hidden group shadow-[0_0_20px_rgba(13,242,89,0.3)]" href="#contact">
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <span className="relative z-10">無料相談を申し込む</span>
                                <span className="material-symbols-outlined ml-2 relative z-10">rocket_launch</span>
                            </a>
                            <a className="h-14 px-8 flex items-center justify-center border border-white/20 text-white hover:bg-white/5 hover:border-cyber-primary/50 font-bold text-lg rounded tracking-wider transition-all" href="#works">
                                実績を見る
                            </a>
                        </div>
                        {/* 3 Benefits Section */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: "rocket_launch",
                                    title: "離脱させない「爆速表示」",
                                    desc: "表示待ちストレスをゼロにし、CVR（成約率）を最大化します。",
                                    delay: 0
                                },
                                {
                                    icon: "shield_lock",
                                    title: "ハッキング不能な「堅牢性」",
                                    desc: "WordPress不使用。軍事レベルの堅牢なセキュリティを実現。",
                                    delay: 0.1
                                },
                                {
                                    icon: "smartphone",
                                    title: "スマホで完結「直感更新」",
                                    desc: "専門知識不要。SNS感覚で更新でき、運用コストを削減します。",
                                    delay: 0.2
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                    viewport={{ once: true }}
                                    className="bg-black/40 backdrop-blur-md border border-cyber-primary/30 p-4 rounded-lg group hover:bg-cyber-primary/10 transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="relative flex items-center justify-center size-10 rounded-full bg-cyber-primary/10 text-cyber-primary group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_10px_rgba(13,242,89,0.3)]">
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                        </div>
                                        <h3 className="text-white font-bold text-base leading-tight group-hover:text-cyber-primary transition-colors">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-cyber-primary/20 pl-3">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* MOBILE: Emblem (Static Positioning below Benefits) */}
                        <div className="flex flex-col items-center lg:hidden mt-6 mb-8 relative z-30 animate-hologram">
                            <div className="relative size-32 rounded-full border-2 border-cyber-primary/60 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_40px_rgba(13,242,89,0.5)] text-center">
                                <div className="absolute inset-0 rounded-full border border-cyber-primary animate-[spin_4s_linear_infinite] opacity-50 border-t-transparent border-l-transparent"></div>
                                <span className="material-symbols-outlined text-cyber-primary text-2xl mb-0 animate-pulse">speed</span>
                                <div className="text-2xl font-bold text-white font-display neon-text">90+</div>
                                <div className="text-[8px] text-cyber-primary font-bold font-mono leading-tight">SCORE<br />GUARANTEED</div>
                            </div>
                            <div className="text-[10px] text-cyber-primary/70 font-mono mt-3 tracking-widest uppercase">Powered by Next.js & AI</div>
                        </div>
                    </div>

                    {/* DESKTOP: Hero Image (Hidden on Mobile) */}
                    <div className="hidden lg:flex lg:col-span-6 relative h-[800px] w-full items-center justify-center perspective-1000">
                        {/* Desktop Emblem: Restored to Bottom Right */}
                        <div className="absolute bottom-24 right-10 z-30 animate-hologram">
                            <div className="relative">
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-32 bg-gradient-to-t from-cyber-primary/20 to-transparent blur-md transform origin-bottom scale-y-150" style={{ clipPath: "polygon(20% 100%, 80% 100%, 100% 0, 0 0)" }}></div>
                                <div className="relative size-40 rounded-full border-2 border-cyber-primary/60 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_40px_rgba(13,242,89,0.4)] text-center group">
                                    <div className="absolute inset-0 rounded-full border border-cyber-primary animate-[spin_4s_linear_infinite] opacity-50 border-t-transparent border-l-transparent"></div>
                                    <div className="absolute inset-2 rounded-full border border-dashed border-cyber-primary/30 animate-[spin_10s_linear_infinite_reverse]"></div>
                                    <span className="material-symbols-outlined text-cyber-primary text-3xl mb-1 animate-pulse">speed</span>
                                    <div className="text-4xl font-bold text-white font-display neon-text">90+</div>
                                    <div className="text-[10px] text-cyber-primary font-bold font-mono leading-tight mt-1">SCORE GUARANTEED<br />Google PageSpeed</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-full">
                            {/* Enhanced Radial Glow Effect for Hero */}
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0df259]/50 via-transparent to-transparent blur-3xl scale-125 translate-x-10 translate-y-10 animate-pulse-slow"></div>

                            {/* Hero Image with Floating Animation */}
                            <div className="absolute inset-0 z-10 w-full h-full animate-float">
                                <Image
                                    src="/image_f58bc3.jpg"
                                    alt="Cyber Frog Hero"
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 1024px) 0px, 700px"
                                    quality={60}
                                    className="object-cover mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)]"
                                />
                            </div>

                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <div className="absolute top-1/4 right-10 w-32 h-32 border border-cyber-primary/30 rounded-full opacity-40 border-dashed animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute bottom-1/3 left-10 w-20 h-1 bg-cyber-primary/50"></div>
                                <div className="absolute top-20 right-20 text-[10px] font-mono text-cyber-primary/70 typing-effect">
                                    &gt; TARGET_LOCKED<br />
                                    &gt; OPTIMIZING_ASSETS...<br />
                                    &gt; CVR_BOOST_INITIATED
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyber-bgDark via-cyber-bgDark/80 to-transparent z-10"></div>
                        </div>
                    </div>
                </div>
            </header>
            {/* FEATURES SECTION: REVERTED TO INITIAL NEON SCAN */}
            <section className="py-24 relative bg-cyber-bgDark border-t border-cyber-primary/10" id="features">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary/30 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">CORE_VALUES.SYS</span>
                        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter mb-4 block">選ばれる6つの理由</h2>
                        <p className="text-gray-400 text-base max-w-2xl border-l-2 border-cyber-primary/30 pl-4 py-1 mb-12 block">従来の制作会社とは一線を画す、エンジニアリング主導の制作。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "layers", title: "「あえて」WordPressを使いません", desc: "世界中のプロが今選んでいる「ヘッドレス構成（Next.js）」を採用。WordPress特有の「重さ」「セキュリティ不安」から解放されます。" },
                            { icon: "rocket_launch", title: "Google評価に直結する「爆速表示」", desc: "読み込みが1秒遅れるだけで、30%以上のユーザーが離脱すると言われています。FROG Studioの制作サイトは、スピードテストで高得点を保証します。" },
                            { icon: "psychology", title: "心理学に基づいた「売れる」デザイン", desc: "行動経済学や心理学のフレームワークをAIで分析。ユーザーが思わずクリックしたくなる構成案を無料で提示します。" },
                            { icon: "smartphone", title: "管理画面がシンプルで使いやすい", desc: "複雑なWordPressの管理画面は不要です。スマホからSNSを投稿する感覚で、お知らせや実績を更新できる専用画面をご用意します。" },
                            { icon: "verified_user", title: "将来のアプリ化もスムーズ", desc: "最新のプログラミング言語で構築するため、将来的にスマホアプリを作りたい際もデータをそのまま活用可能です。" },
                            { icon: "bolt", title: "AI×自動化で圧倒的スピード納品", desc: "最新のAIツールと自動化技術を駆使し、高品質なサイトを驚きのスピードで納品。最短翌日でプロ品質のLPが完成します。" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                className="group relative bg-cyber-surfaceLight/30 border border-white/5 p-8 rounded-lg overflow-hidden"
                                variants={{
                                    initial: { borderColor: "rgba(255,255,255,0.05)", boxShadow: "0 0 0 rgba(0,0,0,0)" },
                                    hover: { borderColor: "#0df259", boxShadow: "0 0 20px rgba(13,242,89,0.3), inset 0 0 10px rgba(13,242,89,0.1)" }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* HUD Corners - Expanding Effect */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-10 box-border"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-10 box-border"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-10 box-border"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-10 box-border"></div>

                                {/* Scan Effect */}
                                <motion.div
                                    variants={{
                                        initial: { top: "-100%", opacity: 0 },
                                        hover: { top: "200%", opacity: 1 }
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyber-primary/20 to-transparent skew-y-12 pointer-events-none"
                                />

                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-4xl text-cyber-primary">{item.icon}</span>
                                </div>
                                <div className="size-12 rounded bg-cyber-primary/10 flex items-center justify-center text-cyber-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <motion.h4
                                    className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyber-primary"
                                >
                                    {item.title}
                                </motion.h4>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* NEW SECTION: WHY NO WORDPRESS (TECH WARNING - AMBER THEME) */}
            < section className="py-24 relative bg-black overflow-hidden" id="why-no-wordpress" >
                <CRTOverlay />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="border border-amber-500/30 bg-amber-950/10 rounded-xl p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 bg-amber-500 text-black font-mono text-xs font-bold px-4 py-1">TECH BRIEFING // SECURITY_PROTOCOL</div>
                        <div className="absolute top-4 right-4 animate-pulse">
                            <span className="material-symbols-outlined text-amber-500">warning</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-6 font-mono tracking-tighter">
                                    <ScrambleText text="WARNING: LEGACY SYSTEM DETECTED" />
                                </h2>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                                    <ScrambleText text="なぜWordPressを使わないのか？" />
                                </h3>
                                <div className="space-y-4 text-gray-300 leading-relaxed font-mono text-sm md:text-base">
                                    <p>
                                        WordPressは世界で最も使われているCMSですが、
                                        <span className="text-amber-400 border-b border-amber-500/50">プラグインの脆弱性</span>や
                                        <span className="text-amber-400 border-b border-amber-500/50">ページ速度の低下</span>
                                        が常に指摘されています。
                                    </p>
                                    <p>
                                        FROG Studioはこれらの課題を根本から解決する
                                        <span className="text-cyber-primary font-bold mx-1 p-1 bg-cyber-primary/10 rounded">ヘッドレス構成 (Next.js)</span>
                                        を採用。表示速度とセキュリティを劇的に改善します。
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Comparison: House vs Building */}
                                <div className="bg-black/80 border border-white/10 p-6 rounded-lg relative opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="absolute -left-3 top-[-10px] bg-gray-700 text-xs px-2 py-1 rounded">WordPress</div>
                                    <div className="flex gap-4 items-start">
                                        <span className="text-3xl grayscale opacity-70">🏚️</span>
                                        <div>
                                            <h4 className="text-gray-400 font-bold mb-1">メンテナンスが必要な木造住宅</h4>
                                            <p className="text-xs text-gray-500">常に改修工事（プラグイン更新）が必要。放置すると崩壊のリスク。</p>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    className="bg-cyber-deepEmerald/20 border border-cyber-primary p-6 rounded-lg relative shadow-[0_0_20px_rgba(13,242,89,0.2)]"
                                >
                                    <div className="absolute -left-3 top-[-10px] text-yellow-300 font-bold text-xs px-2 py-1 rounded drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] bg-black border border-yellow-300/30">FROG Studio</div>
                                    <div className="flex gap-4 items-start">
                                        <span className="text-3xl">🏢</span>
                                        <div>
                                            <h4 className="text-yellow-400 font-black mb-1 text-lg drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">メンテナンスフリーな鉄筋ビル</h4>
                                            <p className="text-sm text-cyber-primary font-bold">一度建てれば頑丈。運用だけに集中できる堅牢なアーキテクチャ。</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* NEW SEO TECH MODULE */}
                        <div className="relative mt-8 border-t border-amber-500/30 pt-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="size-16 bg-amber-500/10 border border-amber-500/50 flex items-center justify-center rounded-lg flex-shrink-0 animate-pulse">
                                    <span className="material-symbols-outlined text-amber-500 text-3xl">monitoring</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-amber-500 mb-2 flex items-center gap-2">
                                        <span className="text-xs bg-amber-500 text-black px-1 rounded">MODULE_SEO</span>
                                        なぜ検索に強いのか？
                                    </h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Googleは<strong className="text-white">「ページの表示速度」</strong>を評価の最重要項目の一つとしています。
                                        当サービスのサイトはWordPressより圧倒的に速いため、検索結果でも有利になりやすく、<span className="border-b border-amber-500 text-white">お客様のビジネスチャンスを逃しません</span>。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NEW SECURITY TECH MODULE */}
                        <div className="relative mt-8 border-t border-amber-500/30 pt-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="size-16 bg-amber-500/10 border border-amber-500/50 flex items-center justify-center rounded-lg flex-shrink-0 animate-pulse">
                                    <span className="material-symbols-outlined text-amber-500 text-3xl">security</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-amber-500 mb-2 flex items-center gap-2">
                                        <span className="text-xs bg-amber-500 text-black px-1 rounded">CYBER_SECURITY.LOG</span>
                                        ハッキングを無効化する、静的サイトの要塞
                                    </h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        WordPressのような動的サイトと異なり、FROGStudioは「ヘッドレス構成」を採用しています。
                                        フロントエンドにPHPやデータベースが存在しないため、<strong className="text-white">データベースへの侵入やプログラムの改ざんといった従来の攻撃手法が物理的に通用しません</strong>。
                                        脆弱性を狙った攻撃からお客様の資産を守り抜き、<span className="border-b border-amber-500 text-white">メンテナンスフリーで高い安全性を維持します</span>。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <section className="py-24 relative overflow-hidden bg-cyber-surfaceDark" id="works">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,64,37,0.3),transparent_70%)]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">WORKS.DATA</span>
                        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter mb-4 block">制作実績</h2>
                        <p className="text-gray-400 text-base max-w-2xl border-l-2 border-cyber-primary/30 pl-4 py-1 mb-12 block">各プランで制作可能なサイトのクオリティをご確認いただけます。</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/works/daily-fit" className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer block">
                            {/* Cyber Image (Default: Colorful & Visible) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuNA0JCxP-ZLz5l4km6JjxanFsx38eMWaT_rG86Fi4922VvP0tbzLMfBytm9LfYDsUHBHhcaGY91DkkBX3cUfZjeoP35O-lrZNT719-_O5fc3si2U58gw2Mx-cZB2dz7568UXGfkJKYxnx1rOf2nensYV5bCIMhF6yNW8mbiG216iGXgn0pchXCgOKjKbnp7J5mh8IzxdragNz0NZj7q8pDLZde-a0z0Yk-dtsAo2JlCi_tMmSN_KhvILtfDoSWMDOBaDZt34nnDY')" }}></div>
                            {/* Real Project Image (Hover) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" style={{ backgroundImage: "url('/images/dailyfit/hero_vivid.png')" }}></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-cyber-deepEmerald/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 border-t border-cyber-primary/50 backdrop-blur-[2px]">
                                <h4 className="text-2xl font-bold text-white mb-1">Daily Fit</h4>
                                <p className="text-white text-sm font-medium">一流シェフと管理栄養士が贈る、健康食宅配の最適解</p>
                            </div>

                            {/* Static Content (Disappears on Hover) */}
                            <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-300 group-hover:opacity-0">
                                <h4 className="text-xl font-bold text-white">LIGHTプラン 制作見本</h4>
                                <p className="text-gray-400 text-xs font-mono">1 PAGE LP</p>
                            </div>
                        </Link>
                        <Link href="/works/kohaku" className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer block">
                            {/* Cyber Image (Default: Colorful & Visible) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1ycKJ7vLhIOgl4dBNmiO05JPPT5HHCa_zWJ7jpvzGacQ1k8g7JqH73EIB3Yltj1QUqnvoqLOKsEzaFrXaKWjWec4_1uNwInfE1pbctbAMBimcOJR5JrKs00y9ybvY35tcDdeJE7RbUBnDscg1lyilIFZAvDGA8GXS_MCKo75Os07Bz4vSC4Gab6JDGyT1FrRWB7N4uf6EY_u4YnG3CU1h2BHxI-3PfWttQ_bo5bhZoCMnJHbtI3eogVJJzcebGSVxhevmJggeHGA')" }}></div>
                            {/* Real Project Image (Hover) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" style={{ backgroundImage: "url('/kohaku/hero_grand.png')" }}></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-cyber-deepEmerald/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 border-t border-cyber-primary/50 backdrop-blur-[2px]">
                                <h4 className="text-2xl font-bold text-white mb-1">高級喫茶 琥珀</h4>
                                <p className="text-white text-sm font-medium">百年の時を刻む、静寂と品格のブランドサイト</p>
                            </div>

                            {/* Static Content (Disappears on Hover) */}
                            <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-300 group-hover:opacity-0">
                                <h4 className="text-xl font-bold text-white">STANDARDプラン 制作見本</h4>
                                <p className="text-gray-400 text-xs font-mono">5 PAGES BRANDING</p>
                            </div>
                        </Link>

                        {/* STELLAR FITNESS - STANDARD Plan */}
                        <Link href="/works/stellar" className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer block">
                            {/* Cyber Image (Default: Gold/Black Neon Theme) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0"
                                style={{
                                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuNA0JCxP-ZLz5l4km6JjxanFsx38eMWaT_rG86Fi4922VvP0tbzLMfBytm9LfYDsUHBHhcaGY91DkkBX3cUfZjeoP35O-lrZNT719-_O5fc3si2U58gw2Mx-cZB2dz7568UXGfkJKYxnx1rOf2nensYV5bCIMhF6yNW8mbiG216iGXgn0pchXCgOKjKbnp7J5mh8IzxdragNz0NZj7q8pDLZde-a0z0Yk-dtsAo2JlCi_tMmSN_KhvILtfDoSWMDOBaDZt34nnDY')",
                                    filter: "sepia(1) hue-rotate(10deg) brightness(0.8) contrast(1.2)",
                                }}>
                            </div>
                            {/* Real Project Image (Hover) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" style={{ backgroundImage: "url('/works/stellar/gallery/private-lounge.png')" }}></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-[#D4AF37]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 border-t border-[#D4AF37]/50 backdrop-blur-[2px]">
                                <h4 className="text-2xl font-bold text-white mb-1">STELLAR FITNESS</h4>
                                <p className="text-white text-sm font-medium">究極のパーソナルトレーニング空間</p>
                            </div>

                            {/* Static Content (Disappears on Hover) */}
                            <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-300 group-hover:opacity-0">
                                <h4 className="text-xl font-bold text-white">STANDARDプラン 制作見本</h4>
                                <p className="text-gray-400 text-xs font-mono">PREMIUM GYM BRANDING</p>
                            </div>
                        </Link>

                        {/* Placeholder 2 */}
                        <div className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer block">
                            {/* Cyber Image (Remastered: Cyan/Blue Neon, Mirrored Composition, High Brightness) */}
                            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-md"
                                style={{
                                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1ycKJ7vLhIOgl4dBNmiO05JPPT5HHCa_zWJ7jpvzGacQ1k8g7JqH73EIB3Yltj1QUqnvoqLOKsEzaFrXaKWjWec4_1uNwInfE1pbctbAMBimcOJR5JrKs00y9ybvY35tcDdeJE7RbUBnDscg1lyilIFZAvDGA8GXS_MCKo75Os07Bz4vSC4Gab6JDGyT1FrRWB7N4uf6EY_u4YnG3CU1h2BHxI-3PfWttQ_bo5bhZoCMnJHbtI3eogVJJzcebGSVxhevmJggeHGA')",
                                    filter: "hue-rotate(190deg) brightness(1.3) contrast(1.1) saturate(1.2)",
                                    transform: "scaleX(-1)"
                                }}>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-cyber-deepEmerald/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 border-t border-cyber-primary/50 backdrop-blur-[2px]">
                                <h4 className="text-2xl font-bold text-white mb-1 font-mono tracking-wider">UNDER DEVELOPMENT</h4>
                                <p className="text-white text-sm font-medium">現在、AIとプロの調和による新たな制作実績を構築中。近日公開予定。</p>
                            </div>

                            {/* Static Content (Disappears on Hover) */}
                            <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-300 group-hover:opacity-0">
                                <h4 className="text-xl font-bold text-white font-mono tracking-wider">Coming Soon...</h4>
                                <p className="text-gray-400 text-xs font-mono">次世代制作見本</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION: REVOLUTIONIZED */}
            <section className="py-24 relative bg-black overflow-hidden" id="process">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,242,89,0.03),transparent_70%)] pointer-events-none"></div>
                <div className="absolute inset-0 z-0 bg-cyber-lines opacity-10 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="mb-24">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">PROCESS.EXE</span>
                        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter mb-4 block">制作の流れ</h2>
                        <p className="text-gray-400 text-base max-w-2xl border-l-2 border-cyber-primary/30 pl-4 py-1 mb-12 block">お客様の時間を極力奪わない、最適化されたプロセス。</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line with Energy Pulse */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -ml-[1px] md:transform md:-translate-x-1/2 overflow-hidden z-0">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyber-primary to-transparent"
                                animate={{ top: ["-50%", "150%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {[
                            { id: "01", title: "ヒアリングシート入力", en: "INPUT_DATA", desc: "情報をテキストでポチポチ送るだけ。24時間いつでも入力可能です。画像やロゴもこの時点でUPします。" },
                            { id: "02", title: "チャットでの内容確認", en: "VERIFY_SCOPE", desc: "LINEやメールで隙間時間にやり取り。ZOOM等の拘束時間はゼロ。非同期コミュニケーションで効率化。" },
                            { id: "03", title: "爆速制作・公開", en: "DEPLOY_SYSTEM", desc: "最短翌日にはお手元へ。対面打ち合わせを排除したからこそ実現できる、圧倒的なスピードとコストパフォーマンス。" },
                            { id: "04", title: "データで育てる、終わらない成長", en: "GROWTH_LOOP.LOG", desc: "全プランにアクセス解析を標準装備。数字は嘘をつきません。今のサイトの強みと弱みを可視化し、次の一手をデータに基づいて判断できます。改善が必要になった時は、いつでもFROG Studioにご相談ください。プロの視点で最適なチューニングを提案します。" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 mb-20 group ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* TEXT CONTENT */}
                                <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'justify-end md:text-right' : 'justify-start md:text-left'} order-2 md:order-1 items-center`}>
                                    <div className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl w-full md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:border-cyber-primary group-hover:bg-cyber-primary/5 group-hover:shadow-[0_0_30px_rgba(13,242,89,0.1)]`}>
                                        {/* Hover Hologram Effect for Box */}
                                        <div className="absolute -right-10 -top-10 w-20 h-20 border border-cyber-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_5s_linear_infinite]"></div>
                                        <div className="absolute -left-10 -bottom-10 w-32 h-32 border border-cyber-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-[spin_8s_linear_infinite_reverse]"></div>

                                        <div className={`text-cyber-primary font-mono text-xs mb-2 opacity-50 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                                            // STEP_{step.id} // {step.en}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors flex items-center gap-2 md:block">
                                            <span className="md:hidden text-cyber-primary font-mono text-sm">{step.id}.</span>
                                            <ScrambleText text={step.title} trigger={true} />
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* CENTER NODE */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 top-0 size-12 z-20 flex items-center justify-center">
                                    <div className="relative size-full bg-black rounded-full border-2 border-white/20 group-hover:border-cyber-primary transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-125 duration-300">
                                        <div className="absolute inset-0 rounded-full bg-cyber-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="flex items-center justify-center w-full h-full text-white font-mono font-bold text-sm z-10 group-hover:text-cyber-primary">
                                            {step.id}
                                        </div>
                                        {/* Orbiting Ring */}
                                        <div className="absolute inset-[-4px] border border-cyber-primary/50 rounded-full border-t-transparent border-l-transparent opacity-0 group-hover:opacity-100 animate-[spin_2s_linear_infinite]"></div>
                                    </div>
                                </div>

                                {/* SPACER */}
                                <div className="md:w-1/2 order-3 md:order-2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative bg-cyber-surfaceDark border-y border-white/5" id="pricing">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">PRICING.MDL</span>
                        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter mb-4 block">料金プラン</h2>
                        <p className="text-gray-400 text-base max-w-2xl border-l-2 border-cyber-primary/30 pl-4 py-1 mb-12 block">透明性の高い価格設定で、ビジネスの成長を支援します。</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                name: "LIGHT",
                                sub: "爆速1ページLP",
                                price: "19,800",
                                features: ["1ページ完結の洗練されたLP", "スマホ・タブレット表示に完全対応", "お問い合わせフォーム設置", "基本的なSEO対策", "🤖 AI Visibility対策済", "🤖 AAO（AIエージェント最適化）対応"],
                                delivery: "最短翌日納品",
                                isPopular: false,
                                bonus: "[FREE] アクセス解析標準装備 (GA4・サーチコンソール初期設定)"
                            },
                            {
                                name: "STANDARD",
                                sub: "信頼を築く王道プラン",
                                price: "49,800",
                                features: ["最大5ページ構成（トップ + 4ページ）", "microCMS連携（お知らせ・ブログ更新）", "モダンなアニメーション実装", "検索に強い高速表示設計", "緻密な内部SEO最適化", "🤖 AI Visibility対策済", "🤖 AAO（AIエージェント最適化）対応"],
                                delivery: "最短5日納品",
                                isPopular: true,
                                bonus: "[FREE] アクセス解析標準装備 (GA4・サーチコンソール初期設定)"
                            },
                            {
                                name: "PREMIUM",
                                sub: "ブランド価値を最大化するフルスペック",
                                price: "98,000",
                                features: ["10ページ設計", "完全カスタムデザイン & ブランディング", "最高峰のUI/UXデザイン", "PageSpeed Insights 高スコア保証", "microCMS高度連携（カスタム投稿・マルチ管理）", "運用管理マニュアル・個別レクチャー付", "専用APIエンドポイント構築・最適化", "🤖 AI Visibility対策済", "🤖 AAO（AIエージェント最適化）対応"],
                                delivery: "最短10日納品",
                                isPopular: false,
                                bonus: "[FREE] アクセス解析標準装備 (GA4・サーチコンソール初期設定)"
                            }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 group ${plan.isPopular
                                    ? 'bg-cyber-deepEmerald/10 border-2 border-[#0df259] shadow-[0_0_20px_rgba(13,242,89,0.3)] z-10 scale-105'
                                    : 'bg-cyber-bgDark border border-white/10 hover:border-cyber-primary/50'
                                    }`}
                                variants={{
                                    initial: { scale: plan.isPopular ? 1.05 : 1, boxShadow: plan.isPopular ? "0 0 30px rgba(13,242,89,0.15)" : "0 0 0 rgba(0,0,0,0)" },
                                    hover: {
                                        scale: plan.isPopular ? 1.08 : 1.03,
                                        boxShadow: "0 0 40px rgba(13,242,89,0.4), inset 0 0 20px rgba(13,242,89,0.1)"
                                    }
                                }}
                            >
                                {/* HUD Corners - Expanding Effect */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-0 rounded-tl-xl"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-0 rounded-tr-xl"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-0 rounded-bl-xl"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:w-full group-hover:h-full group-hover:border-cyber-primary/50 transition-all duration-500 ease-out z-0 rounded-br-xl"></div>

                                {/* Scan Effect */}
                                <motion.div
                                    variants={{
                                        initial: { top: "-100%", opacity: 0 },
                                        hover: { top: "200%", opacity: 1 }
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-cyber-primary/10 to-transparent skew-y-12 pointer-events-none z-0"
                                />

                                {plan.isPopular && (
                                    <div className="absolute -top-5 translate-y-[2px] left-1/2 -translate-x-1/2 bg-[#0df259] border border-[#0df259] shadow-[0_0_30px_#0df259] text-black text-sm font-black px-6 py-1.5 rounded-full z-50 whitespace-nowrap tracking-wider">
                                        🚀 おすすめ
                                    </div>
                                )}

                                <div className="mb-6 relative z-10">
                                    <h3 className={`text-xl font-black ${plan.isPopular ? 'text-cyber-primary' : 'text-white'}`}>{plan.name}</h3>
                                    <p className="text-xs text-gray-400 font-mono mt-2 mb-4 h-8">{plan.sub}</p>
                                    <div className="text-4xl font-bold text-white tracking-tight flex items-baseline">
                                        <span className="text-2xl mr-1">¥</span>
                                        {plan.price}
                                        <span className="text-sm text-gray-500 font-normal ml-2">(税込)</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 flex-1 relative z-10 flex flex-col">
                                    <div className="flex-grow min-h-[320px]">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3 text-sm text-gray-300 items-start mb-3">
                                                <span className="material-symbols-outlined text-cyber-primary text-lg shrink-0">check_circle</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {plan.bonus && (
                                        <div className="flex gap-2 text-sm text-orange-300 font-bold bg-orange-500/20 border border-orange-500/50 p-3 rounded mt-auto items-center animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                            <span className="material-symbols-outlined text-lg">monitoring</span>
                                            {plan.bonus}
                                        </div>
                                    )}

                                    <div className="flex gap-3 text-sm text-gray-400 mt-6 pt-6 border-t border-white/10 items-center">
                                        <span className="material-symbols-outlined text-yellow-400 text-lg">bolt</span>
                                        {plan.delivery}
                                    </div>
                                </div>

                                <button className={`w-full py-4 rounded font-bold text-sm tracking-wider transition-all relative overflow-hidden group/btn ${plan.isPopular
                                    ? 'bg-cyber-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                                    : 'border border-white/20 text-white hover:bg-white/10 hover:border-cyber-primary/50'
                                    }`}>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        SELECT_PLAN
                                        <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </span>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* NEW OPTIONS SECTION: CYBER MODULES */}
                    <div className="border-t border-cyber-primary/20 pt-16">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="material-symbols-outlined text-cyber-primary text-3xl animate-spin-slow">settings</span>
                            <h3 className="text-2xl font-bold text-white font-mono tracking-wider">
                                SYSTEM_EXTENSIONS <span className="text-gray-500 text-base ml-2">// オプションメニュー</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "1ページ追加", desc: "構成やコンテンツ量に応じて最適なレイアウトでページを追加制作します。", price: "¥10,000", unit: "(税抜)/回", icon: "note_add" },
                                { title: "データ分析レポート", desc: "サイトの数値をプロが分析し、翌月の改善案をまとめたPDFレポートを提出します。", price: "¥3,000", unit: "(税抜)/回", icon: "analytics" },
                                { title: "プロによる改善提案・保守", desc: "分析データに基づき、エンジニアが軽微なテキスト修正やコード最適化を実施。", price: "¥10,000", unit: "(税抜)/回", icon: "engineering" },
                                { title: "アカウント開設・公開セットアップ", desc: "GitHub、Vercel、microCMS のアカウント作成から連携、デプロイまでを完結させ、納品時に全てのアカウントをお渡しします。", price: "¥15,000", unit: "(税抜)/回", icon: "deployed_code" },
                                { title: "独自ドメイン・既存サイト連携", desc: "お持ちのドメインの活用や、新規取得のアドバイス、接続設定を行います。", price: "¥5,000", unit: "(税抜)/回", icon: "dns" }
                            ].map((opt, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(13,242,89,0.05)" }}
                                    className="group flex flex-col justify-between p-6 rounded border border-cyber-primary/30 bg-black/50 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-4xl text-cyber-primary">{opt.icon}</span>
                                    </div>
                                    <div className="absolute inset-0 border border-cyber-primary/0 group-hover:border-cyber-primary/50 transition-colors duration-300 rounded pointer-events-none"></div>

                                    <div>
                                        <div className="flex items-center gap-2 text-cyber-primary mb-3">
                                            <span className="material-symbols-outlined text-xl">{opt.icon}</span>
                                            <span className="text-xs font-mono border border-cyber-primary/30 px-2 py-0.5 rounded text-cyber-primary/70">MODULE_0{i + 1}</span>
                                        </div>
                                        <h4 className="font-bold text-white mb-2">{opt.title}</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed mb-4">{opt.desc}</p>
                                    </div>
                                    <div className="text-right border-t border-white/10 pt-3">
                                        <span className="text-xl font-bold text-white">{opt.price}</span>
                                        <span className="text-xs text-gray-500 ml-1">{opt.unit}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black relative overflow-hidden border-t border-cyber-primary/20" id="faq">
                <CRTOverlay />
                <div className="max-w-3xl mx-auto px-6 relative z-20">
                    <div className="mb-12">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">TERMINAL_ACCESS_<span className="animate-[terminal-blink_1s_step-end_infinite]">_</span></span>
                        <h2 className="text-white font-bold text-4xl md:text-5xl tracking-tighter mb-4 block">よくある質問</h2>
                        <p className="text-gray-400 text-base max-w-2xl border-l-2 border-cyber-primary/30 pl-4 py-1 mb-12 block">FROG Studioの技術仕様とサービスに関する回答。</p>
                    </div>
                    <div className="space-y-4 font-mono">
                        {[
                            { q: "AI Visibility対策とは何ですか？", a: "ChatGPTやPerplexity、GoogleのAI検索など「AIに質問して答えをもらう」時代が来ています。AI Visibility対策とは、こうしたAIがあなたのサービスを正しく理解し、ユーザーに推薦してくれるようにサイトを最適化することです。従来のSEO（Google検索対策）に加えて、AI時代の新しい集客チャンネルを確保します。FROG Studioでは全プランで標準装備しています。" },
                            { q: "AAO（AIエージェント最適化）とは？", a: "AAOとは「AI Agent Optimization」の略で、AIアシスタントがあなたのサービス情報を正確に読み取れるようにする技術です。料金、特徴、よくある質問などを「AIが理解しやすい形式」で構造化することで、AIがユーザーに「このサービスがおすすめです」と紹介しやすくなります。これにより、広告費をかけずにAI経由の問い合わせ獲得が期待できます。" },
                            { q: "CMSとは何ですか？", a: "「SNSのように、専門知識がなくてもホームページを更新できる仕組み」のことです。FROG Studioでは世界中で選ばれている「microCMS」を採用しています。お客様専用のログイン画面から、スマホで文字を変える感覚でいつでも情報を更新いただけます。" },
                            { q: "プランにある「SEO」とは何ですか？", a: "「検索エンジン最適化」の略称です。簡単に言うと、「Googleなどの検索結果で、あなたのサイトを上のほうに表示させるための工夫」のことです。FROG Studioでは、最新の技術（Next.js）を使い、広告費をかけなくてもお客さまに見つけてもらいやすい「検索に強い土台」を標準で構築します。" },
                            { q: "打ち合わせは必要ですか？", a: "いいえ、一切不要です。その秘密は「計算し尽くされたヒアリングシート」にあります。お忙しいお客様の貴重な時間を1時間、2時間と奪うことはありません。FROG Studioのヒアリングシートは、行動心理学に基づき、「お客様も気づいていない強み」をAIとプロが抽出できるよう緻密に設計されています。ポチポチと回答するだけで、1時間のWeb会議以上に濃密な情報が整理され、結果として「CVRが跳ねる（成約率が高まる）」最強の構成案が自動的に導き出されます。" },
                            { q: "ホームページ制作後の維持費は？", a: "月額の管理費用はかかりません。お客様にご負担いただくのは、サイトの「住所」にあたるドメイン代の実費（年間数千円程度）のみです。従来のサイト制作（WordPressなど）では、システムを維持するためのサーバー管理やセキュリティ更新に月額費用がかかるのが一般的でした。しかし、FROG Studioでは「保守・管理が不要な最新の仕組み（ヘッドレス構成）」を採用しているため、制作後のランニングコストを極限まで抑えることが可能です。" },
                            { q: "追加費用がかかるのではと不安です。", a: "お見積り以上の金額をいただくことはありません。システム更新料なども不要なため、むしろ従来のサイトより安く運用いただけます。" },
                            { q: "こちらで準備するものはありますか？", a: "載せたい写真（スマホ写真でOK！）と、簡単なサービス紹介文だけで大丈夫です。難しい設定や「何を書いていいか分からない」という部分は、AIと私でしっかりサポートしますので、丸投げに近い形でも進められます。" },
                            { q: "スマホ対応はしていますか？", a: "はい、標準で「レスポンシブ対応」を行っております。iPhoneやAndroid、PCなど、どんな端末で見ても崩れず、爆速で表示されることを保証します。" },
                            { q: "自分で更新できるの？", a: "はい、WordPressより簡単です！専用のシンプルな管理画面（microCMS）をご用意しますので、SNSを投稿する感覚で文字や画像をいつでも自由に変えられます。" },
                            { q: "サーバーの契約が難しそうですが…", a: "ご安心ください。複雑な手続きは一切不要です。無料で使える最新の公開システムの設定はすべてこちらで代行します。お客様はドメイン（住所）を決めるだけでOKです。" },
                            { q: "制作会社が消えたらどうなるの？", a: "世界標準の技術（Next.js）を使用しています。特殊な組み方ではなく、現代のWebの共通語で作っているため、万が一の際も他のエンジニアが簡単に引き継げます。" },
                            { q: "AIで作るとデザインが似通いませんか？", a: "AIは制作の効率化と品質向上のために活用しますが、デザインをAI任せにすることはありません。「FROG Studio」では既存のテンプレートを一切使用せず、お客様のご要望に合わせてゼロからレイアウトを構築・調整します。AIの爆速な処理能力とプロの繊細な調整を掛け合わせることで、他とは決して似通わない「世界にひとつだけのオリジナルサイト」を完成させます。" }
                        ].map((item, i) => (
                            <div key={i} className="group border border-cyber-primary/30 rounded bg-black/80 overflow-hidden hover:border-cyber-primary transition-colors duration-300">
                                <details className="w-full">
                                    <summary className="flex justify-between items-center p-4 cursor-pointer list-none hover:bg-cyber-primary/10 transition-colors">
                                        <div className="flex items-center text-cyber-primary/90 text-sm md:text-base">
                                            <span className="mr-2 text-cyber-primary">&gt;</span>
                                            {item.q}_
                                        </div>
                                        <span className="material-symbols-outlined text-cyber-primary/50 group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="p-4 pt-0 text-gray-400 text-sm pl-8 border-l border-cyber-primary/20 ml-4 mb-4">
                                        <span className="text-cyber-primary/50 mr-2 text-xs">RESPONSE &gt;&gt;</span>
                                        {item.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>






        </div >
    );
}
