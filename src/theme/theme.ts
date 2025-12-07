import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'

// ============================================
// 🎨 PALETA (obrigatória e imutável)
// ============================================
export const theme = {
    colors: {
        // Cores principais
        primary: '#DEBDFF',      // Roxo claro
        secondary: '#E1FFBA',    // Verde claro
        text: '#FFFFFF',         // Texto principal
        background: '#000000',   // Fundo principal
        surface: '#111111',      // Superfícies elevadas
        overlay: 'rgba(255, 255, 255, 0.05)', // Overlay translúcido

        // Aliases para compatibilidade com componentes existentes
        white: '#FFFFFF',
        black: '#000000',
        darkGray: '#1a1a1a',
        mediumGray: '#333333',
        lightGray: '#999999',

        // Gradientes
        gradient: {
            purple: 'linear-gradient(135deg, #DEBDFF 0%, #B794F6 100%)',
            green: 'linear-gradient(135deg, #E1FFBA 0%, #C5E89A 100%)',
            dark: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
        }
    },

    // ============================================
    // 💠 TIPOGRAFIA
    // ============================================
    fonts: {
        primary: '"DM Sans", sans-serif',    // Fonte principal
        accent: '"Gayathri", sans-serif',    // Fonte de destaque

        // Aliases para compatibilidade
        body: '"DM Sans", sans-serif',
        heading: '"Gayathri", sans-serif',
    },

    fontSizes: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        md: '1rem',         // 16px
        lg: '1.25rem',      // 20px
        xl: '1.5rem',       // 24px
        '2xl': '2rem',      // 32px
        '3xl': '2.5rem',    // 40px
        '4xl': '3rem',      // 48px
    },

    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },

    // ============================================
    // ✨ STYLE SYSTEM
    // ============================================
    radius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
    },

    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',

        // Aliases adicionais para compatibilidade
        '2xl': '48px',
        '3xl': '64px',
    },

    shadow: {
        soft: '0px 0px 10px rgba(222, 189, 255, 0.25)',
        glow: '0px 0px 15px rgba(222, 189, 255, 0.35)',
    },

    // ============================================
    // Propriedades adicionais para compatibilidade
    // ============================================
    borderRadius: {
        sm: '0.25rem',      // 4px
        md: '0.5rem',       // 8px
        lg: '1rem',         // 16px
        xl: '1.5rem',       // 24px
        full: '9999px',
    },

    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
    },

    transitions: {
        fast: '150ms ease-in-out',
        normal: '300ms ease-in-out',
        slow: '500ms ease-in-out',
    },

    shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
        md: '0 4px 8px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(222, 189, 255, 0.3)',
        glowGreen: '0 0 20px rgba(225, 255, 186, 0.3)',
    },

    zIndex: {
        base: 1,
        dropdown: 10,
        sticky: 100,
        overlay: 1000,
        modal: 1100,
        tooltip: 1200,
    },
}

export type Theme = typeof theme

// ============================================
// AppThemeProvider Component
// ============================================
interface AppThemeProviderProps {
    children: ReactNode
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
    return <ThemeProvider theme={ theme }> { children } </ThemeProvider>
}
