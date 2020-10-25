import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './dependencies/theme/Theme'
import Pages from './pages/Pages'
// import logo from './logo.svg'
import './App.scss'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app-container">
                <Pages />
            </div>
        </ThemeProvider>
    )
}

export default App
