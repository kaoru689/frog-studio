import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-sans-jp", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-space-grotesk", display: "swap" });
const shipporiMincho = Shippori_Mincho({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-shippori-mincho", display: "swap" });

export const metadata = {
    title: "雑誌「GOETHE」掲載のお知らせ | STELLAR Fitness",
    description: "経営者が選ぶ隠れ家ジム特集にて、当ジムが紹介されました。",
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
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20"></div>
                    <Image
                        alt="GOETHE Magazine Cover Feature"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        src="/works/stellar/news/article-hero-goethe.jpg"
                        width={2000}
                        height={1200}
                        priority
                    />
                    <div className="relative z-30 h-full flex flex-col justify-end items-center text-center pb-24 md:pb-32 px-6 max-w-5xl mx-auto">
                        <div className="flex items-center gap-6 mb-8 md:mb-10">
                            <span className="font-display text-[10px] md:text-xs tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur-sm">Media</span>
                            <span className="font-display text-[10px] md:text-xs tracking-widest text-[#D4AF37]/80">2023.09.20</span>
                        </div>
                        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.6] md:leading-[1.4] tracking-wider text-white mb-6">
                            雑誌「GOETHE」11月号掲載。<br />
                            経営者が選ぶ隠れ家ジム特集。
                        </h1>
                        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mt-8"></div>
                    </div>
                </div>

                <article className="relative px-6 md:px-0 max-w-3xl mx-auto -mt-10 md:-mt-20 z-40 pb-32">
                    <div className="bg-[#121212] border border-white/5 p-8 md:p-16 shadow-2xl">
                        <p className="font-serif text-[15px] md:text-[17px] leading-[2.2] text-gray-300 mb-16 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] first-letter:font-serif">
                            「仕事も遊びも、最高峰を目指す男たちへ」をコンセプトに、エグゼクティブのライフスタイルを牽引し続ける雑誌『GOETHE（ゲーテ）』。2023年11月号の巻頭特集「エグゼクティブの肉体改造論」において、STELLAR Fitnessが見開き2ページにわたり紹介されました。「誰にも会わずに、その日一番のパフォーマンスを引き出す」という当ジムの独自のポジショニングが高く評価いただいています。
                        </p>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">なぜ、経営者は「筋肉」への投資を惜しまないのか</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                誌面では、当社代表トレーナーと、会員であるIT企業CEOとの対談も掲載。ビジネスおける意思決定の質（Quality of Decision Making）と、肉体的なコンディションの相関関係について深く語り合っています。「脳のスタミナは、身体のスタミナによって支えられている」というCEOの言葉は、まさにSTELLAR Fitnessが提唱する哲学そのものです。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                また、単なる筋力アップではなく、姿勢改善によるプレゼンス（存在感）の向上、そして質の高い睡眠確保によるリカバリー戦略についてもフォーカスされています。
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">見えざる美学、南青山の隠れ家として</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                編集部からは、特に当ジムの「プライバシーへの徹底した配慮」について賞賛の言葉をいただきました。入口から更衣室、トレーニングエリアに至るまで、他の会員様と顔を合わせることのない動線設計。そして、五感を満たすラグジュアリーな内装デザイン。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                「ここはジムではなく、エグゼクティブのための『調整室（Cockpit）』である」——と評されたその空間の魅力を、美しい写真と共に紹介いただいています。
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">書店、Amazonにて発売中</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                この度の掲載を記念し、「GOETHEを見た」とお伝えいただいた新規ご入会者様には、入会金の優待に加え、オリジナルタオルセットをプレゼントいたします。詳細は無料カウンセリングにてお問い合わせください。
                            </p>
                            <div className="flex justify-center mt-12">
                                <a className="group relative inline-flex items-center gap-4 px-12 py-4 bg-transparent border border-white/20 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500" href="#">
                                    <span className="relative z-10 font-display text-xs tracking-super-wide text-white group-hover:text-[#D4AF37] uppercase transition-colors">Buy on Amazon</span>
                                    <span className="relative z-10 material-symbols-outlined text-white/50 group-hover:text-[#D4AF37] !text-[16px] transition-colors">open_in_new</span>
                                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                </a>
                            </div>
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
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-start gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/aoyama-sanctuary">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Prev Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">南青山というサンクチュアリ。<br />移動時間さえもコンディショニングに変える。</h4>
                            <span className="material-symbols-outlined text-gray-600 absolute bottom-8 right-8 group-hover:-translate-x-2 transition-transform duration-300">west</span>
                        </a>
                        <a className="group relative bg-[#0A0A0A] p-8 md:p-12 flex flex-col items-end text-right gap-4 hover:bg-[#121212] transition-colors overflow-hidden" href="/works/stellar/news/hyper-recovery">
                            <span className="font-display text-[10px] tracking-super-wide text-gray-500 uppercase group-hover:text-[#D4AF37] transition-colors">Next Article</span>
                            <h4 className="font-serif text-lg text-gray-300 group-hover:text-white transition-colors">「超回復」の嘘と真実。<br />バイオメカニクスが解明する至高の休息。</h4>
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
