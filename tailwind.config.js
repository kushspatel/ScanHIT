/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                entry: 'hsl(var(--entry))',
                entryBackground: 'hsl(var(--entry-background))',
                entryForeground: 'hsl(var(--entry-foreground))',
                entryAccent: 'hsl(var(--entry-accent))',

                planBadgeBackground: 'hsl(var(--plan-badge-background))',
                planBadgeForeground: 'hsl(var(--plan-badge-foreground))',

                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',

                BorderColor: 'hsl(var(--BorderColor))',
                BackgroundColor: 'hsl(var(--BackgroundColor))',
                InputBorder: 'hsl(var(--InputBorder))',
                InputBG: 'hsl(var(--InputBG))',
                foreground: 'hsl(var(--foreground))',
                noticeForeground: 'hsl(var(--noticeForeground))',
                noticeBackground: 'hsl(var(--noticeBackground))',

                sectionBorder: 'hsl(var(--sectionBorder))',

                userBubble: 'hsl(var(--userBubble))',
                botBubble: 'hsl(var(--botBubble))',

                background: 'hsl(var(--background))',

                iconColorNormal: 'hsl(var(--iconColorNormal))',
                folderIconColor: 'hsl(var(--folderIconColor))',

                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'spin': 'spin 1s linear infinite',
            },
            padding: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
            },
            maxWidth: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
            },
            maxHeight: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
            },
            height: {
                '3/4': '75%',
            },
            width: {
                'fit-content': 'fit-content',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
