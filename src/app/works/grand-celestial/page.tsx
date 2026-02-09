"use client";

import Link from "next/link";
import { Playfair_Display, Noto_Serif_JP, Lato, Noto_Sans_JP } from "next/font/google";

// Optimize Google Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-playfair" });
const notoSerifJP = Noto_Serif_JP({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-noto-serif" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-noto-sans" });

export default function GrandCelestialPage() {
    return (
        <div className={`${playfair.variable} ${notoSerifJP.variable} ${lato.variable} ${notoSansJP.variable} font-body text-[#1a1a1a] dark:text-[#e5e5e5] bg-[#f8f8f8] dark:bg-[#050a18] antialiased transition-colors duration-300`}>
            {/* Custom Styles */}
            <style jsx global>{`
                .font-display { font-family:var(--font-playfair), var(--font-noto-serif), serif; }
                .font-body { font-family:var(--font-lato), var(--font-noto-sans), sans-serif; }
                .font-serif { font-family:var(--font-noto-serif), serif; }
                .text-shadow-gold { text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(207, 170, 110, 0.3); }
                .text-shadow-heavy { text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9); }
                .vertical-text { writing-mode: vertical-rl; text-orientation: upright; }
                .bg-royal-gradient { background: linear-gradient(135deg, #050a18 0%, #0a1a3b 100%); }
                .gold-border { border: 1px solid #cfaa6e; }
                .chapter-title::after { content: ''; display: block; width: 60px; height: 2px; background-color: #cfaa6e; margin-top: 1rem; }
            `}</style>

            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
                <Link href="#booking" className="bg-[#0a1a3b] border-l-2 border-y-2 border-[#cfaa6e] text-[#cfaa6e] w-16 h-auto py-6 flex flex-col items-center justify-center shadow-2xl hover:bg-[#cfaa6e] hover:text-[#0a1a3b] transition-all duration-300 cursor-pointer group">
                    <span className="material-symbols-outlined mb-2 text-2xl group-hover:scale-110 transition-transform">calendar_month</span>
                    <span className="vertical-text font-display text-sm tracking-widest leading-loose font-serif">来館予約</span>
                </Link>
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex">
                <Link href="#booking" className="flex-1 bg-[#cfaa6e] text-[#0a1a3b] py-4 text-center font-display font-bold shadow-lg uppercase tracking-widest">
                    Reserve Fair
                </Link>
                <Link href="#tel" className="flex-1 bg-[#0a1a3b] text-white py-4 text-center font-display font-bold shadow-lg border-t border-white/20">
                    Contact
                </Link>
            </div>
            <header className="fixed top-0 left-0 w-full z-40 bg-[#0a1a3b]/95 backdrop-blur-md shadow-lg border-b border-[#cfaa6e]/30 transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#cfaa6e] text-3xl">church</span>
                        <div className="text-xl md:text-2xl font-display font-bold text-white tracking-[0.2em] uppercase">
                            Grand Celestial
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="#" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Concept</Link>
                        <Link href="#chapel" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Chapel</Link>
                        <Link href="#banquet" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Banquet</Link>
                        <Link href="#cuisine" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Cuisine</Link>
                        <Link href="#hospitality" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Hospitality</Link>
                        <Link href="#venue" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">Venue</Link>
                    </nav>
                    <button className="md:hidden text-[#cfaa6e]">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </header>
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img alt="Grand Cathedral with Royal Blue Carpet" className="w-full h-full object-cover opacity-60" src="/images/grand-celestial/6bf8fabd-fbc6-4b0b-9f54-3af7e2c03beb.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3b]/60 via-[#0a1a3b]/30 to-black/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-10">
                    <div className="inline-block border-t border-b border-[#cfaa6e] py-2 mb-6 px-8 bg-black/30 backdrop-blur-sm">
                        <h2 className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-[#cfaa6e]">Premium Wedding Fair</h2>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-shadow-gold text-white">
                        <span className="block text-2xl md:text-3xl mb-4 font-normal tracking-widest text-white/90 font-serif">永遠を誓う、ロイヤルブルーの聖域</span>
                        GRAND CELESTIAL<br />
                        <span className="italic font-light text-5xl md:text-7xl text-[#cfaa6e]">Weddings</span>
                    </h1>
                    <p className="font-display text-sm md:text-lg tracking-[0.2em] mb-12 text-gray-200">
                        伝統と格式が織りなす、至高のウエディング
                    </p>
                    <Link href="#booking" className="inline-flex items-center justify-center px-10 py-4 border border-[#cfaa6e] text-[#cfaa6e] hover:bg-[#cfaa6e] hover:text-[#0a1a3b] transition-all duration-500 uppercase tracking-widest font-serif text-sm bg-black/50 backdrop-blur-sm">
                        View Fair Details
                    </Link>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-[#cfaa6e]/70">
                    <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                </div>
            </section>
            <section className="py-28 bg-gradient-to-b from-[#fdfbf7] via-[#faf6ef] to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23cfaa6e' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cfaa6e]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cfaa6e]/40 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <span className="inline-block text-[#cfaa6e] tracking-[0.4em] uppercase text-xs font-bold mb-3 px-4 py-1 border border-[#cfaa6e]/40 rounded-full">Limited Time Offer</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0a1a3b] mb-4 tracking-wide">
                            <span className="relative inline-block pb-3 border-b-2 border-[#cfaa6e]">Exclusive Fair Benefits</span>
                        </h2>
                        <p className="text-gray-600 font-serif mt-6 text-sm md:text-base tracking-wider">
                            本フェア限定の特別な特典をご用意いたしました
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-14 md:gap-24 items-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96 group cursor-pointer">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#cfaa6e]/20 to-[#cfaa6e]/5 scale-95 group-hover:scale-100 transition-all duration-700 rounded-full"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-[#cfaa6e]/40 scale-90 group-hover:scale-100 transition-transform duration-700 shadow-xl"></div>
                            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#fefdf9] via-[#f9f4e8] to-[#f0e9d8] flex flex-col items-center justify-center p-8 text-center z-10 border border-[#cfaa6e]/50 shadow-2xl group-hover:shadow-[0_0_40px_rgba(207,170,110,0.15)] transition-shadow duration-500">
                                <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#cfaa6e] to-transparent mb-5"></div>
                                <span className="text-[#0a1a3b] font-serif text-xs tracking-[0.35em] mb-2 uppercase">来館特典</span>
                                <h3 className="font-display text-2xl text-[#0a1a3b] mb-2 tracking-wide">Amazonギフト券</h3>
                                <div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-b from-[#b8860b] to-[#cfaa6e] bg-clip-text text-transparent mb-2">2<span className="text-2xl md:text-3xl ml-1 font-semibold">万円</span></div>
                                <p className="text-xs text-gray-500 font-serif tracking-widest">カップルでのご来館限定</p>
                            </div>
                        </div>
                        <div className="relative w-80 h-80 md:w-96 md:h-96 group cursor-pointer mt-8 md:mt-0">
                            <div className="absolute inset-0 rounded-full bg-[#cfaa6e]/10 scale-95 group-hover:scale-100 transition-all duration-700"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-[#cfaa6e]/60 scale-90 group-hover:scale-100 transition-transform duration-700 shadow-xl"></div>
                            <div className="absolute inset-3 rounded-full bg-gradient-to-b from-[#0c1d3d] to-[#0a1a3b] flex flex-col items-center justify-center p-8 text-center z-10 border-2 border-[#cfaa6e]/70 shadow-2xl group-hover:shadow-[0_0_50px_rgba(207,170,110,0.2)] transition-shadow duration-500">
                                <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#cfaa6e] to-transparent mb-5"></div>
                                <span className="text-[#cfaa6e] font-serif text-xs tracking-[0.35em] mb-2 uppercase">成約特典</span>
                                <h3 className="font-display text-2xl text-white mb-2 tracking-wide">ウェディングドレス</h3>
                                <div className="font-display text-4xl md:text-5xl font-bold text-[#cfaa6e] mb-2 whitespace-nowrap">2着サービス</div>
                                <p className="text-xs text-gray-400 font-serif tracking-widest">※挙式時期による</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <Link href="#booking" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a1a3b] text-white font-serif text-sm font-bold hover:bg-[#0a1a3b]/90 hover:text-[#cfaa6e] transition-all uppercase tracking-widest rounded-sm border border-[#cfaa6e]/50">
                            <span className="material-symbols-outlined text-xl">calendar_month</span>
                            ブライダルフェアを予約する
                        </Link>
                        <p className="text-gray-500 text-xs mt-3 font-serif">まずはフェアで会場の雰囲気と特典をご体験ください</p>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-28 bg-gradient-to-b from-[#060d1f] via-[#0a1a3b] to-[#081428] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#cfaa6e]/5 via-transparent to-[#cfaa6e]/5"></div>
                <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#cfaa6e]/15 rounded-full blur-3xl"></div>
                <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#cfaa6e]/10 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-6 py-2 border border-[#cfaa6e]/50 rounded-full mb-6">
                        <span className="text-[#cfaa6e] font-serif text-sm md:text-base tracking-[0.35em] uppercase">GRAND OPENING CAMPAIGN</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-end gap-3 md:gap-8 text-[#cfaa6e] leading-none py-8">
                        <span className="text-2xl md:text-4xl font-display font-light self-center md:self-end">最大</span>
                        <div className="relative inline-block">
                            <span className="relative z-10 text-7xl md:text-9xl font-display font-bold text-shadow-heavy bg-clip-text text-transparent bg-gradient-to-b from-[#ffe066] via-[#ffd700] to-[#b8860b] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">100</span>
                        </div>
                        <div className="flex flex-col items-start self-center md:self-end">
                            <span className="text-3xl md:text-5xl font-bold">万円</span>
                            <span className="text-xl md:text-2xl text-white font-serif tracking-widest">OFF</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mt-8 font-serif max-w-2xl mx-auto border-t border-white/10 pt-6 tracking-wide">
                        ※2025年12月までの挙式・披露宴をご成約の方限定 ※40名様以上のプランに適用 ※他特典との併用不可
                    </p>
                    <div className="mt-12">
                        <Link href="#booking" className="inline-flex items-center gap-2 px-10 py-4 bg-[#cfaa6e] text-[#0a1a3b] font-display font-bold hover:bg-[#cfaa6e]/90 transition-colors uppercase tracking-widest text-sm rounded-sm">
                            ブライダルフェアで体験する
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-[#0c162d] py-24 border-b border-white/5" id="chapel">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                        <div className="text-left">
                            <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Chapter 01</span>
                            <h2 className="text-4xl md:text-6xl font-display text-white chapter-title">The Chapel</h2>
                        </div>
                        <div className="mt-8 md:mt-0 max-w-md">
                            <p className="text-gray-300 font-serif leading-relaxed text-sm md:text-base">
                                深紅のステンドグラスから降り注ぐ光と、厳かなロイヤルブルーのバージンロード。<br />
                                120年の時を超えて受け継がれる大聖堂で、永遠の誓いを。
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-8 relative aspect-[4/3] overflow-hidden group">
                            <img alt="Stained Glass Chapel Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/grand-celestial/3a37e4e9-84a0-46ab-ae0e-a42d6fa4718b.jpg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white text-xl font-display tracking-wider">Stained Glass Cathedral</h3>
                            </div>
                        </div>
                        <div className="md:col-span-4 flex flex-col gap-4">
                            <div className="relative flex-1 overflow-hidden group">
                                <img alt="Royal Blue Aisle Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/grand-celestial/永遠を誓う、ロイヤルブルーの聖域_GRAND%20CELESTIAL_Weddings.jpg" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-sm font-display tracking-wider bg-[#0a1a3b]/80 px-2 py-1">Royal Blue Aisle</h3>
                                </div>
                            </div>
                            <div className="relative flex-1 overflow-hidden group">
                                <img alt="High Ceiling Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/grand-celestial/Whisk_93dc1adddfa429996cd43b9a19787e93eg.jpeg" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-sm font-display tracking-wider bg-[#0a1a3b]/80 px-2 py-1">Gothic Architecture</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 relative min-h-[320px] h-[50vw] md:min-h-[420px] md:h-[36rem] max-h-[560px] overflow-hidden group w-full">
                        <img alt="Ceremony Moment" className="w-full h-full object-contain md:object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" src="/images/grand-celestial/3f004ffe-30f2-4d74-abf2-b9471cd6ef1c.jpg" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <p className="text-white font-display text-2xl md:text-3xl italic tracking-wider">"A sacred vow in a timeless sanctuary"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ... REST OF CONTENT TO BE APPENDED ... */}
            {/* Banquet Section */}
            <section className="bg-white py-24" id="banquet">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16">
                        <div className="text-right">
                            <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Chapter 02</span>
                            <h2 className="text-4xl md:text-6xl font-display text-[#0a1a3b] chapter-title ml-auto">The Banquets</h2>
                        </div>
                        <div className="mt-8 md:mt-0 max-w-md text-right md:text-left">
                            <p className="text-gray-600 font-serif leading-relaxed text-sm md:text-base">
                                クリスタルのシャンデリアが輝く3つの異なるボールルーム。<br />
                                上質で洗練された空間が、ゲストとの特別な時間を彩ります。
                            </p>
                        </div>
                    </div>
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative h-[400px] overflow-hidden shadow-xl group">
                                <img alt="Grand Ballroom - Versailles" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/grand-celestial/Whisk_a3d943a89a6ee63b7cd446b0582d3bc7dr%20(1).png" />
                                <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-4">
                                    <h3 className="font-display text-xl text-[#0a1a3b]">Versailles</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Grand Ballroom</p>
                                </div>
                            </div>
                            <div className="px-4 md:px-8">
                                <h3 className="text-2xl font-display text-[#0a1a3b] mb-4">Versailles - ベルサイユ</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-serif">
                                    最大180名様まで収容可能なメインバンケット。高さ20mの天井に輝くボヘミアンクリスタルのシャンデリアが、圧倒的な非日常空間を演出します。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 font-serif">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>着席: 80〜180名</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>天井高: 20.5m</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="md:order-2 relative h-[400px] overflow-hidden shadow-xl group">
                                <img alt="Modern Ballroom - Celestia" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/grand-celestial/Whisk_hvjm5idojvjyjzwntcdnmjwlhjgn00iz2i2ytgt%20(1).jpeg" />
                                <div className="absolute bottom-0 right-0 bg-white/90 px-6 py-4 text-right">
                                    <h3 className="font-display text-xl text-[#0a1a3b]">Celestia</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Sky View Room</p>
                                </div>
                            </div>
                            <div className="md:order-1 px-4 md:px-8 text-right">
                                <h3 className="text-2xl font-display text-[#0a1a3b] mb-4">Celestia - セレスティア</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-serif">
                                    最上階に位置し、自然光が溢れる開放的な空間。白を基調としたモダンなデザインは、装花やコーディネートによって自在に表情を変えます。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 font-serif flex flex-col items-end">
                                    <li className="flex items-center">着席: 40〜90名<span className="w-2 h-2 bg-[#cfaa6e] rounded-full ml-3"></span></li>
                                    <li className="flex items-center">専用テラス付き<span className="w-2 h-2 bg-[#cfaa6e] rounded-full ml-3"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative h-[400px] overflow-hidden shadow-xl group">
                                <img alt="Classic Ballroom - Royal Suite" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/images/grand-celestial/Whisk_640394d5ef60a57bb464bea9cf1a1755eg%20(1).jpeg" />
                                <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-4">
                                    <h3 className="font-display text-xl text-[#0a1a3b]">Royal Suite</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Private Residence</p>
                                </div>
                            </div>
                            <div className="px-4 md:px-8">
                                <h3 className="text-2xl font-display text-[#0a1a3b] mb-4">Royal Suite - ロイヤルスイート</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-serif">
                                    貴族の邸宅をイメージしたプライベート感あふれる会場。オープンキッチンを併設し、出来立ての料理の香りと音も演出の一部に。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 font-serif">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>着席: 20〜60名</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>オープンキッチン併設</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cuisine Section */}
            <section className="bg-[#0c162d] py-24 relative overflow-hidden" id="cuisine">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a1a3b]/10 -skew-x-12 transform origin-top-right"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Chapter 03</span>
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-6">Gastronomy</h2>
                        <div className="w-24 h-0.5 bg-[#cfaa6e] mx-auto mb-6"></div>
                        <p className="text-gray-300 font-serif max-w-2xl mx-auto">
                            フレンチの伝統と日本の四季が融合した「フレンチ・ジャポネ」。<br />
                            一皿一皿が芸術作品のような、五感で味わう至高のコース料理。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {/* Cuisine Item 1 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10">
                            <img alt="Appetizer Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/c0b31cd9-2404-491b-8699-83d8f73071d7.jpg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Appetizer</p>
                                    <h4 className="font-display text-lg">Seasonal Mosaic</h4>
                                </div>
                            </div>
                        </div>
                        {/* Cuisine Item 2 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10 lg:mt-12">
                            <img alt="Main Dish Meat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/Whisk_3b63403e7fa4045a5704aa1b96ae51dcdr%20(1).png" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Viande</p>
                                    <h4 className="font-display text-lg">Wagyu Filet Mignon</h4>
                                </div>
                            </div>
                        </div>
                        {/* Cuisine Item 3 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10">
                            <img alt="Seafood Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/Whisk_7b30ba31b05625bbad4404968e0d8320dr%20(1).png" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Poisson</p>
                                    <h4 className="font-display text-lg">Homard Blue</h4>
                                </div>
                            </div>
                        </div>
                        {/* Cuisine Item 4 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10 lg:mt-12">
                            <img alt="Exquisite Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/Whisk_39556c64becf0208b6a404469e279f2aeg%20(1).jpeg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Dessert</p>
                                    <h4 className="font-display text-lg">Bijou de Chocolat</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16 bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-display text-[#cfaa6e] mb-4">Royal Tasting Experience</h3>
                        <p className="text-gray-300 font-serif mb-6 text-sm">ブライダルフェアでは、シェフ特製のハーフコース試食（無料）をご用意しております。</p>
                        <Link href="#booking" className="inline-flex items-center gap-2 px-8 py-3 border border-[#cfaa6e] text-[#cfaa6e] hover:bg-[#cfaa6e] hover:text-[#0a1a3b] transition-all uppercase tracking-widest text-xs font-bold">
                            試食付きブライダルフェアを予約する
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hospitality Section */}
            <section className="bg-white py-24" id="hospitality">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Hospitality</span>
                        <h2 className="text-4xl md:text-5xl font-display text-[#0a1a3b] mb-6">Premium Services</h2>
                        <div className="w-16 h-1 bg-[#cfaa6e] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img alt="Dress Salon Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/Whisk_0383ef1b1d8395098ce406c45671e3fceg%20(1).jpeg" />
                                <div className="absolute inset-0 bg-[#0a1a3b]/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-display text-xl text-[#0a1a3b] mb-3">Dress Salon</h3>
                                <p className="text-gray-500 text-sm font-serif leading-relaxed">
                                    インポートから国内ブランドまで、常時500着以上を取り揃える専属ドレスサロン。
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img alt="Bridal Accessories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABJGwcMLbMR_X5LgHy-cUTl0svvlTb75cOxiaoBOYe6jhD8zqq6eeDKY0calOwu-POWqr0poTx0i1oiBFQEOsFuTLxgDRfYCMItqEzWQFU4vgriVRpywwL0FncTBxB-Oe3XMsb906cPvblJ9KX4lAS8u37M-ml_LoFoYswu4fMNxz6dPcnPOumeU1TeeTk13mNL7zTIVyolL2VVDjL5ji1NdHOG9ApAIwWzmFVaatYnDZaNcoOBuukvAqx7S6ZGYLU9swJsmWQqA" />
                                <div className="absolute inset-0 bg-[#0a1a3b]/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-display text-xl text-[#0a1a3b] mb-3">Accessories</h3>
                                <p className="text-gray-500 text-sm font-serif leading-relaxed">
                                    ティアラやジュエリーなど、花嫁の美しさを引き立てる最高級の小物をご提案。
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg overflow-hidden group">
                            <div className="h-64 overflow-hidden relative">
                                <img alt="Premium Gifts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/Whisk_5187d83ade8db1e94544e6f2ba2c9fafeg%20(1).jpeg" />
                                <div className="absolute inset-0 bg-[#0a1a3b]/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-display text-xl text-[#0a1a3b] mb-3">Premium Gifts</h3>
                                <p className="text-gray-500 text-sm font-serif leading-relaxed">
                                    ゲストへの感謝を伝える、厳選された引出物やオリジナルギフトの数々。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* フェアを体験したお客様の声 */}
            <section className="bg-gradient-to-b from-[#0c162d] to-[#060d1f] py-24 border-y border-white/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Voice</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white">フェアを体験したお客様の声</h2>
                    </div>
                    <div className="grid md:grid-cols-5 gap-10 items-start">
                        <div className="md:col-span-2 grid grid-cols-1 gap-3">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
                                <img
                                    src="/images/grand-celestial/Whisk_6c0af36a3e3d319860041a7b4159c1f3eg%20(1).jpeg"
                                    alt="ブライダルフェア 豪華試食の様子"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
                                <img
                                    src="/images/grand-celestial/Whisk_92a79edd0a62013aa8540fc92afbe016dr.png"
                                    alt="ブライダルフェア 会場の雰囲気"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3 space-y-8">
                            <blockquote className="border-l-2 border-[#cfaa6e] pl-6 py-2">
                                <p className="text-gray-300 font-serif leading-relaxed text-sm md:text-base">
                                    試食が豪華でびっくりしました。お肉もお魚も美味しい！料理重視の彼も満足していました。思い出のメニューなどがだせるのも良かった。デザートが美味しくてブッフェは当日も絶対やりたいです。
                                </p>
                                <cite className="not-italic text-gray-500 text-xs mt-3 block">32歳・女性</cite>
                            </blockquote>
                            <blockquote className="border-l-2 border-[#cfaa6e] pl-6 py-2">
                                <p className="text-gray-300 font-serif leading-relaxed text-sm md:text-base">
                                    会場の雰囲気とドレス試着を一度に体験できて安心しました。スタッフの方が丁寧で、当日の流れもイメージしやすかったです。
                                </p>
                                <cite className="not-italic text-gray-500 text-xs mt-3 block">28歳・女性</cite>
                            </blockquote>
                            <p className="text-gray-500 text-xs font-serif">※試食内容・有無は、開催日・時間により異なります。</p>
                            <Link href="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-[#cfaa6e] text-[#0a1a3b] font-display font-bold hover:bg-[#cfaa6e]/90 transition-colors uppercase tracking-widest text-sm rounded-sm">
                                ブライダルフェアで体験する
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Weddings Section */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-gray-200 pb-4">
                        <div>
                            <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Real Weddings</span>
                            <h2 className="text-3xl md:text-4xl font-display text-[#0a1a3b]">幸せの記憶</h2>
                        </div>
                        <div className="hidden md:block">
                            <Link href="#" className="text-[#0a1a3b] hover:text-[#cfaa6e] transition-colors font-serif text-sm flex items-center gap-2">
                                View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
                        <div className="row-span-2 col-span-2 relative group overflow-hidden rounded-sm">
                            <img alt="Real Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_dd19daaea874ca392224aa59f22ec8a2dr.png" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-3 left-3 text-white text-sm font-serif">幸せの記憶</div>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Real Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_5962bab1e65a8e98d80426b3cbb39e76dr.png" />
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Real Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_40fdef55a69e3f3927848fe6a3be99cddr%20(1).png" />
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Real Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_267e8a0514eaaf29ac8445486ec7e850eg.jpeg" />
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Real Wedding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_23cfd864d9f39329697411ff57580339eg%20(1).jpeg" />
                        </div>
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link href="#" className="inline-block border border-[#0a1a3b] text-[#0a1a3b] px-8 py-3 text-sm font-serif">View All Reports</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#f8f8f8]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="mb-12">
                        <span className="text-[#0a1a3b] font-display font-bold tracking-[0.2em] uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-display mt-2 mb-6">選ばれる3つの理由</h2>
                        <div className="w-16 h-1 bg-[#cfaa6e] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white shadow-lg border-t-4 border-[#0a1a3b]">
                            <span className="material-symbols-outlined text-4xl text-[#cfaa6e] mb-4">church</span>
                            <h3 className="font-bold text-lg mb-2">都内屈指の大聖堂</h3>
                            <p className="text-sm text-gray-600">天井高20m、バージンロード25mの圧倒的スケール。</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg border-t-4 border-[#0a1a3b]">
                            <span className="material-symbols-outlined text-4xl text-[#cfaa6e] mb-4">restaurant</span>
                            <h3 className="font-bold text-lg mb-2">美食のおもてなし</h3>
                            <p className="text-sm text-gray-600">厳選食材を使用した、ゲストの記憶に残る料理。</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg border-t-4 border-[#0a1a3b]">
                            <span className="material-symbols-outlined text-4xl text-[#cfaa6e] mb-4">subway</span>
                            <h3 className="font-bold text-lg mb-2">好アクセス</h3>
                            <p className="text-sm text-gray-600">銀座一丁目駅徒歩3分。遠方ゲストも安心の立地。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 会場案内 - Venue Guide */}
            <section className="py-20 bg-[#f8f8f8] border-t border-gray-100" id="venue">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Venue Guide</span>
                        <h2 className="text-3xl md:text-4xl font-display text-[#0a1a3b] mb-4">会場案内</h2>
                        <div className="w-16 h-1 bg-[#cfaa6e] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="relative overflow-hidden rounded-sm shadow-xl group">
                            <img alt="Grand Celestial 結婚式場外観" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105" src="/images/grand-celestial/Whisk_93dc1adddfa429996cd43b9a19787e93eg.jpeg" />
                        </div>
                        <div className="px-0 lg:px-6">
                            <h3 className="text-xl md:text-2xl font-display text-[#0a1a3b] mb-4 font-bold">歴史ある建物として、格式高く。</h3>
                            <p className="text-gray-600 font-serif leading-relaxed mb-4">
                                GRAND CELESTIALは、由緒ある歴史的建造物を大切に受け継ぎ、結婚式場として甦らせた特別な場所です。重厚な外観と洗練された佇まいは、訪れる方々に深い感動と信頼をお届けします。
                            </p>
                            <p className="text-gray-600 font-serif leading-relaxed text-sm">
                                銀座の静謐な立地に佇む当館は、伝統とモダンが調和した唯一無二の空間。挙式から披露宴まで、お二人の門出を格式高くお支えいたします。
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <Link href="#booking" className="inline-block px-8 py-3 bg-[#0a1a3b] text-white font-serif text-sm font-bold hover:bg-[#0a1a3b]/90 transition-colors uppercase tracking-widest">
                                    アクセス・ご予約
                                </Link>
                                <Link href="#booking" className="inline-flex items-center gap-2 text-[#0a1a3b] font-serif text-sm font-bold hover:text-[#cfaa6e] transition-colors border-b border-[#cfaa6e] pb-1">
                                    ブライダルフェアで会場を見学する
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Form */}
            <section className="py-24 bg-white relative" id="booking">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white shadow-2xl overflow-hidden rounded-sm border border-gray-100">
                        <div className="lg:col-span-7 p-8 md:p-12 bg-white">
                            <div className="mb-8 border-l-4 border-[#0a1a3b] pl-4">
                                <span className="text-xs font-bold text-[#cfaa6e] uppercase tracking-widest">Reservation</span>
                                <h2 className="text-3xl font-display font-bold text-[#0a1a3b] mt-1">ブライダルフェア予約</h2>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name <span className="text-red-500">*</span></label>
                                        <input className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow py-3" placeholder="例：山田 太郎" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phonetic <span className="text-red-500">*</span></label>
                                        <input className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow py-3" placeholder="例：ヤマダ タロウ" type="text" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email <span className="text-red-500">*</span></label>
                                        <input className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow py-3" placeholder="email@example.com" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone <span className="text-red-500">*</span></label>
                                        <input className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow py-3" placeholder="090-1234-5678" type="tel" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                                    <input className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow py-3" type="date" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                                    <textarea className="w-full bg-gray-50 border-gray-300 rounded-sm focus:border-[#0a1a3b] focus:ring focus:ring-[#0a1a3b]/20 transition-shadow" rows={3}></textarea>
                                </div>
                                <button className="w-full bg-[#0a1a3b] text-white font-serif font-bold py-5 mt-4 shadow-lg hover:bg-[#0a1a3b]/90 transition-all uppercase tracking-[0.2em] relative overflow-hidden group">
                                    <span className="relative z-10 group-hover:text-[#cfaa6e] transition-colors">Confirm Reservation</span>
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-5 bg-[#0a1a3b] text-white p-8 md:p-12 flex flex-col justify-between relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cfaa6e]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <div>
                                <h2 className="text-2xl font-display font-bold mb-8 border-b border-[#cfaa6e]/30 pb-4 inline-block">Access</h2>
                                <div className="space-y-6 text-sm font-serif">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-[#cfaa6e] mr-4 mt-1">location_on</span>
                                        <p className="leading-relaxed">
                                            〒104-0061<br />
                                            東京都中央区銀座2-4-20<br />
                                            <span className="text-[#cfaa6e] mt-1 block">銀座一丁目駅より徒歩3分</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-[#cfaa6e] mr-4">call</span>
                                        <p>03-1234-5678 <br /><span className="text-gray-400 text-xs">(11:00-20:00 / 火曜定休)</span></p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-[#cfaa6e] mr-4">directions_car</span>
                                        <p>駐車場完備（ご見学・ご参列の方は無料）</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 bg-white/10 p-2 rounded">
                                <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                                    <img alt="Map Location Abstract" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz8hzS8UPR1EK4RI1KxInrixj6gIhTt3EWfQ7UXdXbARUM0ngZpVJ3JAsDoX-fN68qqvW-3TitGA6FPjgMXIL2zildXAZ8GuHoVaq1_O82ULHnVd3it6IjGB8Ry1n4Qlbn52DF_dQfAFSmBBr4ryv7jM4XQQdkWAlqfTps3wCltETx9JO09k9yY_BEQvtCCLglQbehsseh4wWb7aCS-dMKpAyUAJoMAwhgisXdsWeOfdwl_WGVCOFArEQEPHrEv5qi6lUhHVZ0wQ" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Link href="#" className="bg-white text-[#0a1a3b] px-4 py-2 text-xs font-bold shadow hover:bg-[#cfaa6e] transition-colors flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">map</span>
                                            Google Map
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold tracking-[0.2em] mb-2 text-white">GRAND CELESTIAL</h2>
                    <p className="text-[#cfaa6e] text-xs tracking-widest uppercase mb-10">Premium Wedding Venue</p>
                    <div className="flex justify-center gap-8 mb-10">
                        <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#cfaa6e] hover:text-[#0a1a3b] hover:border-[#cfaa6e] transition-all duration-300">
                            <span className="material-symbols-outlined">photo_camera</span>
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#cfaa6e] hover:text-[#0a1a3b] hover:border-[#cfaa6e] transition-all duration-300">
                            <span className="material-symbols-outlined">public</span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-xs text-gray-400 font-serif uppercase tracking-wider">
                        <Link href="#" className="hover:text-white transition-colors">Company</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Recruit</Link>
                    </div>
                    <p className="text-gray-600 text-xs font-serif">© 2024 Grand Celestial Weddings. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
