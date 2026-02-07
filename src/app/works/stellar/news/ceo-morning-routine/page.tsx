// CEO Morning Routine Article
import Link from "next/link";
import Image from "next/image";

const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

export const metadata = {
    title: "トップCEOが実践する朝5時の習慣 | STELLAR Fitness",
    description: "1日の生産性を3倍にするモーニングルーティン。成功者たちの朝の過ごし方を科学的に解説。",
};

export default function MorningRoutineArticle() {
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
                        alt="朝のルーティン"
                        className="w-full h-full object-cover"
                        src="/works/stellar/news/morning-routine.png"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-[10px] tracking-super-wide text-[#D4AF37] uppercase border border-[#D4AF37]/30 px-4 py-2">Lifestyle</span>
                                <span className="text-[10px] tracking-widest text-gray-400">2023.09.10</span>
                            </div>
                            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                                トップCEOが実践する<br />
                                <span className="text-gradient-gold">朝5時の習慣。</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="max-w-3xl mx-auto px-8 py-24 md:py-32">
                    <div className="prose prose-invert prose-lg">
                        <p className="text-gray-300 text-lg leading-loose tracking-wide mb-12 font-light">
                            Apple のティム・クック、スターバックスのハワード・シュルツ、そして日本を代表する経営者たち。
                            彼らに共通するのは、<span className="text-white font-medium">世界が動き出す前に自分を整える時間を持っている</span>ということです。
                        </p>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            なぜ「朝」が特別なのか
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            睡眠科学の研究により、起床後2〜3時間は「ゴールデンアワー」と呼ばれ、
                            前頭前野（意思決定と創造性を司る脳領域）が最も活性化する時間帯であることが判明しています。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            この貴重な時間を、メールの返信や緊急ではない会議に費やしてしまうのは、
                            <span className="text-[#D4AF37]">資産を無計画に浪費するのと同義</span>です。
                            トップ経営者たちは、この時間を「自己投資」に充てています。
                        </p>

                        <div className="bg-[#121212] border border-white/5 p-8 md:p-12 my-16">
                            <h3 className="font-display text-lg text-white mb-8 tracking-wide uppercase">STELLAR推奨 モーニングルーティン</h3>
                            <ul className="space-y-6 text-gray-400 text-sm">
                                <li className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-display text-xs mt-1">05:00</span>
                                    <div>
                                        <span className="text-white font-medium">起床・水分補給</span><br />
                                        常温の水500mlを摂取。睡眠中に失われた水分を補給
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-display text-xs mt-1">05:15</span>
                                    <div>
                                        <span className="text-white font-medium">瞑想・呼吸法</span><br />
                                        10分間のマインドフルネス瞑想で思考をクリアに
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-display text-xs mt-1">05:30</span>
                                    <div>
                                        <span className="text-white font-medium">軽い運動</span><br />
                                        ストレッチまたは20分のHIITで代謝をアクティベート
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-display text-xs mt-1">06:00</span>
                                    <div>
                                        <span className="text-white font-medium">戦略的思考の時間</span><br />
                                        最重要課題の思考・日記・読書など、自己対話の時間
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#D4AF37] font-display text-xs mt-1">06:45</span>
                                    <div>
                                        <span className="text-white font-medium">栄養補給</span><br />
                                        高タンパク・低GIの朝食で血糖値を安定させる
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 font-light">
                            STELLARの早朝プログラム
                        </h2>

                        <p className="text-gray-400 leading-loose tracking-wide mb-8">
                            当ジムは、多忙な経営者のために<span className="text-white font-medium">朝7時から</span>オープンしています。
                            出社前の60分で、最高のコンディションを整えてビジネスの現場に向かう。
                            これが、STELLARが提案するエグゼクティブの朝の過ごし方です。
                        </p>

                        <p className="text-gray-400 leading-loose tracking-wide mb-12">
                            朝の静寂の中、専属トレーナーとマンツーマンでトレーニングに集中する。
                            その習慣が、あなたのビジネスパフォーマンスを確実に引き上げます。
                        </p>

                        <div className="border-t border-white/10 pt-12 mt-16">
                            <p className="text-gray-600 text-xs tracking-wide">
                                ※ 早朝枠は人気のため、事前予約を推奨いたします。
                            </p>
                        </div>
                    </div>
                </article>

                <section className="py-24 bg-[#080808] border-t border-white/5">
                    <div className="max-w-4xl mx-auto px-8 text-center">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-6">Win the Morning, Win the Day</span>
                        <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
                            朝を変えれば、人生が変わる。
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
