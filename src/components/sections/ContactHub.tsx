"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ClipboardList, ExternalLink } from "lucide-react";

// コンタクト情報
const CONTACT_INFO = {
    line: {
        url: "https://line.me/R/ti/p/@223vtwnl",
        label: "LINEで無料相談",
        sublabel: "Zoom不要・チャットで完結",
    },
    email: {
        address: "frogstudio66@gmail.com",
        label: "メールで問い合わせ",
        sublabel: "1営業日以内にご返信",
    },
    hearingSheet: {
        url: "https://docs.google.com/forms/d/e/1FAIpQLSduZYSmQB99ff5vm7FeYeoUQgekRFf9WC0ihqULpw-whQFu9Q/viewform?usp=dialog",
        label: "ヒアリングシート",
        sublabel: "ご要望を事前にお聞かせください",
    },
};

export default function ContactHub() {
    return (
        <section
            id="contact"
            className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

            {/* グリッドパターン */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="container relative mx-auto">
                {/* セクションタイトル - 白色で視認性向上 */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        お問い合わせ
                    </h2>
                    <p className="text-lg text-slate-300">
                        あなたに合った方法でお気軽にご相談ください
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-12 space-y-6">
                    {/* LINE相談 - メインCTA（最も目立つ） */}
                    <motion.a
                        href={CONTACT_INFO.line.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(6, 199, 85, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="block relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#06C755] to-[#00B549] rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative bg-gradient-to-r from-[#06C755] to-[#00B549] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    {/* LINEアイコン */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                        <MessageCircle className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-1">
                                            {CONTACT_INFO.line.label}
                                        </h3>
                                        <p className="text-white/90 text-lg md:text-xl font-medium flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                                            {CONTACT_INFO.line.sublabel}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                    <span className="text-sm font-medium">今すぐ相談</span>
                                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>

                            {/* 推奨バッジ */}
                            <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg transform rotate-3">
                                おすすめ！
                            </div>
                        </div>
                    </motion.a>

                    {/* サブCTA: メール & ヒアリングシート */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* メール */}
                        <motion.a
                            href={`mailto:${CONTACT_INFO.email.address}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 rounded-2xl p-6 md:p-8 transition-all hover:bg-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                                    <Mail className="w-7 h-7 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {CONTACT_INFO.email.label}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {CONTACT_INFO.email.sublabel}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-300 text-sm font-mono bg-slate-800/50 rounded-lg px-4 py-2">
                                {CONTACT_INFO.email.address}
                            </p>
                        </motion.a>

                        {/* ヒアリングシート */}
                        <motion.a
                            href={CONTACT_INFO.hearingSheet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-500/50 rounded-2xl p-6 md:p-8 transition-all hover:bg-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                                    <ClipboardList className="w-7 h-7 text-accent-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {CONTACT_INFO.hearingSheet.label}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {CONTACT_INFO.hearingSheet.sublabel}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm group-hover:text-accent-400 transition-colors">
                                <span>Googleフォームで回答</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    </div>

                    {/* 補足メッセージ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center pt-6"
                    >
                        <p className="text-slate-400 text-sm">
                            ※ ご相談は無料です。お気軽にお問い合わせください。
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
