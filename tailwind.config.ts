import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // プライマリーカラー (カエルをイメージしたグリーン)
                // プライマリーカラー (Golden Baseline Neon)
                primary: "#0df259",
                "background-dark": "#020804",
                "background-light": "#f5f8f6",
                // アクセントカラー (シアン)
                accent: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                    950: "#083344",
                },
                // ダークモード用背景色
                dark: {
                    bg: "#0f172a",
                    surface: "#1e293b",
                    border: "#334155",
                },
                // Cyber Theme Colors
                cyber: {
                    primary: "#0df259",
                    primaryDark: "#0abf46",
                    bgLight: "#f5f8f6",
                    bgDark: "#020804",
                    surfaceDark: "#051108",
                    surfaceLight: "#0a1f10",
                    deepEmerald: "#064025",
                },
            },
            fontFamily: {
                sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
                display: ["var(--font-space-grotesk)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s ease-in-out infinite",
                "hologram": "hologram 4s infinite linear",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                hologram: {
                    "0%, 100%": { opacity: "0.8", transform: "translateY(0) scale(1)" },
                    "50%": { opacity: "0.4", transform: "translateY(-2px) scale(1.02)" },
                },
            },
            typography: ({ theme }: any) => ({
                invert: {
                    css: {
                        blockquote: {
                            fontStyle: 'normal',
                            borderLeftWidth: '4px',
                            borderLeftColor: '#ef4444',
                            backgroundColor: 'rgba(239, 68, 68, 0.05)',
                            borderRadius: theme('borderRadius.lg'),
                            padding: '1.5rem',
                            color: theme('colors.gray.100'),
                            quotes: 'none',
                        },
                        'blockquote p:first-of-type::before': {
                            content: 'none',
                        },
                        'blockquote p:last-of-type::after': {
                            content: 'none',
                        },
                        // Premium Unordered List
                        'ul': {
                            listStyleType: 'none',
                            padding: '1.5rem',
                            border: '1px solid rgba(74, 222, 128, 0.2)',
                            borderRadius: theme('borderRadius.lg'),
                            backgroundColor: 'rgba(74, 222, 128, 0.02)',
                        },
                        'ul > li': {
                            position: 'relative',
                            paddingLeft: '1.75rem',
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        },
                        'ul > li::before': {
                            content: '""',
                            position: 'absolute',
                            left: '0',
                            top: '0.375rem', // Adjust for line-height
                            width: '1.25em',
                            height: '1.25em',
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%234ade80'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9.135-9.135' /%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                        },
                        // Keep Ordered List simple but colored
                        'ol > li::marker': {
                            color: theme('colors.green.400'),
                            fontWeight: 'bold',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
} satisfies Config;
