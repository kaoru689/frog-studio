"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    ShieldCheck,
    Brain,
    Smartphone,
    Layers,
    Zap,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
    {
        icon: Layers,
        title: "「あえて」WordPressを使いません",
        description:
            "世界中のプロが今選んでいる「ヘッドレス構成（Next.js）」を採用。WordPress特有の「重さ」「セキュリティ不安」から解放されます。",
        color: "primary",
    },
    {
        icon: Rocket,
        title: "Google評価に直結する「爆速表示」",
        description:
            "読み込みが1秒遅れるだけで、30%以上のユーザーが離脱すると言われています。FROG Studioの制作サイトは、Googleのスピードテストで高得点を保証します。",
        color: "accent",
    },
    {
        icon: Brain,
        title: "心理学に基づいた「売れる」デザイン",
        description:
            "行動経済学や心理学のフレームワークをAIで分析。ユーザーが思わずクリックしたくなる構成案を無料で提示します。",
        color: "primary",
    },
    {
        icon: Smartphone,
        title: "管理画面がシンプルで使いやすい",
        description:
            "複雑なWordPressの管理画面は不要です。スマホからSNSを投稿する感覚で、お知らせや実績を更新できる専用画面をご用意します。",
        color: "accent",
    },
    {
        icon: ShieldCheck,
        title: "将来のアプリ化もスムーズ",
        description:
            "最新のプログラミング言語で構築するため、将来的にスマホアプリを作りたい際もデータをそのまま活用可能です。",
        color: "primary",
    },
    {
        icon: Zap,
        title: "AI×自動化で圧倒的スピード納品",
        description:
            "最新のAIツールと自動化技術を駆使し、高品質なサイトを驚きのスピードで納品。最短翌日でプロ品質のLPが完成します。",
        color: "accent",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function WhyUs() {
    return (
        <section
            id="about"
            className="section-padding bg-white dark:bg-dark-bg relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-50/50 to-transparent dark:from-primary-950/20 dark:to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-50/50 to-transparent dark:from-accent-950/20 dark:to-transparent" />

            <div className="container relative mx-auto">
                <SectionTitle
                    subtitle="Why FROG Studio?"
                    title="FROG Studioが選ばれる6つの理由"
                    description="WordPressをあえて使わない、次世代のWeb制作サービス"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            variants={itemVariants}
                            className={`card p-8 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${reason.color === "primary"
                                    ? "bg-primary-100 dark:bg-primary-900/50"
                                    : "bg-accent-100 dark:bg-accent-900/50"
                                    }`}
                            >
                                <reason.icon
                                    className={`w-7 h-7 ${reason.color === "primary"
                                        ? "text-primary-600 dark:text-primary-400"
                                        : "text-accent-600 dark:text-accent-400"
                                        }`}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* WordPress比較セクション - 先進的デザイン */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mt-16 relative overflow-hidden rounded-3xl"
                >
                    {/* 背景グラデーション */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800" />

                    {/* 幾何学パターン背景 */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <path d="M10 10h80v80H10z" fill="none" stroke="white" strokeWidth="0.5" />
                                    <circle cx="10" cy="10" r="3" fill="white" />
                                    <circle cx="90" cy="10" r="3" fill="white" />
                                    <circle cx="10" cy="90" r="3" fill="white" />
                                    <circle cx="90" cy="90" r="3" fill="white" />
                                    <circle cx="50" cy="50" r="2" fill="white" />
                                    <path d="M10 10L50 50M90 10L50 50M10 90L50 50M90 90L50 50" stroke="white" strokeWidth="0.3" />
                                    <path d="M50 10v30M50 60v30M10 50h30M60 50h30" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#circuit)" />
                        </svg>
                    </div>

                    {/* グロー効果 */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

                    {/* コンテンツ */}
                    <div className="relative p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                            {/* 左側テキスト */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-3"
                            >
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                                    なぜ
                                    <span className="text-yellow-300">WordPress</span>
                                    を
                                    <br className="hidden sm:block" />
                                    使わないのか？
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    WordPressは世界で最も使われているCMSですが、
                                    <span className="text-yellow-300 font-semibold">プラグインの脆弱性</span>や
                                    <span className="text-cyan-300 font-semibold">ページ速度の問題</span>が常に指摘されています。
                                </p>
                                <p className="text-white/90 text-lg leading-relaxed mt-4">
                                    FROG Studioは、これらの課題を根本から解決する
                                    <span className="inline-block px-2 py-1 mx-1 bg-cyan-400/30 rounded-lg text-cyan-200 font-bold">
                                        ヘッドレス構成
                                    </span>
                                    を採用。表示速度とセキュリティを劇的に改善します。
                                </p>
                            </motion.div>

                            {/* 右側 統計カード */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:col-span-2 flex flex-col gap-5"
                            >
                                {/* スピードカード */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                                                <Rocket className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                                                    10倍
                                                </div>
                                                <div className="text-white/70 text-sm font-medium">
                                                    表示速度の改善
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* セキュリティカード */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                                <ShieldCheck className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                                                    90%減
                                                </div>
                                                <div className="text-white/70 text-sm font-medium">
                                                    セキュリティリスク
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* 例え話とSEO解説セクション */}
                <div className="mt-16 space-y-8">
                    {/* 例え話カード - VSスタイル */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* WordPress側 */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-slate-500 text-white text-sm font-bold rounded-full">
                                WordPress
                            </div>
                            <div className="mt-4 flex items-start gap-4">
                                <div className="text-4xl">🏚️</div>
                                <div>
                                    <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">
                                        「常にメンテナンスが必要な木造住宅」
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        放置するとガタがきます。プラグインの更新、セキュリティパッチ、テーマの互換性…定期的な手入れが必要です。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FROG Studio側 */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 border-2 border-primary-300 dark:border-primary-700 shadow-lg shadow-primary-500/10">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-bold rounded-full">
                                FROG Studio ✨
                            </div>
                            <div className="mt-4 flex items-start gap-4">
                                <div className="text-4xl">🏢</div>
                                <div>
                                    <h4 className="font-bold text-primary-700 dark:text-primary-300 mb-2">
                                        「一度建てたらメンテナンスフリーな鉄筋ビル」
                                    </h4>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                        頑丈で、余計な手間もコストもかかりません。構築したらあとは運用に集中できます。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SEO解説カード */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative p-8 rounded-2xl bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                                <span className="text-2xl">🔍</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    📈 なぜ検索に強いのか？
                                </h4>
                                <blockquote className="pl-4 border-l-4 border-yellow-400 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Googleは<span className="font-bold text-orange-600 dark:text-orange-400">「ページの表示速度」</span>を評価の最重要項目の一つとしています。
                                    <br /><br />
                                    当サービスのサイトはWordPressより<span className="font-bold text-primary-600 dark:text-primary-400">圧倒的に速い</span>ため、検索結果でも有利になりやすく、<span className="font-bold underline decoration-yellow-400 decoration-2">お客様のビジネスチャンスを逃しません</span>。
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
