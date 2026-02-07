"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, FileText, Send, Loader2, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

// ターゲット読者の選択肢
const targetOptions = [
    { value: "30代主婦", label: "30代主婦" },
    { value: "20〜30代会社員", label: "20〜30代会社員" },
    { value: "経営者・個人事業主", label: "経営者・個人事業主" },
    { value: "フリーランス", label: "フリーランス" },
    { value: "学生", label: "学生" },
    { value: "シニア層", label: "シニア層（60代〜）" },
    { value: "初心者・未経験者", label: "初心者・未経験者" },
];

export default function AIWriterPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [keywords, setKeywords] = useState(["", "", ""]);
    const [target, setTarget] = useState("30代主婦");
    const [generatedContent, setGeneratedContent] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [error, setError] = useState("");

    // 簡易認証
    const handleLogin = () => {
        // 実際の運用では環境変数で管理してください
        if (password === "frog2024") {
            setIsAuthenticated(true);
            setPasswordError("");
        } else {
            setPasswordError("パスワードが正しくありません");
        }
    };

    // キーワード更新
    const updateKeyword = (index: number, value: string) => {
        const newKeywords = [...keywords];
        newKeywords[index] = value;
        setKeywords(newKeywords);
    };

    // 記事生成
    const generateArticle = async () => {
        const filledKeywords = keywords.filter((k) => k.trim() !== "");
        if (filledKeywords.length === 0) {
            setError("キーワードを1つ以上入力してください");
            return;
        }

        setError("");
        setIsGenerating(true);
        setGeneratedContent("");

        try {
            const response = await fetch("/api/generate-article", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ keywords: filledKeywords, target }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "生成に失敗しました");
            }

            setGeneratedContent(data.content);
        } catch (err) {
            setError(err instanceof Error ? err.message : "エラーが発生しました");
        } finally {
            setIsGenerating(false);
        }
    };

    // コピー機能
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(generatedContent);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // microCMS下書き保存
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const saveDraftToMicroCMS = async () => {
        if (!generatedContent) return;

        setIsSaving(true);
        setError("");
        setSaveSuccess(false);

        try {
            // タイトルを記事から抽出（最初の## 見出し）
            const titleMatch = generatedContent.match(/^##\s+(.+)$/m);
            const title = titleMatch ? titleMatch[1] : "AIで生成した記事";

            const response = await fetch("/api/save-draft", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content: generatedContent }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "保存に失敗しました");
            }

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "下書きの保存に失敗しました");
        } finally {
            setIsSaving(false);
        }
    };

    // 認証画面
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                🐸 AIライター
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                管理者専用ページです
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    パスワード
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="パスワードを入力"
                                />
                                {passwordError && (
                                    <p className="mt-2 text-sm text-red-500">{passwordError}</p>
                                )}
                            </div>

                            <button
                                onClick={handleLogin}
                                className="w-full py-3 px-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                            >
                                ログイン
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <Link
                                href="/"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                            >
                                ← トップページに戻る
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    // メイン画面
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* ヘッダー */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>FROG Studio 特典ツール</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        🐸 AIライティングアシスタント
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        キーワードを入力するだけで、SEOに強いブログ記事を自動生成
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 入力パネル */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary-500" />
                            記事の設定
                        </h2>

                        {/* キーワード入力 */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                                キーワード（最大3つ）
                            </label>
                            <div className="space-y-3">
                                {keywords.map((keyword, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => updateKeyword(index, e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder={`キーワード ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ターゲット選択 */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                                ターゲット読者
                            </label>
                            <select
                                value={target}
                                onChange={(e) => setTarget(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                                {targetOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* エラー表示 */}
                        {error && (
                            <div className="mb-4 p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* 生成ボタン */}
                        <button
                            onClick={generateArticle}
                            disabled={isGenerating}
                            className="w-full py-4 px-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    AIが記事を生成中...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    AIで記事を下書きする
                                </>
                            )}
                        </button>
                    </motion.div>

                    {/* 出力パネル */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Send className="w-5 h-5 text-primary-500" />
                                生成結果
                            </h2>
                            {generatedContent && (
                                <button
                                    onClick={copyToClipboard}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    {isCopied ? (
                                        <>
                                            <Check className="w-4 h-4 text-green-500" />
                                            コピー完了
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            コピー
                                        </>
                                    )}
                                </button>
                            )}
                        </div>

                        {/* 出力エリア */}
                        <textarea
                            value={generatedContent}
                            onChange={(e) => setGeneratedContent(e.target.value)}
                            className="w-full h-80 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
                            placeholder="ここに生成された記事が表示されます..."
                            readOnly={isGenerating}
                        />

                        {/* microCMS保存ボタン */}
                        {generatedContent && (
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={saveDraftToMicroCMS}
                                disabled={isSaving}
                                className={`mt-4 w-full py-3 px-6 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${saveSuccess
                                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                        : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        microCMSに保存中...
                                    </>
                                ) : saveSuccess ? (
                                    <>
                                        <Check className="w-5 h-5" />
                                        下書き保存しました！
                                    </>
                                ) : (
                                    <>
                                        microCMSに下書き保存する
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        )}
                    </motion.div>
                </div>

                {/* 使い方ヒント */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
                >
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">💡 使い方のコツ</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• キーワードは具体的に入力するほど、質の高い記事が生成されます</li>
                        <li>• ターゲット読者を正確に設定すると、より響く文章になります</li>
                        <li>• 生成された記事は下書きです。公開前に必ず確認・修正してください</li>
                        <li>• microCMSに保存後、画像の追加やレイアウト調整を行ってください</li>
                    </ul>
                </motion.div>

                {/* トップに戻るリンク */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                        ← トップページに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
