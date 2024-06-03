/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: ["class"],
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Include your React components here
    ],
    theme: {
        extend: {
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },

            colors: {
                //background - container
                //foreground -  text
                border: "hsl(var(--border))",
                input: {
                    DEFAULT: "hsl(var(--input))",
                },
                label: "hsl(var(--label))",

                background: "hsl(var(--background))",
                backgroundDashboard: "hsl(var(--background-dashboard))",
                foreground: "hsl(var(--foreground))",
                foreground: {
                    DEFAULT: "hsl(var(--foreground))",
                    bold: "hsl(var(--foreground-bold))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    dark: "hsl(var(--primary-dark))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    lighter: "hsl(var(--muted-lighter))",
                    lightest: "hsl(var(--muted-lightest))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                ring: "hsl(var(--ring))",

                // red: "rgb(var(--red))",
            },

            backgroundImage: {
                gradient:
                    "linear-gradient(180deg, #f0cb94 30%, #e9ba77 50%, #fce4c2 100%)",
            },

            fontSize: {
                sm: "0.875rem", //14px
                base: "1rem", //16px,
                md: "1.125rem", //18px
                lg: "1.5rem", //24px
                xl: "2rem", //32px
                "2xl": "3rem", //48px
            },
        },
    },
    plugins: [],
}
