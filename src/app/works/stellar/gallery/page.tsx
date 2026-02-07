"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock font objects
const notoSansJP = { variable: "font-sans-system" };
const spaceGrotesk = { variable: "font-display-system" };
const shipporiMincho = { variable: "font-serif-system" };

// ギャラリーアイテムの型定義
interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    category: "training" | "recovery" | "lounge";
    label: string;
    title: string;
    caption: string;
}

// ギャラリーデータ - 既存画像 + 新規アップロード画像
const galleryItems: GalleryItem[] = [
    // Training カテゴリ
    {
        id: "training-1",
        src: "/stellar_gallery_private_room.png",
        alt: "Private Training Room",
        category: "training",
        label: "Private Sanctuary",
        title: "完全個室のプライバシー",
        caption: "喧騒から隔絶された空間で、己の限界と向き合う至福の時間。",
    },
    {
        id: "training-2",
        src: "/stellar_gallery_equipment.png",
        alt: "Pro Equipment",
        category: "training",
        label: "Pro Equipment",
        title: "最先端の機材と解析",
        caption: "身体の動きを科学が捉え、次元を超えた効率を生み出す。",
    },
    {
        id: "training-3",
        src: "/stellar_gallery_ambience.png",
        alt: "Lighting Ambience",
        category: "training",
        label: "Ambience",
        title: "没入する照明設計",
        caption: "光と影のコントラストが、集中力を極限まで研ぎ澄ます。",
    },
    // Recovery カテゴリ（サウナ・スパ）
    {
        id: "recovery-1",
        src: "/works/stellar/gallery/sauna.jpg",
        alt: "Finnish Sauna",
        category: "recovery",
        label: "Finnish Sauna",
        title: "思考を深めるサウナ",
        caption: "ヒノキの香りが、研ぎ澄まされた思考をさらに深くする。",
    },
    {
        id: "recovery-2",
        src: "/works/stellar/gallery/spa-pool.jpg",
        alt: "Spa Pool",
        category: "recovery",
        label: "Vitality Pool",
        title: "再生の水辺",
        caption: "静寂に包まれたスパ体験。身体と精神の完全なる調和。",
    },
    {
        id: "recovery-3",
        src: "/works/stellar/gallery/treatment.jpg",
        alt: "Treatment Room",
        category: "recovery",
        label: "Treatment Suite",
        title: "至福のリカバリー",
        caption: "専門セラピストによる、経営者のための回復プログラム。",
    },
    // Lounge カテゴリ
    {
        id: "lounge-1",
        src: "/works/stellar/gallery/private-lounge.png",
        alt: "Executive Lounge",
        category: "lounge",
        label: "Executive Lounge",
        title: "迎賓のラウンジ",
        caption: "トレーニング前後の静謐な時間が、日常を特別に変える。",
    },
    {
        id: "lounge-2",
        src: "/works/stellar/gallery/amenity.jpg",
        alt: "Premium Amenity",
        category: "lounge",
        label: "Premium Amenity",
        title: "厳選されたアメニティ",
        caption: "選び抜かれた素材が、肌から心へ浸透する。",
    },
    {
        id: "lounge-3",
        src: "/works/stellar/gallery/private-suite.jpg",
        alt: "Private Suite",
        category: "lounge",
        label: "Private Suite",
        title: "静寂のスイート",
        caption: "完璧なコンディショニングのための、あなただけの空間。",
    },
];

// カテゴリ情報
const categories = {
    training: {
        label: "Training",
        title: "鍛錬の間",
        subtitle: "限界の先にある、静寂。",
        description: "最新のテクノロジーと洗練された空間が融合した、エグゼクティブ専用のトレーニングエリア。",
    },
    recovery: {
        label: "Recovery",
        title: "再生の間",
        subtitle: "脳のデトックス。深い思考のためのサウナ体験。",
        description: "激しいトレーニングの後に訪れる、静寂に包まれたリトリート。この「静と動」の対比が、あなたの価値を証明する。",
    },
    lounge: {
        label: "Lounge",
        title: "静謐の時",
        subtitle: "時間の質が、人生の質を決める。",
        description: "選び抜かれたアメニティと設えが、ワークアウト後の高揚感を優雅に包み込みます。",
    },
};

