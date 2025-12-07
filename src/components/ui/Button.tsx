import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'subtle'
    uppercase?: boolean
    children: ReactNode
}

export default function Button({
    variant = 'primary',
    uppercase = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <StyledButton
            $variant={variant}
            $uppercase={uppercase}
            {...props}
        >
            {children}
        </StyledButton>
    )
}
