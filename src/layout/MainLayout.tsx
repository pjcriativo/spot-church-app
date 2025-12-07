import { ReactNode } from 'react'
import styled from 'styled-components'
import { AppThemeProvider } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import BottomNav from '../components/navigation/BottomNav'
import Sidebar from '../components/navigation/Sidebar'

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  display: flex;
`

const MainContent = styled.main`
  flex: 1;
  padding-bottom: 80px; /* Space for BottomNav on mobile */

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 240px; /* Space for Sidebar on desktop */
    padding-bottom: 0;
  }
`

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <AppThemeProvider>
            <GlobalStyles />
            <LayoutContainer>
                <Sidebar />
                <MainContent>
                    {children}
                </MainContent>
                <BottomNav />
            </LayoutContainer>
        </AppThemeProvider>
    )
}
