"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Gift, Crown, ShoppingCart, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

interface Plan {
    name: string;
    catchphrase: string;
    price: string;
    priceNote: string;
    deliveryTime: string;
    features: string[];
    note: string | null;
    popular: boolean;
    bonus: string | null;
    isExecutive: boolean;
}

const plans: Plan[] = [
    {
        name: "LIGHT",
        catchphrase: "爆速1ページLP",
        price: "19,800",
        priceNote: "税込",
        deliveryTime: "最短翌日納品",
        features: [
            "1ページ完結の洗練されたLP",
            "スマホ・タブレット表示に完全対応",
            "お問い合わせフォーム設置",
            "基本的なSEO対策",
        ],
        note: null,
        popular: false,
        bonus: null,
        isExecutive: false,
    },
    {
        name: "STANDARD",
        catchphrase: "必要な機能を凝縮した、\n信頼を築く王道プラン",
        price: "49,800",
        priceNote: "税込",
        deliveryTime: "最短5日",
        features: [
            "3ページ構成（トップ + 2ページ）",
            "microCMS連携（お知らせ・ブログ更新）",
            "モダンなアニメーション実装",
            "検索に強い高速表示設計",
            "緻密な内部SEO最適化（検索上位対策）",
        ],
        note: null,
        popular: false,
        bonus: "【特典】AI文章作成サポート付",
        isExecutive: false,
    },
    {
        name: "PREMIUM",
        catchphrase: "ブランド価値を最大化する、\n攻めのフルスペックサイト",
        price: "98,000",
        priceNote: "税込",
        deliveryTime: "最短7〜10日",
        features: [
            "5ページ以上の構成",
            "完全カスタムデザイン & ブランディング",
            "競合に差をつける最高峰のUI/UXデザイン",
            "緻密な内部SEO最適化（検索上位対策）",
            "PageSpeed Insights 高スコア保証",
        ],
        note: null,
        popular: true,
        bonus: "【特典】AI文章作成サポート付",
        isExecutive: false,
    },
    {
        name: "EXECUTIVE",
        catchphrase: "究極の月額0円EC構築",
        price: "198,000",
        priceNote: "税込",
        deliveryTime: "最短14日",
        features: [
            "Stripe連携による安全なカード決済",
            "商品管理機能（microCMS）",
            "ショッピングカート機能",
            "競合に差をつける最高峰のUI/UXデザイン",
            "緻密な内部SEO最適化（検索上位対策）",
            "PageSpeed Insights 高スコア保証（爆速証明）",
        ],
        note: null,
        popular: false,
        bonus: "【特典】AI文章・商品紹介ツール付",
        isExecutive: true,
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="section-padding bg-gradient-to-b from-emerald-50 via-white to-slate-50 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/60 via-transparent to-transparent dark:from-emerald-900/20" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl" />

            <div className="container relative mx-auto">
                <SectionTitle
                    subtitle="Pricing Plan"
                    title="料金プラン"
                    description="あなたのビジネスに最適なプランをお選びください"
                />

                {/* プランカード - 4カラム */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-5 mt-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={plan.isExecutive ? {
                                boxShadow: "0 0 60px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(212, 175, 55, 0.05)"
                            } : {}}
                            className={`relative rounded-3xl p-6 flex flex-col transition-all duration-500 ${plan.isExecutive
                                ? "bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white shadow-[0_25px_80px_rgba(0,0,0,0.5)] xl:scale-110 z-20"
                                : plan.popular
                                    ? "bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-2xl shadow-emerald-500/40 ring-4 ring-yellow-400/50 xl:scale-105 z-10"
                                    : "bg-white dark:bg-dark-bg border-2 border-emerald-200 dark:border-emerald-800 shadow-xl hover:shadow-2xl transition-shadow"
                                }`}
                            style={plan.isExecutive ? {
                                border: "2px solid transparent",
                                backgroundImage: "linear-gradient(to bottom, #1e293b, #0f172a, #020617), linear-gradient(135deg, #d4af37, #f5e6a3, #d4af37)",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                            } : {}}
                        >
                            {/* おすすめバッジ */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1.5">
                                    <Crown className="w-4 h-4" />
                                    ★おすすめ
                                </div>
                            )}

                            {/* EXECUTIVEエンブレムバッジ */}
                            {plan.isExecutive && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        {/* グロー効果 */}
                                        <motion.div
                                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full blur-md"
                                        />
                                        {/* エンブレム本体 */}
                                        <div className="relative px-6 py-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-full border-2 border-amber-400/80 shadow-lg flex items-center gap-2">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 text-sm font-black tracking-wider whitespace-nowrap">
                                                最高峰プラン
                                            </span>
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* プラン名 & キャッチコピー */}
                            <div className="text-center mb-4 pt-4">
                                <div
                                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-3 ${plan.isExecutive
                                        ? "bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border border-amber-500/30 text-amber-300"
                                        : plan.popular
                                            ? "bg-white text-emerald-700 shadow-lg"
                                            : "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                                        }`}
                                >
                                    {plan.name === "EXECUTIVE" && <ShoppingCart className="w-4 h-4" />}
                                    {plan.name}
                                </div>
                                <h3
                                    className={`text-base font-bold leading-tight ${plan.isExecutive
                                        ? "text-white"
                                        : plan.popular
                                            ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                                            : "text-slate-900 dark:text-white"
                                        }`}
                                    style={{ whiteSpace: "normal" }}
                                >
                                    {/* PC時のみ改行、スマホは自然折り返し */}
                                    {plan.catchphrase.includes("\n") ? (
                                        <>
                                            <span className="hidden lg:inline whitespace-pre-line">{plan.catchphrase}</span>
                                            <span className="lg:hidden">{plan.catchphrase.replace("\n", "")}</span>
                                        </>
                                    ) : (
                                        plan.catchphrase
                                    )}
                                </h3>
                            </div>

                            {/* 価格 */}
                            <div className="text-center mb-4">
                                <div className="flex items-end justify-center gap-1">
                                    <span
                                        className={`text-4xl font-black ${plan.isExecutive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                                            : plan.popular
                                                ? "text-white"
                                                : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"
                                            }`}
                                    >
                                        ¥{plan.price}
                                    </span>
                                    <span className={`text-sm mb-1 ${plan.isExecutive ? "text-amber-300/80" : plan.popular ? "text-white/80" : "text-slate-500"}`}>
                                        〜
                                    </span>
                                </div>
                                <span className={`text-xs ${plan.isExecutive ? "text-slate-400" : plan.popular ? "text-white/70" : "text-slate-500"}`}>
                                    ({plan.priceNote})
                                </span>
                            </div>

                            {/* 納期バッジ */}
                            <div className="flex justify-center mb-4">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${plan.isExecutive
                                    ? "bg-slate-700/80 border border-amber-500/30 text-amber-300"
                                    : plan.popular
                                        ? "bg-yellow-400/20 text-yellow-200"
                                        : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                                    }`}>
                                    <Zap className={`w-4 h-4 ${plan.isExecutive ? "text-amber-400" : ""}`} />
                                    <span className="font-bold text-sm">{plan.deliveryTime}</span>
                                </div>
                            </div>

                            {/* 機能リスト */}
                            <ul className="space-y-2.5 mb-4 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isExecutive ? "text-amber-400" : plan.popular ? "text-yellow-300" : "text-emerald-500"
                                            }`} />
                                        <span className={`text-sm ${plan.isExecutive ? "text-slate-300" : plan.popular ? "text-white/90" : "text-slate-600 dark:text-slate-400"
                                            }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* 注意書き（LIGHTプラン用） */}
                            {plan.note && (
                                <p className={`text-xs text-center mb-3 ${plan.popular ? "text-white/60" : "text-slate-400"}`}>
                                    {plan.note}
                                </p>
                            )}

                            {/* 特典バッジ - 1行表示 */}
                            {plan.bonus && (
                                <div className={`mb-4 px-3 py-2.5 rounded-xl border-2 border-dashed ${plan.isExecutive
                                    ? "border-amber-500/50 bg-amber-900/20"
                                    : "border-orange-400 bg-orange-50 dark:bg-orange-900/30"
                                    }`}>
                                    <div className="flex items-center justify-center gap-1.5">
                                        <Gift className={`w-4 h-4 flex-shrink-0 ${plan.isExecutive ? "text-amber-400" : "text-orange-500"}`} />
                                        <span className={`text-xs font-bold whitespace-nowrap ${plan.isExecutive ? "text-amber-300" : "text-orange-600 dark:text-orange-400"
                                            }`}>
                                            {plan.bonus}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* CTAボタン */}
                            <Link
                                href={plan.isExecutive ? "/executive-details" : "#contact"}
                                className={`block w-full py-3.5 px-6 rounded-full text-center font-bold transition-all duration-300 mt-auto ${plan.isExecutive
                                    ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-900 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-105"
                                    : plan.popular
                                        ? "bg-white text-emerald-600 hover:bg-yellow-50 shadow-lg hover:shadow-xl hover:scale-105"
                                        : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:scale-105"
                                    }`}
                            >
                                {plan.isExecutive ? "詳細を見る" : "このプランで相談する"}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* 注意事項 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10"
                >
                    ※ カスタマイズ内容により価格が変動する場合があります。
                    <br />
                    ※ まずはお気軽にご相談ください！
                </motion.p>
            </div>
        </section>
    );
}
