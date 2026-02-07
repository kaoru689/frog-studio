// Sleep Optimization Article
import Link from "next/link";
import Image from "next/image";

const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

export const metadata = {
    title: "睡眠の質が経営判断を左右する | STELLAR Fitness",
    description: "クロノタイプ別・最適な就寝戦略とは。エグゼクティブのための科学的睡眠メソッドを解説。",
};

export default function SleepOptimizationArticle() {
    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
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

            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-8 md:px-16 transition-all duration-500 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <Link className="group flex items-center gap-4" href="/works/stellar/news">
                        <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors !text-[20px]">arrow_back</span>
                        <span className="font-display text-white text-[10px] font-light tracking-super-wide uppercase group-hover:text-[#D4AF37] transition-colors">News</span>
                    </Link>
                </div>
                <h1 className="font-display text-white text-[10px] md:text-xs font-light tracking-[0.5em] uppercase absolute left-1/2 -translate-x-1/2 opacity-0 md:opacity-100 transition-opacity">Article</h1>
                <div className="flex items-center gap-8">
                    <Link href="/works/stellar#reservation" className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-6 bg-white/30 origin-right transition-all group-hover:w-10 group-hover:bg-[#D4AF37]"></span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow">
                <section className="relative w-full h-[70vh] overflow-hidden">
                    <Image
                        alt="睡眠最適化"
                        className="w-full h-full object-cover"
                        src="/works/stellar/news/sleep-optimization.png"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2">Science</span>
                                <span className="text-[10px] tracking-widest text-gray-400">2023.09.15</span>
                            </div>
                            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                                睡眠の質が経営判断を左右する。<br />
                                <span className="text-gradient-gold">クロノタイプ別・最適な就寝戦略。</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="max-w-3xl mx-auto px-8 py-24 md:py-32">
                    <div className="prose prose-invert prose-lg">
                        <p className="text-gray-300 text-lg leading-loose tracking-wide mb-12 font-light">
                            年商数十億を動かす意思決定と、一晩の睡眠の質には、
                            <span className="text-white font-medium">科学的に証明された相関関係</span>があります。
                            経営者の睡眠は「休息」ではなく「投資」です。
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            クロノタイプとは何か
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            人間には遺伝的に決定された「体内時計のタイプ」、すなわちクロノタイプが存在します。
                            大きく分けて「朝型（ライオン）」「夜型（オオカミ）」「中間型（クマ）」「睡眠時間が短いタイプ（イルカ）」の4種類があり、
                            それぞれに最適な睡眠・覚醒のタイミングが異なります。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            自分のクロノタイプを無視した生活習慣は、慢性的な睡眠負債を蓄積させ、
                            <span className="text-[#D4AF37]">認知機能の低下、判断ミスの増加、感情のコントロール不全</span>を引き起こします。
                        </p>

                        <div className="bg-[#121212] border border-white/5 p-8 md:p-12 my-16">
                            <h3 className="font-display text-lg text-white mb-8 tracking-wide uppercase">クロノタイプ別 推奨スケジュール</h3>
                            <ul className="space-y-6 text-gray-400 text-sm">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">ライオン型（朝型）:</span><br />
                                        起床 5:30 / 就寝 21:30 / 重要な意思決定は午前中に
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">オオカミ型（夜型）:</span><br />
                                        起床 7:30 / 就寝 24:00 / クリエイティブな仕事は夕方以降に
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">クマ型（中間型）:</span><br />
                                        起床 7:00 / 就寝 23:00 / もっとも柔軟にスケジュール調整可能
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">イルカ型（短眠型）:</span><br />
                                        起床 6:30 / 就寝 23:30 / 短い睡眠でも高パフォーマンスを維持
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            STELLARの睡眠最適化プログラム
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            当ジムでは、会員様一人ひとりのクロノタイプを遺伝子検査とウェアラブルデータの解析により特定し、
                            トレーニング時間・栄養摂取タイミング・サプリメント処方をパーソナライズします。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            睡眠の質を高めることは、翌朝の会議のパフォーマンスを高めることと同義です。
                            <span className="text-white font-medium">眠りを制する者が、ビジネスを制する。</span>
                            STELLARは、その確信に基づいたサービスを提供します。
                        </p>

                        <div className="border-t border-white/10 pt-12 mt-16">
                            <p className="text-gray-600 text-xs tracking-wide">
                                ※ クロノタイプ診断は、STELLAR LEGACY会員の方は追加料金なしでご利用いただけます。
                            </p>
                        </div>
                    </div>
                </article>

                <section className="py-24 bg-[#080808] border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Sleep is Investment</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
                            まずは、あなたのクロノタイプを知ることから。
                        </h2>
                        <Link
                            href="/works/stellar#reservation"
                            className="inline-flex items-center justify-center px-12 py-5 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors"
                        >
                            無料カウンセリングを予約
                        </Link>
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
