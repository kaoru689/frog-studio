import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/microcms";

export const revalidate = 60; // ISR: 60秒ごとに再検証

export async function GET() {
    try {
        const blogs = await getBlogs(20);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return NextResponse.json([], { status: 500 });
    }
}
