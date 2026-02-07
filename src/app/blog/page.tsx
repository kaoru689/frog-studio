"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

// ブログ記事の型定義
interface Blog {
    id: string;
    title: string;
    description?: string;
    category?: string[];
    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };
    publishedAt: string;
}

export default function BlogListPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            // 静的記事データ（常に先頭に表示）
            const staticBlog: Blog = {
                id: "ai-visibility-2026",
                title: "2026年、従来のSEOだけでは生き残れない ——「AI Visibility」という新常識",
                description: "Google SGE、ChatGPT...AIが検索の主役になる時代、あなたのサイトは「引用される側」ですか？",
                category: ["SEO戦略", "2026年最新"],
                publishedAt: "2026-02-05T00:00:00.000Z",
            };

            try {
                const res = await fetch("/api/blogs");
                if (res.ok) {
                    const data = await res.json();
                    // 静的記事を先頭にマージ
                    setBlogs([staticBlog, ...data]);
                } else {
                    // API失敗時も静的記事は表示
                    setBlogs([staticBlog]);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
                // エラー時も静的記事は表示
                setBlogs([staticBlog]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    // 日付フォーマット
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div
            className={`${spaceGrotesk.variable} ${notoSansJP.variable} font-body bg-[#020617] text-white selection:bg-cyber-primary selection:text-black min-h-screen`}
        >
            {/* Material Symbols */}
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            {/* ヒーローセクション */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                {/* 背景エフェクト */}
                <div className="absolute inset-0 bg-cyber-lines opacity-10 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_closest-side,rgba(13,242,89,0.1),transparent)] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                            BLOG.SYS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
                            技術ブログ
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl border-l-2 border-cyber-primary/30 pl-4">
                            Web制作の最新技術、SEO戦略、パフォーマンス最適化について発信しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 記事一覧 */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="bg-cyber-surfaceLight/30 border border-white/5 rounded-lg overflow-hidden animate-pulse"
                                >
                                    <div className="aspect-video bg-gray-800"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                                        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : blogs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <span className="material-symbols-outlined text-cyber-primary text-6xl mb-6 block opacity-50">
                                article
                            </span>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                記事がありません
                            </h2>
                            <p className="text-gray-400 mb-8">
                                microCMSで「blogs」エンドポイントを作成し、記事を投稿してください。
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-primary text-black font-bold rounded hover:bg-white transition-colors"
                            >
                                <span className="material-symbols-outlined">home</span>
                                トップページへ戻る
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/blog/${blog.id}`}
                                        className="group block bg-cyber-surfaceLight/30 border border-white/5 rounded-lg overflow-hidden hover:border-cyber-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(13,242,89,0.1)]"
                                    >
                                        {/* サムネイル */}
                                        <div className="relative aspect-video overflow-hidden bg-gray-900">
                                            {blog.thumbnail ? (
                                                <Image
                                                    src={blog.thumbnail.url}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-primary/20 to-cyan-500/20">
                                                    <span className="material-symbols-outlined text-cyber-primary text-4xl opacity-50">
                                                        article
                                                    </span>
                                                </div>
                                            )}
                                            {/* ホバーオーバーレイ */}
                                            <div className="absolute inset-0 bg-cyber-primary/0 group-hover:bg-cyber-primary/10 transition-colors duration-300"></div>
                                        </div>

                                        {/* コンテンツ */}
                                        <div className="p-6">
                                            {/* カテゴリ */}
                                            {blog.category && blog.category.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {blog.category.map((cat) => (
                                                        <span
                                                            key={cat}
                                                            className="text-[10px] font-mono px-2 py-1 bg-cyber-primary/10 text-cyber-primary rounded border border-cyber-primary/30"
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* タイトル */}
                                            <h2 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors line-clamp-2">
                                                {blog.title}
                                            </h2>

                                            {/* 説明 */}
                                            {blog.description && (
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {blog.description}
                                                </p>
                                            )}

                                            {/* 日付 */}
                                            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                                                <span className="material-symbols-outlined text-sm">
                                                    schedule
                                                </span>
                                                {formatDate(blog.publishedAt)}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA セクション */}
            <section className="py-16 px-6 bg-cyber-surfaceDark border-t border-cyber-primary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        このような高品質なサイトを制作しませんか？
                    </h2>
                    <p className="text-gray-400 mb-8">
                        FROG Studioでは、最新技術を駆使した爆速・高品質なWebサイトを制作しています。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#works"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/5 hover:border-cyber-primary/50 font-bold rounded tracking-wider transition-all"
                        >
                            制作実績を見る
                        </Link>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyber-primary text-black font-bold rounded tracking-wider hover:bg-white transition-colors"
                        >
                            <span className="material-symbols-outlined">rocket_launch</span>
                            無料相談を申し込む
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
