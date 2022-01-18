import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

const headlineFontFamily = "'Raleway', 'Roboto', sans-serif"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2a9d8f',
      light: '#64cfbf',
      dark: '#006e62',
      contrastText: '#000000'
    },
    secondary: {
      main: '#264653',
      light: '#52717f',
      dark: '#001f2a',
      contrastText: '#ffffff'
    },
    error: {
      main: '#e76f51',
      light: '#ffa07e',
      dark: '#b04027',
      contrastText: '#000000'
    },
    warning: {
      main: '#e9c46a',
      light: '#fff79a',
      dark: '#b4943c',
      contrastText: '#000000'
    }
  },
  typography: {
    h1: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    },
    h2: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    },
    h3: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    },
    h4: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    },
    h5: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    },
    h6: {
      fontFamily: headlineFontFamily,
      fontWeight: 500
    }
  }
})

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider