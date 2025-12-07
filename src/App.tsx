import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
    return (
        <Router>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </Router>
    )
}

export default App
