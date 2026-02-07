import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { title, content } = await request.json();

        // 環境変数からmicroCMS設定を取得
        const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
        const writeApiKey = process.env.MICROCMS_WRITE_API_KEY;

        if (!serviceDomain || !writeApiKey) {
            return NextResponse.json(
                { error: "microCMSのWrite APIキーが設定されていません。" },
                { status: 500 }
            );
        }

        // microCMS Write API を使用して下書き保存
        const response = await fetch(
            `https://${serviceDomain}.microcms.io/api/v1/blogs?status=draft`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-MICROCMS-API-KEY": writeApiKey,
                },
                body: JSON.stringify({
                    title: title || "AIで生成した記事",
                    content: content,
                    category: "ブログ",
                }),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "microCMSへの保存に失敗しました");
        }

        const data = await response.json();

        return NextResponse.json({
            success: true,
            id: data.id,
            message: "下書きを保存しました！",
        });
    } catch (error) {
        console.error("microCMS保存エラー:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "下書きの保存に失敗しました" },
            { status: 500 }
        );
    }
}
