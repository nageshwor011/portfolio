// app/providers.tsx
'use client'
import { ThemeProvider } from 'next-themes'

function Providers({ children, pageProps }) {
  return (
    <ThemeProvider 
      attribute="data-theme" // Tells next-themes to use your data attribute
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers