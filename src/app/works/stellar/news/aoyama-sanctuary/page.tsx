import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-sans-jp", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-space-grotesk", display: "swap" });
const shipporiMincho = Shippori_Mincho({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-shippori-mincho", display: "swap" });

export const metadata = {
    title: "南青山というサンクチュアリ | STELLAR Fitness",
    description: "移動時間さえもコンディショニングに変える。立地の哲学。",
};

export default function ArticlePage() {
    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            {/* Styles */}
            <style>{`
                .font-display { font-family: var(--font-space-grotesk), sans-serif; }
                .font-body { font-family: var(--font-noto-sans-jp), sans-serif; }
                .font-serif { font-family: var(--font-shippori-mincho), serif; }
                .text-justify-inter-character { text-justify: inter-character; }
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
                    {/* Reuse facility thumb if no specific sanctuary image */}
                    <Image
                        alt="Sanctuary Hero"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/works/stellar/news/article-hero-sanctuary.jpg"
                        width={2000}
                        height={1200}
                        priority
                    />
                    <div className="relative z-30 h-full flex flex-col justify-end items-center text-center pb-24 md:pb-32 px-6 max-w-5xl mx-auto">
                        <div className="flex items-center gap-6 mb-8 md:mb-10">
                            <span className="font-display text-[10px] md:text-xs tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur-sm">Lifestyle</span>
                            <span className="font-display text-[10px] md:text-xs tracking-widest text-[#D4AF37]/80">2023.09.24</span>
                        </div>
                        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.6] md:leading-[1.4] tracking-wider text-white mb-6">
                            南青山というサンクチュアリ。<br />
                            移動時間さえもコンディショニングに変える。
                        </h1>
                        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mt-8"></div>
                    </div>
                </div>

                <article className="relative px-6 md:px-0 max-w-3xl mx-auto -mt-10 md:-mt-20 z-40 pb-32">
                    <div className="bg-[#121212] border border-white/5 p-8 md:p-16 shadow-2xl">
                        <p className="font-serif text-[15px] md:text-[17px] leading-[2.2] text-gray-300 mb-16 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] first-letter:font-serif">
                            STELLAR Fitnessが南青山を選んだ理由は、単なる高級住宅街というブランドイメージではありません。この地が持つ独特の空気感、静寂、そして文化的な成熟度が、エグゼクティブのトレーニング効果を高めるために必要不可欠な要素であると確信しているからです。
                        </p>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">OFFへの切り替えスイッチ</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                六本木や丸の内のビジネス街から車でわずか数分。しかし、南青山に入った瞬間、街のノイズは消え去り、心地よい静寂が訪れます。当ジムへ向かうこの短いアプローチの時間こそが、緊張し続けた交感神経からリラックスを司る副交感神経へのスイッチを促し、内省的なトレーニングへの集中力を高める儀式となります。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                到着してすぐにトレーニングを始めるのではなく、まずはラウンジで一息つき、外界から隔絶された空間で自身と向き合う。このプロセスを大切にできる場所として、南青山以外の選択肢はありませんでした。
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">「隠れ家」であることの価値</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                大規模なフィットネスクラブのように、多くの会員と顔を合わせることはありません。地下にひっそりと構えられたエントランス、完全予約制の運用、そしてプライバシーが保たれた動線。ここでは社会的地位や肩書きを脱ぎ捨て、ただ一人の人間として、純粋に肉体と精神の研鑽に没頭いただけます。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                誰にも邪魔されず、誰の目も気にしない。真のサンクチュアリ（聖域）が、ここにあります。
                            </p>
                        </div>
                    </div>
                </article>

                <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-32">
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-start gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/brain-correlation">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Prev Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">脳機能と筋出力の相関性。<br />集中力を可視化する最新デバイス導入。</h4>
                            <span className="material-symbols-outlined text-gray-600 absolute bottom-8 right-8 group-hover:-translate-x-2 transition-transform duration-300">west</span>
                        </a>
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-end text-right gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/goethe-feature">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Next Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">雑誌「GOETHE」11月号掲載。<br />経営者が選ぶ隠れ家ジム特集。</h4>
                            <span className="material-symbols-outlined text-gray-600 absolute bottom-8 left-8 group-hover:translate-x-2 transition-transform duration-300">east</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-16">
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
                        {/* Links ... */}
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
