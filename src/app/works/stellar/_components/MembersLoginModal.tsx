"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MembersLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MembersLoginModal({ isOpen, onClose }: MembersLoginModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* 背景オーバーレイ - 重厚なブラー効果 */}
                    <motion.div
                        className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        onClick={onClose}
                    />

                    {/* モーダルコンテンツ - 重い扉が開くアニメーション */}
                    <motion.div
                        className="fixed inset-0 z-[301] flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-md mx-6 bg-gradient-to-b from-[#0A0A0A] to-[#111] border border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.15)] pointer-events-auto overflow-hidden"
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1 }}
                            exit={{ scaleY: 0, opacity: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                scaleY: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                            }}
                            style={{ transformOrigin: "top" }}
                        >
                            {/* 閉じるボタン */}
                            <button
                                className="absolute top-6 right-6 z-10 text-gray-500 hover:text-[#D4AF37] transition-colors"
                                onClick={onClose}
                            >
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>

                            {/* ゴールドの装飾ライン */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                            <div className="p-12 pt-16">
                                {/* ヘッダー */}
                                <motion.div
                                    className="text-center mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <span className="material-symbols-outlined text-[#D4AF37] text-3xl mb-4 block">verified_user</span>
                                    <h2 className="font-serif text-xl text-white font-light tracking-widest mb-3">MEMBERS PORTAL</h2>
                                    <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Private Access Only</p>
                                </motion.div>

                                {/* 特別感を演出するテキスト */}
                                <motion.p
                                    className="text-center text-gray-400 text-xs leading-relaxed mb-10 font-light"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    この先は会員様専用のプライベートエリアです。<br />
                                    入会審査を通過された方のみご利用いただけます。
                                </motion.p>

                                {/* フォーム */}
                                <motion.form
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    {/* MEMBER ID */}
                                    <div>
                                        <label className="block text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-3">Member ID</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/50 border border-white/10 px-5 py-4 text-white text-sm tracking-widest placeholder-gray-600 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                                            placeholder="Enter your member ID"
                                        />
                                    </div>

                                    {/* PASSWORD */}
                                    <div>
                                        <label className="block text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-3">Password</label>
                                        <input
                                            type="password"
                                            className="w-full bg-black/50 border border-white/10 px-5 py-4 text-white text-sm tracking-widest placeholder-gray-600 focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                                            placeholder="••••••••"
                                        />
                                    </div>

                                    {/* ログインボタン */}
                                    <button
                                        type="submit"
                                        className="w-full bg-white/5 border border-white/20 py-4 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-white/10 hover:border-white/30 transition-all"
                                    >
                                        Sign In
                                    </button>
                                </motion.form>

                                {/* 区切り線 */}
                                <motion.div
                                    className="flex items-center gap-4 my-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    <div className="flex-1 h-[1px] bg-white/10" />
                                    <span className="text-[9px] tracking-widest text-gray-600 uppercase">or</span>
                                    <div className="flex-1 h-[1px] bg-white/10" />
                                </motion.div>

                                {/* FaceID / Biometrics ダミーボタン */}
                                <motion.button
                                    type="button"
                                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] py-4 text-[#0A0A0A] text-[11px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <span className="material-symbols-outlined text-lg">fingerprint</span>
                                    FaceID / Biometrics Login
                                </motion.button>

                                {/* 注釈 */}
                                <motion.p
                                    className="text-center text-[9px] tracking-widest text-gray-600 mt-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    Secured by Enterprise-Grade Encryption
                                </motion.p>
                            </div>

                            {/* 下部のゴールドライン */}
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
