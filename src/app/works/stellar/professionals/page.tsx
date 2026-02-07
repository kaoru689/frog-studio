// import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google"; // DISABLED for ECONNRESET recovery
import Link from "next/link";
import Image from "next/image";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

// // Define fonts locally for this specific page (matching main page)
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

export const metadata = {
    title: "STELLAR Fitness | Professionals",
    description: "南青山の経営者向けパーソナルジム STELLAR Fitness のトレーナー紹介。",
};

export default function ProfessionalsPage() {
    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
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
                .hero-vignette {
                    background: radial-gradient(circle, transparent 20%, rgba(10, 10, 10, 0.8) 100%);
                }
                .thin-border {
                    border-width: 0.5px;
                }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-500 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
                <Link href="/works/stellar" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D4AF37] !text-[20px]">diamond</span>
                    <h2 className="font-display text-white text-lg font-light tracking-super-wide uppercase">STELLAR</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#concept">Concept</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/program">Program</Link>
                    <Link className="text-[10px] tracking-extra-wide text-[#D4AF37] uppercase" href="/works/stellar/professionals">Professionals</Link>
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

            <main className="flex-grow pt-24">
                <section className="relative w-full py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <div className="relative z-10 w-full max-w-screen-xl">
                        <p className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase font-medium mb-8 animate-fade-in-up">The Masters</p>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-white uppercase">
                            PROFESSIONALS
                        </h1>
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
                        <p className="font-serif text-xl md:text-2xl text-gray-300 tracking-widest font-light">
                            研ぎ澄まされた<span className="text-gradient-gold">指導者たち</span>
                        </p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
                </section>

                <section className="relative w-full pb-40 px-6 md:px-12" id="professionals">
                    <div className="max-w-7xl mx-auto space-y-32">
                        {/* Trainer 1: Kento Sato - FOUNDER */}
                        <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ring-1 ring-[#D4AF37]/20 p-8 lg:p-12 bg-gradient-to-br from-[#0A0A0A] to-[#111]">
                            {/* Founder Badge - Prominent */}
                            <div className="absolute -top-4 left-8 lg:left-12 bg-[#D4AF37] px-5 py-2 z-20 shadow-lg">
                                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#0A0A0A]">Founder / Head Trainer</span>
                            </div>
                            <div className="lg:col-span-5 order-2 lg:order-1 relative z-10 pt-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
                                    <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase font-bold">代表</span>
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-wide uppercase">Kento Sato</h2>
                                <p className="font-serif text-lg text-gray-400 mb-8 tracking-widest">佐藤 健人</p>
                                <div className="space-y-6 text-gray-400 font-light leading-loose text-sm tracking-wide border-l-2 border-[#D4AF37]/50 pl-6">
                                    <p>
                                        元プロアスリートとしての極限状態の経験と、最新のバイオメカニクス理論を融合。
                                        「感覚」を「数値」に置き換える独自のメソッドで、経営者のパフォーマンスを最大化する。
                                    </p>
                                    <p>
                                        身体機能の改善だけでなく、ビジネスシーンで求められる「勝者のメンタリティ」をも醸成する指導は、多くのトップエグゼクティブから絶大な信頼を得ている。
                                    </p>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/10 flex gap-8">
                                    <div>
                                        <span className="block text-[9px] text-[#D4AF37] uppercase tracking-widest mb-1">Specialty</span>
                                        <span className="text-xs text-white tracking-wider font-medium">Biomechanics</span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] text-[#D4AF37] uppercase tracking-widest mb-1">Career</span>
                                        <span className="text-xs text-white tracking-wider font-medium">Former Pro Athlete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2 relative">
                                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-[#111]">
                                    <Image
                                        alt="Kento Sato Portrait"
                                        className="w-full h-full object-cover object-top grayscale contrast-110 brightness-90 opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                        src="/works/stellar/professionals/trainer-kento.jpg"
                                        width={800}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r border-b border-[#D4AF37]/30"></div>
                                </div>
                                <div className="absolute -z-10 -top-12 -right-12 text-[120px] md:text-[200px] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none">01</div>
                            </div>
                        </article>

                        {/* Trainer 2: Ryosuke Tanaka */}
                        <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 relative order-1">
                                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-[#111]">
                                    <Image
                                        alt="Ryosuke Tanaka Portrait"
                                        className="w-full h-full object-cover object-center grayscale contrast-110 brightness-90 opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                        src="/works/stellar/professionals/trainer-ryosuke.jpg"
                                        width={800}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute -top-1 -left-1 w-24 h-24 border-l border-t border-[#D4AF37]/30"></div>
                                </div>
                                <div className="absolute -z-10 -bottom-12 -left-12 text-[120px] md:text-[200px] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none">02</div>
                            </div>
                            <div className="lg:col-span-5 order-2 relative z-10 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
                                    <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase">Senior Trainer</span>
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-wide uppercase">Ryosuke Tanaka</h2>
                                <p className="font-serif text-sm text-gray-500 mb-8 tracking-widest">田中 良介</p>
                                <div className="space-y-6 text-gray-400 font-light leading-loose text-sm tracking-wide border-l border-white/10 pl-6">
                                    <p>
                                        理学療法士の資格を有し、医学的知見に基づいた精密なボディ・エンジニアリングを提供。
                                        姿勢矯正から慢性的な不調の改善まで、身体の土台を再構築するスペシャリスト。
                                    </p>
                                    <p>
                                        「怪我をしない、疲れない身体」こそが最高の資産であると考え、エビデンスに基づいたコンディショニングで、多忙な経営者の健康を守り抜く。
                                    </p>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/5 flex gap-8">
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Specialty</span>
                                        <span className="text-xs text-white tracking-wider">Medical Conditioning</span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Qualification</span>
                                        <span className="text-xs text-white tracking-wider">Physical Therapist</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Trainer 3: Daiki Yamamoto */}
                        <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
                                    <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase">Performance Coach</span>
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-wide uppercase">Daiki Yamamoto</h2>
                                <p className="font-serif text-sm text-gray-500 mb-8 tracking-widest">山本 大樹</p>
                                <div className="space-y-6 text-gray-400 font-light leading-loose text-sm tracking-wide border-l border-white/10 pl-6">
                                    <p>
                                        数々の著名経営者の肉体改造を成功させてきた実績を持つ、ボディメイクの職人。
                                        短期間で目に見える結果を出しつつ、リバウンドしない生活習慣の定着までを徹底サポート。
                                    </p>
                                    <p>
                                        ストイックなトレーニングの中にも、個々のライフスタイルに寄り添う柔軟性を持ち合わせ、目標達成への最短ルートを伴走する。
                                    </p>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/5 flex gap-8">
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Specialty</span>
                                        <span className="text-xs text-white tracking-wider">Body Transformation</span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Experience</span>
                                        <span className="text-xs text-white tracking-wider">Executive Coaching</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-2 relative">
                                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-[#111]">
                                    <Image
                                        alt="Daiki Yamamoto Portrait"
                                        className="w-full h-full object-cover object-center grayscale contrast-110 brightness-90 opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                        src="/works/stellar/professionals/trainer-daiki.jpg"
                                        width={800}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r border-b border-[#D4AF37]/30"></div>
                                </div>
                                <div className="absolute -z-10 -top-12 -right-12 text-[120px] md:text-[200px] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none">03</div>
                            </div>
                        </article>

                        {/* Nutritionist: Rin Asuka */}
                        <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 relative order-1">
                                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-[#111]">
                                    <Image
                                        alt="Rin Asuka Portrait"
                                        className="w-full h-full object-cover object-center grayscale contrast-110 brightness-90 opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000 ease-out"
                                        src="/works/stellar/professionals/nutritionist-asuka.jpg"
                                        width={800}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute -top-1 -left-1 w-24 h-24 border-l border-t border-[#D4AF37]/30"></div>
                                </div>
                                <div className="absolute -z-10 -bottom-12 -left-12 text-[120px] md:text-[200px] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none">04</div>
                            </div>
                            <div className="lg:col-span-5 order-2 relative z-10 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
                                    <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase">Chief Nutritionist</span>
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-wide uppercase">Rin Asuka</h2>
                                <p className="font-serif text-sm text-gray-500 mb-8 tracking-widest">明日香 凛</p>
                                <div className="space-y-6 text-gray-400 font-light leading-loose text-sm tracking-wide border-l border-white/10 pl-6">
                                    <p>
                                        管理栄養士として15年以上のキャリアを持ち、現在はSTELLAR LEGACY会員専用の「24時間栄養コンシェルジュチーム」を統括。
                                        DNA解析に基づくパーソナライズド・ニュートリションの第一人者。
                                    </p>
                                    <p>
                                        「食は、最も確実なパフォーマンス投資」という哲学のもと、経営者の意思決定力・集中力・睡眠品質を食事から最大化する。
                                        国内外の最新論文を常にチェックし、エビデンスベースの栄養戦略を提供。
                                    </p>
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/5 flex gap-8">
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Specialty</span>
                                        <span className="text-xs text-white tracking-wider">Personalized Nutrition</span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] text-gray-600 uppercase tracking-widest mb-1">Qualification</span>
                                        <span className="text-xs text-white tracking-wider">Registered Dietitian</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* More Professionals Message */}
                    <div className="max-w-4xl mx-auto mt-32 text-center">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mb-12"></div>
                        <p className="text-gray-500 text-sm tracking-wide leading-relaxed">
                            ここにご紹介したのは、STELLARを支えるプロフェッショナルの一部です。<br />
                            他にも、<span className="text-white">理学療法士</span>、<span className="text-white">スポーツドクター</span>、<span className="text-white">メンタルコーチ</span>など、<br />
                            各分野の専門家があなたの変革をサポートします。
                        </p>
                    </div>
                </section>

                <section className="py-32 relative overflow-hidden bg-[#0A0A0A] border-t border-white/5">
                    <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
                    <div className="mx-auto max-w-4xl px-8 relative z-10 text-center">
                        <div className="mb-12 inline-flex items-center gap-6">
                            <span className="h-[1px] w-8 bg-[#D4AF37]/30"></span>
                            <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">Limited to 3 Select Members</p>
                            <span className="h-[1px] w-8 bg-[#D4AF37]/30"></span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-12 tracking-tight leading-snug">
                            一流の指導者と共に、<br />
                            <span className="italic text-gray-400">未知なる頂へ。</span>
                        </h2>
                        <a className="group relative inline-flex items-center justify-center px-16 py-6 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] overflow-hidden transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#0A0A0A]" href="#">
                            <span className="relative z-10 text-[11px] tracking-super-wide uppercase font-bold">Book a Consultation</span>
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
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar#concept">Concept</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">Program</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/professionals">Professionals</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Price</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-[10px] tracking-super-wide uppercase mb-8 opacity-40">Information</h4>
                            <ul className="space-y-4 text-[10px] tracking-widest text-gray-500 uppercase">
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">FAQ</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Contact</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="#">Policy</Link></li>
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
