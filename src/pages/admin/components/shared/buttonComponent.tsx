import { ComponentProps } from "react";
import { TailSpin } from "react-loader-spinner";

interface IIButtonComponentProps extends ComponentProps<'button'> {
    isLoading?: boolean;
    children: React.ReactNode
}

export default function ButtonComponent({ children, isLoading, ...IButtonComponentProps }: IIButtonComponentProps) {
    return (
        <button {...IButtonComponentProps} disabled={isLoading} className="bg-[var(--primary)] mt-2 rounded-lg w-full h-[42px] flex items-center justify-center text-[0.8rem] text-[rgb(var(--background))]">{isLoading ? <TailSpin color="rgb(var(--background))" width={18}/> : children}</button>
    )
}