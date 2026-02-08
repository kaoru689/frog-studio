
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Grand Celestial Weddings - Royal Blue Variant | FROG Studio Works",
    description: "永遠を誓う、ロイヤルブルーの聖域。FROG Studio制作実績：高級結婚式場「Grand Celestial Weddings」のランディングページ。",
    openGraph: {
        title: "Grand Celestial Weddings | FROG Studio Portfolio",
        description: "Royal Blue & Gold Luxury Wedding Venue LP.",
        images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"],
    },
};

export default function GrandCelestialLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
