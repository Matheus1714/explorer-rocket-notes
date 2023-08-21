import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { defaultTheme } from './styles/theme'

import { New } from './pages/New'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <New />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
