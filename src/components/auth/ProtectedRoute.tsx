import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../context/AuthContext'

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.lg};
`

interface ProtectedRouteProps {
    children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingContainer>Carregando...</LoadingContainer>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}
