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
                input: "hsl(var(--input))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                ring: "hsl(var(--primary))",
            
                    // red: "rgb(var(--red))",

                
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },

                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },

                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
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
