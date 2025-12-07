import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../layout/AuthLayout'
import Button from '../components/ui/Button'
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'

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

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md};
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: ${props => props.theme.radius.md};
  color: #22C55E;
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setSuccess(false)
        setLoading(true)

        const { error } = await resetPassword(email)

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            setSuccess(true)
            setLoading(false)
        }
    }

    return (
        <AuthLayout>
            <Title>Recuperar senha</Title>
            <Subtitle>
                Digite seu email e enviaremos um link para redefinir sua senha
            </Subtitle>

            {error && (
                <ErrorMessage>
                    <AlertCircle />
                    <span>{error}</span>
                </ErrorMessage>
            )}

            {success && (
                <SuccessMessage>
                    <CheckCircle />
                    <span>
                        Email enviado! Verifique sua caixa de entrada.
                    </span>
                </SuccessMessage>
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

                <Button variant="primary" type="submit" disabled={loading || success}>
                    {loading ? 'Enviando...' : 'Enviar link de recuperação'}
                </Button>
            </Form>

            <BackLink to="/login">
                <ArrowLeft />
                Voltar para login
            </BackLink>
        </AuthLayout>
    )
}
