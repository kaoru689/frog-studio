// import { Noto_Sans_JP, Space_Grotesk, Shippori_Mincho } from "next/font/google"; // DISABLED for recovery
import Link from "next/link";
import Image from "next/image";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

export const metadata = {
    title: "最新型高気圧酸素カプセル導入のお知らせ | STELLAR Fitness",
    description: "NASAも採用する最先端の高気圧酸素カプセルを導入。細胞レベルでの回復を実現し、経営判断力と集中力を最大化します。",
};

export default function OxygenCapsuleArticle() {
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

            {/* Header */}
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
                {/* Hero Image */}
                <section className="relative w-full h-[70vh] overflow-hidden">
                    <Image
                        alt="高気圧酸素カプセル"
                        className="w-full h-full object-cover"
                        src="/works/stellar/news/oxygen-capsule.jpg"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2">News</span>
                                <span className="text-[10px] tracking-widest text-gray-400">2024.02.01</span>
                            </div>
                            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                                最新型高気圧酸素カプセル<br />
                                <span className="text-gradient-gold">導入のお知らせ</span>
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base tracking-wide">
                                細胞レベルでの回復を実現。NASAも採用する最先端テクノロジー。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-8 py-24 md:py-32">
                    <div className="prose prose-invert prose-lg">
                        <p className="text-gray-300 text-lg leading-loose tracking-wide mb-12 font-light">
                            STELLAR Fitnessは、会員の皆様のリカバリー体験をさらに進化させるため、
                            <span className="text-white font-medium">最新型の高気圧酸素カプセル</span>を導入いたしました。
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            なぜ、酸素が経営者のパフォーマンスを変えるのか
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            私たちの脳は、体重のわずか2%でありながら、全身の酸素消費量の約20%を占めています。
                            つまり、<span className="text-[#D4AF37]">酸素供給の最適化は、即座に意思決定能力と集中力に直結する</span>のです。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            高気圧環境下で純度の高い酸素を吸入することで、通常の呼吸では届かない細胞レベルまで酸素が浸透。
                            疲労物質の分解を促進し、細胞の自己修復機能を活性化します。
                        </p>

                        <div className="bg-[#121212] border border-white/5 p-8 md:p-12 my-16">
                            <h3 className="font-display text-lg text-white mb-8 tracking-wide uppercase">導入機器スペック</h3>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37]"></span>
                                    <span>最大気圧：1.5気圧（医療グレード）</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37]"></span>
                                    <span>酸素濃度：最大50%（通常大気の約2.4倍）</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37]"></span>
                                    <span>内装：プレミアムレザー、ノイズキャンセリング完備</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37]"></span>
                                    <span>セッション時間：45分〜90分（プログラムにより変動）</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            期待される効果
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="border border-white/10 p-6">
                                <span className="material-symbols-outlined text-[#D4AF37] text-2xl mb-4 block">psychology</span>
                                <h4 className="text-white text-sm mb-2">脳機能の最適化</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">集中力・判断力・創造性の向上</p>
                            </div>
                            <div className="border border-white/10 p-6">
                                <span className="material-symbols-outlined text-[#D4AF37] text-2xl mb-4 block">bolt</span>
                                <h4 className="text-white text-sm mb-2">疲労回復の加速</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">乳酸分解促進・筋肉痛の軽減</p>
                            </div>
                            <div className="border border-white/10 p-6">
                                <span className="material-symbols-outlined text-[#D4AF37] text-2xl mb-4 block">bedtime</span>
                                <h4 className="text-white text-sm mb-2">睡眠品質の改善</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">深い眠りへの誘導・自律神経調整</p>
                            </div>
                            <div className="border border-white/10 p-6">
                                <span className="material-symbols-outlined text-[#D4AF37] text-2xl mb-4 block">favorite</span>
                                <h4 className="text-white text-sm mb-2">細胞レベルの若返り</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">コラーゲン生成促進・肌質改善</p>
                            </div>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            ご利用について
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            本酸素カプセルは、STELLAR LEGACY会員の方は追加料金なしでご利用いただけます。
                            STELLAR EXECUTIVE会員の方は、月2回まで無料、以降は1セッション¥15,000にてご案内いたします。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            ご予約は、専用アプリまたは直接スタッフまでお申し付けください。
                            皆様のさらなる進化を、最先端のテクノロジーでサポートいたします。
                        </p>

                        <div className="border-t border-white/10 pt-12 mt-16">
                            <p className="text-gray-600 text-xs tracking-wide">
                                ※ 効果には個人差があります。妊娠中・高血圧・閉所恐怖症の方はご利用前にスタッフまでご相談ください。
                            </p>
                        </div>
                    </div>
                </article>

                {/* CTA */}
                <section className="py-24 bg-[#080808] border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Experience the Future</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
                            まずは体験から。
                        </h2>
                        <Link
                            href="/works/stellar#reservation"
                            className="inline-flex items-center justify-center px-12 py-5 bg-[#D4AF37] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors"
                        >
                            無料カウンセリングを予約
                        </Link>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="py-24 px-8 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="font-serif text-xl text-white mb-12 text-center">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Link href="/works/stellar/news/hyper-recovery" className="group">
                                <div className="aspect-[4/3] overflow-hidden bg-[#121212] mb-4">
                                    <Image
                                        alt="超回復"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                        src="/works/stellar/news/thumb-recovery.png"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">「超回復」の嘘と真実。</p>
                            </Link>
                            <Link href="/works/stellar/news/brain-correlation" className="group">
                                <div className="aspect-[4/3] overflow-hidden bg-[#121212] mb-4">
                                    <Image
                                        alt="脳機能"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                        src="/works/stellar/news/thumb-brain.png"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">脳機能と筋出力の相関性。</p>
                            </Link>
                            <Link href="/works/stellar/news/meal-strategy" className="group">
                                <div className="aspect-[4/3] overflow-hidden bg-[#121212] mb-4">
                                    <Image
                                        alt="食事戦略"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                        src="/works/stellar/news/article-hero-meal.jpg"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">エグゼクティブのための食事戦略。</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
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
