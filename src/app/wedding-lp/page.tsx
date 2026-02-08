
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
    title: "結婚式場予約 | FROG Wedding - AI時代のラグジュアリー",
    description: "アニヴェルセル級の品格と最新のAI技術が融合した、次世代のウェディング予約サービス。一生に一度の瞬間を、最高のテクノロジーとホスピタリティで。",
    openGraph: {
        title: "結婚式場予約 | FROG Wedding",
        description: "AI時代のラグジュアリーウェディング。成約特典あり。",
        images: ["/og-wedding.png"],
    },
};

// JSON-LD 構造化データ (AI Visibility / AAO対策)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "FROG Wedding Premium Consultation",
    description: "高級結婚式場の特別相談会。AIによる最適プラン提案とリッチな試食会。",
    startDate: "2026-03-01T10:00",
    endDate: "2026-12-31T18:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
        "@type": "Place",
        name: "FROG Wedding Salon",
        address: {
            "@type": "PostalAddress",
            streetAddress: "1-2-3 Minami-Aoyama",
            addressLocality: "Minato-ku",
            postalCode: "107-0062",
            addressRegion: "Tokyo",
            addressCountry: "JP"
        }
    },
    organizer: {
        "@type": "Organization",
        name: "FROG Studio",
        url: "https://frog-studio.com"
    },
    offers: {
        "@type": "Offer",
        url: "https://frog-studio.com/wedding-lp",
        price: "0",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        validFrom: "2026-02-01"
    }
};

export default function WeddingLP() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-200 selection:text-slate-900">
            {/* JSON-LD Embedding */}
            <Script
                id="wedding-json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header (Simplified for LP) */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-500 text-3xl">diamond</span>
                        <span className="font-english font-bold text-2xl tracking-tighter text-slate-900">FROG Wedding</span>
                    </div>
                    <Link href="#reservation" className="hidden md:block bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-slate-800 transition-colors">
                        RESERVE NOW
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    {/* Placeholder for Hero Image - In production, replace with <Image> */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center animate-pulse-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="text-amber-400 font-english font-bold tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-in-up">
                        THE NEXT GENERATION WEDDING
                    </p>
                    <h1 className="text-white font-english font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8 drop-shadow-2xl animate-fade-in-up delay-100">
                        ETERNAL<br />MOMENT
                    </h1>
                    <p className="text-slate-200 font-japanese font-medium text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
                        最新のAIテクノロジーと、伝統的なおもてなしの融合。<br className="hidden md:block" />
                        かつてない感動と、永遠に色褪せない記憶を。<br />
                        FROG Weddingが贈る、2026年のニュースタンダード。
                    </p>
                    <div className="animate-fade-in-up delay-300">
                        <Link href="#reservation" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 px-10 py-5 rounded-full font-bold text-lg tracking-wide hover:scale-105 transition-transform shadow-[0_0_40px_rgba(251,191,36,0.4)]">
                            <span className="material-symbols-outlined">calendar_month</span>
                            無料相談会を予約する
                        </Link>
                    </div>
                </div>
            </section>

            {/* Concept Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1470" alt="Wedding Concept" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-50 border border-slate-100 p-8 rounded-full flex items-center justify-center shadow-xl hidden lg:flex">
                                <div className="text-center">
                                    <span className="block text-4xl font-english font-black text-slate-900 mb-1">No.1</span>
                                    <span className="block text-xs text-slate-500 tracking-widest uppercase">Customer<br />Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-japanese font-black text-slate-900 leading-tight mb-8">
                                「美しさ」と「賢さ」の<br />完全な調和。
                            </h2>
                            <p className="text-slate-600 leading-loose mb-6 font-medium">
                                私たちが提案するのは、単なる結婚式ではありません。
                                徹底的に計算された空間デザイン、AIによるゲスト満足度のシミュレーション、
                                そして熟練のスタッフによる温かいサービス。
                            </p>
                            <p className="text-slate-600 leading-loose mb-10 font-medium">
                                データに基づいた「絶対に外さない」演出と、
                                人の心にしか作れない「感動」の両立。
                                それが、FROG Weddingの約束です。
                            </p>
                            <ul className="space-y-4 mb-10">
                                {["AIによるドレス提案システム", "ゲスト満足度99.8%の料理", "完全貸切のプライベート空間"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 text-xs">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaign Section (Success Box Style) */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    {/* .success-box style inheritance and enhancement */}
                    <div className="bg-white border-2 border-amber-400/50 rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(251,191,36,0.1)] relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative z-10">
                            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">LIMITED OFFER</span>
                            <h2 className="text-3xl md:text-4xl font-japanese font-black text-slate-900 mb-6">
                                2026年春婚<br className="md:hidden" />成約特典キャンペーン
                            </h2>
                            <p className="text-slate-600 mb-10">
                                今月末までにご成約いただいたお客様限定で、<br className="hidden md:block" />
                                以下の特別なオプションをすべて無料でプレゼントいたします。
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                {[
                                    { icon: "apparel", title: "ドレス2着目無料", desc: "最大30万円相当" },
                                    { icon: "photo_camera", title: "前撮り撮影", desc: "スタジオ・ロケ選択可" },
                                    { icon: "restaurant", title: "料理グレードアップ", desc: "お一人様 ¥3,000 OFF" }
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                                        <span className="material-symbols-outlined text-4xl text-amber-500 mb-3 block">{benefit.icon}</span>
                                        <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                                        <p className="text-xs text-slate-500">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs text-slate-400 mb-0">
                                ※ 特典の適用には条件がございます。詳しくはお問い合わせください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery / Features */}
            <section className="py-32 px-6 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-english font-black mb-4"><span className="text-amber-500">G</span>ALLERY</h2>
                        <p className="text-slate-400 font-medium">洗練された空間と、至高の演出。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                        <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=1974" alt="Chapel" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <span className="font-bold text-lg">天空のチャペル</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=1974" alt="Banquet" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <span className="font-bold text-lg">モダンバンケット</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1470" alt="Cuisine" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <span className="font-bold text-lg">ミシュラン級キュイジーヌ</span>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                            <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=2070" alt="Moment" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <span className="font-bold text-lg">最高の瞬間</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Form Section */}
            <section id="reservation" className="py-32 px-6 bg-white">
                <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-slate-100">
                    <div className="text-center mb-12">
                        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2">RESERVATION</span>
                        <h2 className="text-3xl md:text-4xl font-japanese font-black text-slate-900">無料相談会 予約フォーム</h2>
                        <p className="text-slate-500 mt-4">
                            まずは、お二人の理想をお聞かせください。<br />
                            経験豊富なプランナーが最適なご提案をいたします。
                        </p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
                                <input type="text" placeholder="山田 太郎" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス</label>
                                <input type="email" placeholder="example@frog.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">ご希望の日程</label>
                            <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">ご質問・ご要望</label>
                            <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all" placeholder="どのようなことでもお気軽にご記入ください。"></textarea>
                        </div>
                        <button type="button" className="w-full bg-slate-900 text-white font-bold py-5 rounded-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                            この内容で予約する
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between opacity-60">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span className="material-symbols-outlined text-amber-500">diamond</span>
                        <span className="font-english font-bold text-lg tracking-tighter">FROG Wedding</span>
                    </div>
                    <p className="text-xs">&copy; 2026 FROG Wedding by FROG Studio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
