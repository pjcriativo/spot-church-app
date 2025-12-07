import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import BottomNav from '../components/navigation/BottomNav'
import Sidebar from '../components/navigation/Sidebar'
import MiniPlayer from '../components/player/MiniPlayer'
import FullPlayer from '../components/player/FullPlayer'
import { usePlayer } from '../context/PlayerContext'

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
  const { currentTrack } = usePlayer()
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false)

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
      {currentTrack && (
        <>
          <MiniPlayer
            track={currentTrack}
            onExpand={() => setIsPlayerExpanded(true)}
          />
          <FullPlayer
            isOpen={isPlayerExpanded}
            onClose={() => setIsPlayerExpanded(false)}
            track={currentTrack}
          />
        </>
      )}
      <BottomNav />
    </LayoutContainer>
  )
}
