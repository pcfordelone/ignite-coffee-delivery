import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './contexts/CartContext/CartContextProvider'
import { useTheme } from './contexts/ThemeContext/useTheme'
import { AppRoutes } from './Routes'

import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  const { actualTheme } = useTheme()

  return (
    <ThemeProvider theme={actualTheme === 'light' ? defaultTheme : darkTheme}>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
