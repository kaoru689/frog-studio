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
                    </nav>
                    <button className="md:hidden text-[#cfaa6e]">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </header>
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img alt="Grand Cathedral with Royal Blue Carpet" className="w-full h-full object-cover opacity-60" src="/images/grand-celestial/3f004ffe-30f2-4d74-abf2-b9471cd6ef1c.jpg" />
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
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cfaa6e] to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#cfaa6e] tracking-[0.3em] uppercase text-sm font-bold block mb-2">Limited Time Offer</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0a1a3b] mb-6">
                            <span className="border-b-2 border-[#cfaa6e] pb-2">Exclusive Fair Benefits</span>
                        </h2>
                        <p className="text-gray-600 font-serif">
                            本フェア限定の特別な特典をご用意いたしました
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 group cursor-pointer">
                            <div className="absolute inset-0 rounded-full border border-[#cfaa6e]/30 scale-90 group-hover:scale-100 transition-transform duration-700"></div>
                            <div className="absolute inset-0 rounded-full border border-[#cfaa6e]/10 scale-110 group-hover:scale-95 transition-transform duration-700 delay-100"></div>
                            <div className="absolute inset-4 bg-gradient-to-br from-[#fbf5e6] to-[#f0e6d2] rounded-full shadow-2xl flex flex-col items-center justify-center p-6 text-center z-10 border border-[#cfaa6e]">
                                <div className="w-12 h-1 bg-[#cfaa6e] mb-4"></div>
                                <span className="text-[#0a1a3b] font-serif text-sm tracking-widest mb-2">来館特典</span>
                                <h3 className="font-display text-xl text-[#0a1a3b] mb-1">Amazonギフト券</h3>
                                <div className="font-display text-5xl font-bold text-[#cfaa6e] text-shadow-sm mb-2">2<span className="text-2xl ml-1">万円</span></div>
                                <p className="text-xs text-gray-500 font-serif tracking-wider">カップルでのご来館限定</p>
                            </div>
                        </div>
                        <div className="relative w-72 h-72 md:w-80 md:h-80 group cursor-pointer mt-8 md:mt-0">
                            <div className="absolute inset-0 rounded-full border border-[#cfaa6e]/30 scale-90 group-hover:scale-100 transition-transform duration-700"></div>
                            <div className="absolute inset-0 rounded-full border border-[#cfaa6e]/10 scale-110 group-hover:scale-95 transition-transform duration-700 delay-100"></div>
                            <div className="absolute inset-4 bg-[#0a1a3b] text-white rounded-full shadow-2xl flex flex-col items-center justify-center p-6 text-center z-10 border-2 border-[#cfaa6e]">
                                <div className="w-12 h-1 bg-[#cfaa6e] mb-4"></div>
                                <span className="text-[#cfaa6e] font-serif text-sm tracking-widest mb-2">成約特典</span>
                                <h3 className="font-display text-xl text-white mb-1">ウェディングドレス</h3>
                                <div className="font-display text-4xl font-bold text-[#cfaa6e] mb-2">2着プレゼント</div>
                                <p className="text-xs text-gray-400 font-serif tracking-wider">※挙式時期による</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-[#0a1a3b] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#cfaa6e]/20 rounded-full blur-3xl"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-white font-serif text-lg md:text-2xl mb-2 tracking-[0.2em] opacity-80">GRAND OPENING CAMPAIGN</h2>
                    <div className="flex flex-col md:flex-row justify-center items-end gap-2 md:gap-6 text-[#cfaa6e] leading-none py-6">
                        <span className="text-2xl md:text-4xl font-display font-light self-center md:self-end mb-2">最大</span>
                        <span className="text-7xl md:text-9xl font-display font-bold text-shadow-heavy bg-clip-text text-transparent bg-gradient-to-b from-[#ffd700] to-[#bfa15f]">160</span>
                        <div className="flex flex-col items-start self-center md:self-end mb-2">
                            <span className="text-3xl md:text-5xl font-bold">万円</span>
                            <span className="text-xl md:text-2xl text-white font-serif tracking-widest">OFF</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mt-6 font-serif max-w-2xl mx-auto border-t border-white/10 pt-4">
                        ※2025年12月までの挙式・披露宴をご成約の方限定 ※40名様以上のプランに適用 ※他特典との併用不可
                    </p>
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
                                <img alt="Royal Blue Aisle Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3XJuGb5IGBle5S5sBQx6_qdV7NhlNjHoQt-iHmxsfMLLRaj3V7abvbun8TAJyx4_sRzXaO4PTEtcewcT0Ww7yRqzrHoH-556DPvDHj0KsEI5l4sX0tjX9QtDu3AH4LzpIGY4Zn880L9w5WxA0iFn33mpCLfjn3KVlqHLloh7Ex8WzwOivUq-tZY7CH5rIR0kgmqQVnC-AVV9ht4u4H0GqReBQniSdr9GCgp8XdyM8sOCum-xEY_JF_g5bpBJLAo0s7bZoA-EHA" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-sm font-display tracking-wider bg-[#0a1a3b]/80 px-2 py-1">Royal Blue Aisle</h3>
                                </div>
                            </div>
                            <div className="relative flex-1 overflow-hidden group">
                                <img alt="High Ceiling Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF6G5CsvFTqvT6Qi7Xqm4Jnbg4XVKSgQkfWmHQ_GUTxpm3On-YV-GSmdhs8q2mooa3bil18wleWM0fh1AR0eZVTPTUHCVMBm0gMoM-CqvRQbjC9P_454WVTfrhb84lrSNDasZswiuBZ92x1o0A1zKf6FcI_oLEG6etGjCktGJwOKkA12vUwls3-pFO-kgGN9noC-O88UXRIF9Tip6cpKcS2DCgkn6G6hxgoEGKusCSEDp-6mA4tOzHR63zTSprjEYCVG4Oz1OlTg" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-sm font-display tracking-wider bg-[#0a1a3b]/80 px-2 py-1">Gothic Architecture</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 relative h-64 md:h-80 overflow-hidden group w-full">
                        <img alt="Ceremony Moment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" src="/images/grand-celestial/6bf8fabd-fbc6-4b0b-9f54-3af7e2c03beb.jpg" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                                <img alt="Grand Ballroom - Versailles" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShpeJjZd_4tT8cDW0EhEaFMvXiKrawMdxQxoviOPGBMdQpPMbDXcLoKC7Qsa5gbBuFjmqy8hT9Ej1H1m2JDBM3ASKbZB7g8WIDXG76GixITD-fEkobECG50zmodn7xElzF07pue2DT1SWy2nb9kd1ZAYrNOQ0SxDziBl_0xB1VYC5Gy4Hb1moYLjAyhRSTtpe-PhiUr2Xq4Eg2mv8jTbcpYDX03gA91vvgwBU8Fl7eFdDzdeVHC7poBvFWe8bhmFuvffGoF4zeQ" />
                                <div className="absolute bottom-0 left-0 bg-white/90 px-6 py-4">
                                    <h3 className="font-display text-xl text-[#0a1a3b]">Versailles</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Grand Ballroom</p>
                                </div>
                            </div>
                            <div className="px-4 md:px-8">
                                <h3 className="text-2xl font-display text-[#0a1a3b] mb-4">Versailles - ベルサイユ</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed font-serif">
                                    最大180名様まで収容可能なメインバンケット。高さ6mの天井に輝くボヘミアンクリスタルのシャンデリアが、圧倒的な非日常空間を演出します。
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 font-serif">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>着席: 80〜180名</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-[#cfaa6e] rounded-full mr-3"></span>天井高: 6.5m</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="md:order-2 relative h-[400px] overflow-hidden shadow-xl group">
                                <img alt="Modern Ballroom - Celestia" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiUNirxBHx0ggAUvYVAX2GEvXjlXTmzq1hEePVLBxzYhd7gHUnrq1FGlY-oi7u-1LOWL2EXwYh3jUW9G-k8oXet9EBpdCu2ZEKZ7wfFZdgasjtopwI6GYAUfb1qRIi63R8orb__anNYBNHqQwF58lClpQ06yHcYZYPWE14X1Q1LYJYgf7PZXQp47WqfBKXtlpgSv7_bJ2rsEV43FomIaFB3kCAaImAh8KrDSqdoUfwZSJZ7NFqESZ0csp9Yy9DP5FZZ7u2guqD9w" />
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
                                <img alt="Classic Ballroom - Royal Suite" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn0cm3vwQ52ttQbYZwSRiZb_KvEGc9BIJe8wJExzs6NwkG_2BA8RiiqVwb9iltehsOBjN4heSihn4_wSGhmL7jMDhf5iSoItdoHmkWLUIGuKaNL3FMi3CkbQ26ayYAzti9wOS6WpvJa5xw63Ze74E6RrZj-cw0JDKLmL4-K3osoSWwVgSQe1WqpPaUITJB3jNo7GG8FXIVXxFhFbULrZ5gzpcz3NONJeR5ziuFWV4whLSUs9hSvZuD8JMAPRRS_dLB2Br1BrPmzA" />
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
                            <img alt="Main Dish Meat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/grand-celestial/228b398f-70b3-46c3-b389-439e2d37c5f3.jpg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Viande</p>
                                    <h4 className="font-display text-lg">Wagyu Filet Mignon</h4>
                                </div>
                            </div>
                        </div>
                        {/* Cuisine Item 3 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10">
                            <img alt="Seafood Dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGiIZR4_pEgSCg_omMEfzohAgNDdkiK_UEhO6HBI5SfdVxo3Cw1I9_UjJx0tL8jz8hHoGDR3ndvMxtNyuySmLkPluE2ZeZRZlAkBnDu-4wyxj9hYYl6l3lVPvXX4V0MivomgmOHajdToSu2Mzmx7YUg2unJNm87uVc27yReYBm7IVBs0eZAoK26DPB3PdJQo0xnUicm2IRo1vvXxP5fp0VjgPjSnDkS2rA4OLNJjYvReYxMNUcsgxAELgcP2hVrU_NYYRGlHuFbA" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest text-[#cfaa6e] mb-1">Poisson</p>
                                    <h4 className="font-display text-lg">Homard Blue</h4>
                                </div>
                            </div>
                        </div>
                        {/* Cuisine Item 4 */}
                        <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/10 lg:mt-12">
                            <img alt="Exquisite Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsJtK464zeg9_QS7nJUBAhw7JM2gEh2gsrnuYoIJxW8WGp-PHlNrURw40NYvGA-oRSc59TVj7bYZ_pCqh34SoO96AbYn80KbtMr9PGNQ7XfGqOY9Z3eLf6jxtS4Ql7BpjwgSlrGvePo0Ene-_CwerAj2x9nmPpmhkuO_HtioaeVYOWsJmXhsm45F2t9F7afranq5-nsRB1XgpcJiZXWx5YvrbuCbPfTwOwAkw8QLh5iODZx229UycDRcWRb6PJ4LuXUtG7OoKwWw" />
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
                        <Link href="#booking" className="inline-block px-8 py-3 border border-white/30 text-white hover:bg-[#cfaa6e] hover:text-[#0a1a3b] hover:border-[#cfaa6e] transition-all uppercase tracking-widest text-xs">
                            試食付きフェアを予約する
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
                                <img alt="Dress Salon Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxQENz-Nk-jCko48AXbik369MyV7e3_XlxenmfFgXywP4TnD-xZjjgsezHEkd8t7k_ESYxzrqppcKHpUUpEX84fnge9Sgh0cp-e3gyNHGYKKH_hfgbUv6AZ0jrLYoW41-6qO3op3r108TOOtmfXh7rBoH5f_9gBw9_xIEiZLk0dmvgQe6HRJ8CmB99jgA8NU9MGHc6H8n1AJmAxHaYUHZF9TDQS_jS8M9yR3Z9CrsIiNaibz-AZFrRx5iVYRQ8hoseE3EsSQXEow" />
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
                                <img alt="Premium Gifts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACzb5hRxMaQ3RKWxAl68HE5JevK6f4nvIFeXuaOv-mwWFu4fBvZG_q4XMN6B02vh9Hy6IE4VclwzyLwB7usHqONELXMt5_9ZILisUm_SNbJ_EER2nkSYamSeTkF8IiE8Fq24elHw79hAA_0umt7L5SH70lgFE3J7j_IIL3tIKGMxMIqtlx8mt7mmgNsfUhpbQbs7xs3cEgIVNy4ZmYUMtuR7VBZMQ3hHD6ivnr71_CYFp1oB9Bsf1l3fKUhoUDwgeK404nIfPJrA" />
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        <div className="row-span-2 col-span-2 md:col-span-1 relative group overflow-hidden rounded-sm">
                            <img alt="Couple portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Y0J_p47G_meiqtH1zpi6IqVkY5Q58CaUar68tdYOhqaxx1_Jbb7dbt-uChmnVr9splM3XSyNvxN8pNVwjw7JBOacdO8MVzpljU_K794ldFY-9hIZBdWmynZS54hYK-argIKDapQYj47YXyiEurkjszzE1NO0WlSDQQSu9oprV4qpm9NtB6obt3gGLksBd49vz4HIiO62uHWIeTCgqPqosR2dlPF7ybfaK9lbMt0K0ntyng5EsxhgRD7Sb5bDVDwgIoJOCzrzMA" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-xs">2023.10.15</p>
                                    <p className="font-display">Y & M Wedding</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 relative group overflow-hidden rounded-sm">
                            <img alt="Ceremony scene" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjzWfI0zxweDPLPUMWUSUAh7yEUrJu_6idatctvrCp8Q5PGkXF_DiniNyVjvr10Qs60gUW1QQpayFKwt2y1ur9MpFZyr9XVMEGomKkkkAbNOXhZ-2Gd_uMs4kfSdiSSay8CoQNXE0KuftOBjTaUisulcnriUNKwuS2c6PDgl0yvmSBqzA-zOZ4Nb5rMov268R-eBBjZgUMWpBhcxcxpU6U30ZXmTW0eWS5_Eu0ItqBZZF2et5VBw7MPqKlKKLMF6ZCRm6Pde7aWA" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-xs">Emotional Moment</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Ring exchange" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASCV_Egz9AjmLAz0PvHo-an3tNUocTcQat7A7OPSX69BWCCgCJrTmr5-bFPHgqhrPzOZsr9sImK_w5OkL0WsIuDOxA0vsA-tVKm3f7f1OMoxMt2pZPsHnEgbAJXuSpQgF37Qox3XQmOY3TJOvTs5fbqlNTqZTOMvJM-MKisXsOI8u57STx6skX8usG1Ih9Prsh6g2UXcDve6Jb9qqAion-S6cJ8Fik1x34xZLOmvtYPhEd_9aSt4lh1as4oR-TM8C0T7g16v9ivA" />
                        </div>
                        <div className="relative group overflow-hidden rounded-sm">
                            <img alt="Bride smiling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkSFd68ZnWHxK_zaPflYmRCz4RldMkDD72yQ-5RaQwtuSsr-yhiQWwAaREpmxJLBaHa2IU4VaTGcMo6S84YBiUM90SiTyQrn6wv2TKFuNL1j6pu92lAA9gbczZOIRoOBpJlhFsU7bj1XgSSnlDtTYHgR8kdFZoAQoD-Ucb9lUtoIdh1g4V_IREyo7sUepGOPWz_0KkjN7zNNI4HgVh-O1DLRvnf4zZzk5A1E5AcdO4R_VRk6k9hHTO_mWwI97bbY6DXfaXMrX34Q" />
                        </div>
                        <div className="col-span-2 relative group overflow-hidden rounded-sm">
                            <img alt="Toast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSWWt5DoTLN5wOWlfIJYX49vVbbCN3CAyZVoR-UyoAGYzGDm8KIeO5coonEeV3vPZohOEc9hG0jTp7Sd_Rqf5E69m53i6cpGHAIACJVemTPl3HRlEMjBefODzvlbYc7E5S2kF67qqIVF4V4rAmIhf23h1z97Z62JsVz75PKBRRnohNXamln3quP7e8C_W5yJFA5OGwSJbrCC9ynnYMGuaRmZISQW7tEREJmKllh-daJjtVR44fXhTqA0JDBSTWv4o63PEyS6HL6Q" />
                        </div>
                        <div className="row-span-2 col-span-2 md:col-span-1 relative group overflow-hidden rounded-sm">
                            <img alt="Table setting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe4aIJyvWKF6HIKX2WTmVoUwkDz14XnO_CX2jFkNlpSJuGUlojSMGQg3vERdup1RyDUziGdtXMgCporZMe_fs-PvcWTH8mPDJYdGJpFT5erfYa4zDmaObWg6cRuNPrfBfoci5TPcyni91V0WoxGk6UYQeYtWJyz4p4CcxSe3rojNKUq8K4perxxiJUdb-kuOk3rxFZwXEp3D4ud-9SIJGctSKBbzbn7FKzK44Yp6mV0BkWl5Vh7DkJy3hkAJ7ck9gis-uR_4J6AA" />
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
                            <p className="text-sm text-gray-600">表参道駅徒歩1分。遠方ゲストも安心の立地。</p>
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
                                            〒107-0061<br />
                                            東京都港区北青山3-5-30<br />
                                            <span className="text-[#cfaa6e] mt-1 block">表参道駅 A2出口より徒歩1分</span>
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
