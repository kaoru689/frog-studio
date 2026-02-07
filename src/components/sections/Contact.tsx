"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

interface FormData {
    name: string;
    email: string;
    plan: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        plan: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // ここに実際のフォーム送信ロジックを実装
        // 例: API Route への POST リクエスト
        try {
            // シミュレーション用の遅延
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Form submitted:", formData);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", plan: "", message: "" });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // 3秒後にステータスをリセット
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }
    };

    return (
        <section
            id="contact"
            className="section-padding bg-slate-50 dark:bg-dark-surface relative overflow-hidden"
        >
            {/* 背景装飾 */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-transparent dark:from-primary-900/20" />

            <div className="container relative mx-auto">
                <SectionTitle
                    subtitle="Contact"
                    title="お問い合わせ"
                    description="ご質問やお見積もりのご依頼はお気軽にどうぞ"
                />

                <div className="max-w-2xl mx-auto mt-12">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="card p-8 lg:p-10"
                    >
                        {/* お名前 */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                <User className="w-4 h-4" />
                                お名前
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="山田 太郎"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* メールアドレス */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                <Mail className="w-4 h-4" />
                                メールアドレス
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* ご希望のプラン */}
                        <div className="mb-6">
                            <label
                                htmlFor="plan"
                                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                ご希望のプラン
                            </label>
                            <select
                                id="plan"
                                name="plan"
                                value={formData.plan}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            >
                                <option value="">選択してください</option>
                                <option value="light">LIGHT - シンプルLP（10,000円〜）</option>
                                <option value="standard">STANDARD - 高機能LP（25,000円〜）</option>
                                <option value="premium">PREMIUM - 本格HP（50,000円〜）</option>
                                <option value="other">その他・相談したい</option>
                            </select>
                        </div>

                        {/* お問い合わせ内容 */}
                        <div className="mb-8">
                            <label
                                htmlFor="message"
                                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                <MessageSquare className="w-4 h-4" />
                                お問い合わせ内容
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="お問い合わせ内容、ご希望のサイトイメージなどをご記入ください"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                            />
                        </div>

                        {/* 送信ボタン */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    送信する
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {/* 送信結果メッセージ */}
                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 flex items-center gap-3"
                            >
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                <span>お問い合わせを受け付けました。2営業日以内にご返信いたします。</span>
                            </motion.div>
                        )}

                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 flex items-center gap-3"
                            >
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span>送信に失敗しました。時間をおいて再度お試しください。</span>
                            </motion.div>
                        )}
                    </motion.form>

                    {/* 補足情報 */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6"
                    >
                        ※ 2営業日以内にご返信いたします。
                        <br />
                        ※ お急ぎの場合は、その旨をメッセージにご記入ください。
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
