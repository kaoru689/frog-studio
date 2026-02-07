"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk, Noto_Sans_JP } from "next/font/google";

// フォント設定
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-noto-sans-jp",
    display: "swap",
});

export default function AIVisibilityArticlePage() {
    return (
        <div
            className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body bg-[#020617] text-white selection:bg-cyber-primary selection:text-black min-h-screen`}
        >
            {/* Material Symbols */}
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* スタイル */}
            <style>{`
                .blog-content {
                    font-size: 1.05rem;
                    line-height: 2;
                    color: #d1d5db;
                }
                .blog-content h2 {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: #fff;
                    margin-top: 3rem;
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 2px solid rgba(13, 242, 89, 0.4);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .blog-content h3 {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #fff;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul {
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                    list-style: none;
                }
                .blog-content li {
                    margin-bottom: 0.75rem;
                    position: relative;
                    padding-left: 1.5rem;
                }
                .blog-content li::before {
                    content: "▶";
                    position: absolute;
                    left: 0;
                    color: #0df259;
                    font-size: 0.7rem;
                    top: 0.3rem;
                }
                .blog-content strong {
                    color: #0df259;
                    font-weight: 700;
                }
                .blog-content .highlight-box {
                    background: linear-gradient(135deg, rgba(13,242,89,0.1) 0%, rgba(6,182,212,0.1) 100%);
                    border: 1px solid rgba(13,242,89,0.3);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .blog-content .warning-box {
                    background: linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(245,158,11,0.1) 100%);
                    border: 1px solid rgba(239,68,68,0.3);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .plan-card {
                    background: rgba(15,23,42,0.8);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    transition: all 0.3s;
                }
                .plan-card:hover {
                    border-color: rgba(13,242,89,0.5);
                    box-shadow: 0 0 30px rgba(13,242,89,0.1);
                }
            `}</style>

            {/* ヒーローセクション */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                {/* 背景エフェクト */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,242,89,0.15),transparent_50%)] pointer-events-none"></div>
                <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* パン屑 */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-cyber-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-cyber-primary transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-400">AI Visibility</span>
                    </nav>

                    {/* カテゴリ */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs font-mono px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded border border-cyber-primary/30">
                            SEO戦略
                        </span>
                        <span className="text-xs font-mono px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/30">
                            AI時代
                        </span>
                        <span className="text-xs font-mono px-3 py-1 bg-amber-500/10 text-amber-400 rounded border border-amber-500/30">
                            2026年最新
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                            2026年、従来のSEOだけでは
                            <span className="text-cyber-primary">生き残れない</span>
                            <br />
                            ——「AI Visibility」という新常識
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 border-l-2 border-cyber-primary/50 pl-4">
                            Google SGE、ChatGPT、Perplexity...AIが検索の主役になる時代、
                            あなたのサイトは「AIに引用される側」ですか？それとも「無視される側」ですか？
                        </p>
                    </motion.div>

                    {/* メタ情報 */}
                    <div className="flex items-center gap-6 text-gray-500 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">schedule</span>
                            2026年2月5日
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">timer</span>
                            読了時間: 8分
                        </div>
                    </div>
                </div>
            </section>

            {/* ヒーローイメージ（CSSベース） */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <span className="material-symbols-outlined text-8xl text-cyber-primary animate-pulse">
                                        neurology
                                    </span>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-sm">search</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-white mt-4">AI Visibility</p>
                                <p className="text-gray-400 text-sm mt-2">The New SEO Standard for 2026</p>
                            </div>
                        </div>
                        {/* 装飾 */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyan-500 to-purple-500"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-cyber-primary/50 via-transparent to-cyan-500/50"></div>
                    </div>
                </div>
            </section>

            {/* 本文 */}
            <section className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <article className="blog-content">

                        {/* 導入：不都合な真実 */}
                        <div className="warning-box">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-red-400 text-2xl">warning</span>
                                <div>
                                    <p className="text-white font-bold mb-2">経営者・マーケター必読の「不都合な真実」</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        2026年、Googleは検索結果の<strong>約40%</strong>をAI生成の回答（SGE）で占めると予測されています。
                                        つまり、従来の「10位表示を目指すSEO」は、もはや<strong>時代遅れ</strong>になりつつあるのです。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p>
                            こんにちは、FROG Studioのチーフコンサルタントです。
                        </p>
                        <p>
                            今日は、多くの企業がまだ気づいていない——しかし、気づいた者だけが勝ち残る——
                            2026年のSEO最前線についてお話しします。
                        </p>
                        <p>
                            結論から言います。<strong>「検索順位1位」を取っても、売上が上がらない時代が来ます。</strong>
                        </p>
                        <p>
                            なぜか？それは、ユーザーが「検索結果をクリックしなくなる」からです。
                        </p>

                        <h2>
                            <span className="material-symbols-outlined text-cyber-primary">psychology</span>
                            「AI Visibility」とは何か？
                        </h2>
                        <p>
                            <strong>AI Visibility（AIへの露出度）</strong>とは、Google SGE、ChatGPT、Perplexity、
                            Microsoft Copilotなどの<strong>AIアシスタントに「引用される」確率</strong>を指します。
                        </p>
                        <p>
                            従来のSEOが「検索結果で上位表示される」ことを目指していたのに対し、
                            AI Visibilityは「AIが回答を生成する際に、あなたの情報が使われるかどうか」に焦点を当てます。
                        </p>

                        <div className="highlight-box">
                            <p className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-cyber-primary">lightbulb</span>
                                ポイント
                            </p>
                            <ul className="mb-0">
                                <li>ユーザーは「10個の青いリンク」をクリックしなくなる</li>
                                <li>AIが生成した要約で<strong>満足して離脱</strong>する</li>
                                <li>引用元として表示されなければ、<strong>存在しないのと同じ</strong></li>
                            </ul>
                        </div>

                        <h2>
                            <span className="material-symbols-outlined text-cyber-primary">trending_down</span>
                            従来SEOが「死ぬ」3つの理由
                        </h2>

                        <h3>1. クリック率の壊滅的低下</h3>
                        <p>
                            SGE（Search Generative Experience）が導入されたクエリでは、
                            オーガニック検索のCTRが<strong>最大60%低下</strong>するという調査結果があります。
                            1位を取っても、AIの回答欄に埋もれてしまうのです。
                        </p>

                        <h3>2. 「ゼロクリック検索」の加速</h3>
                        <p>
                            2025年時点で、すでに検索の<strong>65%以上が「クリックなし」</strong>で完結しています。
                            ユーザーはAIの回答を読んで満足し、あなたのサイトに来ることすらありません。
                        </p>

                        <h3>3. AIは「信頼できる情報源」しか引用しない</h3>
                        <p>
                            AIは、構造化されていない曖昧な情報を「無視」します。
                            つまり、<strong>AIが理解しやすい形式でデータを提供できないサイト</strong>は、
                            引用候補にすらなれないのです。
                        </p>

                        <h2>
                            <span className="material-symbols-outlined text-cyber-primary">code</span>
                            解決策：構造化マークアップの威力
                        </h2>
                        <p>
                            では、どうすればAIに「選ばれる側」になれるのか？
                        </p>
                        <p>
                            答えは<strong>「構造化マークアップ（Structured Data）」</strong>です。
                        </p>
                        <p>
                            構造化マークアップとは、Webページの情報を機械（AI）が読み取りやすい形式で記述する技術。
                            Schema.orgのボキャブラリーを使い、「これは会社情報です」「これは商品レビューです」
                            「これはFAQです」とAIに明示的に伝えます。
                        </p>

                        <div className="highlight-box">
                            <p className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-cyber-primary">verified</span>
                                構造化マークアップで得られるメリット
                            </p>
                            <ul className="mb-0">
                                <li>Google SGEに<strong>引用される確率が3倍</strong>に向上</li>
                                <li>リッチスニペット表示でCTRが<strong>30%向上</strong></li>
                                <li>AI検索エージェントからの<strong>直接トラフィック獲得</strong></li>
                                <li>ブランドの<strong>信頼性・権威性</strong>が飛躍的に向上</li>
                            </ul>
                        </div>

                        <h2>
                            <span className="material-symbols-outlined text-cyber-primary">rocket_launch</span>
                            FROG Studioの「AI Visibility対策」
                        </h2>
                        <p>
                            ここからは宣伝になりますが、重要なことなのでお伝えさせてください。
                        </p>
                        <p>
                            FROG Studioでは、<strong>すべてのプランで構造化マークアップを標準装備</strong>しています。
                            追加料金なし。なぜなら、2026年においてこれは「オプション」ではなく「必須」だからです。
                        </p>

                        {/* プランカード */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                            <div className="plan-card">
                                <div className="text-cyber-primary font-mono text-sm mb-2">LIGHT</div>
                                <div className="text-white font-bold text-xl mb-3">19,800円</div>
                                <p className="text-gray-400 text-sm mb-4">
                                    1ページ完結のLPでも、基本的な構造化マークアップを実装。
                                    ブランド情報やFAQをAIに正しく伝えます。
                                </p>
                                <div className="flex items-center gap-2 text-cyber-primary text-sm">
                                    <span className="material-symbols-outlined text-base">check_circle</span>
                                    Organization Schema
                                </div>
                            </div>
                            <div className="plan-card border-cyber-primary/50">
                                <div className="text-cyan-400 font-mono text-sm mb-2">STANDARD</div>
                                <div className="text-white font-bold text-xl mb-3">49,800円</div>
                                <p className="text-gray-400 text-sm mb-4">
                                    複数ページサイトに最適化された構造化マークアップ。
                                    パンくずリスト、FAQ、サービス情報を完全網羅。
                                </p>
                                <div className="flex flex-col gap-1 text-cyan-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        BreadcrumbList Schema
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        FAQPage Schema
                                    </div>
                                </div>
                            </div>
                            <div className="plan-card">
                                <div className="text-amber-400 font-mono text-sm mb-2">PREMIUM</div>
                                <div className="text-white font-bold text-xl mb-3">98,000円〜</div>
                                <p className="text-gray-400 text-sm mb-4">
                                    EC・予約システム対応の高度な構造化マークアップ。
                                    商品レビュー、イベント情報まで完全対応。
                                </p>
                                <div className="flex flex-col gap-1 text-amber-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Product / Review Schema
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Event / LocalBusiness
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>
                            <span className="material-symbols-outlined text-cyber-primary">flag</span>
                            まとめ：今すぐ「AI Visibility」対策を
                        </h2>
                        <p>
                            2026年は、「見つけてもらう」から「引用してもらう」へと、
                            SEOのパラダイムが完全にシフトする年です。
                        </p>
                        <p>
                            あなたの競合がまだこの事実に気づいていない今こそ、
                            <strong>先手を打つ最後のチャンス</strong>かもしれません。
                        </p>

                        <div className="highlight-box">
                            <p className="text-white font-bold mb-2">この記事のポイント</p>
                            <ul className="mb-0">
                                <li>従来SEOだけでは2026年は生き残れない</li>
                                <li>AI Visibility（AIへの露出度）が新たな指標</li>
                                <li>構造化マークアップがAI時代最強の武器</li>
                                <li>FROG Studioは全プランで構造化マークアップ標準装備</li>
                            </ul>
                        </div>

                    </article>
                </div>
            </section>

            {/* CTA セクション */}
            <section className="py-16 px-6 bg-gradient-to-r from-cyber-deepEmerald/20 to-cyan-900/20 border-t border-b border-cyber-primary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="material-symbols-outlined text-cyber-primary text-5xl mb-4 block">
                        rocket_launch
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        AI時代に「選ばれる」サイトを作りませんか？
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        FROG Studioでは、構造化マークアップを標準装備した
                        <span className="text-cyber-primary font-bold">「AI Visibility対策済み」</span>の
                        Webサイトを制作しています。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#works"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/5 hover:border-cyber-primary/50 font-bold rounded tracking-wider transition-all"
                        >
                            <span className="material-symbols-outlined">work</span>
                            制作実績を見る
                        </Link>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyber-primary text-black font-bold rounded tracking-wider hover:bg-white transition-colors"
                        >
                            <span className="material-symbols-outlined">mail</span>
                            無料相談を申し込む
                        </Link>
                    </div>
                </div>
            </section>

            {/* ブログ一覧へ戻る */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-primary transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        ブログ一覧へ戻る
                    </Link>
                </div>
            </section>
        </div>
    );
}
