// import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google"; // DISABLED for ECONNRESET recovery
import Link from "next/link";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

export const metadata = {
    title: "STELLAR Fitness | Program - 超効率のメソッド",
    description: "15分が60分を凌駕する理由。バイオメカニクスに基づいた超効率トレーニングと、決断疲れをゼロにするトータルサポート。",
};

export default function StellarProgramPage() {
    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
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
                    background: radial-gradient(circle, transparent 20%, rgba(10, 10, 10, 0.95) 100%);
                }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
                @keyframes drop {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .animate-drop {
                    animation: drop 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
                }
                @keyframes gridFlow {
                    0% { transform: translateY(0); opacity: 0.02; }
                    50% { opacity: 0.05; }
                    100% { transform: translateY(20px); opacity: 0.02; }
                }
                .data-grid-bg {
                    background-image: 
                        linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    animation: gridFlow 8s ease-in-out infinite;
                }
                @keyframes pulse-line {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                .pulse-line {
                    animation: pulse-line 4s ease-in-out infinite;
                }
            `}</style>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-500 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
                <Link href="/works/stellar" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[#D4AF37] !text-[20px]">diamond</span>
                    <h2 className="font-display text-white text-lg font-light tracking-super-wide uppercase">STELLAR</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#concept">Concept</Link>
                    <Link className="text-[10px] tracking-extra-wide text-[#D4AF37] uppercase" href="/works/stellar/program">Program</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/professionals">Professionals</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/news">News</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/gallery">Gallery</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/price">Price</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#access">Access</Link>
                </nav>
                <div className="flex items-center gap-8">
                    <div className="hidden xl:block">
                        <span className="text-[10px] tracking-extra-wide text-[#D4AF37] font-medium">LIMITED TO 3 MEMBERS</span>
                    </div>
                    <button className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-8 bg-[#D4AF37] origin-right transition-all group-hover:w-12"></span>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
                    <div className="absolute inset-0 z-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Professional athlete portrait"
                            className="h-full w-full object-cover opacity-30 grayscale scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZofjoX1hGTG8__U7QW8Dh95GqqZQcGsEorovlKRi5m42YMlkX9Si19GAievPiGODo0S7C_CtP1an5un8iiEnrB3nppgX--AZB2E2QKLAE6fTmViTdeypzuq-pOWvrsGw5ldjDx9XtpcXH7rFmHHlEi5Kt4urCPNkdTq_UK_EQxHggynwklYszoNnWh_x3ptPJJWY7Cx4Lz5I01gK1tjUmskZ-rkbBAd5Mqg5oQRC5qs_iB625YCYryE76l21g4_h1VTVgo3KH2g"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
                        <div className="absolute inset-0 hero-vignette"></div>
                    </div>
                    <div className="relative z-10 text-center px-6">
                        <div className="inline-flex flex-col items-center gap-6 mb-8">
                            <span className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></span>
                            <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-medium">The STELLAR Methodology</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
                            時間を、<br className="md:hidden" />圧縮する。
                        </h1>
                        <p className="font-display text-sm md:text-base text-gray-400 tracking-widest uppercase mb-12">
                            15 Minutes That Outperform 60
                        </p>
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-xs md:text-sm text-gray-300 leading-loose font-light tracking-wider text-justify md:text-center">
                                あなたの時間は、1時間あたり数百万円の価値を生み出す。<br className="hidden md:inline" />
                                だからこそSTELLARは、その貴重な資源を浪費させません。<br className="hidden md:inline" />
                                バイオメカニクスが導き出す「超効率」で、結果だけを最短で手にする。
                            </p>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <span className="px-4 py-1 border border-[#D4AF37]/30 text-[9px] tracking-widest text-[#D4AF37]/80 uppercase">Only 3 Executive Slots Available</span>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <span className="text-[9px] tracking-super-wide text-gray-600 uppercase">Scroll</span>
                        <div className="h-12 w-[1px] bg-gray-800 overflow-hidden">
                            <div className="h-full w-full bg-[#D4AF37] -translate-y-full animate-drop"></div>
                        </div>
                    </div>
                </section>

                {/* Section 01: Biomechanics - 超効率 */}
                <section className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden">
                    {/* Subtle data grid animation */}
                    <div className="absolute inset-0 data-grid-bg"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D4AF37]/20 to-transparent"></div>

                    <div className="relative mx-auto max-w-7xl px-6 md:px-12">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-[4/5] overflow-hidden grayscale opacity-80 border border-white/5 bg-[#0a0a0a]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Biomechanics Analysis"
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vOADZhwzDfO-4FHLK8-G2iAIaQiaoTH4IgsZyX5M2CDN6NxtZfDAwPsn5SDjcKGBV6Hkqe3lXPWpPJmh3FZHcGIH3R9GcCVgQSrzpCDaCdwSDqUcRsAwYENY3cF2Sy_hjFdJkJAjQmeMzygJJ0bXF9nAOL8gWbERwgAJjsjrjWAwS5E1l5sv_6fph2olPKK_nAH_1EsomFysdxObZ6Jd2e4T1MxAvGUElCdRfc8iA27yDRzqKthq8V1LeY7RfrsDn576a4WlcA"
                                    />
                                    <div className="absolute inset-0 pointer-events-none">
                                        <svg className="w-full h-full opacity-40" viewBox="0 0 400 500">
                                            <circle cx="200" cy="250" fill="none" r="100" stroke="#D4AF37" strokeWidth="0.5"></circle>
                                            <circle cx="200" cy="250" fill="none" r="140" stroke="#D4AF37" strokeDasharray="4 4" strokeWidth="0.2"></circle>
                                            <line stroke="white" strokeWidth="0.5" x1="200" x2="200" y1="50" y2="450"></line>
                                            <line stroke="white" strokeWidth="0.5" x1="50" x2="350" y1="250" y2="250"></line>
                                            <circle cx="200" cy="110" fill="#D4AF37" r="2"></circle>
                                            <circle cx="340" cy="250" fill="#D4AF37" r="2"></circle>
                                            <circle cx="200" cy="390" fill="#D4AF37" r="2"></circle>
                                            {/* Efficiency indicators */}
                                            <text x="360" y="230" fill="#D4AF37" fontSize="8" fontFamily="monospace">15 min</text>
                                            <text x="360" y="244" fill="#666" fontSize="6" fontFamily="monospace">= 60 min standard</text>
                                        </svg>
                                        <div className="absolute top-4 left-4 font-display text-[9px] text-[#D4AF37] tracking-widest">FIG. 01 // LOAD VECTOR</div>
                                        <div className="absolute bottom-4 right-4 font-display text-[9px] text-white/50 tracking-widest">EFFICIENCY: 400%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase block mb-6">01. Biomechanics</span>
                                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-12 leading-tight">
                                    15分が60分を<br />
                                    <span className="text-gradient-gold">凌駕する理由。</span>
                                </h2>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-8 text-justify">
                                    「時間がない」という経営者の悩みに、STELLARは真正面から向き合います。
                                    従来のトレーニングが非効率なのは、バイオメカニクスを無視しているからです。
                                </p>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-8 text-justify">
                                    あなたの骨格特性、筋肉の付着角度、モーメントアームを精密に測定。
                                    関節への無駄な負担を排除し、ターゲット筋に<span className="text-white">最大負荷のみを集中させる</span>フォームを導出します。
                                    その結果、15分で一般的な60分トレーニングの効果を実現。
                                    <span className="text-[#D4AF37]">時間効率400%</span>という数値は、科学が導いた必然です。
                                </p>
                                <ul className="space-y-6 border-t border-white/10 pt-8">
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-sm mt-1">precision_manufacturing</span>
                                        <div>
                                            <h4 className="text-white text-xs tracking-widest uppercase mb-1">Precision Analysis</h4>
                                            <p className="text-gray-500 text-[10px]">骨格レバー比解析による個別最適フォーム設計</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-sm mt-1">speed</span>
                                        <div>
                                            <h4 className="text-white text-xs tracking-widest uppercase mb-1">Time Compression</h4>
                                            <p className="text-gray-500 text-[10px]">週2回×15分で、年間50時間以上の時間創出</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-sm mt-1">trending_up</span>
                                        <div>
                                            <h4 className="text-white text-xs tracking-widest uppercase mb-1">Maximum Output</h4>
                                            <p className="text-gray-500 text-[10px]">関節保護と筋肥大の両立による持続可能な成長</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 02: Private Suite - α波空間 */}
                <section className="relative py-32 md:py-48 bg-[#080808]">
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="w-full lg:w-5/12">
                                <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase block mb-6">02. Private Suite</span>
                                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-12 leading-tight">
                                    脳をα波へ戻す、<br />
                                    <span className="text-gradient-gold">唯一の場所。</span>
                                </h2>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-6 text-justify">
                                    過密なスケジュール。途切れない通知。交渉、決断、責任。
                                    経営者の脳は常にβ波（緊張・集中モード）に晒され続けています。
                                </p>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-6 text-justify">
                                    STELLARが提供するのは、単なる「防音」ではありません。
                                    南青山の地下深く、<span className="text-white">完全遮断された静寂空間</span>で、
                                    あなたの脳波をα波（リラックス・創造モード）へと誘導します。
                                </p>
                                <p className="text-gray-400 text-sm leading-loose font-light mb-8 text-justify">
                                    トレーニング中の深い集中と、終了後に訪れる静謐な高揚感。
                                    この<span className="text-[#D4AF37]">メンタルリカバリー</span>こそ、
                                    多忙なエグゼクティブが真に求めるものではないでしょうか。
                                </p>
                                <div className="flex flex-wrap gap-4 mb-8 border-t border-white/10 pt-8">
                                    <span className="px-4 py-2 border border-white/10 text-[9px] tracking-widest text-gray-400 uppercase">完全個室</span>
                                    <span className="px-4 py-2 border border-white/10 text-[9px] tracking-widest text-gray-400 uppercase">防音 -50dB</span>
                                    <span className="px-4 py-2 border border-white/10 text-[9px] tracking-widest text-gray-400 uppercase">調光システム</span>
                                    <span className="px-4 py-2 border border-white/10 text-[9px] tracking-widest text-gray-400 uppercase">専用アメニティ</span>
                                </div>
                                <Link className="inline-flex items-center gap-2 text-[10px] tracking-extra-wide uppercase text-white border-b border-[#D4AF37]/50 pb-1 hover:text-[#D4AF37] transition-colors" href="/works/stellar/gallery">
                                    View Facility Gallery
                                </Link>
                            </div>
                            <div className="w-full lg:w-7/12 relative">
                                <div className="relative aspect-[16/9] overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-500">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt="Private Gym Suite"
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                                        src="/stellar_gallery_suite_conditioning.png"
                                    />
                                    <div className="absolute inset-4 border border-white/10"></div>
                                    <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur px-4 py-2 border-l-2 border-[#D4AF37]">
                                        <span className="text-[9px] tracking-widest uppercase text-gray-300">Room A: The Executive Suite</span>
                                    </div>
                                    {/* Alpha wave indicator with animation */}
                                    <div className="absolute top-8 right-8 bg-black/80 backdrop-blur px-4 py-3 border border-[#D4AF37]/30">
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-ping absolute"></div>
                                                <div className="w-3 h-3 bg-[#D4AF37] rounded-full relative"></div>
                                            </div>
                                            <div>
                                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium block">α-Wave Zone</span>
                                                <span className="text-[8px] tracking-widest text-gray-500 uppercase">Mental Recovery Space</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 03: Bio-Fueling - 意思決定ゼロの給油 */}
                <section className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden">
                    {/* Subtle data grid animation */}
                    <div className="absolute inset-0 data-grid-bg"></div>

                    {/* Horizontal accent line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10 pulse-line"></div>

                    <div className="relative mx-auto max-w-6xl px-6 md:px-12 text-center">
                        <div className="inline-block mb-16">
                            <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase block mb-4">03. Bio-Fueling</span>
                            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                                意思決定をゼロにする、<br />
                                <span className="text-gradient-gold italic">給油。</span>
                            </h2>
                            <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
                                経営者にとって、日々の「何を食べるか」という判断は、認知資源の無駄遣いです。<br />
                                STELLARは、その意思決定コストをゼロにします。
                            </p>
                        </div>

                        {/* STELLAR Protein Bar Section */}
                        <div className="mb-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left mb-16">
                                <div className="order-2 lg:order-1">
                                    <span className="text-[#D4AF37] text-[9px] tracking-super-wide uppercase block mb-4">併設施設</span>
                                    <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-white">
                                        STELLAR Protein Bar
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-loose font-light mb-6">
                                        トレーニング直後の30分は、筋合成の「ゴールデンタイム」。
                                        この貴重な時間帯に、最適な栄養を届けるため、
                                        STELLARは会員専用のプロテインバーを併設しています。
                                    </p>
                                    <p className="text-gray-400 text-sm leading-loose font-light mb-8">
                                        あなたのその日の<span className="text-white">バイタルデータ</span>
                                        （心拍変動、消費カロリー、筋疲労度）をリアルタイム解析し、
                                        <span className="text-[#D4AF37]">パーソナライズ・プロテイン</span>をコンシェルジュが即座に提供。
                                        考える必要はありません。ただ、飲むだけです。
                                    </p>
                                    <ul className="space-y-3 text-gray-500 text-xs">
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                                            ホエイアイソレート × 抹茶 / ダークチョコ
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                                            EAA・BCAA配合オプション
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                                            コールドプレスジュース各種
                                        </li>
                                    </ul>
                                </div>
                                <div className="order-1 lg:order-2 relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/5 overflow-hidden relative group">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="STELLAR Protein Bar"
                                            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                            src="/works/stellar/program/protein-bar.png"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="font-display text-xs tracking-[0.3em] uppercase text-white/80">Protein Bar</span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#D4AF37]/10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Executive Catering Service */}
                        <div className="border-t border-white/5 pt-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                                <div className="relative">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-white/5 overflow-hidden relative group">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt="Executive Catering Service"
                                            className="w-full h-full object-contain transition-transform duration-[2000ms] group-hover:scale-105"
                                            src="/works/stellar/program/catering.jpg"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="font-display text-xs tracking-[0.3em] uppercase text-white/80">Catering Service</span>
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-32 h-32 border border-[#D4AF37]/10"></div>
                                </div>
                                <div>
                                    <span className="text-[#D4AF37] text-[9px] tracking-super-wide uppercase block mb-4">配送サービス</span>
                                    <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-white">
                                        Executive Catering Service
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-loose font-light mb-6">
                                        管理栄養士が監修した<span className="text-white">高タンパク・低糖質メニュー</span>を、
                                        ご自宅やオフィスへ定期配送。
                                        買い物、調理、カロリー計算——すべての手間を完全に排除した食事管理システムです。
                                    </p>
                                    <p className="text-gray-400 text-sm leading-loose font-light mb-8">
                                        朝食・昼食・夕食、すべてをカバー。
                                        あなたは<span className="text-[#D4AF37]">ただ食べるだけ</span>で、
                                        理想の栄養バランスが自動的にあなたの体に届きます。
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-6 py-4 border border-white/10 bg-white/[0.02]">
                                            <span className="text-[#D4AF37] font-display text-xl">P40</span>
                                            <span className="text-gray-600 text-[9px] tracking-widest uppercase block">Protein (g)</span>
                                        </div>
                                        <div className="px-6 py-4 border border-white/10 bg-white/[0.02]">
                                            <span className="text-white font-display text-xl">C30</span>
                                            <span className="text-gray-600 text-[9px] tracking-widest uppercase block">Carbs (g)</span>
                                        </div>
                                        <div className="px-6 py-4 border border-white/10 bg-white/[0.02]">
                                            <span className="text-white font-display text-xl">F15</span>
                                            <span className="text-gray-600 text-[9px] tracking-widest uppercase block">Fat (g)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                            <div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="font-display text-2xl font-light mb-2 text-white">DNA</h3>
                                <p className="text-[9px] tracking-widest uppercase text-gray-500 mb-6">Genetic Analysis</p>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    遺伝子が決定する代謝タイプを解析。糖質・脂質リスクを判定し、あなたのDNAが求める食事戦略を立案します。
                                </p>
                            </div>
                            <div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="font-display text-2xl font-light mb-2 text-white">BLOOD</h3>
                                <p className="text-[9px] tracking-widest uppercase text-gray-500 mb-6">Regular Monitoring</p>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    定期血液検査と連携。不足している微量栄養素を特定し、パフォーマンス最大化のサプリメンテーションを処方。
                                </p>
                            </div>
                            <div className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="font-display text-2xl font-light mb-2 text-white">TIMING</h3>
                                <p className="text-[9px] tracking-widest uppercase text-gray-500 mb-6">Nutrient Timing</p>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                    「何を」以上に「いつ」を重視。ホルモン分泌リズムに合わせ、同化作用を最大化する摂取タイミングを指導。
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-20 pt-16 border-t border-white/5">
                            <p className="text-sm font-light text-white tracking-widest mb-8">
                                「食事制限」ではなく、「意思決定の解放」へ。
                            </p>
                            <Link className="group relative inline-flex items-center justify-center px-16 py-5 bg-transparent border border-white/20 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]" href="/works/stellar#reservation">
                                <span className="relative z-10 text-[11px] tracking-super-wide uppercase font-bold text-white group-hover:text-[#D4AF37] transition-colors">Start Consultation</span>
                                <div className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </Link>
                        </div>
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
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar#concept">Concept</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">Program</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/professionals">Professionals</Link></li>
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
