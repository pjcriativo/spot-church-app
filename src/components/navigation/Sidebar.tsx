import styled from 'styled-components'
import { Home, Search, Library, User, Music, LogOut } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const SidebarContainer = styled.aside`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 240px;
    background: ${props => props.theme.colors.surface};
    border-right: 1px solid ${props => props.theme.colors.overlay};
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
    z-index: ${props => props.theme.zIndex.sticky};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.primary};

  svg {
    width: 32px;
    height: 32px;
  }
`

const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
`

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  flex: 1;
`

const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radius.md};
  background: ${props => props.$active
    ? props.theme.colors.overlay
    : 'transparent'};
  color: ${props => props.$active
    ? props.theme.colors.primary
    : props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.fast};
  text-align: left;

  &:hover {
    background: ${props => props.theme.colors.overlay};
    color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 10px ${props => props.theme.colors.primary}20;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const PlayerSpace = styled.div`
  border-top: 1px solid ${props => props.theme.colors.overlay};
  padding-top: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radius.md};
  background: transparent;
  color: ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.fast};
  text-align: left;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signOut, user } = useAuth()

  const isActive = (path: string) => location.pathname === path

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  // Don't show sidebar on auth pages
  if (!user) {
    return null
  }

  return (
    <SidebarContainer>
      <Logo>
        <Music />
        <LogoText>SpotChurch</LogoText>
      </Logo>

      <NavList>
        <NavItem $active={isActive('/home')} onClick={() => navigate('/home')}>
          <Home />
          <span>Início</span>
        </NavItem>
        <NavItem $active={isActive('/search')} onClick={() => navigate('/search')}>
          <Search />
          <span>Buscar</span>
        </NavItem>
        <NavItem $active={isActive('/library')} onClick={() => navigate('/library')}>
          <Library />
          <span>Biblioteca</span>
        </NavItem>
        <NavItem $active={isActive('/profile')} onClick={() => navigate('/profile')}>
          <User />
          <span>Perfil</span>
        </NavItem>
      </NavList>

      <PlayerSpace>
        <LogoutButton onClick={handleLogout}>
          <LogOut />
          <span>Sair</span>
        </LogoutButton>
      </PlayerSpace>
    </SidebarContainer>
  )
}
