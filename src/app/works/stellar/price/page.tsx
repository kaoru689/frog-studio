"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

// ゴールドライン装飾コンポーネント
function GoldLineAnimation() {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-[200]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />
    );
}

// プランカードコンポーネント
function PlanCard({
    planName,
    planSubtitle,
    price,
    features,
    isLegacy = false,
    delay = 0,
}: {
    planName: string;
    planSubtitle: string;
    price: string;
    features: { icon: string; title: string; description: string }[];
    isLegacy?: boolean;
    delay?: number;
}) {
    return (
        <motion.div
            className={`relative flex flex-col h-full ${isLegacy ? "border-[#D4AF37]/60" : "border-white/10"} border bg-gradient-to-b from-[#0A0A0A] to-[#050505] overflow-hidden group`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
        >
            {/* LEGACYバッジ */}
            {isLegacy && (
                <div className="absolute top-0 right-0">
                    <div className="bg-[#D4AF37] text-[#0A0A0A] text-[8px] tracking-[0.3em] uppercase font-bold px-4 py-2">
                        Recommended
                    </div>
                </div>
            )}

            {/* ゴールドボーダーグロー（LEGACY専用） */}
            {isLegacy && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.1)]" />
                </div>
            )}

            {/* ヘッダー */}
            <div className={`p-8 md:p-10 border-b ${isLegacy ? "border-[#D4AF37]/30" : "border-white/5"}`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className={`text-[10px] tracking-[0.4em] uppercase block mb-4 ${isLegacy ? "text-[#D4AF37]" : "text-gray-500"}`}>
                        {planSubtitle}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-light text-white tracking-wide uppercase mb-6">
                        {planName}
                    </h3>
                    <div className="flex items-baseline gap-2">
                        <span className={`font-display text-4xl md:text-5xl font-light ${isLegacy ? "text-gradient-gold" : "text-white"}`}>
                            {price}
                        </span>
                        <span className="text-gray-500 text-sm tracking-wide">/月</span>
                    </div>
                    <p className="text-[10px] text-gray-600 tracking-wide mt-3">※ 入会金・年会費は別途</p>
                </motion.div>
            </div>

            {/* 特典リスト */}
            <div className="flex-grow p-8 md:p-10">
                <ul className="space-y-6">
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + 0.4 + index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className={`material-symbols-outlined text-lg mt-0.5 ${isLegacy ? "text-[#D4AF37]" : "text-gray-600"}`}>
                                {feature.icon}
                            </span>
                            <div>
                                <h4 className="text-white text-sm tracking-wide mb-1">{feature.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="p-8 md:p-10 pt-0">
                <Link
                    href="/works/stellar#reservation"
                    className={`block w-full py-5 text-center text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 ${isLegacy
                        ? "bg-[#D4AF37] text-[#0A0A0A] hover:bg-white"
                        : "border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        }`}
                >
                    無料カウンセリングを予約
                </Link>
            </div>
        </motion.div>
    );
}

