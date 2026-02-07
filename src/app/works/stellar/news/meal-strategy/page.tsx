import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-sans-jp", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-space-grotesk", display: "swap" });
const shipporiMincho = Shippori_Mincho({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-shippori-mincho", display: "swap" });

export const metadata = {
    title: "エグゼクティブのための食事戦略 | STELLAR Fitness",
    description: "「空腹」を武器にする方法。パフォーマンスを最大化する食事術。",
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

            {/* Header (Same as template) */}
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
                {/* Hero */}
                <div className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20"></div>
                    <Image
                        alt="Gourmet Meal Hero"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/works/stellar/news/article-hero-meal.jpg"
                        width={2000}
                        height={1200}
                        priority
                    />
                    <div className="relative z-30 h-full flex flex-col justify-end items-center text-center pb-24 md:pb-32 px-6 max-w-5xl mx-auto">
                        <div className="flex items-center gap-6 mb-8 md:mb-10">
                            <span className="font-display text-[10px] md:text-xs tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur-sm">Lifestyle</span>
                            <span className="font-display text-[10px] md:text-xs tracking-widest text-[#D4AF37]/80">2023.10.28</span>
                        </div>
                        <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.6] md:leading-[1.4] tracking-wider text-white mb-6">
                            エグゼクティブのための食事戦略。<br />
                            「空腹」を武器にする方法。
                        </h1>
                        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mt-8"></div>
                    </div>
                </div>

                {/* Content */}
                <article className="relative px-6 md:px-0 max-w-3xl mx-auto -mt-10 md:-mt-20 z-40 pb-32">
                    <div className="bg-[#121212] border border-white/5 p-8 md:p-16 shadow-2xl">
                        <p className="font-serif text-[15px] md:text-[17px] leading-[2.2] text-gray-300 mb-16 first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] first-letter:font-serif">
                            飽食の時代において、エグゼクティブが最もコントロールすべきリソースは「時間」だけではありません。「血糖値」という生理学的数値をマネジメントすることこそが、午後のパフォーマンスを劇的に変える鍵となります。集中力の欠如、午後の睡魔、イライラ...これらはすべて、あなたの意志の弱さではなく、食事の選択ミスが生んだ「脳のガス欠」かもしれません。
                        </p>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">血糖値スパイクの脅威</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                ビジネスランチでの丼もの、パスタ、ラーメン。これら糖質主体の食事は、急激な血糖値の上昇（スパイク）を招きます。すると身体は、血糖値を下げるためにインスリンを大量に分泌し、今度は血糖値が急降下します。この「乱高下」こそが、脳へのエネルギー供給を不安定にさせ、強烈な眠気とパフォーマンス低下を引き起こす主犯です。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                STELLAR Fitnessでは、徹底した「低GI食」と「ベジタブルファースト」、そしてMCTオイル（中鎖脂肪酸）を活用したケトジェニックなアプローチを推奨しています。
                            </p>
                        </div>

                        <div className="mb-20">
                            <h2 className="flex items-center gap-4 mb-10 group">
                                <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
                                <span className="font-serif text-xl md:text-2xl text-white tracking-widest">「戦略的空腹」のススメ</span>
                            </h2>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character mb-8">
                                「お腹が空いたらかわいそう」というのは、過去の価値観です。実は、適度な空腹状態（ファスティング）にあるとき、体内では「サーチュイン遺伝子（長寿遺伝子）」が活性化し、細胞内の老廃物を除去するオートファジー機能が働きます。
                            </p>
                            <p className="font-serif text-[15px] md:text-[16px] leading-[2.2] text-gray-400 text-justify text-justify-inter-character">
                                また、消化活動にエネルギーを使わない分、脳への血流が確保され、直感力や判断力が研ぎ澄まされます。重要な商談やプレゼンテーションの前こそ、満腹を避け、あえて「空腹」を味方につける。それが、シリコンバレーやトップエリートたちの間では常識となりつつある「勝つための食事戦略」です。
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-16">
                {/* Same Footer Content */}
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
                        {/* More footer links... omitting for brevity in this tool call but included in file */}
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
