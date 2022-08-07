import { ReactNode, useState } from 'react'
import { ThemeContext } from '.'

interface ThemeProviderProps {
  children: ReactNode
}

export const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setActualTheme((state) => (state === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ actualTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
