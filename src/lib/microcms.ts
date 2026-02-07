import { createClient } from "microcms-js-sdk";

// microCMS クライアントの作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
    apiKey: process.env.MICROCMS_API_KEY || "",
});

// 制作実績の型定義
export interface Work {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    description: string;
    category: string;
    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };
    url?: string;
}

// お知らせの型定義
export interface News {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    category: string;
}

// API レスポンスの型定義
export interface MicroCMSListResponse<T> {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
}

// 制作実績を取得
export async function getWorks(limit = 10): Promise<Work[]> {
    try {
        const response = await client.get<MicroCMSListResponse<Work>>({
            endpoint: "works",
            queries: {
                limit,
                orders: "-publishedAt",
            },
        });
        return response.contents;
    } catch (error) {
        console.error("Failed to fetch works:", error);
        return [];
    }
}

// 制作実績を1件取得
export async function getWorkById(id: string): Promise<Work | null> {
    try {
        const response = await client.get<Work>({
            endpoint: "works",
            contentId: id,
        });
        return response;
    } catch (error) {
        console.error("Failed to fetch work:", error);
        return null;
    }
}

// お知らせを取得
export async function getNews(limit = 10): Promise<News[]> {
    try {
        const response = await client.get<MicroCMSListResponse<News>>({
            endpoint: "news",
            queries: {
                limit,
                orders: "-publishedAt",
            },
        });
        return response.contents;
    } catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}

// お知らせを1件取得
export async function getNewsById(id: string): Promise<News | null> {
    try {
        const response = await client.get<News>({
            endpoint: "news",
            contentId: id,
        });
        return response;
    } catch (error) {
        console.error("Failed to fetch news item:", error);
        return null;
    }
}

// ブログ記事の型定義
export interface Blog {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    category?: string[];
    thumbnail?: {
        url: string;
        height: number;
        width: number;
    };
    description?: string;
}

// ブログ記事一覧を取得
export async function getBlogs(limit = 10): Promise<Blog[]> {
    try {
        const response = await client.get<MicroCMSListResponse<Blog>>({
            endpoint: "blogs",
            queries: {
                limit,
                orders: "-publishedAt",
            },
        });
        return response.contents;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return [];
    }
}

// ブログ記事を1件取得
export async function getBlogById(id: string): Promise<Blog | null> {
    try {
        const response = await client.get<Blog>({
            endpoint: "blogs",
            contentId: id,
        });
        return response;
    } catch (error) {
        console.error("Failed to fetch blog:", error);
        return null;
    }
}
