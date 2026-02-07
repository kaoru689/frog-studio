import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHub from "@/components/sections/ContactHub";
import { Analytics } from "@vercel/analytics/react";

// next/font で最適化読み込み（レンダリングブロック解消）
const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
    display: "swap",
    weight: ["400", "500", "700", "900"],
    preload: true,
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "FROG Studio | 爆速・堅牢・次世代のAI駆動型ウェブ制作",
    description: "Next.js + microCMSによる爆速Web制作。PageSpeed90点保証、WordPress比5〜10倍高速、ハッキングリスクゼロ。LIGHT(¥19,800)・STANDARD(¥49,800)・PREMIUM(¥98,000)の3プラン。最短5日納品。AIエンジニアリングと行動経済学を融合した成約率重視のLP・HP制作サービス。",
    keywords: [
        "FROG Studio",
        "Web制作",
        "Next.js",
        "AI制作",
        "爆速サイト",
        "セキュリティ",
        "ヘッドレスCMS",
        "microCMS",
        "ランディングページ",
        "LP制作",
        "PageSpeed最適化",
        "SEO対策",
        "Vercel",
        "React"
    ],
    authors: [{ name: "FROG Studio", url: "https://frog-studio.com" }],
    creator: "FROG Studio",
    publisher: "FROG Studio",
    category: "Web制作サービス",
    classification: "Webサイト制作・ランディングページ制作",
    formatDetection: {
        telephone: true,
        email: true,
    },
    alternates: {
        canonical: "https://frog-studio.com",
    },
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://frog-studio.com",
        title: "FROG Studio | 爆速・堅牢・次世代のAI駆動型ウェブ制作",
        description: "PageSpeed90点保証。WordPress比5〜10倍高速。LIGHT(¥19,800)〜PREMIUM(¥98,000)。最短5日納品のAI駆動型Web制作。",
        siteName: "FROG Studio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "FROG Studio - 爆速・堅牢・次世代のAI駆動型ウェブ制作",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FROG Studio | 爆速・堅牢・次世代のAI駆動型ウェブ制作",
        description: "PageSpeed90点保証。WordPress比5〜10倍高速。LIGHT(¥19,800)〜PREMIUM(¥98,000)。最短5日納品。",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
    // AI Agent 最適化用の追加メタデータ
    other: {
        "ai-content-type": "professional-service",
        "ai-service-category": "Web制作,ランディングページ,ヘッドレスCMS",
        "ai-price-range": "¥19,800〜¥98,000",
        "ai-delivery-time": "最短5日",
        "ai-technology-stack": "Next.js,React,microCMS,Vercel,Tailwind CSS",
        "ai-unique-selling-point": "PageSpeed90点保証,WordPress不使用,ハッキングリスクゼロ,AIライティング標準装備",
    },
};

