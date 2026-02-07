"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function CountUp({ to, decimals = 0, suffix = "", duration = 2.5 }: { to: number; decimals?: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals) + suffix;
            }
        });
    }, [springValue, decimals, suffix]);

    return <span ref={ref} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight" />;
}

export default function StatsSection() {
    return (
        <section className="bg-[#0A0A0A] py-32 border-b border-white/5 relative overflow-hidden">
            {/* Decorative Background Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 relative">

                    {/* Item 1: Scientific Data */}
                    <div className="flex flex-col items-center text-center group md:border-r md:border-[#D4AF37]/30 md:px-8">
                        <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase mb-6 opacity-80 group-hover:opacity-100 transition-opacity font-bold">Scientific Data</span>
                        <div className="mb-4">
                            <CountUp to={5.0} decimals={1} />
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase leading-relaxed">
                            「科学的根拠」に基づいた、<br />揺るぎない最高評価。
                        </p>
                    </div>

                    {/* Item 2: Elite Success */}
                    <div className="flex flex-col items-center text-center group md:border-r md:border-[#D4AF37]/30 md:px-8">
                        <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase mb-6 opacity-80 group-hover:opacity-100 transition-opacity font-bold">Elite Success</span>
                        <div className="mb-4">
                            <CountUp to={1000} suffix="+" decimals={0} />
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase leading-relaxed">
                            1,000名を超える<br />「​​経営者の身体」を変えた実績。
                        </p>
                    </div>

                    {/* Item 3: Absolute Privacy */}
                    <div className="flex flex-col items-center text-center group md:px-8">
                        <span className="text-[#D4AF37] text-[10px] tracking-super-wide uppercase mb-6 opacity-80 group-hover:opacity-100 transition-opacity font-bold">Absolute Privacy</span>
                        <div className="mb-4">
                            <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight py-2 block">
                                TRUSTED
                            </span>
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase leading-relaxed">
                            誰にも会わない、選ばれし者のための<br />「完全個室」。
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
