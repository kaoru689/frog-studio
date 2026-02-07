import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    variable: "--font-noto-sans-jp",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const shipporiMincho = Shippori_Mincho({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-shippori-mincho",
    display: "swap",
});

export const metadata = {
    title: "『超回復』の嘘と真実 | STELLAR Fitness",
    description: "最新のバイオメカニクスが解明する、至高の休息とは。",
};

export default function ArticlePage() {
    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            <style>{`
                .font-display { font-family: var(--font-space-grotesk), sans-serif; }
                .font-body { font-family: var(--font-noto-sans-jp), sans-serif; }
                .font-serif { font-family: var(--font-shippori-mincho), serif; }
                .text-gradient-gold {
                    background: linear-gradient(135deg, #FFF8E1 0%, #D4AF37 50%, #8C7320 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .text-justify-inter-character {
                    text-justify: inter-character;
                }
            `}</style>

            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-8 md:px-16 transition-all duration-500 mix-blend-difference">
                <div className="flex items-center gap-2">
                    <Link className="group flex items-center gap-4" href="/works/stellar/news">
                        <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors !text-[20px]">arrow_back</span>
                        <span className="font-display text-white text-[10px] font-light tracking-super-wide uppercase group-hover:text-[#D4AF37] transition-colors">Back</span>
                    </Link>
                </div>
                <h1 className="font-display text-white text-[10px] md:text-xs font-light tracking-[0.5em] uppercase absolute left-1/2 -translate-x-1/2 opacity-0 md:opacity-100 transition-opacity">Article</h1>
                <div className="flex items-center gap-8">
                    <button className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Menu</span>
                        <span className="h-[1px] w-6 bg-white/30 origin-right transition-all group-hover:w-10 group-hover:bg-[#D4AF37]"></span>
                    </button>
                </div>
            </header>

            <main className="flex-grow w-full">
                <div className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20"></div>
                    <Image
                        alt="Hero Background"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        src="/works/stellar/news/article-hero-recovery.png"
                        width={2000}
                        height={1200}
                        priority
                    />
                    <div className="relative z-30 h-full flex flex-col justify-end items-center text-center pb-24 md:pb-32 px-6 max-w-5xl mx-auto">
                        <div className="flex items-center gap-6 mb-8 md:mb-10">
                            <span className="font-display text-[10px] md:text-xs tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur-sm">Science</span>
                            <span className="font-display text-[10px] md:text-xs tracking-widest text-[#D4AF37]/80">2023.11.02</span>
                        </div>
                        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.6] md:leading-[1.4] tracking-wider text-white mb-6">
                            「超回復」の嘘と真実。<br />
                            バイオメカニクスが解明する<br className="md:hidden" />至高の休息。
                        </h1>
                        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mt-8"></div>
                    </div>
                </div>

                <article className="relative px-6 md:px-0 max-w-3xl mx-auto -mt-10 md:-mt-20 z-40 pb-32">
                    <div className="bg-[#121212] border border-white/5 p-8 md:p-16 shadow-2xl">
                        <p className="font-serif text-[15px] md:text-[17px] leading-[2.2] text-gray-300 mb-16 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] first-letter:font-serif">
                            多くのトレーニーが神話のように信奉する「超回復」の理論。トレーニング後48時間から72時間の休息が筋肥大の鍵であるという定説は、果たして現代科学においても絶対的な真理なのでしょうか。最新のバイオメカニクスと生理学の研究は、これまでの常識を覆す新たな視点を示唆しています。本記事では、ただベットで寝ているだけではない、エグゼクティブのための「能動的な回復戦略」について詳解します。
                        </p>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">科学的根拠なき「48時間ルール」の功罪</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                筋肉の損傷と修復のプロセスは、個人の遺伝的資質、トレーニング強度、そして栄養状態によって劇的に異なります。一律に48時間を空けるという古典的なメソッドは、回復の早いある者にとっては「機会損失」であり、回復の遅いある者にとっては「オーバートレーニング」の前兆となり得ます。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                真に注目すべきは、カレンダーの日付ではなく、mTOR（哺乳類ラパマイシン標的タンパク質）の活性化持続時間と、血液中のコルチゾールレベルの推移です。STELLAR Fitnessが提唱するのは、画一的な管理ではなく、バイオマーカーに基づいたパーソナライズされた休息です。
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">エグゼクティブのための「投資としての休息」</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                ビジネスの最前線で戦う皆様にとって、疲労によるパフォーマンスの低下は許容されるリスクではありません。単なる睡眠（Passive Rest）に加え、血流を促進し代謝産物の除去を早める「アクティブリカバリー」を取り入れることが、翌日の意思決定の質を高めます。
                            </p>
                            <ul className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 pl-4 border-l border-white/10 space-y-4 my-8">
                                <li>・ 低強度の有酸素運動による血中乳酸の除去促進</li>
                                <li>・ クライオセラピー（冷却療法）による炎症の早期抑制</li>
                                <li>・ マインドフルネス・プログラムによる自律神経の調整</li>
                            </ul>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                これらを組み合わせることで、休息は「停止」ではなく、次なる飛躍への「助走」へと昇華されます。
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">STELLAR独自のリカバリー・プロトコル</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                当ジムでは、トレーニングと同等、あるいはそれ以上にリカバリーを重視しています。会員様専用ラウンジには、最新の酸素カプセルおよび高周波治療器を完備。トレーニング直後のゴールデンタイムに、プロテイン補給と共に科学的なケアを行うことで、筋合成を最大化します。
                            </p>
                            <div className="relative w-full aspect-video overflow-hidden mt-12 mb-8">
                                <Image
                                    alt="Recovery Lounge"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                                    src="/works/stellar/news/article-lounge.png"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                「鍛える」ことと「癒す」こと。この二つの完全な調和こそが、STELLAR Fitnessが提供する至高の肉体美への最短ルートです。
                            </p>
                        </div>

                        <div className="flex justify-center items-center gap-6 mt-24 pt-12 border-t border-white/5">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-600 uppercase">Share</span>
                            <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors" href="#">
                                <span className="material-symbols-outlined !text-[14px]">share</span>
                            </a>
                            <a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors" href="#">
                                <span className="material-symbols-outlined !text-[14px]">link</span>
                            </a>
                        </div>
                    </div>
                </article>

                <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-32">
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-start gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/hyper-recovery">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Prev Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">（Archive Top）</h4>
                            <span className="material-symbols-outlined text-gray-600 absolute bottom-8 right-8 group-hover:-translate-x-2 transition-transform duration-300">west</span>
                        </a>
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-end text-right gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/meal-strategy">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Next Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">エグゼクティブのための食事戦略。<br />「空腹」を武器にする方法。</h4>
                            <span className="material-symbols-outlined text-gray-600 absolute bottom-8 left-8 group-hover:translate-x-2 transition-transform duration-300">east</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-16">
                <div className="mx-auto max-w-7xl px-8">
                    {/* Footer content omitted */}
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
                        {/* More footer links omitted */}
                        <div>
                            <h4 className="text-white text-[10px] tracking-super-wide uppercase mb-8 opacity-40">Section</h4>
                            <ul className="space-y-4 text-[10px] tracking-widest text-gray-500 uppercase">
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#">Concept</a></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/program">Program</Link></li>
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar/professionals">Trainer</Link></li>
                                <li><a className="hover:text-[#D4AF37] transition-colors" href="#">Price</a></li>
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
