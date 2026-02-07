# FROG Studio デプロイガイド

このガイドでは、FROG StudioプロジェクトをGitHubにプッシュし、Vercelでデプロイする手順を初心者向けに説明します。

---

## 📦 事前準備

### 1. Vercel Analyticsパッケージのインストール

プロジェクトフォルダでターミナル（PowerShell）を開き、以下のコマンドを実行してください：

```bash
npm install @vercel/analytics
```

### 2. 必要なアカウント

- **GitHub アカウント**: <https://github.com> で作成
- **Vercel アカウント**: <https://vercel.com> で作成（GitHubアカウントでログイン可能）

---

## 🚀 GitHubへのプッシュ手順

### ステップ1: Gitの初期化（初回のみ）

すでにGitが初期化されている場合はスキップしてください。

```bash
git init
```

### ステップ2: .gitignoreの確認

`.gitignore`ファイルに以下が含まれていることを確認してください：

```
node_modules/
.next/
.env.local
```

### ステップ3: 変更をステージング

```bash
git add .
```

### ステップ4: コミット

```bash
git commit -m "コンタクト導線強化とVercel Analytics追加"
```

### ステップ5: GitHubでリポジトリ作成

1. <https://github.com> にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例: `frog-studio`）
4. 「Private」を選択（推奨）
5. 「Create repository」をクリック

### ステップ6: リモートリポジトリを追加してプッシュ

GitHubの指示に従い、以下のコマンドを実行：

```bash
git remote add origin https://github.com/あなたのユーザー名/frog-studio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Vercelデプロイ手順

### ステップ1: Vercelにログイン

1. <https://vercel.com> にアクセス
2. 「Sign Up」または「Log In」をクリック
3. 「Continue with GitHub」を選択してGitHubアカウントで認証

### ステップ2: プロジェクトのインポート

1. ダッシュボードで「Add New...」→「Project」をクリック
2. 「Import Git Repository」で先ほど作成したリポジトリを選択
3. 「Import」をクリック

### ステップ3: 環境変数の設定

> [!IMPORTANT]
> `.env.local`の内容は自動的にアップロードされません。手動で設定が必要です。

1. 「Environment Variables」セクションを展開
2. 以下の環境変数を追加：

| 名前 | 値 | 説明 |
|------|-----|------|
| `MICROCMS_SERVICE_DOMAIN` | あなたのサービスドメイン | microCMSの設定から取得 |
| `MICROCMS_API_KEY` | あなたのAPIキー | microCMSの設定から取得 |

### ステップ4: デプロイ

1. 「Deploy」ボタンをクリック
2. ビルドが完了するまで待機（通常1〜3分）
3. デプロイ完了後、URLが発行されます

---

## ⚠️ よくある問題と解決策

### ビルドエラー: モジュールが見つからない

```bash
npm install
```

を実行後、再度プッシュしてください。

### 環境変数エラー

Vercelのダッシュボードで環境変数が正しく設定されているか確認してください。設定後は再デプロイが必要です。

### TypeScriptエラー

ローカルで以下を実行してエラーを確認：

```bash
npm run build
```

エラーがある場合は修正してから再プッシュしてください。

---

## ✅ デプロイ後の確認

1. 発行されたURLにアクセス
2. 各ページが正しく表示されることを確認
3. お問い合わせセクションのリンクが動作することを確認

---

## 🔧 継続的デプロイ

GitHubにプッシュするたびに自動でVercelがデプロイします。

```bash
git add .
git commit -m "変更内容の説明"
git push
```

以上でデプロイは完了です！
