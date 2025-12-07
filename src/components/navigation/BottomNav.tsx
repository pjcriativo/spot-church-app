import styled from 'styled-components'
import { Home, Search, Library, User } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.overlay};
  border-top: 1px solid ${props => props.theme.colors.overlay};
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.md} 0;
  z-index: ${props => props.theme.zIndex.sticky};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`

const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.$active
    ? props.theme.colors.primary
    : props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.xs};
  font-family: ${props => props.theme.fonts.primary};
  transition: color ${props => props.theme.transitions.fast};
  padding: ${props => props.theme.spacing.xs};

  &:hover {
    color: ${props => props.$active
    ? props.theme.colors.primary
    : props.theme.colors.white};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const isActive = (path: string) => location.pathname === path

  // Don't show bottom nav on auth pages
  if (!user) {
    return null
  }

  return (
    <Nav>
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
    </Nav>
  )
}
