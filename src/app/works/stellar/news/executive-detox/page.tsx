// Executive Detox Article
import Link from "next/link";
import Image from "next/image";

const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

export const metadata = {
    title: "デジタルデトックスの週末 | STELLAR Fitness",
    description: "経営者が選ぶ「オフグリッド」体験の効能。意図的な断絶がもたらす、創造性と決断力の復活。",
};

export default function ExecutiveDetoxArticle() {
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
                        alt="デジタルデトックス"
                        className="w-full h-full object-cover"
                        src="/works/stellar/news/digital-detox-realistic.png"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2">Lifestyle</span>
                                <span className="text-[10px] tracking-widest text-gray-400">2023.08.20</span>
                            </div>
                            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                                デジタルデトックスの週末。<br />
                                <span className="text-gradient-gold">「オフグリッド」体験の効能。</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="max-w-3xl mx-auto px-8 py-24 md:py-32">
                    <div className="prose prose-invert prose-lg">
                        <p className="text-gray-300 text-lg leading-loose tracking-wide mb-12 font-light">
                            24時間365日、スマートフォンと共に生きる現代の経営者。
                            しかし、<span className="text-white font-medium">意図的な「接続遮断」こそが、最高のパフォーマンスへの近道</span>であることが、
                            神経科学の研究で明らかになっています。
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            常時接続がもたらす「脳疲労」
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            メールの通知、Slack のメッセージ、SNS の更新。
                            私たちの脳は、一日に平均150回以上のデジタル割り込みを処理しています。
                            この「注意の断片化」は、<span className="text-[#D4AF37]">深い思考を妨げ、創造性を枯渇させる</span>最大の要因です。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            カリフォルニア大学の研究によれば、一度中断された作業に完全に集中し直すのに、
                            平均23分15秒かかることが判明しています。
                            つまり、通知一つが30分近くの生産性を奪う可能性があるのです。
                        </p>

                        <div className="bg-[#121212] border border-white/5 p-8 md:p-12 my-16">
                            <h3 className="font-display text-lg text-white mb-8 tracking-wide uppercase">デジタルデトックスの効果</h3>
                            <ul className="space-y-6 text-gray-400 text-sm">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">前頭前野の回復:</span><br />
                                        意思決定・創造性を司る脳領域の機能が24時間で改善
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">睡眠の質向上:</span><br />
                                        ブルーライト遮断により、メラトニン分泌が正常化
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">ストレスホルモン低下:</span><br />
                                        48時間のデトックスでコルチゾールレベルが平均23%低下
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="text-white font-medium">人間関係の深化:</span><br />
                                        対面コミュニケーションへの集中力が向上
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            エグゼクティブのためのデトックス戦略
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            完全なオフライン化が難しい方には、「デジタル・サバティカル」をお勧めします。
                            週末の土曜日朝8時から日曜日夕方6時まで、スマートフォンを金庫に預ける。
                            たった34時間の断絶が、翌週の生産性を劇的に向上させます。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            STELLARでは、会員様専用の「デバイス預かりサービス」を提供しています。
                            静寂のトレーニングルームで集中し、ラウンジで読書に没頭する。
                            <span className="text-white font-medium">「何もしない贅沢」</span>を、安心して楽しんでください。
                        </p>

                        <div className="border-t border-white/10 pt-12 mt-16">
                            <p className="text-gray-600 text-xs tracking-wide">
                                ※ 緊急連絡が必要な場合は、スタッフが責任をもってお取り次ぎいたします。
                            </p>
                        </div>
                    </div>
                </article>

                <section className="py-24 bg-[#080808] border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Disconnect to Reconnect</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
                            接続を断つことで、自分と再接続する。
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
