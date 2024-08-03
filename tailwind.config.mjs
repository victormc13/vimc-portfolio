/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 20px rgba(0, 179, 134, 0.5)',
      },
    },
  },
  plugins: [],
};
