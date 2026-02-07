"use client";

import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
    サービス: [
        { label: "選ばれる理由", href: "/#about" },
        { label: "料金プラン", href: "/#pricing" },
        { label: "制作実績", href: "/#works" },
    ],
    サポート: [
        { label: "お問い合わせ", href: "/#contact" },
        { label: "よくある質問", href: "/#faq" },
        { label: "ブログ", href: "/blog" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* メインフッター */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* ブランド情報 */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group" onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}>
                            <div className="relative w-10 h-10 flex items-center justify-center bg-cyber-primary/10 rounded-xl border border-cyber-primary text-cyber-primary overflow-hidden">
                                <span className="material-symbols-outlined relative z-10">terminal</span>
                                <div className="absolute inset-0 bg-cyber-primary/20 blur-sm group-hover:bg-cyber-primary/40 transition-all"></div>
                            </div>
                            <span className="font-bold text-xl text-white group-hover:text-cyber-primary transition-colors">FROG Studio</span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                            WordPressをあえて使わない、次世代の爆速・高セキュリティなWebサイト制作サービス。
                            Next.js + microCMSで「勝てるサイト」を作ります。
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-primary" />
                                <a
                                    href="mailto:contact@flog-studio.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    contact@flog-studio.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span className="hover:text-primary transition-colors">日本</span>
                            </div>
                        </div>
                    </div>

                    {/* リンク */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold text-white mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* コピーライト */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} FROG Studio. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-slate-500 hover:text-primary transition-colors"
                            >
                                プライバシーポリシー
                            </Link>
                            <Link
                                href="/terms"
                                className="text-slate-500 hover:text-primary transition-colors"
                            >
                                利用規約
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
