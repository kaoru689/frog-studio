import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogById, getBlogs } from "@/lib/microcms";
import { Space_Grotesk, Noto_Sans_JP } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-noto-sans-jp", display: "swap" });

export const revalidate = 60;

const PLANS = [
    { name: "LIGHT", catchphrase: "爆速1ページLP", price: "19,800", features: ["1ページ完結LP", "スマホ対応", "お問い合わせフォーム", "基本SEO対策"], color: "cyber-primary" },
    { name: "STANDARD", catchphrase: "信頼を築く王道プラン", price: "49,800", features: ["3ページ構成", "microCMS連携", "モダンアニメーション"], color: "cyan-400" },
    { name: "PREMIUM", catchphrase: "攻めのフルスペックサイト", price: "98,000", features: ["5ページ以上", "完全カスタムデザイン", "最高峰UI/UX", "高スコア保証"], color: "amber-400", popular: true },
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const blog = await getBlogById(id);
    if (!blog) return { title: "記事が見つかりません | FROG Studio" };
    return { title: `${blog.title} | FROG Studio Blog`, description: blog.description || blog.title, openGraph: { title: blog.title, description: blog.description || blog.title, images: blog.thumbnail ? [blog.thumbnail.url] : [] } };
}

export async function generateStaticParams() {
    const blogs = await getBlogs(100);
    return blogs.map((blog) => ({ id: blog.id }));
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}

