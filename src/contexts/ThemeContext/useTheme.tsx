import { useContext } from 'react'
import { ThemeContext } from '.'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}
