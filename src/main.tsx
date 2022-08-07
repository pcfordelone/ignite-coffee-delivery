import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CustomThemeProvider } from './contexts/ThemeContext/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
)
