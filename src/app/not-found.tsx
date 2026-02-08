'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white p-4 font-body">
            <h2 className="text-4xl font-bold mb-4 text-cyber-primary">404 - Not Found</h2>
            <p className="mb-8 text-gray-400">お探しのページは見つかりませんでした。</p>
            <Link
                href="/"
                className="px-6 py-3 bg-cyber-primary text-black font-bold rounded hover:bg-cyber-primary/80 transition-colors"
            >
                ホームに戻る
            </Link>
        </div>
    );
}
