// tailwind.config.js (atau tailwind.config.ts)
/** @type {import('tailwindcss').Config} */
export default { // Pastikan export default ada
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🛑 INI ADALAH BAGIAN UTAMA SOLUSI 🛑
      colors: {
        // Mengarahkan class tailwind ke variabel CSS di index.css
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))", // Mengatasi error 'border-border'
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Lanjutkan untuk accent, destructive, card, popover yang Anda definisikan
      },
      borderRadius: {
        lg: "var(--radius)", // Menggunakan variabel radius kustom
      },
    },
  },
  plugins: [],
}