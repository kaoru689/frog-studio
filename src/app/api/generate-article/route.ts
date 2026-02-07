import { NextRequest, NextResponse } from "next/server";

// システムプロンプト：プロ・ブロガー＆SEOライター
const systemPrompt = `あなたはプロのWebライター兼SEOコンサルタントです。

【重要な禁止事項】
- 「はい、承知いたしました」「わかりました」などの前置きは絶対に書かないでください
- 自己紹介や説明は一切不要です
- 記事の本文のみを出力してください

【執筆スタイル】
- 親しみやすくも知的なトーン
- 適度なユーモアを交える
- 単調な「〜です。〜ます。」の連続を避け、リズムを作る

【記事構成（PREP法）】
1. 導入: 読者の悩みに共感し、この記事を読むべき理由を提示
2. 結論: 最初に答えを提示
3. 理由・具体例: なぜその結論なのか、事例を交えて解説
4. まとめ: 読者の背中を押し、具体的なアクションを促す

必ず日本語で記事を書いてください。`;

export async function POST(request: NextRequest) {
    try {
        const { keywords, target } = await request.json();

        // 環境変数からAPIキーを取得（OpenAIまたはGemini）
        const openaiKey = process.env.OPENAI_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY;

        if (!openaiKey && !geminiKey) {
            return NextResponse.json(
                { error: "AIのAPIキーが設定されていません。" },
                { status: 500 }
            );
        }

        // 実行プロンプト構築（簡潔・1200文字・完結保証）
        const prompt = `
【キーワード】${keywords.join("、")}
【ターゲット読者】${target}

【指示】
上記のキーワードとターゲットに基づき、約1200文字のブログ記事を執筆してください。

【構成（この順番で必ず全て書く）】
## タイトル（キャッチーで興味を引く）

導入（2〜3文で読者の悩みに共感し、この記事で何がわかるか明示）

### 見出し1（ポイント1を簡潔に解説）

### 見出し2（ポイント2を簡潔に解説）

### まとめ：〇〇が大切！（結論を見出しに含める）
- 記事全体の要点を3行で箇条書き
- 読者への具体的なアクション（「まずは〇〇してみましょう！」）
- 締めの一言（前向きなエール）

【絶対厳守】
- 前置きは一切不要。タイトルから始める
- 必ず「### まとめ」で完結させる。途中で終わらない
- まとめでは「結局何が言いたいのか」を明確に述べる
- 最後は必ず「〜してみてくださいね！」など行動を促す言葉で終わる

【出力形式】
マークダウン形式（H2: ##、H3: ###）
`;



        let generatedText = "";

        // OpenAI API を優先
        if (openaiKey) {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${openaiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt,
                        },
                        {
                            role: "user",
                            content: prompt,
                        },
                    ],
                    max_tokens: 4096,
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || "OpenAI APIエラー");
            }

            const data = await response.json();
            generatedText = data.choices[0]?.message?.content || "";
        }
        // Gemini API をフォールバック
        else if (geminiKey) {
            // 1. 利用可能なモデル一覧を取得
            const modelsResponse = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models?key=${geminiKey}`
            );

            if (!modelsResponse.ok) {
                const error = await modelsResponse.json();
                throw new Error(
                    `Geminiモデル一覧の取得に失敗: ${error.error?.message || modelsResponse.statusText}`
                );
            }

            const modelsData = await modelsResponse.json();
            const models = modelsData.models || [];

            // 生成可能なモデルを検索（gemini-1.5-flash -> gemini-1.5-pro -> gemini-pro の順で優先）
            const availableModel =
                models.find((m: any) => m.name.includes("gemini-1.5-flash") && m.supportedGenerationMethods.includes("generateContent")) ||
                models.find((m: any) => m.name.includes("gemini-1.5-pro") && m.supportedGenerationMethods.includes("generateContent")) ||
                models.find((m: any) => m.name.includes("gemini-pro") && m.supportedGenerationMethods.includes("generateContent")) ||
                models.find((m: any) => m.supportedGenerationMethods.includes("generateContent"));

            if (!availableModel) {
                throw new Error("利用可能なGeminiモデルが見つかりませんでした。");
            }

            // Gemini用の統合プロンプト（システム + 実行）
            const fullPrompt = `${systemPrompt}\n\n---\n\n${prompt}`;

            const generateUrl = `https://generativelanguage.googleapis.com/v1beta/${availableModel.name}:generateContent?key=${geminiKey}`;

            const response = await fetch(generateUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: fullPrompt }],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 8192,
                    },
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || "Gemini APIエラー");
            }

            const data = await response.json();
            generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
        }

        return NextResponse.json({ content: generatedText });
    } catch (error) {
        console.error("AI生成エラー:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "記事の生成に失敗しました" },
            { status: 500 }
        );
    }
}

