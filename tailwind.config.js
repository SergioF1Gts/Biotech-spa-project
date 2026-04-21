/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nuevos tokens (prefijo bio-)
        'bio-bg': '#020617',
        'bio-bg-alt': '#0f172a',
        'bio-primary': '#38bdf8',
        'bio-secondary': '#fb7185',
        'bio-text': '#f8fafc',
        'bio-dim': '#94a3b8',
        
        // Mapeo de compatibilidad para tus clases actuales
        'bg-color': '#020617',
        'primary': '#38bdf8',
        'secondary': '#fb7185',
        'text-main': '#f8fafc',
        'text-dim': '#94a3b8',
      },
      fontFamily: {
        tech: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f8fafc 30%, #38bdf8 100%)',
        'gradient-bio': 'linear-gradient(135deg, #38bdf8 0%, #fb7185 100%)',
      }
    },
  },
  plugins: [],
}
