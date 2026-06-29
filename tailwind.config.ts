import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101820',
        'ink-2': '#1a2531',
        cobalt: '#2B4FE0',
        'cobalt-soft': '#5a78f0',
        bone: '#EDE8DF',
        'bone-2': '#f5f2ec',
        ash: '#7A8290',
        'ash-dark': '#525a66',
        amber: '#b07f1f',
        // legacy aliases mapped to brand tokens so existing pages inherit the new palette
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-geist)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 3px rgba(16,24,32,0.08)',
        raised: '0 18px 40px -22px rgba(16,24,32,0.35)'
      },
      letterSpacing: {
        caption: '0.22em'
      }
    }
  },
  plugins: []
}

export default config
