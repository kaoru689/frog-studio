"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CalendarDays } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const CollectionItem = ({ src, title, desc, delay }: { src: string; title: string; desc: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="group relative"
    >
        <div className="relative h-[400px] w-full overflow-hidden mb-6 filter contrast-110 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
            <Image
                src={src}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                unoptimized
            />
        </div>
        <div className="border-t border-[#cfab7f]/30 pt-4 flex justify-between items-start">
            <h3 className="font-serif text-xl tracking-wide">{title}</h3>
            <span className="font-cinzel text-xs text-[#cfab7f] opacity-70">COLLECTION NO.0{delay * 10}</span>
        </div>
        <p className="text-xs text-[#e5e5e5]/50 mt-2 font-lato leading-relaxed max-w-xs">{desc}</p>
    </motion.div>
);

export default function KohakuAbout() {
    return (
        <main className="pt-48 pb-24 px-6 md:px-24 max-w-7xl mx-auto w-full">
            {/* Page Title */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 flex items-end gap-6"
            >
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-white">空間の物語</h1>
                <span className="font-cinzel text-[#cfab7f] tracking-[0.3em] pb-2 text-sm">THE SPACE & STORY</span>
            </motion.div>

            {/* Main Salon Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center mb-40">
                <div className="relative h-[600px] w-full order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full h-full relative overflow-hidden"
                    >
                        <Image
                            src="/kohaku/salon_luxury.png" // Updated to New Salon Image
                            alt="Luxury Salon Space"
                            fill
                            className="object-cover transition-transform duration-[2s] hover:scale-105"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    </motion.div>
                </div>

                <div className="order-1 md:order-2 space-y-12">
                    <FadeIn>
                        <span className="font-cinzel text-[#cfab7f] tracking-widest text-xs mb-4 block">THE PHILOSOPHY</span>
                        <h2 className="text-3xl md:text-4xl font-serif leading-relaxed text-white">
                            静寂を、嗜む。
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-[#e5e5e5]/70 leading-loose font-lato text-justify">
                            扉を開けた瞬間、街の喧騒は彼方へと消え去ります。
                            100年の歳月が染み込んだ赤絨毯。窓辺から差し込む柔らかな光と、舞い踊る塵。
                            ここでは、時間は流れるものではなく、積み重なるもの。
                            一杯の珈琲と共に、ご自身の内側と向き合う贅沢な時間をお過ごしください。
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* NEW: History Section */}
            <section className="mb-40 max-w-4xl mx-auto text-center">
                <FadeIn>
                    <div className="w-[1px] h-24 bg-[#cfab7f] mx-auto mb-8 opacity-50"></div>
                    <h2 className="text-3xl font-serif text-white mb-8">琥珀の百年史</h2>
                    <div className="font-lato text-[#e5e5e5]/80 leading-loose space-y-6">
                        <p>
                            1924年（大正13年）、銀座の路地裏にて創業。
                            当初は文士や芸術家が集う「サロン」として愛されました。
                        </p>
                        <p>
                            戦火を奇跡的に免れたこの建物は、昭和、平成、そして令和と、
                            変わりゆく東京の姿を静かに見守り続けてきました。
                        </p>
                        <p>
                            使い込まれた椅子やテーブルの傷一つ一つに、誰かの物語が刻まれています。
                            私たちは、この場所を単なる喫茶店ではなく、
                            「記憶の保管庫」として守り続けているのです。
                        </p>
                    </div>
                    <div className="w-[1px] h-24 bg-[#cfab7f] mx-auto mt-8 opacity-50"></div>
                </FadeIn>
            </section>

            {/* Collection Gallery (Existing) */}
            <section className="mb-40">
                <h3 className="text-xl font-cinzel text-[#cfab7f] tracking-widest text-center mb-16">ANTIQUE COLLECTION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                    <CollectionItem
                        src="/kohaku/chair.png"
                        title="Velvet Armchair"
                        desc="1920年代のフランス製。真紅のベルベットは、幾多の言葉を受け止めてきました。"
                        delay={0.2}
                    />
                    <div className="md:pt-24">
                        <CollectionItem
                            src="/kohaku/lamp.png"
                            title="Tiffany Style Lamp"
                            desc="ステンドグラスから溢れる複雑な光。夜の帳が下りる頃、その輝きは増します。"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Access & Reservation */}
            <section className="relative border-t border-[#cfab7f]/10 pt-24">
                <FadeIn>
                    <div className="flex flex-col gap-12">
                        {/* Reservation Button */}
                        <div className="flex justify-center mb-12">
                            <button className="group relative px-12 py-4 overflow-hidden border border-[#cfab7f]/50 hover:border-[#cfab7f] transition-colors duration-300">
                                <span className="relative z-10 flex items-center gap-4 font-cinzel text-[#cfab7f] tracking-[0.2em] group-hover:text-[#0a0a0a] transition-colors duration-300">
                                    <CalendarDays className="w-4 h-4" />
                                    ONLINE RESERVATION
                                </span>
                                <div className="absolute inset-0 bg-[#cfab7f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3">
                                <h2 className="text-3xl font-serif mb-8 text-white">店舗情報</h2>
                                <ul className="space-y-8 font-lato text-[#e5e5e5]/80">
                                    <li className="flex gap-4 items-start">
                                        <MapPin className="text-[#cfab7f] w-5 h-5 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-bold text-white mb-1">GINZA - KOHAKU</p>
                                            <p>〒104-0061<br />東京都中央区銀座 8-8-8 琥珀ビルB1F</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <Phone className="text-[#cfab7f] w-5 h-5 shrink-0" />
                                        <p>03-1234-5678</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <Clock className="text-[#cfab7f] w-5 h-5 mt-1 shrink-0" />
                                        <div className="space-y-1">
                                            <div className="flex justify-between w-48 border-b border-[#e5e5e5]/10 pb-1">
                                                <span>Mon - Fri</span>
                                                <span>11:00 - 22:00</span>
                                            </div>
                                            <div className="flex justify-between w-48 border-b border-[#e5e5e5]/10 pb-1">
                                                <span>Sat - Sun</span>
                                                <span>10:00 - 20:00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:w-2/3 w-full h-[400px] bg-[#1a1a1a] relative overflow-hidden grayscale contrast-125 border border-[#cfab7f]/10">
                                <Image
                                    src="https://placehold.co/1200x800/2a221e/666666?text=Minimal+Dark+Map"
                                    alt="Map"
                                    fill
                                    className="object-cover opacity-50"
                                    unoptimized
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <MapPin className="w-12 h-12 text-[#cfab7f] drop-shadow-[0_0_15px_rgba(207,171,127,0.5)] animate-bounce" />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
