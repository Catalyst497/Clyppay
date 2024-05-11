/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include your React components here
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   crimson: "var(--font-crimson)",
      // },

      colors: {
        //background - container
        //foreground -  text
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        gradient:
          "linear-gradient(90deg, #f0cb94 30%, #e9ba77 50%, #fce4c2 100%)",

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontSize:{
        sm: '0.8rem', //12.8px
        base: '1rem', //16px,
          md: '1.125rem',  //18px
          lg: '1.5rem',  //24px
          xl: '2rem',  //32px
          '2xl': '3rem', //48px
  
      },
    },
  },
  plugins: [],
};
