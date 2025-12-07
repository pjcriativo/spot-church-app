import styled from 'styled-components'
import { Home, Search, Library, User, Music } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

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
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
`

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
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
    color: ${props => props.theme.colors.white};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    return (
        <SidebarContainer>
            <Logo>
                <Music />
                <LogoText>SPOT CHURCH</LogoText>
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
                    <span>Sua Biblioteca</span>
                </NavItem>
                <NavItem $active={isActive('/profile')} onClick={() => navigate('/profile')}>
                    <User />
                    <span>Perfil</span>
                </NavItem>
            </NavList>
        </SidebarContainer>
    )
}
