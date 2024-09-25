import { ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'

interface GridContainerProps {
    children: ReactNode
    className?: string
}
export const GridContainer = ({ children, className }: GridContainerProps) => {

    const defaultClass = "w-full mx-auto px-3 max-w-grid"
    const combinedClasses = twMerge(defaultClass, className)
    return (
        <div className={combinedClasses}>{
            children
        }</div>
    )
}