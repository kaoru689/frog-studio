import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogById, getBlogs } from "@/lib/microcms";
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

// ISR設定
export const revalidate = 60;

// プラン情報（Pricing.tsxと同期）
const PLANS = [
    {
        name: "LIGHT",
        catchphrase: "爆速1ページLP",
        price: "19,800",
        features: ["1ページ完結LP", "スマホ対応", "お問い合わせフォーム", "基本SEO対策"],
        color: "cyber-primary",
    },
    {
        name: "STANDARD",
        catchphrase: "信頼を築く王道プラン",
        price: "49,800",
        features: ["3ページ構成", "microCMS連携", "モダンアニメーション"],
        color: "cyan-400",
    },
    {
        name: "PREMIUM",
        catchphrase: "攻めのフルスペックサイト",
        price: "98,000",
        features: ["5ページ以上", "完全カスタムデザイン", "最高峰UI/UX", "高スコア保証"],
        color: "amber-400",
        popular: true,
    },
];

// 動的メタデータ生成
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const blog = await getBlogById(id);

    if (!blog) {
        return {
            title: "記事が見つかりません | FROG Studio",
        };
    }

    return {
        title: `${blog.title} | FROG Studio Blog`,
        description: blog.description || blog.title,
        openGraph: {
            title: blog.title,
            description: blog.description || blog.title,
            images: blog.thumbnail ? [blog.thumbnail.url] : [],
        },
    };
}

// 静的パス生成
export async function generateStaticParams() {
    const blogs = await getBlogs(100);
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

// 日付フォーマット
function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// 目次生成（h2, h3を抽出）
function generateTOC(content: string) {
    const headingRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
    const toc: { level: number; text: string; id: string }[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1]);
        const text = match[2].replace(/<[^>]*>/g, "");
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
        toc.push({ level, text, id });
    }

    return toc;
}

