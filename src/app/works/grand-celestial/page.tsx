
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
        <div className={`${playfair.variable} ${notoSerifJP.variable} ${lato.variable} ${notoSansJP.variable} font-sans text-[#1a1a1a] dark:text-[#e5e5e5] bg-[#f8f8f8] dark:bg-[#050a18] antialiased transition-colors duration-300`}>

            {/* Custom Styles that can't be handled by Tailwind standard classes alone */}
            <style jsx global>{`
                .font-display { font-family:var(--font-playfair), var(--font-noto-serif), serif; }
                .font-body { font-family:var(--font-lato), var(--font-noto-sans), sans-serif; }
                .font-serif { font-family:var(--font-noto-serif), serif; }
                .text-shadow-gold { text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(207, 170, 110, 0.3); }
                .text-shadow-heavy { text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9); }
                .vertical-text { writing-mode: vertical-rl; text-orientation: upright; }
            `}</style>

            {/* Side Fixed Button (Desktop) */}
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
                <Link href="#booking" className="bg-[#0a1a3b] border-l-2 border-y-2 border-[#cfaa6e] text-[#cfaa6e] w-16 h-auto py-6 flex flex-col items-center justify-center shadow-2xl hover:bg-[#cfaa6e] hover:text-[#0a1a3b] transition-all duration-300 cursor-pointer group">
                    <span className="material-symbols-outlined mb-2 text-2xl group-hover:scale-110 transition-transform">calendar_month</span>
                    <span className="vertical-text font-display text-sm tracking-widest leading-loose font-serif">来館予約</span>
                </Link>
            </div>

            {/* Bottom Fixed Buttons (Mobile) */}
            <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex">
                <Link href="#booking" className="flex-1 bg-[#cfaa6e] text-[#0a1a3b] py-4 text-center font-display font-bold shadow-lg uppercase tracking-widest">
                    Reserve Fair
                </Link>
                <Link href="#booking" className="flex-1 bg-[#0a1a3b] text-white py-4 text-center font-display font-bold shadow-lg border-t border-white/20">
                    Contact
                </Link>
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[#0a1a3b]/95 backdrop-blur-md shadow-lg border-b border-[#cfaa6e]/30 transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#cfaa6e] text-3xl">church</span>
                        <div className="text-xl md:text-2xl font-display font-bold text-white tracking-[0.2em] uppercase">
                            Grand Celestial
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {["Concept", "Chapel", "Banquet", "Cuisine", "Plan"].map((item) => (
                            <Link key={item} href="#" className="text-sm font-serif text-white/80 hover:text-[#cfaa6e] transition-colors uppercase tracking-widest">
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <button className="md:hidden text-[#cfaa6e]">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img alt="Grand Cathedral with Royal Blue Carpet" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTW4D8ECJZzX434GHz4Vq3FP_Sb7B0ZKVx8KN-NtiGPgUzOqqOE2MlgdaJ8sIz0qB9PwTQeS3fMLVw32xMmnnWy99RnWCOkvD4966GbgA_BXoejYo78iCHAQsW0JxCFM4dRjZoD_fU73t7ePzDv0ygiVgluXeO5AfscpoUfTCp5UjpN4vRnPJi25XrkCV8RHVxtYPKUZSC3WkzHKa9gNDF_CmoJOYvk8vg9FL4gzxXzUbGoeNK3Ct5uV6d7GYWQGaIDirVwrfedw" />
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

            {/* Exclusive Benefits */}
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
                        {/* Benefit 1 */}
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
                        {/* Benefit 2 */}
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

            {/* Campaign Numbers */}
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

            {/* Wedding Experience Gallery */}
            <section className="bg-[#0c162d] py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-4">Wedding Experience</h2>
                        <div className="w-24 h-0.5 bg-[#cfaa6e] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-black p-1 border border-white/10">
                        {/* Item 1 */}
                        <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                            <img alt="Atmospheric Chapel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0a3x0-Flgv0z8eQxo62VpqsVbJOdvPVDMRw1ExkHV0hDB75PBTPm0AAUi-twR8H0us2k1xIszFw_VJalTF6nub0BGRd_JZDb-cyllbfz-cHMuHmJIoUDNix2h5hK2iz9mjJ5xkTqJcMGcZoQTZ2NxsMEL5dAamMVgbpwHewdinvr-zyLXCBYpLkjP2omloGQwlrd9qpeC6ISQr0k1wNHcd-qXRY88pE7jsMDHcq8zMaxSYN0TeVlqVN-ua8DNpw_9apivFI0uWg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full border-b-4 border-transparent group-hover:border-[#cfaa6e] transition-all duration-300">
                                <span className="text-[#cfaa6e] text-xs tracking-[0.3em] uppercase block mb-2">Ceremony</span>
                                <h3 className="text-3xl font-display text-white mb-2">Stained Glass Chapel</h3>
                                <p className="text-gray-400 text-sm font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    120年の歴史を誇るステンドグラスと<br />ロイヤルブルーのバージンロード
                                </p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                            <img alt="Elegant Wedding Dress" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxQENz-Nk-jCko48AXbik369MyV7e3_XlxenmfFgXywP4TnD-xZjjgsezHEkd8t7k_ESYxzrqppcKHpUUpEX84fnge9Sgh0cp-e3gyNHGYKKH_hfgbUv6AZ0jrLYoW41-6qO3op3r108TOOtmfXh7rBoH5f_9gBw9_xIEiZLk0dmvgQe6HRJ8CmB99jgA8NU9MGHc6H8n1AJmAxHaYUHZF9TDQS_jS8M9yR3Z9CrsIiNaibz-AZFrRx5iVYRQ8hoseE3EsSQXEow" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full border-b-4 border-transparent group-hover:border-[#cfaa6e] transition-all duration-300">
                                <span className="text-[#cfaa6e] text-xs tracking-[0.3em] uppercase block mb-2">Costume</span>
                                <h3 className="text-3xl font-display text-white mb-2">Luxury Collection</h3>
                                <p className="text-gray-400 text-sm font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    世界中からセレクトされた<br />運命の一着に出会う
                                </p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                            <img alt="Luxury Banquet Hall" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShpeJjZd_4tT8cDW0EhEaFMvXiKrawMdxQxoviOPGBMdQpPMbDXcLoKC7Qsa5gbBuFjmqy8hT9Ej1H1m2JDBM3ASKbZB7g8WIDXG76GixITD-fEkobECG50zmodn7xElzF07pue2DT1SWy2nb9kd1ZAYrNOQ0SxDziBl_0xB1VYC5Gy4Hb1moYLjAyhRSTtpe-PhiUr2Xq4Eg2mv8jTbcpYDX03gA91vvgwBU8Fl7eFdDzdeVHC7poBvFWe8bhmFuvffGoF4zeQ" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full border-b-4 border-transparent group-hover:border-[#cfaa6e] transition-all duration-300">
                                <span className="text-[#cfaa6e] text-xs tracking-[0.3em] uppercase block mb-2">Party</span>
                                <h3 className="text-3xl font-display text-white mb-2">Royal Banquet</h3>
                                <p className="text-gray-400 text-sm font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    シャンデリアが煌めく<br />上質なパーティー空間
                                </p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                            <img alt="Exquisite French Cuisine" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwqhEJGyEfWxkWhsBGtzVG60LK0rW_U0LQB-a8ASa2Qn9HC2EBiCCEQGwNj1iMDt8vhrrz3LIRpBtCvo4OApOcl7UjUUu4z8y_akqeySDmV55fzdk9_HDavtxDx5qiTEO8BGwVjCqlxvlWWqGKoM1T1lm1E88FM0nYINKNDsVGaDYECzOR8GZ3IkIp9TmMSH5bCVy7Y3TNiGHdzQDaAy2FvaD6EgQwCiNrzZaAsAu1qStS10kZM8iKX8qev7TgI8W9aJP50tjkA" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full border-b-4 border-transparent group-hover:border-[#cfaa6e] transition-all duration-300">
                                <span className="text-[#cfaa6e] text-xs tracking-[0.3em] uppercase block mb-2">Cuisine</span>
                                <h3 className="text-3xl font-display text-white mb-2">Gastronomy</h3>
                                <p className="text-gray-400 text-sm font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    五感で楽しむ<br />至極のフレンチジャポネ
                                </p>
                            </div>
                        </div>
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
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phonetic <span class="text-red-500">*</span></label>
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
                        {["photo_camera", "public"].map((icon) => (
                            <Link key={icon} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#cfaa6e] hover:text-[#0a1a3b] hover:border-[#cfaa6e] transition-all duration-300">
                                <span className="material-symbols-outlined">{icon}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-xs text-gray-400 font-serif uppercase tracking-wider">
                        {["Company", "Privacy Policy", "Terms", "Recruit"].map((item) => (
                            <Link key={item} href="#" className="hover:text-white transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                    <p className="text-gray-600 text-xs font-serif">© 2024 Grand Celestial Weddings. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
