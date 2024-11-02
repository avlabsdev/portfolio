'use client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider, useTheme } from 'next-themes'
// import { Provider as AuthProvider } from 'next-auth/client'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme='system'
        disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}