// コンテンツ変換（見出しID付与 + 自動スタイリング）
function transformContent(content: string): string {
    let transformed = content;

    // 見出しにIDを付与（h2, h3）
    transformed = transformed.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (match, level, attrs, text) => {
        const cleanText = text.replace(/<[^>]*>/g, "");
        const id = cleanText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });

    // ========================================
    // 警告ボックス（Warning Box）
    // キーワード: 【警告】[警告] 【注意】[注意] 【重要】[重要] WARNING CAUTION
    // ========================================
    const warningKeywords = /([【\[]?(警告|注意|重要|WARNING|CAUTION|⚠️)[】\]]:?:?\s*)/i;
    transformed = transformed.replace(
        new RegExp(`<p>${warningKeywords.source}([\\s\\S]*?)</p>`, 'gi'),
        `<div class="warning-box">
            <div class="warning-icon"><span class="material-symbols-outlined">warning</span></div>
            <div class="warning-body">
                <p class="warning-title">$2</p>
                <p class="warning-content">$3</p>
            </div>
        </div>`
    );

    // ========================================
    // ハイライトボックス（Highlight Box）
    // キーワード: 【ポイント】【ヒント】【メモ】【注目】【注目のポイント】 TIP POINT NOTE
    // ========================================
    const highlightKeywords = /([【\[]?(ポイント|ヒント|メモ|注目|注目のポイント|コツ|TIP|POINT|NOTE|💡)[】\]]:?:?\s*)/i;
    transformed = transformed.replace(
        new RegExp(`<p>${highlightKeywords.source}([\\s\\S]*?)</p>`, 'gi'),
        `<div class="highlight-box">
            <div class="highlight-icon"><span class="material-symbols-outlined">lightbulb</span></div>
            <div class="highlight-body">
                <p class="highlight-title">$2</p>
                <p class="highlight-content">$3</p>
            </div>
        </div>`
    );

    // ========================================
    // 成功事例ボックス（Success Box）
    // キーワード: 【成功事例】【実績】【事例】 SUCCESS CASE
    // ========================================
    const successKeywords = /([【\[]?(成功事例|実績|事例|成果|SUCCESS|CASE|🏆)[】\]]:?:?\s*)/i;
    transformed = transformed.replace(
        new RegExp(`<p>${successKeywords.source}([\\s\\S]*?)</p>`, 'gi'),
        `<div class="success-box">
            <div class="success-icon"><span class="material-symbols-outlined">emoji_events</span></div>
            <div class="success-body">
                <p class="success-title">$2</p>
                <p class="success-content">$3</p>
            </div>
        </div>`
    );

    // ========================================
    // 情報ボックス（Info Box）
    // キーワード: 【情報】【参考】【補足】 INFO REFERENCE
    // ========================================
    const infoKeywords = /([【\[]?(情報|参考|補足|解説|INFO|REFERENCE|ℹ️)[】\]]:?:?\s*)/i;
    transformed = transformed.replace(
        new RegExp(`<p>${infoKeywords.source}([\\s\\S]*?)</p>`, 'gi'),
        `<div class="info-box">
            <div class="info-icon"><span class="material-symbols-outlined">info</span></div>
            <div class="info-body">
                <p class="info-title">$2</p>
                <p class="info-content">$3</p>
            </div>
        </div>`
    );

    // ========================================
    // チェックリスト変換
    // ✓ ✅ ☑️ で始まるリストアイテム
    // ========================================
    transformed = transformed.replace(
        /<li>([✓✅☑️]\s*)(.*?)<\/li>/gi,
        `<li class="check-item"><span class="material-symbols-outlined check-icon">check_circle</span>$2</li>`
    );

    // ========================================
    // 引用強調（blockquote内の強調）
    // ========================================
    transformed = transformed.replace(
        /<blockquote>([\s\S]*?)<\/blockquote>/gi,
        `<blockquote class="cyber-quote">$1</blockquote>`
    );

    // ========================================
    // テキスト置換（ユーザー指定）
    // ========================================
    // 特定のフレーズ完全一致置換（最優先）
    transformed = transformed.replace(/こんにちは、FROG Studioのチーフコンサルタントです。/g, "こんにちは、FROG Studioです。");

    // その他の表記ゆれ対応
    // "FROG Studioのチーフコンサルタント" または "チーフコンサルタント" -> "FROG Studio"
    transformed = transformed.replace(/(FROG\s*Studio\s*の\s*)?チーフコンサルタント/gi, "FROG Studio");


    return transformed;
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = await getBlogById(id);

    if (!blog) {
        notFound();
    }

    const toc = generateTOC(blog.content);
    const contentWithEnhancements = transformContent(blog.content);

    // AI Visibility記事の画像上書きロジック
    const normalizeTitle = (blog.title || "").normalize("NFKC");
    const isAiVisibility =
        blog.id?.includes("ai-visibility") ||
        normalizeTitle.includes("AI Visibility") ||
        (normalizeTitle.includes("AI") && normalizeTitle.includes("Visibility"));

    const displayThumbnail = isAiVisibility ? {
        url: "/images/cyber_ai_visibility_thumb.png",
        width: 1200,
        height: 630,
    } : blog.thumbnail;

    return (
        <div
            className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body bg-[#020617] text-white selection:bg-cyber-primary selection:text-black min-h-screen`}
        >
            {/* Material Symbols */}
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* 拡張スタイル */}
            <style>{`
                .blog-content {
                    font-size: 1.05rem;
                    line-height: 2;
                    color: #d1d5db;
                }
                .blog-content h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 2px solid rgba(13, 242, 89, 0.4);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .blog-content h2::before {
                    content: "▎";
                    color: #0df259;
                }
                .blog-content h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #fff;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content strong {
                    color: #0df259;
                    font-weight: 700;
                }
                .blog-content ul, .blog-content ol {
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                    position: relative;
                }
                .blog-content a {
                    color: #0df259;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .blog-content a:hover {
                    color: #fff;
                }
                .blog-content pre {
                    background: #0a0a0a;
                    border: 1px solid rgba(13, 242, 89, 0.2);
                    border-radius: 0.75rem;
                    padding: 1.25rem;
                    overflow-x: auto;
                    margin-bottom: 1.5rem;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.875rem;
                }
                .blog-content code {
                    background: rgba(13, 242, 89, 0.1);
                    color: #0df259;
                    padding: 0.125rem 0.5rem;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    font-family: 'JetBrains Mono', monospace;
                }
                .blog-content pre code {
                    background: none;
                    color: #d1d5db;
                    padding: 0;
                }
                .blog-content blockquote {
                    border-left: 3px solid #0df259;
                    padding-left: 1.25rem;
                    margin: 2rem 0;
                    color: #9ca3af;
                    font-style: italic;
                    background: rgba(13, 242, 89, 0.05);
                    padding: 1.25rem;
                    border-radius: 0 0.5rem 0.5rem 0;
                }
                .blog-content img {
                    border-radius: 0.75rem;
                    margin: 2rem 0;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                /* 警告ボックス */
                .warning-box {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(245,158,11,0.1) 100%);
                    border: 1px solid rgba(239,68,68,0.3);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .warning-icon {
                    flex-shrink: 0;
                }
                .warning-icon .material-symbols-outlined {
                    color: #f87171;
                    font-size: 1.75rem;
                }
                .warning-title {
                    color: #fca5a5;
                    font-weight: 700;
                    margin-bottom: 0.25rem !important;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .warning-content {
                    color: #fef2f2;
                    margin-bottom: 0 !important;
                }
                
                /* ハイライトボックス */
                .highlight-box {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: linear-gradient(135deg, rgba(13,242,89,0.1) 0%, rgba(6,182,212,0.1) 100%);
                    border: 1px solid rgba(13,242,89,0.3);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .highlight-icon {
                    flex-shrink: 0;
                }
                .highlight-icon .material-symbols-outlined {
                    color: #0df259;
                    font-size: 1.75rem;
                }
                .highlight-title {
                    color: #0df259;
                    font-weight: 700;
                    margin-bottom: 0.25rem !important;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .highlight-content {
                    color: #ecfdf5;
                    margin-bottom: 0 !important;
                }
                
                /* チェックアイテム */
                .check-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    list-style: none !important;
                    margin-left: -1.5rem !important;
                }
                .check-icon {
                    color: #0df259;
                    font-size: 1.25rem;
                    flex-shrink: 0;
                    margin-top: 0.125rem;
                }
                
                /* 成功事例ボックス（ゴールド） */
                .success-box {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.1) 100%);
                    border: 1px solid rgba(251,191,36,0.4);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .success-icon {
                    flex-shrink: 0;
                }
                .success-icon .material-symbols-outlined {
                    color: #fbbf24;
                    font-size: 1.75rem;
                }
                .success-title {
                    color: #fcd34d;
                    font-weight: 700;
                    margin-bottom: 0.25rem !important;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .success-content {
                    color: #fef3c7;
                    margin-bottom: 0 !important;
                }
                
                /* 情報ボックス（シアン） */
                .info-box {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.1) 100%);
                    border: 1px solid rgba(6,182,212,0.4);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin: 2rem 0;
                }
                .info-icon {
                    flex-shrink: 0;
                }
                .info-icon .material-symbols-outlined {
                    color: #06b6d4;
                    font-size: 1.75rem;
                }
                .info-title {
                    color: #67e8f9;
                    font-weight: 700;
                    margin-bottom: 0.25rem !important;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .info-content {
                    color: #ecfeff;
                    margin-bottom: 0 !important;
                }
                
                /* サイバー引用（強調blockquote） */
                .cyber-quote {
                    position: relative;
                    border-left: 4px solid #0df259;
                    background: linear-gradient(135deg, rgba(13,242,89,0.08) 0%, rgba(6,182,212,0.05) 100%);
                    padding: 1.5rem 1.5rem 1.5rem 2rem;
                    border-radius: 0 0.75rem 0.75rem 0;
                    margin: 2rem 0;
                    font-style: italic;
                    color: #d1d5db;
                }
                .cyber-quote::before {
                    content: '"';
                    position: absolute;
                    top: 0.5rem;
                    left: 0.75rem;
                    font-size: 2.5rem;
                    color: rgba(13,242,89,0.3);
                    font-family: serif;
                    line-height: 1;
                }
            `}</style>

            {/* ヒーロー */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,242,89,0.1),transparent_50%)] pointer-events-none"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* パン屑 */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-cyber-primary transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-cyber-primary transition-colors">
                            Blog
                        </Link>
                        <span>/</span>
                        <span className="text-gray-400 truncate max-w-[200px]">{blog.title}</span>
                    </nav>

                    {/* カテゴリ */}
                    {blog.category && blog.category.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.category.map((cat) => (
                                <span
                                    key={cat}
                                    className="text-xs font-mono px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded border border-cyber-primary/30"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* タイトル */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    {/* メタ情報 */}
                    <div className="flex items-center gap-6 text-gray-500 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">schedule</span>
                            {formatDate(blog.publishedAt)}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">timer</span>
                            約{Math.max(3, Math.ceil(blog.content.length / 600))}分で読めます
                        </div>
                    </div>
                </div>
            </section>

            {/* サムネイル */}
            {displayThumbnail && (
                <section className="px-6 pb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(13,242,89,0.1)]">
                            <Image
                                src={displayThumbnail.url}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* 本文 + サイドバー */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* 目次（デスクトップ） */}
                        {toc.length > 0 && (
                            <aside className="hidden lg:block lg:col-span-1">
                                <div className="sticky top-24 p-6 bg-cyber-surfaceLight/20 border border-white/5 rounded-lg">
                                    <h3 className="text-sm font-bold text-cyber-primary mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">list</span>
                                        目次
                                    </h3>
                                    <nav className="space-y-2">
                                        {toc.map((item, index) => (
                                            <a
                                                key={index}
                                                href={`#${item.id}`}
                                                className={`block text-sm text-gray-400 hover:text-cyber-primary transition-colors ${item.level === 3 ? "pl-4" : ""
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>
                        )}

                        {/* 本文 */}
                        <article className={`${toc.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}`}>

                            <div
                                className="blog-content prose prose-invert prose-green max-w-none"
                                dangerouslySetInnerHTML={{ __html: contentWithEnhancements }}
                            />
                        </article>
                    </div>
                </div>
            </section>

            {/* プラン紹介セクション */}
            <section className="py-16 px-6 bg-gradient-to-b from-slate-900/50 to-transparent border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">
                            PRICING_PLAN.SYS
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            高品質なWebサイトを制作しませんか？
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            FROG Studioでは、すべてのプランで<span className="text-cyber-primary font-bold">構造化マークアップを標準装備</span>。
                            AI時代の検索対策も万全です。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PLANS.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative bg-slate-900/80 border rounded-xl p-6 transition-all duration-300 hover:border-${plan.color}/50 hover:shadow-[0_0_30px_rgba(13,242,89,0.1)] ${plan.popular
                                    ? "border-amber-400/50 ring-2 ring-amber-400/20"
                                    : "border-white/10"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold rounded-full">
                                        ★ おすすめ
                                    </div>
                                )}

                                <div className="text-center mb-4">
                                    <span className={`text-${plan.color} font-mono text-sm font-bold`}>
                                        {plan.name}
                                    </span>
                                    <div className="text-white font-bold mt-1">{plan.catchphrase}</div>
                                </div>

                                <div className="text-center mb-4">
                                    <span className="text-3xl font-black text-white">¥{plan.price}</span>
                                    <span className="text-gray-500 text-sm">〜</span>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className={`material-symbols-outlined text-base text-${plan.color}`}>
                                                check_circle
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/#contact"
                                    className={`block w-full py-3 text-center font-bold rounded transition-all ${plan.popular
                                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:shadow-lg"
                                        : "bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary hover:text-black"
                                        }`}
                                >
                                    このプランで相談
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA セクション */}
            <section className="py-16 px-6 bg-gradient-to-r from-cyber-deepEmerald/20 to-cyan-900/20 border-t border-b border-cyber-primary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="material-symbols-outlined text-cyber-primary text-5xl mb-4 block">
                        rocket_launch
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        まずは無料相談から
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        「こんなサイトは作れる？」「予算感は？」など、
                        どんな些細なことでもお気軽にご相談ください。
                        <span className="text-cyber-primary font-bold">チャット・メールで完結</span>するので、
                        打ち合わせの時間も不要です。
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