// JSON-LD 構造化データ（AI Visibility & AAO最適化）
// ProfessionalService + Organization + FAQPage の複合スキーマ
const jsonLdArray = [
    // メイン: ProfessionalService
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://frog-studio.com/#business",
        name: "FROG Studio",
        alternateName: "フロッグスタジオ",
        description: "Next.js + microCMSによる爆速・高セキュリティなWebサイト制作サービス。WordPressをあえて使わない次世代構成で、表示速度とSEOを最大化。AIエンジニアリングと行動経済学を融合した成約率重視の制作。",
        url: "https://frog-studio.com",
        logo: "https://frog-studio.com/favicon.svg",
        image: "https://frog-studio.com/og-image.png",
        telephone: "+81-XXX-XXXX-XXXX",
        priceRange: "¥19,800〜¥98,000",
        currenciesAccepted: "JPY",
        paymentAccepted: "銀行振込, クレジットカード",
        areaServed: {
            "@type": "Country",
            name: "Japan",
            alternateName: "日本"
        },
        serviceType: [
            "Webサイト制作",
            "ランディングページ制作",
            "ヘッドレスCMS構築",
            "Next.js開発",
            "AI駆動型Web制作"
        ],
        knowsAbout: [
            "Next.js",
            "React",
            "microCMS",
            "Vercel",
            "Tailwind CSS",
            "SEO最適化",
            "Core Web Vitals",
            "PageSpeed最適化",
            "ヘッドレスCMS",
            "AIライティング"
        ],
        slogan: "CVRが跳ねる、次世代の爆速LP制作",
        foundingDate: "2024",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "12",
            bestRating: "5",
            worstRating: "1"
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "FROG Studio 料金プラン",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "LIGHT プラン",
                    description: "1ページ完結の爆速LP。初めてのWeb制作に最適。",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "LIGHT - シンプルLP",
                                description: "1ページ構成のLP、完全レスポンシブ対応、お問い合わせフォーム、基本SEO設定、PageSpeed90点保証"
                            },
                            price: "19800",
                            priceCurrency: "JPY",
                            priceValidUntil: "2026-12-31",
                            availability: "https://schema.org/InStock",
                            validFrom: "2024-01-01"
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    name: "STANDARD プラン",
                    description: "microCMS搭載の標準サイト。自分で更新したい方に。",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "STANDARD - 高機能LP (CMS付)",
                                description: "LIGHTプランの全機能 + microCMS連携、お知らせ更新機能、アニメーション実装、AIライティングアシスタント標準装備"
                            },
                            price: "49800",
                            priceCurrency: "JPY",
                            priceValidUntil: "2026-12-31",
                            availability: "https://schema.org/InStock",
                            validFrom: "2024-01-01"
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    name: "PREMIUM プラン",
                    description: "高機能なフルスペックサイト。本格的なビジネスサイトに。",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "PREMIUM - 本格HP (5ページ〜)",
                                description: "STANDARDプランの全機能 + 5ページ以上の構成、制作実績ページ、ブログ機能、構造化マークアップ完全対応"
                            },
                            price: "98000",
                            priceCurrency: "JPY",
                            priceValidUntil: "2026-12-31",
                            availability: "https://schema.org/InStock",
                            validFrom: "2024-01-01"
                        }
                    ]
                }
            ]
        },
        makesOffer: [
            {
                "@type": "Offer",
                name: "LIGHT プラン",
                description: "1ページ構成のLP、完全レスポンシブ、お問い合わせフォーム、基本SEO、PageSpeed90点保証",
                price: "19800",
                priceCurrency: "JPY"
            },
            {
                "@type": "Offer",
                name: "STANDARD プラン",
                description: "LIGHT + microCMS連携、お知らせ更新、アニメーション、AIライティング",
                price: "49800",
                priceCurrency: "JPY"
            },
            {
                "@type": "Offer",
                name: "PREMIUM プラン",
                description: "STANDARD + 5ページ以上、制作実績ページ、ブログ機能、構造化マークアップ完全対応",
                price: "98000",
                priceCurrency: "JPY"
            }
        ]
    },
    // FAQPage スキーマ（AI検索での表示向上）
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "WordPressを使わないメリットは何ですか？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Next.jsを使用することで、WordPressと比較して表示速度が5〜10倍高速になります。また、データベース不要でハッキングリスクがほぼゼロ、サーバー費用も月額0円から運用可能です。"
                }
            },
            {
                "@type": "Question",
                name: "制作期間はどのくらいですか？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "LIGHTプランは最短5営業日、STANDARDプランは7〜10営業日、PREMIUMプランは2〜3週間が目安です。AIツールを活用した効率的な制作フローにより、高品質を維持しながら短納期を実現しています。"
                }
            },
            {
                "@type": "Question",
                name: "PageSpeed90点保証とは何ですか？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Google PageSpeed Insightsでモバイル・デスクトップ両方で90点以上を保証します。表示速度はSEOランキングとユーザー体験に直結するため、全プランで保証しています。"
                }
            },
            {
                "@type": "Question",
                name: "自分でサイトを更新できますか？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "STANDARD以上のプランではmicroCMSという管理画面を導入します。スマホからSNSを投稿する感覚で、お知らせや実績を簡単に更新できます。専門知識は一切不要です。"
                }
            }
        ]
    },
    // Organization スキーマ
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://frog-studio.com/#organization",
        name: "FROG Studio",
        url: "https://frog-studio.com",
        logo: "https://frog-studio.com/favicon.svg",
        sameAs: []
    }
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${notoSansJP.variable} ${spaceGrotesk.variable}`}>
            <head>
                {/* Preconnect to Google Fonts for Material Symbols */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Material Symbols - loaded async to prevent render blocking */}
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap"
                    as="style"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap"
                    rel="stylesheet"
                    media="print"
                    // @ts-expect-error - onLoad string for async font loading
                    onLoad="this.media='all'"
                />
                <noscript>
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap" rel="stylesheet" />
                </noscript>
                {/* JSON-LD 構造化データ（複数スキーマ対応） */}
                {jsonLdArray.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </head>
            <body className="font-sans antialiased bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100">
                <Header />
                <main>{children}</main>
                <ContactHub />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
