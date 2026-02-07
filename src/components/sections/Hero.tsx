"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

// サイバーパーティクル
const CyberParticles = () => {
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: string;
        y: string;
        char: string;
        duration: number;
        delay: number;
    }>>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const chars = ["0", "1", "<", ">", "/", "{", "}", "=", ";"];
        const generated = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            char: chars[Math.floor(Math.random() * chars.length)],
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 4,
        }));
        setParticles(generated);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute text-emerald-500/20 font-mono text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ y: [0, -60], opacity: [0, 0.3, 0] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                    style={{ left: p.x, top: p.y }}
                >
                    {p.char}
                </motion.div>
            ))}
        </div>
    );
};

// 横長エンブレム（中身復元版）
const PageSpeedEmblem = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="relative flex-shrink-0"
    >
        {/* グロー効果 */}
        <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 via-emerald-400/20 to-amber-500/30 rounded-2xl blur-lg"
        />

        {/* エンブレム本体 */}
        <div
            className="relative px-5 py-3 rounded-xl flex items-center gap-3"
            style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(135deg, #1e293b, #0f172a), linear-gradient(135deg, #fbbf24, #22c55e, #fbbf24)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
        >
            {/* スピードメーター */}
            <div className="relative w-10 h-7 flex-shrink-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 border-t-[3px] border-l-[3px] border-r-[3px] border-emerald-400/70 rounded-t-full" />
                <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 55 }}
                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                    className="absolute bottom-0 left-1/2 origin-bottom w-0.5 h-4 bg-gradient-to-t from-amber-400 to-yellow-200 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    style={{ marginLeft: "-1px" }}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
            </div>

            {/* テキスト部分 */}
            <div className="text-left">
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-300 drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]">
                        90+
                    </span>
                    <span className="text-white font-bold text-sm">
                        高スコア保証
                    </span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                    <span className="text-emerald-400 text-xs font-medium">
                        Google PageSpeed Insights
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            {/* 背景グラデーション */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/95 to-emerald-950" />

            {/* サイバーブロブ */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-transparent rounded-full blur-[100px]"
            />

            <CyberParticles />

            {/* メインコンテンツ */}
            <div className="container relative mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 pt-20 pb-4 flex-grow flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">

                        {/* 左側：テキスト + ボタン + エンブレム */}
                        <div className="flex-1 text-center lg:text-left z-20 lg:pr-8">
                            {/* FROG Studioロゴ */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <h2
                                    className="text-4xl sm:text-5xl font-black tracking-tight"
                                    style={{
                                        color: "white",
                                        textShadow: "0 0 40px rgba(74, 222, 128, 0.6), 0 0 80px rgba(74, 222, 128, 0.3)",
                                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                                    }}
                                >
                                    FROG Studio
                                </h2>
                                <p className="text-white/80 text-sm mt-1">
                                    Creating the Future of Web, at Light Speed.
                                </p>
                            </motion.div>

                            {/* バッジ */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-4"
                            >
                                <Zap className="w-4 h-4" />
                                <span>CVRが跳ねる、次世代の爆速LP制作</span>
                            </motion.div>

                            {/* キャッチコピー */}
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-2"
                            >
                                そのLP、
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                                    重くないですか？
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-xl sm:text-2xl text-slate-300 font-medium mb-2"
                            >
                                FROG Studioは、爆速と心理学で
                            </motion.p>

                            {/* 勝てるサイト */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-2"
                            >
                                <span className="relative inline-block">
                                    <span className="absolute inset-0 blur-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 opacity-40" />
                                    <span className="relative text-3xl sm:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300">
                                        『勝てるサイト』
                                    </span>
                                </span>
                                <span className="text-xl sm:text-2xl text-white font-medium ml-2">を作ります。</span>
                            </motion.div>

                            {/* 丸投げOK */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="text-yellow-400 font-bold text-sm sm:text-base mb-3"
                            >
                                ✨ 丸投げOK！構成からデザインまでAIとプロが一貫対応
                            </motion.p>

                            {/* サブコピー */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-sm text-slate-400 mb-5"
                            >
                                WordPressの常識を覆す、<span className="font-bold text-cyan-400">Next.js + microCMS</span>による次世代構成。
                            </motion.p>

                            {/* ボタン + エンブレム */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
                            >
                                <Link
                                    href="#contact"
                                    className="group relative px-6 py-3 rounded-xl font-bold text-base flex items-center gap-2 transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(52, 211, 153, 0.3), rgba(34, 197, 94, 0.2))",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(52, 211, 153, 0.4)",
                                        boxShadow: "0 6px 24px rgba(52, 211, 153, 0.2)",
                                    }}
                                >
                                    <span className="text-white">無料相談する</span>
                                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                    }}
                                >
                                    料金を見る
                                </Link>

                                {/* 横長エンブレム */}
                                <PageSpeedEmblem />
                            </motion.div>

                            {/* 3つの特徴 - コンパクト横並び */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mt-4"
                            >
                                {[
                                    { icon: Zap, label: "爆速表示" },
                                    { icon: Shield, label: "高セキュリティ" },
                                    { icon: TrendingUp, label: "売れる設計" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-1.5 text-slate-400 text-sm"
                                    >
                                        <item.icon className="w-4 h-4 text-emerald-400" />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* 右側：カエル - 強いフェザー処理 */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 80 }}
                            className="relative flex-shrink-0 lg:-ml-12"
                        >
                            {/* 強い発光エフェクト - 背景融合 */}
                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-radial from-emerald-500/40 via-emerald-600/20 to-transparent blur-[100px]"
                            />

                            {/* デジタルパーティクル */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                    animate={{
                                        y: [0, -40, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0.5, 1.5, 0.5],
                                    }}
                                    transition={{
                                        duration: 2 + i * 0.3,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                    }}
                                    style={{
                                        left: `${20 + i * 10}%`,
                                        top: `${60 + (i % 3) * 10}%`,
                                    }}
                                />
                            ))}

                            {/* カエル背景画像 - 文字なし、境界線フェード */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/images/cyber-frog-bg.png"
                                    alt="FROG Studioサイバーマスコット"
                                    width={1000}
                                    height={560}
                                    className="w-[500px] sm:w-[580px] lg:w-[700px] h-auto object-contain"
                                    style={{
                                        filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.5))",
                                        maskImage: `
                                            linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%),
                                            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
                                        `,
                                        WebkitMaskImage: `
                                            linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)
                                        `,
                                        maskComposite: "intersect",
                                        WebkitMaskComposite: "source-in",
                                    }}
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
