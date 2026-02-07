"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Clock } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

// プラン見本データ
const planSamples = [
    {
        plan: "LIGHT",
        planLabel: "19,800円",
        title: "DAILY FIT",
        subtitle: "AIパーソナライズ健康食",
        description: "広告効果を最大化する、洗練された1ページ完結型LP",
        gradient: "from-emerald-400 to-teal-500",
        bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
        href: "/works/daily-fit",
        isReady: true,
    },
    {
        plan: "STANDARD",
        planLabel: "49,800円",
        title: "Coming Soon",
        subtitle: "3ページ構成サイト",
        description: "CMS連携で更新も簡単な王道ビジネスサイト",
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
        href: "#",
        isReady: false,
    },
    {
        plan: "PREMIUM",
        planLabel: "98,000円",
        title: "Coming Soon",
        subtitle: "フルスペックサイト",
        description: "ブランド価値を最大化するカスタムデザイン",
        gradient: "from-purple-400 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        href: "#",
        isReady: false,
    },
    {
        plan: "EXECUTIVE",
        planLabel: "198,000円",
        title: "Coming Soon",
        subtitle: "月額0円EC構築",
        description: "Stripe連携の次世代ヘッドレスECサイト",
        gradient: "from-amber-400 to-orange-500",
        bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
        href: "#",
        isReady: false,
    },
];

export default function Works() {
    return (
        <section
            id="works"
            className="section-padding bg-white dark:bg-dark-bg relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/30 to-accent-100/30 dark:from-primary-900/10 dark:to-accent-900/10 rounded-full blur-3xl" />

            <div className="container relative mx-auto">
                <SectionTitle
                    subtitle="Works"
                    title="制作実績"
                    description="各プランで制作可能なサイトのクオリティをご確認いただけます"
                />

                {/* 4プラン見本カード */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {planSamples.map((sample, index) => (
                        <motion.div
                            key={sample.plan}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className={`relative h-full rounded-2xl bg-gradient-to-br ${sample.bgGradient} border border-slate-200/50 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}>
                                {/* プラン名バッジ */}
                                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r ${sample.gradient} text-white text-xs font-bold shadow-lg`}>
                                    {sample.plan}
                                </div>

                                {/* 価格バッジ */}
                                <div className="absolute top-4 right-4 z-10 px-2 py-0.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-xs font-bold">
                                    ¥{sample.planLabel}
                                </div>

                                {/* サムネイルエリア */}
                                <div className={`relative h-40 bg-gradient-to-br ${sample.gradient} flex items-center justify-center`}>
                                    {sample.isReady ? (
                                        <div className="text-center text-white">
                                            <Sparkles className="w-10 h-10 mx-auto mb-2 opacity-80" />
                                            <span className="text-2xl font-black tracking-tight">{sample.title}</span>
                                        </div>
                                    ) : (
                                        <div className="text-center text-white/80">
                                            <Clock className="w-10 h-10 mx-auto mb-2 opacity-60" />
                                            <span className="text-lg font-bold">Coming Soon</span>
                                        </div>
                                    )}
                                </div>

                                {/* コンテンツ */}
                                <div className="p-5">
                                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">
                                        {sample.subtitle}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                        {sample.description}
                                    </p>

                                    {sample.isReady ? (
                                        <Link
                                            href={sample.href}
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${sample.gradient} text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all`}
                                        >
                                            見本を見る
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-sm font-bold cursor-not-allowed">
                                            準備中
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 補足メッセージ */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8"
                >
                    ※ 各見本は実際のプラン価格で制作可能なクオリティを示しています
                </motion.p>
            </div>
        </section>
    );
}
