export interface ButtonProps {
    label: string
    onClick?: () => void,
    className?: string
    type?: 'submit' | 'reset' | 'button',
    isLoading?: boolean
    LoadingComponent?: any
}