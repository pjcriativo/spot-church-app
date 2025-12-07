import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './theme/theme'
import { GlobalStyles } from './theme/GlobalStyles'
import MainLayout from './layout/MainLayout'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
    return (
        <AppThemeProvider>
            <GlobalStyles />
            <BrowserRouter>
                <MainLayout>
                    <AppRoutes />
                </MainLayout>
            </BrowserRouter>
        </AppThemeProvider>
    )
}

export default App
