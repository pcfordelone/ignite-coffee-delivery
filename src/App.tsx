import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './Routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
