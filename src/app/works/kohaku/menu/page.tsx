"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Menu Item Component with Highlight Support
const MenuItem = ({ id, name, enName, price, desc, index, isActive }: { id: string; name: string; enName: string; price: string; desc: string; index: number; isActive: boolean }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    // Auto-scroll when active
    useEffect(() => {
        if (isActive && itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [isActive]);

    return (
        <motion.div
            ref={itemRef}
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative border-b border-[#cfab7f]/20 py-8 px-6 transition-all duration-500 cursor-default rounded-sm
            ${isActive ? "bg-[#cfab7f]/10 border-l-4 border-l-[#cfab7f] pl-8 shadow-[0_0_30px_rgba(207,171,127,0.1)]" : "hover:bg-[#cfab7f]/5 hover:pl-8 border-l-4 border-l-transparent"}
        `}
        >
            <div className="flex justify-between items-baseline mb-2">
                <div className="flex flex-col">
                    <span className={`font-cinzel text-xs tracking-widest mb-1 transition-opacity duration-300 ${isActive ? "text-[#cfab7f] opacity-100" : "text-[#cfab7f] opacity-60 group-hover:opacity-100"}`}>{enName}</span>
                    <h4 className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${isActive ? "text-[#cfab7f]" : "text-[#e5e5e5]"}`}>{name}</h4>
                </div>
                <span className="font-cinzel text-lg text-[#cfab7f]">{price}</span>
            </div>
            <p className="text-xs md:text-sm text-[#e5e5e5]/50 font-lato max-w-lg transition-colors duration-300 group-hover:text-[#e5e5e5]/80">{desc}</p>
        </motion.div>
    );
};

// Section Image with Hover Handler
const SectionImage = ({ src, alt, className, onHover, targetId }: { src: string; alt: string; className?: string; onHover?: (id: string) => void; targetId?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative w-full overflow-hidden rounded-sm mb-12 shadow-2xl cursor-crosshair ${className}`}
        onMouseEnter={() => onHover && targetId && onHover(targetId)}
    >
        <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-out" unoptimized />
        {/* Subtle Visual Cue for Interactivity */}
        <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
    </motion.div>
);

export default function KohakuMenu() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleHover = (id: string) => {
        setActiveId(id);
        // Reset after a delay to allow re-triggering smoothly if needed, or keep active until next hover.
        // Here we jump state immediately to feel responsive.
    };

    return (
        <main className="pt-48 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">

            {/* Page Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 text-center md:text-left"
            >
                <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#e5e5e5] mb-4">GRAND MENU</h1>
                <p className="font-cinzel text-[#cfab7f] tracking-[0.5em] text-sm md:pl-2">SELECTION</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

                {/* Left Column: Visuals (Spans 5 cols) */}
                <div className="md:col-span-5 flex flex-col gap-12 pt-8 sticky top-32 h-fit">
                    {/* Coffee Visuals */}
                    <div className="h-[500px] relative">
                        <SectionImage
                            src="/kohaku/coffee_authentic.png"
                            alt="Signature Coffee"
                            className="h-full"
                            onHover={handleHover}
                            targetId="coffee-1"
                        />
                        <div className="absolute bottom-8 left-[-20px] bg-[#0a0a0a] border border-[#cfab7f]/30 p-6 shadow-xl z-10 pointer-events-none">
                            <p className="font-serif text-[#cfab7f] text-lg">「最高の一杯は、<br />人生を豊かにする。」</p>
                        </div>
                    </div>

                    <SectionImage
                        src="/kohaku/cup_elegant.png"
                        alt="Elegant Cup"
                        className="h-[350px]"
                        onHover={handleHover}
                        targetId="coffee-2"
                    />

                    {/* Food Visuals */}
                    <div className="pt-24 h-[450px]">
                        <SectionImage
                            src="/kohaku/galette.png"
                            alt="Galette"
                            className="h-full"
                            onHover={handleHover}
                            targetId="meal-1"
                        />
                    </div>

                    {/* Dessert Visuals */}
                    <div className="pt-24 space-y-8">
                        <SectionImage
                            src="/kohaku/parfait_champagne.png"
                            alt="Parfait"
                            className="h-[500px]"
                            onHover={handleHover}
                            targetId="dessert-1"
                        />
                        <SectionImage
                            src="/kohaku/pudding_firm.png"
                            alt="Pudding"
                            className="h-[350px]"
                            onHover={handleHover}
                            targetId="dessert-2"
                        />
                        <SectionImage
                            src="/kohaku/terrine.png"
                            alt="Terrine"
                            className="h-[300px]"
                            onHover={handleHover}
                            targetId="dessert-3"
                        />
                    </div>
                </div>

                {/* Right Column: Menu List (Spans 7 cols) */}
                <div className="md:col-span-7 space-y-32">

                    {/* Coffee Section */}
                    <div>
                        <h3 className="text-[#cfab7f] border-l-2 border-[#cfab7f] pl-6 text-2xl font-serif mb-12 tracking-widest">珈琲 - Coffee</h3>
                        <div className="flex flex-col space-y-2">
                            <MenuItem id="coffee-1" index={0} name="琥珀の雫" enName="KOHAKU NO SHIZUKU" price="¥900" desc="琥珀オリジナルのシグネチャーブレンド。深みのあるコクと、後から追いかける甘み。" isActive={activeId === "coffee-1"} />
                            <MenuItem id="coffee-2" index={1} name="氷温熟成エメラルドマウンテン" enName="ICE-AGED EMERALD MOUNTAIN" price="¥1,400" desc="氷点下で長期熟成させた希少豆。ワインのように芳醇で、透き通るような余韻。" isActive={activeId === "coffee-2"} />
                            <MenuItem id="coffee-3" index={2} name="オールド・ビーンズ" enName="AGED BEANS (10 YEARS)" price="¥1,200" desc="10年熟成させた豆を使用。角が取れ、ブランデーのような香りを纏った一品。" isActive={activeId === "coffee-3"} />
                            <MenuItem id="coffee-4" index={3} name="貴婦人のカフェ・オ・レ" enName="CAFE AU LAIT OF THE NOBLE LADY" price="¥1,100" desc="濃厚な深煎りコーヒーと、フォームドミルクの黄金比。なめらかな口当たり。" isActive={activeId === "coffee-4"} />
                            <MenuItem id="coffee-5" index={4} name="カフェ・ヴィエノワ" enName="CAFE VIENNOIS" price="¥1,100" desc="深煎りコーヒーに、冷たい生クリームを静かに浮かべて。" isActive={activeId === "coffee-5"} />
                        </div>
                    </div>

                    {/* Light Meal Section */}
                    <div>
                        <h3 className="text-[#cfab7f] border-l-2 border-[#cfab7f] pl-6 text-2xl font-serif mb-12 tracking-widest">軽食 - Light Meal</h3>
                        <div className="flex flex-col space-y-2">
                            <MenuItem id="meal-1" index={0} name="黒トリュフのガレット・コンプレット" enName="BLACK TRUFFLE GALETTE COMPLÈTE" price="¥2,800" desc="香り高いそば粉の生地に、黒トリュフ、卵、チーズを包み込んだ贅沢な一皿。" isActive={activeId === "meal-1"} />
                            <MenuItem id="meal-2" index={1} name="鴨のコンフィとクレソンのクロックムッシュ" enName="DUCK CONFIT CROQUE MONSIEUR" price="¥1,800" desc="低温でじっくり火入れした鴨肉と、濃厚なベシャメルソースの調和。" isActive={activeId === "meal-2"} />
                        </div>
                    </div>

                    {/* Dessert Section */}
                    <div>
                        <h3 className="text-[#cfab7f] border-l-2 border-[#cfab7f] pl-6 text-2xl font-serif mb-12 tracking-widest">甘味 - Dessert</h3>
                        <div className="flex flex-col space-y-2">
                            <MenuItem id="dessert-1" index={0} name="季節の果実とシャンパンのパルフェ" enName="SEASONAL FRUIT & CHAMPAGNE PARFAIT" price="¥2,200" desc="旬の果実と最高級シャンパンのジュレ。夜の宝石のような佇まい。" isActive={activeId === "dessert-1"} />
                            <MenuItem id="dessert-2" index={1} name="銀皿のカスタードプリン" enName="VINTAGE SILVER PUDDING" price="¥750" desc="銀の器で提供する、固めのクラシックプリン。ほろ苦いカラメルと共に。" isActive={activeId === "dessert-2"} />
                            <MenuItem id="dessert-3" index={2} name="極上宇治抹茶のテリーヌ" enName="PREMIUM MATCHA TERRINE" price="¥900" desc="京都・宇治の最高級抹茶を使用。生チョコレートのような濃厚な口溶け。" isActive={activeId === "dessert-3"} />
                            <MenuItem id="dessert-4" index={3} name="自家製ガトーショコラ" enName="CLASSIC GATEAU CHOCOLAT" price="¥800" desc="小麦粉を使わず、チョコレートと卵だけで焼き上げた濃厚な一皿。" isActive={activeId === "dessert-4"} />
                            <MenuItem id="dessert-5" index={4} name="琥珀ゼリー" enName="COFFEE JELLY" price="¥850" desc="水出しコーヒーの風味を閉じ込めたゼリー。ミルクをかけて。" isActive={activeId === "dessert-5"} />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
