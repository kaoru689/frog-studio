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
    description: "WordPressを超えた表示速度と鉄壁のセキュリティ。AIとエンジニアリングの融合により、お客様のビジネスを加速させる完全オリジナルのWebサイトを最短5日で構築します。",
    keywords: ["FROG Studio", "Web制作", "Next.js", "AI制作", "爆速サイト", "セキュリティ", "ヘッドレスCMS"],
    authors: [{ name: "FROG Studio" }],
    creator: "FROG Studio",
    publisher: "FROG Studio",
    formatDetection: {
        telephone: true,
        email: true,
    },
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://frog-studio.com",
        title: "FROG Studio | 爆速・堅牢・次世代のAI駆動型ウェブ制作",
        description: "WordPressを超えた表示速度と鉄壁のセキュリティ。Webサイトを最短5日で構築します。",
        siteName: "FROG Studio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "FROG Studio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FROG Studio | 爆速・堅牢・次世代のAI駆動型ウェブ制作",
        description: "WordPressを超えた表示速度と鉄壁のセキュリティ。Webサイトを最短5日で構築します。",
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
};

// JSON-LD 構造化データ
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "FROG Studio",
    description:
        "Next.js + microCMSによる爆速・高セキュリティなWebサイト制作サービス。WordPressをあえて使わない次世代構成で、表示速度とSEOを最大化します。",
    provider: {
        "@type": "Organization",
        name: "FROG Studio",
        url: "https://frog-studio.com",
    },
    areaServed: "JP",
    serviceType: "Webサイト制作",
    offers: {
        "@type": "AggregateOffer",
        priceCurrency: "JPY",
        lowPrice: "10000",
        highPrice: "50000",
        offerCount: "3",
        offers: [
            {
                "@type": "Offer",
                name: "LIGHT - シンプルLP",
                description: "1ページ構成のLP、レスポンシブ対応、お問い合わせフォーム、基本SEO設定",
                price: "10000",
                priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                name: "STANDARD - 高機能LP (CMS付)",
                description: "LIGHTプランの全機能 + microCMS連携、お知らせ更新機能、アニメーション実装",
                price: "25000",
                priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                name: "PREMIUM - 本格HP (5ページ〜)",
                description: "STANDARDプランの全機能 + 5ページ以上の構成、制作実績ページ、ブログ機能",
                price: "50000",
                priceCurrency: "JPY",
            },
        ],
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "モニター限定価格",
        description: "実績作りのための特別価格で提供中",
    },
};

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
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
