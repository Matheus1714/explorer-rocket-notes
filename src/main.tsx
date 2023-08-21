import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { defaultTheme } from './styles/theme'

import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
