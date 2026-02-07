"use client";
// import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google"; // DISABLED for ECONNRESET recovery
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import MembersLoginModal from "./_components/MembersLoginModal";

const StatsSection = dynamic(() => import("./_components/StatsSection"), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-[#0A0A0A]" />, // Prevent layout shift
});

// Mock font objects to prevent build errors while removing external dependencies
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

// const notoSansJP = Noto_Sans_JP({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "700", "900"],
//     variable: "--font-noto-sans-jp",
//     display: "swap",
// });

// const spaceGrotesk = Space_Grotesk({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "700"],
//     variable: "--font-space-grotesk",
//     display: "swap",
// });

// const shipporiMincho = Shippori_Mincho({
//     weight: ["400", "700"],
//     subsets: ["latin"],
//     variable: "--font-shippori-mincho",
//     display: "swap",
// });

// export const metadata = {
//     title: "STELLAR Fitness | 南青山の経営者向けパーソナルジム",
//     description: "港区・南青山。科学的根拠に基づいた、エグゼクティブ専用の超効率プログラム。",
// };

export default function StellarPage() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            {/* Members Login Modal */}
            <MembersLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

            {/* Custom Styles for this page */}
            <style>{`
                :root {
                    --font-space-grotesk: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
                    --font-noto-sans-jp: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
                    --font-shippori-mincho: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
                }
                .font-display { font-family: var(--font-space-grotesk); }
                .font-body { font-family: var(--font-noto-sans-jp); }
                .font-serif { font-family: var(--font-shippori-mincho); }
                .text-gradient-gold {
                    background: linear-gradient(135deg, #FFF8E1 0%, #D4AF37 50%, #8C7320 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                }
                .hero-vignette {
                    background: radial-gradient(circle, transparent 20%, rgba(10, 10, 10, 0.8) 100%);
                }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
            `}</style>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-500">
                <Link href="/works/stellar" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[#D4AF37] !text-[20px]">diamond</span>
                    <h2 className="font-display text-white text-lg font-light tracking-super-wide uppercase">STELLAR</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <a className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="#concept">Concept</a>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/program">Program</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/professionals">Professionals</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/news">News</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/gallery">Gallery</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/price">Price</Link>
                    <a className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="#access">Access</a>
                </nav>
                <div className="flex items-center gap-6">
                    <div className="hidden xl:block">
                        <span className="text-[10px] tracking-extra-wide text-[#D4AF37] font-medium">LIMITED TO 3 MEMBERS</span>
                    </div>
                    <button className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-8 bg-[#D4AF37] origin-right transition-all group-hover:w-12"></span>
                    </button>
                    {/* MEMBERS LOGIN Button */}
                    <button
                        onClick={() => setIsLoginModalOpen(true)}
                        className="hidden lg:flex items-center gap-2 text-[10px] tracking-extra-wide text-gray-500 hover:text-[#D4AF37] transition-colors uppercase"
                    >
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        <span>Members</span>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
                    <div className="absolute inset-0 z-0">
                        {/* Using standard img for external URL as per snippet */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Professional athlete portrait"
                            className="h-full w-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZofjoX1hGTG8__U7QW8Dh95GqqZQcGsEorovlKRi5m42YMlkX9Si19GAievPiGODo0S7C_CtP1an5un8iiEnrB3nppgX--AZB2E2QKLAE6fTmViTdeypzuq-pOWvrsGw5ldjDx9XtpcXH7rFmHHlEi5Kt4urCPNkdTq_UK_EQxHggynwklYszoNnWh_x3ptPJJWY7Cx4Lz5I01gK1tjUmskZ-rkbBAd5Mqg5oQRC5qs_iB625YCYryE76l21g4_h1VTVgo3KH2g"
                        />
                        {/* Enhanced gradient for text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                        <div className="absolute inset-0 hero-vignette"></div>
                    </div>
                    <div className="relative z-10 w-full max-w-screen-2xl px-6 text-center">
                        <div className="mb-8 inline-block">
                            {/* Kicker / Title Update */}
                            <p className="text-[11px] tracking-super-wide text-[#D4AF37] uppercase font-bold mb-4">STELLAR Fitness Minami-Aoyama</p>
                            <div className="h-[1px] w-12 bg-[#D4AF37] mx-auto"></div>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.3] tracking-tight mb-8 text-white drop-shadow-2xl">
                            ビジネスの解像度は、<br />
                            <span className="text-gradient-gold italic">身体で決まる。</span>
                        </h1>
                        {/* Sub-headline added */}
                        <h2 className="font-display text-lg md:text-2xl text-white font-medium tracking-widest mb-12 drop-shadow-lg">
                            南青山・エグゼクティブ専用の<br className="md:hidden" />超効率パーソナルジム
                        </h2>

                        <div className="flex flex-col items-center gap-8">
                            {/* CTA Button Updated: Electric Gold, Japanese Text */}
                            <div className="flex flex-col items-center gap-6 mt-4">
                                <a className="group relative flex items-center justify-center px-12 py-5 bg-[#D4AF37] overflow-hidden transition-all duration-300 hover:bg-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]" href="#">
                                    <span className="relative z-10 text-sm tracking-widest font-bold text-[#0A0A0A] group-hover:text-black transition-colors">初回体験トレーニングを予約する</span>
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                                </a>
                                <div className="flex items-center gap-3">
                                    <span className="h-[1px] w-4 bg-[#D4AF37]/40"></span>
                                    <span className="text-[10px] tracking-[0.2em] text-gray-300 font-medium drops-shadow-md">厳選された3名限定の特別なご案内</span>
                                    <span className="h-[1px] w-4 bg-[#D4AF37]/40"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <span className="text-[9px] tracking-super-wide text-gray-500 uppercase">Discover</span>
                        <div className="h-16 w-[0.5px] bg-gradient-to-b from-[#D4AF37]/60 to-transparent"></div>
                    </div>
                </section>

                {/* Stats Section */}
                <StatsSection />

                {/* Concept Section */}
                <section className="py-40 bg-[#0A0A0A]" id="concept">
                    <div className="mx-auto max-w-7xl px-8">
                        <div className="flex flex-col items-center text-center mb-32">
                            <h2 className="text-[#D4AF37] text-[11px] tracking-super-wide uppercase mb-8">BODY IS THE ULTIMATE CAPITAL.</h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8">
                                身体を、経営における<br />
                                <span className="text-gradient-gold italic">最も高利回りな資産へ。</span>
                            </h3>
                            <p className="text-gray-400 text-sm leading-loose max-w-2xl font-light">
                                エグゼクティブにとって、身体とは単なる「健康」の問題ではありません。<br />
                                それは、意思決定の精度、交渉時の威圧感、そして持続可能な成功（Legacy）を支える<span className="text-white">最上位の資産</span>です。<br />
                                STELLARは、科学的根拠に基づくアプローチで、その資産価値を最大化します。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                            <div className="bg-[#0A0A0A] p-12 lg:p-16 flex flex-col items-start transition-all hover:bg-white/[0.02]">
                                <span className="text-[10px] font-display text-[#D4AF37]/40 mb-12">01.</span>
                                <h4 className="text-xl font-serif font-light mb-8 leading-relaxed">意思決定力の<br />向上</h4>
                                <p className="text-gray-500 text-sm leading-loose font-light">
                                    身体コンディションと認知機能は直結します。最適化された肉体が、年商を左右する判断の質を引き上げます。
                                </p>
                            </div>
                            <div className="bg-[#0A0A0A] p-12 lg:p-16 flex flex-col items-start transition-all hover:bg-white/[0.02]">
                                <span className="text-[10px] font-display text-[#D4AF37]/40 mb-12">02.</span>
                                <h4 className="text-xl font-serif font-light mb-8 leading-relaxed">時間効率<br />400%の投資</h4>
                                <p className="text-gray-500 text-sm leading-loose font-light">
                                    バイオメカニクスが実現する超効率。週2回×15分で、通常の60分を凌駕する成果を約束します。
                                </p>
                            </div>
                            <div className="bg-[#0A0A0A] p-12 lg:p-16 flex flex-col items-start transition-all hover:bg-white/[0.02]">
                                <span className="text-[10px] font-display text-[#D4AF37]/40 mb-12">03.</span>
                                <h4 className="text-xl font-serif font-light mb-8 leading-relaxed">持続可能な<br />Legacy</h4>
                                <p className="text-gray-500 text-sm leading-loose font-light">
                                    10年後も第一線で戦い続けるための土台。短期の見た目ではなく、長期的な「身体資本」を構築します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Section */}
                <section className="py-40 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-8 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                            <div className="w-full md:w-1/2">
                                <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase block mb-8">Method</span>
                                <h2 className="font-serif text-3xl md:text-5xl font-light mb-12 leading-tight">
                                    論理が導く、<br />
                                    <span className="italic text-gray-400">最短の解。</span>
                                </h2>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-12 max-w-lg">
                                    バイオメカニクスに基づくフォーム解析、DNA検査による代謝特性の把握。
                                    感覚ではなく「数値」に基づいた、エグゼクティブのための完全オーダーメイドプログラム。
                                </p>
                                <Link className="group inline-flex items-center gap-4 text-[11px] tracking-widest uppercase text-white hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">
                                    <span className="border-b border-white/30 pb-1 group-hover:border-[#D4AF37] transition-colors">View Program</span>
                                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                <Link href="/works/stellar/program" className="block aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-[#111] group cursor-pointer">
                                    <Image
                                        alt="Program Method"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                        src="/works/stellar/news/thumb-recovery.png"
                                        width={800}
                                        height={1000}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professionals Section */}
                <section className="py-40 bg-[#080808]">
                    <div className="mx-auto max-w-7xl px-8">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24">
                            <div>
                                <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase block mb-8">Professionals</span>
                                <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
                                    研ぎ澄まされた<br />
                                    <span className="italic text-gray-400">指導者たち。</span>
                                </h2>
                            </div>
                            <Link className="hidden md:block text-[10px] tracking-extra-wide text-gray-500 hover:text-[#D4AF37] transition-colors uppercase border-b border-gray-800 pb-1" href="/works/stellar/professionals">View All Professionals</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Trainer 1 - Kento Sato */}
                            <Link href="/works/stellar/professionals" className="group block relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                                <Image
                                    alt="Kento Sato"
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    src="/works/stellar/professionals/trainer-kento.jpg"
                                    width={600}
                                    height={800}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-[10px] tracking-widest text-[#D4AF37] uppercase mb-2">Founder / Head Trainer</p>
                                    <p className="font-serif text-lg text-white">佐藤 健人</p>
                                </div>
                            </Link>
                            {/* Trainer 2 - Ryosuke Tanaka */}
                            <Link href="/works/stellar/professionals" className="group block relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                                <Image
                                    alt="Ryosuke Tanaka"
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    src="/works/stellar/professionals/trainer-ryosuke.jpg"
                                    width={600}
                                    height={800}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-[10px] tracking-widest text-[#D4AF37] uppercase mb-2">Senior Trainer</p>
                                    <p className="font-serif text-lg text-white">田中 良介</p>
                                </div>
                            </Link>
                            {/* Trainer 3 - Daiki Yamamoto */}
                            <Link href="/works/stellar/professionals" className="group block relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                                <Image
                                    alt="Daiki Yamamoto"
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    src="/works/stellar/professionals/trainer-daiki.jpg"
                                    width={600}
                                    height={800}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-[10px] tracking-widest text-[#D4AF37] uppercase mb-2">Performance Coach</p>
                                    <p className="font-serif text-lg text-white">山本 大樹</p>
                                </div>
                            </Link>
                            {/* Nutritionist - Rin Asuka */}
                            <Link href="/works/stellar/professionals" className="group block relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                                <Image
                                    alt="Rin Asuka"
                                    className="w-full h-full object-cover object-[75%_center] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    src="/works/stellar/professionals/nutritionist-asuka.jpg"
                                    width={600}
                                    height={800}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-[10px] tracking-widest text-[#D4AF37] uppercase mb-2">Nutritionist</p>
                                    <p className="font-serif text-lg text-white">明日香 凛</p>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-12 text-center md:hidden">
                            <Link className="text-[10px] tracking-extra-wide text-gray-500 hover:text-[#D4AF37] transition-colors uppercase border-b border-gray-800 pb-1" href="/works/stellar/professionals">View All Professionals</Link>
                        </div>
                    </div>
                </section>

                {/* Price Banner Section - Strategic CTA */}
                <section className="py-20 bg-gradient-to-b from-[#080808] to-[#0A0A0A] border-t border-[#D4AF37]/20">
                    <div className="mx-auto max-w-4xl px-8 text-center">
                        <div className="relative inline-block mb-8">
                            <span className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#D4AF37]/40"></span>
                            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#D4AF37]/40"></span>
                            <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold px-6 py-3">Investment Value</p>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-6 leading-relaxed">
                            入会審査を伴う、<br className="md:hidden" />
                            <span className="text-gradient-gold">選ばれし者のためのプラン。</span>
                        </h3>
                        <p className="text-gray-500 text-sm font-light mb-10 max-w-lg mx-auto">
                            真のエグゼクティブのみが辿り着く、投資価値を確認してください。
                        </p>
                        <Link
                            href="/works/stellar/price"
                            className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-transparent border border-[#D4AF37]/50 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]"
                        >
                            <span className="relative z-10 text-[11px] tracking-super-wide uppercase font-bold text-white group-hover:text-[#D4AF37] transition-colors">View Investment Plans</span>
                            <span className="material-symbols-outlined text-[16px] text-[#D4AF37] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </Link>
                    </div>
                </section>

                {/* Philosophy Image Section */}
                <section className="relative h-[80vh] w-full overflow-hidden bg-[#0A0A0A]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Training weight details"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 scale-105 hover:scale-100 transition-transform duration-[3000ms]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vOADZhwzDfO-4FHLK8-G2iAIaQiaoTH4IgsZyX5M2CDN6NxtZfDAwPsn5SDjcKGBV6Hkqe3lXPWpPJmh3FZHcGIH3R9GcCVgQSrzpCDaCdwSDqUcRsAwYENY3cF2Sy_hjFdJkJAjQmeMzygJJ0bXF9nAOL8gWbERwgAJjsjrjWAwS5E1l5sv_6fph2olPKK_nAH_1EsomFysdxObZ6Jd2e4T1MxAvGUElCdRfc8iA27yDRzqKthq8V1LeY7RfrsDn576a4WlcA"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center px-6">
                            <p className="text-[10px] tracking-super-wide text-[#D4AF37]/80 uppercase mb-8">Philosophy</p>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.4]">
                                「強さ」は、<br />
                                <span className="italic">最高のビジネスツールである。</span>
                            </h3>
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section className="py-40 bg-[#0A0A0A]" id="news">
                    <div className="mx-auto max-w-4xl px-8">
                        <div className="flex items-end justify-between mb-20">
                            <div>
                                <h2 className="text-[#D4AF37] text-[11px] tracking-super-wide uppercase mb-4">Archive</h2>
                                <h3 className="text-2xl font-serif font-light">更新情報</h3>
                            </div>
                            <Link className="text-[10px] tracking-extra-wide text-gray-500 hover:text-[#D4AF37] transition-colors uppercase border-b border-gray-800 pb-1" href="/works/stellar/news">View All</Link>
                        </div>
                        <div className="space-y-0">
                            {[
                                { date: "2024.02.01", type: "News", title: "最新型高気圧酸素カプセル導入のお知らせ", typeColor: "text-[#D4AF37]/80 border-[#D4AF37]/30", href: "/works/stellar/news/oxygen-capsule" },
                                { date: "2023.10.15", type: "Campaign", title: "秋の入会キャンペーン開始のお知らせ（先着5名様）", typeColor: "text-[#D4AF37]/60 border-[#D4AF37]/20", href: "/works/stellar/news/autumn-campaign" },
                                { date: "2023.09.20", type: "Media", title: "雑誌「GOETHE」11月号に当ジムが掲載されました", typeColor: "text-gray-500 border-white/10", href: "/works/stellar/news/goethe-feature" },
                            ].map((item, index) => (
                                <Link key={index} className="group flex flex-col md:flex-row md:items-center py-10 border-b border-white/10 hover:border-[#D4AF37] transition-colors" href={item.href}>
                                    <span className="font-display text-gray-600 text-[10px] tracking-extra-wide w-32 mb-4 md:mb-0 uppercase">{item.date}</span>
                                    <div className="flex-grow">
                                        <span className={`inline-block text-[9px] tracking-widest ${item.typeColor} border px-2 py-0.5 mb-2 uppercase`}>{item.type}</span>
                                        <h4 className="text-sm md:text-base font-light tracking-widest text-gray-300 group-hover:text-white transition-colors">{item.title}</h4>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-700 group-hover:text-[#D4AF37] transition-all opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0">arrow_forward</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Access Section */}
                <section className="py-40 bg-[#0A0A0A] border-t border-white/5" id="access">
                    <div className="mx-auto max-w-7xl px-8 flex flex-col lg:flex-row gap-24">
                        <div className="flex-1 lg:max-w-md">
                            <h2 className="text-[#D4AF37] text-[11px] tracking-super-wide uppercase mb-12">Atelier</h2>
                            <h3 className="text-3xl font-serif font-light mb-16 leading-relaxed">南青山、<br />静寂に包まれた聖域。</h3>
                            <div className="space-y-12 text-sm tracking-widest font-light text-gray-400">
                                <div>
                                    <h4 className="text-white text-[10px] tracking-widest uppercase mb-4 opacity-40">Address</h4>
                                    <p className="leading-loose">〒107-0062<br />東京都港区南青山3-XX-XX<br />ステラレジデンス南青山</p>
                                </div>
                                <div>
                                    <h4 className="text-white text-[10px] tracking-widest uppercase mb-4 opacity-40">Access</h4>
                                    <p className="leading-loose">表参道駅 A4出口より徒歩4分</p>
                                </div>
                                <div>
                                    <h4 className="text-white text-[10px] tracking-widest uppercase mb-4 opacity-40">Hours</h4>
                                    <p className="leading-loose">07:00 - 23:00（完全予約制）</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-12">
                            {/* Exterior */}
                            <div className="flex flex-col gap-4 group">
                                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase">Exterior</span>
                                <div className="aspect-[16/9] w-full overflow-hidden bg-[#111] border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                                    <Image
                                        alt="STELLAR Exterior"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                                        src="/works/stellar/access-exterior.jpg"
                                        width={800}
                                        height={600}
                                    />
                                </div>
                            </div>

                            {/* Map */}
                            <div className="flex flex-col gap-4 group">
                                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase">Map</span>
                                <div className="aspect-[16/9] w-full overflow-hidden bg-[#111] border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.71477421525882!3d35.65858053882046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b61b94ed6f9%3A0x6b44747738a7c2f!2z5Y2X6Z2S5bGx!5e0!3m2!1sja!2sjp!4v1645499266742!5m2!1sja!2sjp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="opacity-60 group-hover:opacity-100 transition-all duration-700"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-48 relative overflow-hidden bg-[#0A0A0A]">
                    <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                    <div className="mx-auto max-w-4xl px-8 relative z-10 text-center">
                        <div className="mb-12 inline-flex items-center gap-6">
                            <span className="h-[1px] w-8 bg-[#D4AF37]/30"></span>
                            <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">Limited to 3 Select Members</p>
                            <span className="h-[1px] w-8 bg-[#D4AF37]/30"></span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-12 tracking-tight leading-snug">
                            選ばれた者だけが辿り着く、<br />
                            真のコンディション。
                        </h2>
                        <p className="text-gray-400 text-sm tracking-widest mb-16 leading-loose max-w-xl mx-auto">
                            審査制に近いプライベートトレーニング。今月の新規枠は残り1名となりました。まずは静かな空間でのカウンセリングをご案内します。
                        </p>
                        <a className="group relative inline-flex items-center justify-center px-16 py-6 bg-[#D4AF37] text-[#0A0A0A] overflow-hidden transition-all duration-500 hover:bg-white" href="#">
                            <span className="relative z-10 text-[11px] tracking-super-wide uppercase font-black">Reserve Consultation</span>
                            <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                        </a>
                    </div>
                </section>
            </main>

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
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#concept">Concept</a></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">Program</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/professionals">Professionals</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/news">News</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/gallery">Gallery</Link></li>
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
