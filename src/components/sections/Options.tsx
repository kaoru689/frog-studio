"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Palette, Globe, ChevronDown, Check, X, Zap, Shield, Wrench, Smartphone, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

// オプションメニュー
const options = [
    {
        icon: Bot,
        title: "AIメンテナンス・サポート（1回）",
        price: "1,000",
        description: "サイトの軽微な修正やテキスト変更などをAIでスピード対応。",
    },
    {
        icon: Palette,
        title: "ロゴ・バナーAI制作代行",
        price: "2,000",
        description: "AIを活用したロゴやバナー画像の制作を代行します。",
    },
    {
        icon: Globe,
        title: "ドメイン設定・公開設定サポート",
        price: "3,000",
        description: "独自ドメインの設定やサイト公開の手続きをサポートします。",
    },
    {
        icon: Lightbulb,
        title: "AI広告コピー生成サポート",
        price: "3,000",
        description: "AIを活用してSNS広告やリスティング広告のキャッチコピーを生成します。",
    },
    {
        icon: Sparkles,
        title: "高品質AI画像・イラスト生成",
        price: "3,000",
        description: "フリー素材に頼らない。最新AIで、あなたのブランド専用の最高画質ビジュアルを制作します。",
    },
];

// 比較表データ
const comparisonItems = [
    {
        label: "表示速度",
        icon: Zap,
        wordpress: "遅い（2〜5秒）",
        our: "爆速（0.5秒以下）",
    },
    {
        label: "セキュリティ",
        icon: Shield,
        wordpress: "プラグイン脆弱性リスク",
        our: "ほぼゼロ",
    },
    {
        label: "保守の手間",
        icon: Wrench,
        wordpress: "更新作業が必要",
        our: "ほぼ不要",
    },
    {
        label: "アプリ化対応",
        icon: Smartphone,
        wordpress: "困難",
        our: "容易（PWA対応可）",
    },
];

// Q&Aデータ（ジャンル順：技術・用語 → 費用関連 → サービス内容）
const faqs = [
    // ─── 技術・用語 ───
    {
        question: "CMSとは何ですか？",
        answer: "「SNSのように、専門知識がなくてもホームページを更新できる仕組み」のことです。FROG Studioでは世界中で選ばれている「microCMS」を採用しています。お客様専用のログイン画面から、スマホで文字を変える感覚でいつでも情報を更新いただけます。",
    },
    {
        question: "プランにある「SEO」とは何ですか？",
        answer: "「検索エンジン最適化」の略称です。簡単に言うと、「Googleなどの検索結果で、あなたのサイトを上のほうに表示させるための工夫」のことです。FROG Studioでは、最新の技術（Next.js）を使い、広告費をかけなくてもお客さまに見つけてもらいやすい「検索に強い土台」を標準で構築します。",
    },
    // ─── 制作・準備 ───
    {
        question: "打ち合わせは必要ですか？",
        answer: "いいえ、一切不要です。その秘密は「計算し尽くされたヒアリングシート」にあります。お忙しいお客様の貴重な時間を1時間、2時間と奪うことはありません。FROG Studioのヒアリングシートは、行動心理学に基づき、「お客様も気づいていない強み」をAIとプロが抽出できるよう緻密に設計されています。ポチポチと回答するだけで、1時間のWeb会議以上に濃密な情報が整理され、結果として「CVRが跳ねる（成約率が高まる）」最強の構成案が自動的に導き出されます。",
    },
    // ─── 費用関連 ───
    {
        question: "ホームページ制作後の維持費は？",
        answer: "月額の管理費用はかかりません。お客様にご負担いただくのは、サイトの「住所」にあたるドメイン代の実費（年間数千円程度）のみです。従来のサイト制作（WordPressなど）では、システムを維持するためのサーバー管理やセキュリティ更新に月額費用がかかるのが一般的でした。しかし、FROG Studioでは「保守・管理が不要な最新の仕組み（ヘッドレス構成）」を採用しているため、制作後のランニングコストを極限まで抑えることが可能です。",
    },
    {
        question: "追加費用がかかるのではと不安です。",
        answer: "お見積り以上の金額をいただくことはありません。システム更新料なども不要なため、むしろ従来のサイトより安く運用いただけます。",
    },
    // ─── サービス内容 ───
    {
        question: "こちらで準備するものはありますか？",
        answer: "載せたい写真（スマホ写真でOK！）と、簡単なサービス紹介文だけで大丈夫です。難しい設定や「何を書いていいか分からない」という部分は、AIと私でしっかりサポートしますので、丸投げに近い形でも進められます。",
    },
    {
        question: "スマホ対応はしていますか？",
        answer: "はい、標準で「レスポンシブ対応」を行っております。iPhoneやAndroid、PCなど、どんな端末で見ても崩れず、爆速で表示されることを保証します。",
    },
    {
        question: "自分で更新できるの？",
        answer: "はい、WordPressより簡単です！専用のシンプルな管理画面（microCMS）をご用意しますので、SNSを投稿する感覚で文字や画像をいつでも自由に変えられます。",
    },
    {
        question: "サーバーの契約が難しそうですが…",
        answer: "ご安心ください。複雑な手続きは一切不要です。無料で使える最新の公開システムの設定はすべてこちらで代行します。お客様はドメイン（住所）を決めるだけでOKです。",
    },
    {
        question: "制作会社が消えたらどうなるの？",
        answer: "世界標準の技術（Next.js）を使用しています。特殊な組み方ではなく、現代のWebの共通語で作っているため、万が一の際も他のエンジニアが簡単に引き継げます。",
    },
    {
        question: "AIで作るとデザインが似通いませんか？",
        answer: "AIは制作の効率化のために使用します。最終的なデザインやレイアウトは「FROG Studio」がお客様の要望に合わせて一つずつ調整しますので、世界にひとつだけのオリジナルサイトが完成します。",
    },
];

export default function Options() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-200/20 dark:bg-accent-900/10 rounded-full blur-3xl" />

            <div className="container relative mx-auto">
                {/* オプションメニュー */}
                <SectionTitle
                    subtitle="Options"
                    title="オプションメニュー"
                    description="必要に応じて追加できるサービスです"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-20">
                    {options.map((option, index) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <option.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                {option.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                {option.description}
                            </p>
                            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                                ¥{option.price}
                                <span className="text-sm font-normal text-slate-500">（税抜）</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Q&A - カエルアイコン付き */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-2">
                        🐸 よくあるご質問
                    </h3>
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
                        ご不安な点をすべて解消します
                    </p>

                    <div className="max-w-2xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gradient-to-r from-primary-50 to-white dark:from-dark-surface dark:to-dark-bg rounded-2xl border border-primary-200/50 dark:border-slate-700 overflow-hidden shadow-md"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-primary-100/50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* カエルアイコン */}
                                        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm">🐸</span>
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            Q: {faq.question}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-5 h-5 text-primary-500" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 pb-5 flex items-start gap-3">
                                                {/* 電球アイコン */}
                                                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Lightbulb className="w-4 h-4 text-yellow-800" />
                                                </div>
                                                <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                    <span className="font-bold text-yellow-600 dark:text-yellow-400">A: </span>
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* その他相談CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            その他、気になることはお気軽にご相談ください！
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:scale-105 transition-all"
                        >
                            無料で相談する
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
