import styled, { css } from 'styled-components'

interface ButtonProps {
    $variant?: 'primary' | 'ghost' | 'subtle'
    $uppercase?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  /* Base styles */
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radius.md};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  border: none;
  outline: none;
  
  /* Uppercase opcional */
  ${props => props.$uppercase && css`
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `}

  /* Variant: Primary */
  ${props => props.$variant === 'primary' && css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.black};
    
    &:hover {
      box-shadow: ${props.theme.shadow.glow};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  /* Variant: Ghost */
  ${props => props.$variant === 'ghost' && css`
    background: transparent;
    color: ${props.theme.colors.primary};
    border: 1px solid ${props.theme.colors.primary};
    
    &:hover {
      background: ${props.theme.colors.primary}20;
      box-shadow: ${props.theme.shadow.glow};
    }

    &:active {
      background: ${props.theme.colors.primary}30;
    }
  `}

  /* Variant: Subtle */
  ${props => props.$variant === 'subtle' && css`
    background: ${props.theme.colors.overlay};
    color: ${props.theme.colors.text};
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: ${props.theme.shadow.soft};
    }

    &:active {
      background: rgba(255, 255, 255, 0.15);
    }
  `}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`
