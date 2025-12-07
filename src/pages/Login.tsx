import { useState, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../layout/AuthLayout'
import Button from '../components/ui/Button'
import { Mail, Lock, AlertCircle } from 'lucide-react'

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
`

const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`

const Label = styled.label`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.lightGray};
  pointer-events: none;

  svg {
    width: 18px;
    height: 18px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  padding-left: 44px;
  background: #111111;
  border: 1px solid ${props => props.theme.colors.overlay};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  transition: all ${props => props.theme.transitions.normal};

  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadow.glow};
    outline: none;
  }
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md};
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: ${props => props.theme.radius.md};
  color: #EF4444;
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`

const ForgotPasswordLink = styled(Link)`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  text-align: right;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

const Divider = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.sm};
  margin: ${props => props.theme.spacing.md} 0;
`

const SignupLink = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};

  a {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    transition: color ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.white};
    }
  }
`

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const { error } = await signIn(email, password)

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            navigate('/home')
        }
    }

    return (
        <AuthLayout>
            <Title>Bem-vindo de volta</Title>
            <Subtitle>Entre com sua conta para continuar</Subtitle>

            {error && (
                <ErrorMessage>
                    <AlertCircle />
                    <span>{error}</span>
                </ErrorMessage>
            )}

            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="email">Email</Label>
                    <InputContainer>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputContainer>
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="password">Senha</Label>
                    <InputContainer>
                        <InputIcon>
                            <Lock />
                        </InputIcon>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputContainer>
                </InputGroup>

                <ForgotPasswordLink to="/forgot-password">
                    Esqueceu sua senha?
                </ForgotPasswordLink>

                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </Button>
            </Form>

            <Divider>ou</Divider>

            <SignupLink>
                Não tem uma conta? <Link to="/signup">Criar conta</Link>
            </SignupLink>
        </AuthLayout>
    )
}
