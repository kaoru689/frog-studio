"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, Rocket, Clock, Zap } from "lucide-react";

const steps = [
    {
        step: "STEP1",
        icon: ClipboardList,
        title: "ヒアリングシート入力",
        description: "情報をテキストでポチポチ送るだけ！24時間いつでも入力可能です。",
        note: "使用したい写真やロゴはこの時点でお送りください。",
        color: "from-emerald-500 to-teal-500",
    },
    {
        step: "STEP2",
        icon: MessageCircle,
        title: "チャットでの内容確認",
        description: "LINEやメールで隙間時間にやり取り。",
        note: "ZOOM等のビデオ会議拘束は一切ありません。",
        color: "from-cyan-500 to-blue-500",
    },
    {
        step: "STEP3",
        icon: Rocket,
        title: "爆速制作・公開",
        description: "最短翌日〜でお手元へ。",
        note: "対面打ち合わせを省くことで、この圧倒的な低価格とスピードを実現しました。",
        color: "from-purple-500 to-pink-500",
    },
];

export default function Flow() {
    return (
        <section
            id="flow"
            className="section-padding bg-gradient-to-b from-slate-50 via-white to-emerald-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/10" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />

            <div className="container relative mx-auto">
                {/* セクションタイトル */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                        Flow
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        制作の流れ
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-lg text-slate-600 dark:text-slate-400">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        <span className="font-medium">あなたの時間を1分も奪いません</span>
                    </div>
                </motion.div>

                {/* 3ステップカード */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative group"
                        >
                            {/* 接続線（PC時のみ） */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-0.5 bg-gradient-to-r from-emerald-300 to-transparent dark:from-emerald-600 z-0" />
                            )}

                            {/* カード */}
                            <div className="relative bg-white dark:bg-dark-surface rounded-3xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                {/* ステップ番号 */}
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold mb-4`}>
                                    <Zap className="w-3.5 h-3.5" />
                                    {step.step}
                                </div>

                                {/* アイコン */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* タイトル */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>

                                {/* 説明 */}
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                    {step.description}
                                </p>

                                {/* 補足 */}
                                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                                    {step.note}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 補足メッセージ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <p className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 font-medium">
                        <span className="text-2xl">🐸</span>
                        打ち合わせ・ZOOM会議は一切不要！チャットで完結します
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