// ==========================================
// SYSTEM CORE: Unified Content Engine
// 見出しのID付与・目次抽出・アイコン置換を一度に処理
// ==========================================
function processBlogContent(rawContent: string) {
    let content = rawContent;
    const toc: { level: number; html: string; id: string }[] = [];

    // 1. 見出し処理（ID付与 ＆ TOC生成）
    content = content.replace(/<h([23])(.*?)>([\s\S]*?)<\/h[23]>/gi, (match, level, attrs, text) => {
        // IDを生成（日本語対応）
        const id = text.replace(/<[^>]*>/g, "").trim().replace(/\s+/g, "-").replace(/["']/g, "") || `section-${Math.random().toString(36).substr(2, 5)}`;

        // 目次配列に登録
        toc.push({ level: parseInt(level), html: text.replace(/<[^>]*>/g, ""), id: id });

        // HTMLを書き換え（IDを強制注入）
        return `<h${level} id="${id}"${attrs}>${text}</h${level}>`;
    });

    // 2. アイコン置換（flag含む完全版）
    const iconMap: { [key: string]: string } = {
        "trending_down": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#3b82f6]"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>',
        "lightbulb": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#eab308]"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>',
        "psychology": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#4ade80]"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path></svg>',
        "rocket_launch": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#f97316]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>',
        "flag": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#4ade80]"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>',
        "warning": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide inline-block mr-2 text-[#ef4444]"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
    };
    const pattern = new RegExp(`(?<![</="\\'-])(${Object.keys(iconMap).join('|')})`, 'gi');
    content = content.replace(pattern, (match) => iconMap[match.toLowerCase()] || match);

    // 3. その他置換
    content = content.replace(/こんにちは、FROG Studioのチーフコンサルタントです。/g, "こんにちは、FROG Studioです。")
        .replace(/(FROG\s*Studio\s*の\s*)?チーフコンサルタント/gi, "FROG Studio");

    return { content, toc };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = await getBlogById(id);
    if (!blog) notFound();

    const { content: processedContent, toc } = processBlogContent(blog.content);

    return (
        <div className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body bg-[#020617] text-white min-h-screen`}>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <style>{`
                .blog-content { font-size: 1.05rem; line-height: 2; color: #d1d5db; }
                /* =========================================
                   GLOBAL HEADERS (Balanced)
                   ========================================= */
                /* 全記事共通: 程よいサイズ感 (text-3xl相当) */
                article .blog-content h2 { 
                    font-size: 1.875rem !important; /* text-3xl */
                    line-height: 1.4 !important;
                    font-weight: 800 !important; 
                    color: #fff !important; 
                    margin-top: 4rem !important; 
                    margin-bottom: 2rem !important; 
                    border-bottom: 2px solid rgba(255, 255, 255, 0.1) !important; 
                    display: flex !important; 
                    align-items: center !important; 
                    gap: 0.75rem !important; 
                    text-transform: none !important;
                    letter-spacing: normal !important;
                }
                article .blog-content h2::before { 
                    content: "●"; 
                    color: #0df259; 
                    font-size: 0.6em; 
                    margin-right: 0.25rem; 
                }

                /* =========================================
                   SPECIFIC OVERRIDE: Explosive Speed (hc9vbcn3ue)
                   爆速記事のみ特別に巨大化
                   ========================================= */
                body article[data-post-id="hc9vbcn3ue"] .blog-content h2 { 
                    font-size: 3.5rem !important; 
                    font-weight: 900 !important; 
                    text-transform: uppercase !important; 
                    color: #4ade80 !important; 
                    border-bottom: 5px solid rgba(13, 242, 89, 0.7) !important; 
                    margin-top: 5rem !important;
                    margin-bottom: 2.5rem !important;
                    letter-spacing: -0.02em !important;
                }
                body article[data-post-id="hc9vbcn3ue"] .blog-content h2::before {
                    content: "▎"; 
                    color: #0df259;
                    font-size: 0.8em;
                }
                article .blog-content h3 { font-size: 1.6rem !important; font-weight: 700 !important; color: #e5e7eb !important; margin-top: 3rem !important; margin-bottom: 1.5rem !important; border-left: 5px solid #0df259; padding-left: 1rem !important; display: flex !important; align-items: center !important; }
                .blog-content strong { color: #0df259; font-weight: 700; }
            `}</style>

            <section className="relative pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-cyber-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-cyber-primary">Blog</Link><span>/</span><span className="text-gray-400 truncate max-w-[200px]">{blog.title}</span>
                    </nav>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">{blog.title}</h1>
                    <div className="flex items-center gap-6 text-gray-500 text-sm font-mono">
                        <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">schedule</span>{formatDate(blog.publishedAt)}</div>
                        <div className="flex items-center gap-2"><span className="material-symbols-outlined text-base">timer</span>約{Math.max(3, Math.ceil(blog.content.length / 600))}分で読めます</div>
                    </div>
                </div>
            </section>

            {blog.thumbnail && (
                <section className="px-6 pb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(13,242,89,0.1)]">
                            <Image src={blog.thumbnail.url} alt={blog.title} fill className="object-cover" priority />
                        </div>
                    </div>
                </section>
            )}

            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {toc.length > 0 && (
                            <aside className="lg:col-span-1 block">
                                <div className="sticky top-32 p-6 bg-slate-900/50 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <h3 className="text-sm font-black text-cyber-primary mb-4 uppercase tracking-wider">Table of Contents</h3>
                                    <nav className="space-y-3">
                                        {toc.map((item, index) => (
                                            <a key={index} href={`#${item.id}`} className={`block text-sm text-gray-400 hover:text-cyber-primary hover:bg-white/5 p-1 rounded transition-all leading-6 ${item.level === 3 ? "pl-4 text-xs" : "font-bold"}`}>{item.html}</a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>
                        )}
                        <article data-post-id={id} className={`${toc.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}`}>
                            <div className="blog-content prose prose-invert prose-green max-w-none" dangerouslySetInnerHTML={{ __html: processedContent }} />
                        </article>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-gradient-to-b from-slate-900/50 to-transparent border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-2 block">PRICING_PLAN.SYS</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">高品質なWebサイトを制作しませんか？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PLANS.map((plan) => (
                            <div key={plan.name} className={`relative bg-slate-900/80 border rounded-xl p-6 transition-all ${plan.popular ? "border-amber-400/50 ring-2 ring-amber-400/20" : "border-white/10"}`}>
                                <div className={`text-${plan.color} font-mono text-sm font-bold mb-1`}>{plan.name}</div>
                                <div className="text-white font-bold mb-4">{plan.catchphrase}</div>
                                <div className="text-3xl font-black text-white mb-4">¥{plan.price}<span className="text-gray-500 text-sm">〜</span></div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {plan.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-gray-400"><span className={`material-symbols-outlined text-base text-${plan.color}`}>check_circle</span>{f}</li>))}
                                </ul>
                                <Link href="/#contact" className={`block w-full py-3 text-center font-bold rounded ${plan.popular ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black" : "bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30"}`}>このプランで相談</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 text-center"><Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-primary"><span className="material-symbols-outlined">arrow_back</span>ブログ一覧へ戻る</Link></section>
        </div>
    );
}