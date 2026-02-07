"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Sparkles,
    Zap,
    Search,
    Gauge,
    ArrowRight,
    CheckCircle2,
    Shield,
    TrendingUp,
    Clock,
    Crown,
    Star,
} from "lucide-react";

export default function ExecutiveDetailsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* ヒーローセクション */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* 背景エフェクト */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
                />

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    {/* バッジ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30">
                            <Crown className="w-5 h-5 text-amber-400" />
                            <span className="text-amber-300 font-bold">EXECUTIVE プラン</span>
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                    </motion.div>

                    {/* キャッチコピー */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-tight mb-6"
                    >
                        <span className="text-white">Webサイトを、</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                            最強の事業資産へ。
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-8"
                    >
                        ビジネスを加速させる、次世代の最高峰パッケージ。
                        <br className="hidden sm:block" />
                        最新技術、行動心理学、SEO戦略の全てを注ぎ込み、
                        <br className="hidden sm:block" />
                        あなたのビジネスの成長を牽引するエンジンを構築します。
                    </motion.p>

                    {/* CTAボタン */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-900 rounded-full font-black text-lg shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
                        >
                            EXECUTIVEプランについて優先相談する（無料）
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 3つの絶対的優位性 */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            EXEが選ばれる
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                「3つの絶対的優位性」
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Sparkles,
                                title: "競合を圧倒するUI/UX",
                                description: "顧客心理を計算し尽くした、滑らかで美しい操作体験。訪れた瞬間に「ここは他とは違う」と確信させます。",
                                gradient: "from-purple-500 to-pink-500",
                            },
                            {
                                icon: Search,
                                title: "緻密な内部SEOの極致",
                                description: "検索エンジンの評価基準を逆算した、完璧な構造設計。広告費をかけずに見込み客を集めます。",
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                icon: Gauge,
                                title: "PageSpeed高スコア保証",
                                description: "Googleが認める「爆速表示」を約束。1秒の遅れも許さない表示速度が、成約率を極限まで高めます。",
                                gradient: "from-amber-500 to-orange-500",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* なぜ爆速なのか - 図解セクション */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-amber-400 font-bold mb-2">専門知識は不要です</p>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            なぜ、EXEは別格に速いのか？
                        </h2>
                        <p className="text-slate-400">この図を見れば、違いが分かります。</p>
                    </motion.div>

                    {/* 比較図解 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* 従来のシステム */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-slate-800/50 border border-red-500/30"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">従来のサイト</h3>
                                    <p className="text-red-400 text-sm">WordPress など</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-slate-300">
                                <p>🍳 <span className="font-bold">例えるなら「注文を受けてから料理を作るレストラン」</span></p>
                                <ul className="space-y-2 ml-6">
                                    <li>• ページを開くたびにサーバーが計算</li>
                                    <li>• データベースへの問い合わせで待ち時間発生</li>
                                    <li>• アクセスが増えると遅くなる</li>
                                    <li>• 常にサーバー維持費がかかる</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* EXEのシステム */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-amber-900/20 border border-amber-500/50 shadow-[0_0_30px_rgba(251,191,36,0.1)]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">EXECUTIVEプラン</h3>
                                    <p className="text-amber-400 text-sm">Next.js + ヘッドレス構成</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-slate-300">
                                <p>⚡ <span className="font-bold text-amber-300">例えるなら「事前に完成品を用意しておくデリバリー」</span></p>
                                <ul className="space-y-2 ml-6">
                                    <li className="text-amber-200">• ページは事前に生成済み（待ち時間ゼロ）</li>
                                    <li className="text-amber-200">• 世界中のCDNから最速配信</li>
                                    <li className="text-amber-200">• アクセス増加に完全対応</li>
                                    <li className="text-amber-200">• サーバー維持費ゼロ</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-amber-300 font-bold text-lg mt-10"
                    >
                        仕組みが違うから、結果（速さと売上）が違う。
                    </motion.p>
                </div>
            </section>

            {/* 投資対効果セクション */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
                            通常
                            <span className="text-red-400 line-through mx-2">80万円〜</span>
                            のクオリティを、
                            <br />
                            なぜこの価格で提供できるのか？
                        </h2>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 mb-10">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                それは、私が<span className="text-amber-300 font-bold">古い慣習を捨て、AIと最新技術に特化している</span>から。
                                <br /><br />
                                従来の制作会社のような「打ち合わせ」「会議」「人件費」を最小化し、
                                <br />
                                その分を<span className="text-amber-300 font-bold">品質と価格メリット</span>としてお客様に還元しています。
                            </p>
                        </div>

                        {/* 限定性 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border-2 border-amber-400/50"
                        >
                            <Star className="w-6 h-6 text-amber-400" />
                            <span className="text-amber-300 font-bold text-lg">
                                最高品質を維持するため、毎月3社様限定
                            </span>
                            <Star className="w-6 h-6 text-amber-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 最強比較表：Shopify vs ヘッドレスEC */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-sm font-bold mb-4">
                            VS 一般EC
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            Shopify等と何が違う？
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                最強比較表
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto overflow-hidden rounded-3xl border-2 border-amber-500/30"
                    >
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-slate-800 to-slate-900">
                                <tr>
                                    <th className="px-6 py-4 text-left text-slate-400 font-bold">項目</th>
                                    <th className="px-6 py-4 text-center text-slate-400 font-bold">Shopify等</th>
                                    <th className="px-6 py-4 text-center text-amber-300 font-bold bg-amber-500/10">FROG Studio</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {[
                                    { item: "デザイン自由度", shopify: "テンプレ依存", frog: "完全カスタム", win: true },
                                    { item: "月額費用", shopify: "3,000円〜/月", frog: "0円", win: true },
                                    { item: "表示速度", shopify: "普通", frog: "爆速（保証付）", win: true },
                                    { item: "SEO対策", shopify: "基本的", frog: "緻密な内部最適化", win: true },
                                    { item: "保守・更新", shopify: "自己責任", frog: "ほぼ不要", win: true },
                                    { item: "将来の拡張性", shopify: "制限あり", frog: "無制限", win: true },
                                    { item: "ライバル数", shopify: "大量（同じ見た目）", frog: "オンリーワン", win: true },
                                ].map((row, index) => (
                                    <tr key={row.item} className="bg-slate-800/30">
                                        <td className="px-6 py-4 font-medium text-white">{row.item}</td>
                                        <td className="px-6 py-4 text-center text-slate-400">{row.shopify}</td>
                                        <td className="px-6 py-4 text-center text-amber-300 font-bold bg-amber-500/5">
                                            {row.frog} {row.win && "✓"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* 豪華2大特典 */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-400/30 text-amber-300 text-sm font-bold mb-4">
                            🎁 BONUS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            EXECUTIVEプラン限定
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                豪華2大特典
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* 特典1: AI商品紹介文生成 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 via-slate-800/80 to-slate-900/80 border-2 border-purple-500/30 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold mb-4">
                                    特典①
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">
                                    AI商品紹介文生成ツール
                                </h3>
                                <p className="text-lg text-slate-300 mb-4">
                                    <span className="text-purple-300 font-bold">写真1枚</span>で、
                                    <span className="text-purple-300 font-bold">1,000文字</span>の心理学コピーを秒速生成。
                                </p>
                                <ul className="space-y-2 text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                        商品の魅力を最大化
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                        SEOに強い文章構成
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                        永久無料で使い放題
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* 特典2: サブスク導入サポート */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-900/30 via-slate-800/80 to-slate-900/80 border-2 border-cyan-500/30 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-bold mb-4">
                                    特典②
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">
                                    サブスク（定期購入）導入サポート
                                </h3>
                                <p className="text-lg text-slate-300 mb-4">
                                    <span className="text-cyan-300 font-bold">Stripe連携</span>で
                                    <span className="text-cyan-300 font-bold">安定収入</span>を構築。
                                </p>
                                <ul className="space-y-2 text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                        月額課金システム構築
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                        自動請求・決済処理
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                        顧客管理機能付き
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SNS感覚で商品追加 */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 text-sm font-bold mb-4">
                            📱 簡単操作
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            SNS感覚で商品追加
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            microCMSを使った直感的な管理画面で、スマホからでも商品をサクサク追加・編集できます。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                step: "①",
                                title: "写真をアップ",
                                description: "スマホで撮った写真をドラッグ&ドロップするだけ",
                                icon: "📷",
                            },
                            {
                                step: "②",
                                title: "情報を入力",
                                description: "商品名・価格・説明を入力（AIが文章を提案）",
                                icon: "✍️",
                            },
                            {
                                step: "③",
                                title: "公開ボタンを押す",
                                description: "たったこれだけで世界中から購入可能に！",
                                icon: "🚀",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-800/50 border border-emerald-500/20 text-center"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold mb-3">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-emerald-300 font-bold text-lg mt-10"
                    >
                        💡 パソコンが苦手でも大丈夫。インスタに投稿できる方なら余裕です。
                    </motion.p>
                </div>
            </section>

            {/* 含まれる機能一覧 */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            EXECUTIVEプランに含まれる全機能
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[
                            "Stripe連携による安全なカード決済",
                            "商品管理機能（microCMS）",
                            "ショッピングカート機能",
                            "競合に差をつける最高峰のUI/UX",
                            "緻密な内部SEO最適化",
                            "PageSpeed Insights 高スコア保証",
                            "完全レスポンシブ対応",
                            "お問い合わせフォーム",
                            "AI文章・商品紹介ツール付",
                        ].map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50"
                            >
                                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                <span className="text-white text-sm">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 最終CTA */}
            <section id="contact" className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30 mb-8">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-300 text-sm font-bold">毎月3社様限定</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                            あなたのビジネスを、
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                                次のステージへ。
                            </span>
                        </h2>

                        <p className="text-slate-400 mb-10">
                            まずは無料相談で、あなたのビジネスに最適な構成をご提案します。
                        </p>

                        <Link
                            href="/#contact"
                            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-900 rounded-full font-black text-xl shadow-[0_0_50px_rgba(251,191,36,0.5)] hover:shadow-[0_0_80px_rgba(251,191,36,0.7)] hover:scale-105 transition-all duration-300"
                        >
                            EXECUTIVEプランについて優先相談する（無料）
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>

                        <p className="text-slate-500 text-sm mt-6">
                            ※ 強引な営業は一切いたしません。お気軽にどうぞ。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* トップページへ戻るリンク */}
            <div className="py-8 text-center">
                <Link
                    href="/"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                    ← トップページに戻る
                </Link>
            </div>
        </main>
    );
}