// ライトボックスコンポーネント
function Lightbox({
    item,
    onClose
}: {
    item: GalleryItem | null;
    onClose: () => void
}) {
    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="lightbox-overlay"
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={onClose}
            >
                {/* 閉じるボタン */}
                <button
                    className="absolute top-8 right-8 z-10 text-white/60 hover:text-[#D4AF37] transition-colors"
                    onClick={onClose}
                >
                    <span className="material-symbols-outlined text-3xl">close</span>
                </button>

                {/* 画像コンテナ */}
                <motion.div
                    className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ゴールドボーダー */}
                    <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none z-10" />

                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={1400}
                        height={900}
                        className="w-full h-full object-contain"
                        priority
                    />

                    {/* キャプションオーバーレイ */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase block mb-2">
                            {item.label}
                        </span>
                        <h3 className="text-white font-serif text-2xl md:text-3xl font-light mb-3">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm tracking-wide font-light italic">
                            「{item.caption}」
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

// ギャラリーアイテムコンポーネント
function GalleryItemCard({
    item,
    onClick
}: {
    item: GalleryItem;
    onClick: () => void
}) {
    return (
        <motion.div
            className="gallery-item group relative aspect-[4/3] overflow-hidden bg-[#121212] cursor-pointer"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
        >
            <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-[1200ms] ease-out brightness-[0.4] grayscale-[0.7] group-hover:brightness-110 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* スポットライトエフェクト */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 opacity-100 group-hover:opacity-40 transition-opacity duration-700" />

            {/* ゴールドグロー */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.15)]" />
            </div>

            {/* 拡大アイコン */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <motion.div
                    initial={{ scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 flex items-center justify-center"
                >
                    <span className="material-symbols-outlined text-white/90 text-xl">open_in_full</span>
                </motion.div>
            </div>

            {/* キャプション */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <span className="text-[#D4AF37] text-[9px] tracking-[0.35em] uppercase block mb-2 opacity-80">
                    {item.label}
                </span>
                <h3 className="text-white font-serif text-base md:text-lg font-light tracking-wide">
                    {item.title}
                </h3>
            </div>
        </motion.div>
    );
}

export default function StellarGalleryPage() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const trainingItems = galleryItems.filter(item => item.category === "training");
    const recoveryItems = galleryItems.filter(item => item.category === "recovery");
    const loungeItems = galleryItems.filter(item => item.category === "lounge");

    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] ${notoSansJP.variable} ${spaceGrotesk.variable} ${shipporiMincho.variable} font-sans`}>
            {/* Custom Styles */}
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
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeUp {
                    animation: fadeUp 1s ease-out forwards;
                }
                .tracking-super-wide { letter-spacing: 0.4em; }
                .tracking-extra-wide { letter-spacing: 0.2em; }
            `}</style>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 md:px-16 transition-all duration-500 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]">
                <Link href="/works/stellar" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-[#D4AF37] !text-[20px]">diamond</span>
                    <h2 className="font-display text-white text-lg font-light tracking-super-wide uppercase">STELLAR</h2>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#concept">Concept</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/program">Program</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/professionals">Professionals</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/news">News</Link>
                    <Link className="text-[10px] tracking-extra-wide text-[#D4AF37] uppercase" href="/works/stellar/gallery">Gallery</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar/price">Price</Link>
                    <Link className="text-[10px] tracking-extra-wide text-gray-400 hover:text-[#D4AF37] transition-colors uppercase" href="/works/stellar#access">Access</Link>
                </nav>
                <div className="flex items-center gap-8">
                    <div className="hidden xl:block">
                        <span className="text-[10px] tracking-extra-wide text-[#D4AF37] font-medium">LIMITED TO 3 MEMBERS</span>
                    </div>
                    <Link href="/works/stellar#reservation" className="group relative flex items-center gap-3 text-[10px] tracking-extra-wide font-bold uppercase transition-all">
                        <span className="text-white group-hover:text-[#D4AF37]">Reservation</span>
                        <span className="h-[1px] w-8 bg-[#D4AF37] origin-right transition-all group-hover:w-12"></span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow bg-[#0A0A0A]">
                {/* Hero Section */}
                <section className="relative pt-40 pb-24 px-6 md:px-12 bg-[#0A0A0A] text-center overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D4AF37]/30 to-transparent"></div>
                    <div className="max-w-4xl mx-auto relative z-10 animate-fadeUp">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-8 font-medium">Facility Gallery</span>
                        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                            研ぎ澄まされた<span className="text-gradient-gold">空間</span>
                        </h1>
                        <p className="text-gray-400 text-xs md:text-sm tracking-widest leading-loose font-light max-w-2xl mx-auto">
                            静寂が支配する、黒と金の世界。<br />
                            五感を満たし、己と向き合うためのサンクチュアリがここにあります。
                        </p>
                    </div>
                </section>

                {/* Training Section */}
                <section className="px-6 md:px-12 pb-24 bg-[#0A0A0A]">
                    <div className="max-w-[1400px] mx-auto">
                        {/* セクションヘッダー */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
                            <div>
                                <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-4">{categories.training.label}</span>
                                <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">{categories.training.title}</h2>
                                <p className="text-gray-500 text-sm italic">「{categories.training.subtitle}」</p>
                            </div>
                            <p className="text-gray-600 text-xs tracking-wide max-w-md mt-4 md:mt-0 md:text-right hidden md:block">
                                {categories.training.description}
                            </p>
                        </div>
                        {/* ギャラリーグリッド */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                            {trainingItems.map((item) => (
                                <GalleryItemCard
                                    key={item.id}
                                    item={item}
                                    onClick={() => setSelectedItem(item)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recovery Section */}
                <section className="px-6 md:px-12 py-24 bg-[#080808]">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
                            <div>
                                <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-4">{categories.recovery.label}</span>
                                <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">{categories.recovery.title}</h2>
                                <p className="text-gray-500 text-sm italic">「{categories.recovery.subtitle}」</p>
                            </div>
                            <p className="text-gray-600 text-xs tracking-wide max-w-md mt-4 md:mt-0 md:text-right hidden md:block">
                                {categories.recovery.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                            {recoveryItems.map((item) => (
                                <GalleryItemCard
                                    key={item.id}
                                    item={item}
                                    onClick={() => setSelectedItem(item)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lounge Section */}
                <section className="px-6 md:px-12 py-24 bg-[#0A0A0A]">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
                            <div>
                                <span className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase block mb-4">{categories.lounge.label}</span>
                                <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-2">{categories.lounge.title}</h2>
                                <p className="text-gray-500 text-sm italic">「{categories.lounge.subtitle}」</p>
                            </div>
                            <p className="text-gray-600 text-xs tracking-wide max-w-md mt-4 md:mt-0 md:text-right hidden md:block">
                                {categories.lounge.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                            {loungeItems.map((item) => (
                                <GalleryItemCard
                                    key={item.id}
                                    item={item}
                                    onClick={() => setSelectedItem(item)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section - 重厚な導線 */}
                <section className="relative py-40 bg-[#050505] border-t border-white/5 overflow-hidden">
                    {/* 装飾背景 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.03] via-transparent to-[#D4AF37]/[0.02]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />

                    <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="material-symbols-outlined text-[#D4AF37] text-4xl mb-8 block font-light">diamond</span>

                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                                この空間を、<br />
                                <span className="text-gradient-gold">体験する資格がある</span>あなたへ。
                            </h2>

                            <p className="text-gray-400 text-sm leading-loose font-light mb-12 tracking-wide max-w-xl mx-auto">
                                写真では伝えきれない静寂と重厚感。<br />
                                まずは無料カウンセリングにて、実際の空間をご体感ください。
                            </p>

                            <div className="flex flex-col items-center gap-6">
                                <Link
                                    href="/works/stellar#reservation"
                                    className="group relative inline-flex items-center justify-center px-16 py-6 bg-[#D4AF37] overflow-hidden transition-all duration-500 hover:bg-white shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]"
                                >
                                    <span className="relative z-10 text-sm tracking-widest uppercase font-bold text-[#0A0A0A]">
                                        初回体験を予約する
                                    </span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                </Link>

                                <div className="flex items-center gap-4">
                                    <span className="h-[1px] w-8 bg-[#D4AF37]/30" />
                                    <span className="text-[10px] tracking-[0.2em] text-gray-500">完全予約制・1日3組限定</span>
                                    <span className="h-[1px] w-8 bg-[#D4AF37]/30" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-16">
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
                                <li><Link className="hover:text-[#D4AF37] transition-colors" href="/works/stellar#access">Access</Link></li>
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

            {/* Lightbox */}
            {selectedItem && (
                <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
}
