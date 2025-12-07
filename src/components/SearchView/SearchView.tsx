import styled from 'styled-components'
import { Search as SearchIcon, Home as HomeIcon, Library, User } from 'lucide-react'
import { useState } from 'react'
import { mockCategories, mockDiscoverItems } from '../../data/searchData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding-bottom: 80px;
`

const Header = styled.header`
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.xl};
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md} ${props => props.theme.spacing.md} 48px;
  background: #111111;
  border: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.body};
  transition: all ${props => props.theme.transitions.normal};

  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 20px ${props => props.theme.colors.primary}40;
    outline: none;
  }
`

const SearchIconWrapper = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.lightGray};
  pointer-events: none;
`

const Content = styled.div`
  padding: 0 ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.fonts.heading};
`

const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`

const CategoryTag = styled.button<{ $color: string }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.$color}20;
  border: 1px solid ${props => props.$color};
  border-radius: ${props => props.theme.borderRadius.full};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: 0 0 10px ${props => props.$color}20;

  &:hover {
    transform: scale(1.03);
    background: ${props => props.$color}30;
    box-shadow: 0 0 20px ${props => props.$color}40;
  }

  &:active {
    transform: scale(0.98);
  }
`

const DiscoverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.wide}) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const DiscoverCard = styled.div`
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
  }
`

const DiscoverArtwork = styled.div<{ $color: string }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  transition: all ${props => props.theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, ${props => props.$color}40 100%);
    opacity: 0;
    transition: opacity ${props => props.theme.transitions.normal};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${DiscoverCard}:hover & {
    box-shadow: 0 8px 24px ${props => props.$color}60;
    
    &::before {
      opacity: 1;
    }
  }
`

const DiscoverInfo = styled.div`
  padding: 0 ${props => props.theme.spacing.xs};
`

const DiscoverTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${props => props.theme.fontWeights.medium};
`

const DiscoverSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.darkGray};
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.md} 0;
  z-index: ${props => props.theme.zIndex.sticky};
`

const NavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.$active
        ? props.theme.colors.primary
        : props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: color ${props => props.theme.transitions.fast};

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

export default function SearchView() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <Container>
            <Header>
                <Title>Buscar</Title>
                <SearchContainer>
                    <SearchIconWrapper>
                        <SearchIcon size={20} />
                    </SearchIconWrapper>
                    <SearchInput
                        type="text"
                        placeholder="Buscar músicas, artistas, álbuns..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </SearchContainer>
            </Header>

            <Content>
                <SectionTitle>Categorias</SectionTitle>
                <CategoriesGrid>
                    {mockCategories.map((category) => (
                        <CategoryTag key={category.id} $color={category.color}>
                            {category.name}
                        </CategoryTag>
                    ))}
                </CategoriesGrid>

                <SectionTitle>Descobrir</SectionTitle>
                <DiscoverGrid>
                    {mockDiscoverItems.map((item) => (
                        <DiscoverCard key={item.id}>
                            <DiscoverArtwork $color={item.color}>
                                <img src={item.artwork} alt={item.title} />
                            </DiscoverArtwork>
                            <DiscoverInfo>
                                <DiscoverTitle>{item.title}</DiscoverTitle>
                                <DiscoverSubtitle>{item.subtitle}</DiscoverSubtitle>
                            </DiscoverInfo>
                        </DiscoverCard>
                    ))}
                </DiscoverGrid>
            </Content>

            <BottomNav>
                <NavItem>
                    <HomeIcon />
                    <span>Início</span>
                </NavItem>
                <NavItem $active>
                    <SearchIcon />
                    <span>Buscar</span>
                </NavItem>
                <NavItem>
                    <Library />
                    <span>Biblioteca</span>
                </NavItem>
                <NavItem>
                    <User />
                    <span>Perfil</span>
                </NavItem>
            </BottomNav>
        </Container>
    )
}
