import { ReactNode } from 'react'
import styled from 'styled-components'
import { Music } from 'lucide-react'

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
`

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: ${props => props.theme.shadow.soft};
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.primary};

  svg {
    width: 40px;
    height: 40px;
  }
`

const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <LayoutContainer>
            <Card>
                <Logo>
                    <Music />
                    <LogoText>SpotChurch</LogoText>
                </Logo>
                <Content>{children}</Content>
            </Card>
        </LayoutContainer>
    )
}