// VIP特典カード
function VIPBenefitCard({
    icon,
    title,
    subtitle,
    description,
    delay = 0,
}: {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    delay?: number;
}) {
    return (
        <motion.div
            className="group relative p-8 border border-[#D4AF37]/20 bg-gradient-to-br from-[#0A0A0A] to-[#050505] hover:border-[#D4AF37]/50 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="material-symbols-outlined text-[#D4AF37] text-3xl mb-6 block">{icon}</span>
            <h4 className="font-display text-white text-lg tracking-wide uppercase mb-2">{title}</h4>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-4">{subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

export default function StellarPricePage() {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowAnimation(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const executiveFeatures = [
        { icon: "fitness_center", title: "週2回のパーソナルトレーニング", description: "バイオメカニクスに基づいた60分間の完全マンツーマン指導" },
        { icon: "science", title: "月次ボディコンポジション分析", description: "InBody 970による精密な体組成測定と改善プラン策定" },
        { icon: "restaurant", title: "栄養コンサルティング", description: "DNA解析データに基づいた食事戦略の立案" },
        { icon: "spa", title: "リカバリー施設利用", description: "サウナ・スパ・リラクゼーションラウンジの無制限利用" },
        { icon: "local_parking", title: "専用駐車場完備", description: "南青山の好立地に専用のプライベートパーキング" },
    ];

    const legacyFeatures = [
        { icon: "fitness_center", title: "回数無制限パーソナルトレーニング", description: "ご希望の頻度で、いつでもトレーニング予約が可能" },
        { icon: "science", title: "週次バイオメトリクス分析", description: "血液検査・ホルモンバランス・睡眠品質まで徹底管理" },
        { icon: "restaurant", title: "24時間栄養コンシェルジュ", description: "専属チームがリアルタイムで食事・サプリを最適化" },
        { icon: "spa", title: "プライベートスパ予約権", description: "施設全体を貸し切りにできるエクスクルーシブ権限" },
        { icon: "diamond", title: "LEGACY専用VIP特典", description: "下記記載の4つの特別プログラムへのフルアクセス" },
    ];

    const vipBenefits = [
        {
            icon: "dry_cleaning",
            title: "Zero-Load Valet",
            subtitle: "準備時間をゼロへ",
            description: "ウェア・シューズの洗浄保管、プロテイン調合まで全てを代行。あなたは手ぶらで来館し、トレーニングのみに集中できます。",
        },
        {
            icon: "monitoring",
            title: "Bio-Executive Concierge",
            subtitle: "24時間健康最適化",
            description: "ウェアラブルデバイスと連携し、リアルタイムで食事・睡眠・ストレスの最適解を助言。あなたの身体を24時間体制で監視します。",
        },
        {
            icon: "visibility_off",
            title: "Invisible Session",
            subtitle: "完全なる匿名性",
            description: "前後のゲストと一切顔を合わせない、完全プライベートな入退館導線を確保。あなたのプライバシーは絶対です。",
        },
        {
            icon: "groups",
            title: "Stellar Circle Access",
            subtitle: "経営者コミュニティ",
            description: "LEGACY会員限定のクローズドな経営者ネットワークへの招待。ビジネスと健康、双方の最高峰が交錯する場所。",
        },
    ];

    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            {/* ゴールドラインアニメーション */}
            {showAnimation && <GoldLineAnimation />}

            {/* Custom Styles */}
            <style>{`
                .font-display { font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif; }
                .font-body { font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif; }
                .font-serif { font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif; }
                .text-gradient-gold {
                    background: linear-gradient(135deg, #FFF8E1 0%, #D4AF37 50%, #8C7320 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
            `}</style>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-500 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-sm">
                <Link href="/works/stellar" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[#D4AF37] !text-[20px]">diamond</span>
                    <h2 className="font-display text-white text-lg font-light tracking-super-wide uppercase">STELLAR</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#concept">Concept</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/program">Program</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/professionals">Professionals</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/news">News</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/gallery">Gallery</Link>
                    <Link className="text-[10px] tracking-extra-wide text-[#D4AF37] uppercase" href="/works/stellar/price">Price</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#access">Access</Link>
                </nav>
                <div className="flex items-center gap-8">
                    <div className="hidden xl:block">
                        <span className="text-[10px] tracking-extra-wide text-[#D4AF37] font-medium">LIMITED TO 3 MEMBERS</span>
                    </div>
                    <Link href="/works/stellar#reservation" className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-8 bg-[#D4AF37] origin-right transition-all group-hover:w-12"></span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-40 pb-24 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />

                    <motion.div
                        className="max-w-4xl mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-8 font-medium">Investment in Excellence</span>
                        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                            最高の身体は、<br />
                            <span className="text-gradient-gold">最強のビジネス資産</span>である。
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base tracking-wide leading-loose font-light max-w-2xl mx-auto">
                            身体への投資は、消費ではありません。<br />
                            決断力、集中力、生命力を高める「高利回りな投資」です。<br />
                            STELLARは、あなたという資本を最大化するための場所です。
                        </p>
                    </motion.div>

                    {/* 装飾背景 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />
                </section>

                {/* 入会条件セクション */}
                <section className="py-20 px-6 md:px-12 bg-[#080808] border-y border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Membership Requirement</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-6">完全審査制</h2>
                            <p className="text-gray-500 text-sm tracking-wide max-w-xl mx-auto leading-relaxed">
                                STELLARは、選ばれし者のみが足を踏み入れられるクローズドなコミュニティです。<br />
                                新規入会は<span className="text-[#D4AF37]">月間3名限定</span>。質の維持のため、厳正な審査を設けております。
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            <motion.div
                                className="text-center p-10 border border-white/10 bg-[#0A0A0A]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-4">Admission Fee</span>
                                <span className="font-display text-3xl md:text-4xl text-white">¥300,000</span>
                                <p className="text-gray-600 text-xs mt-4 tracking-wide">入会金（税込）</p>
                            </motion.div>
                            <motion.div
                                className="text-center p-10 border border-white/10 bg-[#0A0A0A]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600 block mb-4">Annual Fee</span>
                                <span className="font-display text-3xl md:text-4xl text-white">¥100,000</span>
                                <p className="text-gray-600 text-xs mt-4 tracking-wide">年会費（税込）</p>
                            </motion.div>
                        </div>

                        <motion.p
                            className="text-center text-gray-600 text-xs mt-10 tracking-wide leading-relaxed max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            入会金・年会費は、完全個室のプライバシー空間、最新機材の常時更新、<br />
                            そして厳選されたプロフェッショナルによる指導体制を維持するための必要経費です。
                        </motion.p>
                    </div>
                </section>

                {/* プランセクション */}
                <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Programs</span>
                            <h2 className="font-serif text-2xl md:text-4xl font-light text-white mb-6">あなたの目標に合わせた<br />2つのプログラム</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <PlanCard
                                planName="STELLAR EXECUTIVE"
                                planSubtitle="Business Performance"
                                price="¥198,000"
                                features={executiveFeatures}
                                delay={0.2}
                            />
                            <PlanCard
                                planName="STELLAR LEGACY"
                                planSubtitle="Lifetime Investment"
                                price="¥398,000"
                                features={legacyFeatures}
                                isLegacy={true}
                                delay={0.4}
                            />
                        </div>
                    </div>
                </section>

                {/* VIP特典セクション（LEGACY専用） */}
                <section className="py-32 px-6 md:px-12 bg-[#080808] border-t border-[#D4AF37]/20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">LEGACY Exclusive Benefits</span>
                            <h2 className="font-serif text-2xl md:text-4xl font-light text-white mb-6">
                                LEGACY会員だけの<br />
                                <span className="text-gradient-gold">4つの特権</span>
                            </h2>
                            <p className="text-gray-500 text-sm tracking-wide max-w-xl mx-auto">
                                時間は、最も貴重な資源です。<br />
                                その全てをトレーニングと思考に集中させるための、究極のサポート体制。
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {vipBenefits.map((benefit, index) => (
                                <VIPBenefitCard
                                    key={index}
                                    {...benefit}
                                    delay={0.2 + index * 0.15}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Philosophy of Pricing */}
                <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Philosophy of Pricing</span>
                            <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">この価格が意味するもの</h2>
                        </motion.div>

                        <motion.div
                            className="space-y-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <span className="font-display text-5xl text-gradient-gold">100%</span>
                                    <p className="text-gray-500 text-xs tracking-wide mt-4">完全個室のプライバシー</p>
                                </div>
                                <div className="text-center">
                                    <span className="font-display text-5xl text-gradient-gold">1,000+</span>
                                    <p className="text-gray-500 text-xs tracking-wide mt-4">経営者指導実績</p>
                                </div>
                                <div className="text-center">
                                    <span className="font-display text-5xl text-gradient-gold">3名</span>
                                    <p className="text-gray-500 text-xs tracking-wide mt-4">月間新規入会上限</p>
                                </div>
                            </div>

                            <div className="text-center pt-8 border-t border-white/5">
                                <p className="text-gray-400 text-sm leading-loose tracking-wide max-w-2xl mx-auto">
                                    私たちは「安さ」で勝負しません。<br />
                                    バイオメカニクスに基づく科学的手法、厳選されたプロフェッショナル、<br />
                                    そして南青山という立地が生む静寂と品格。<br />
                                    <span className="text-white">この環境を維持し、あなたの結果を保証するための価格です。</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-40 bg-[#050505] border-t border-[#D4AF37]/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.03] via-transparent to-[#D4AF37]/[0.02]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />

                    <motion.div
                        className="mx-auto max-w-3xl px-6 text-center relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="material-symbols-outlined text-[#D4AF37] text-4xl mb-8 block">diamond</span>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                            選ばれし者だけが辿り着く、<br />
                            <span className="text-gradient-gold">真のコンディション。</span>
                        </h2>

                        <p className="text-gray-400 text-sm leading-loose font-light mb-12 tracking-wide max-w-xl mx-auto">
                            まずは無料カウンセリングにて、<br />
                            あなたのビジョンと私たちの哲学が共鳴するかをご確認ください。
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/works/stellar#reservation"
                                className="group relative inline-flex items-center justify-center px-16 py-6 bg-[#D4AF37] overflow-hidden transition-all duration-500 hover:bg-white shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]"
                            >
                                <span className="relative z-10 text-sm tracking-widest uppercase font-bold text-[#0A0A0A]">
                                    無料カウンセリングを予約
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            </Link>

                            <div className="flex items-center gap-4">
                                <span className="h-[1px] w-8 bg-[#D4AF37]/30" />
                                <span className="text-[10px] tracking-[0.2em] text-gray-500">審査制・月間3名限定</span>
                                <span className="h-[1px] w-8 bg-[#D4AF37]/30" />
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-16">
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
