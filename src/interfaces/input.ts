

export interface InputProps {
    text?: string
    placeholder: string
    hasLabel?: boolean
    type?: 'text' | 'password' | 'number' | 'date' | 'datetime' | 'color' | 'file'
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    name: string
    value: string
}