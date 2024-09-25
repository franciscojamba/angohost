import { ButtonProps } from "../interfaces/button"

const Button = ({ label, className, onClick, type = "submit", isLoading = false, LoadingComponent, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} {...props} type={type} disabled={isLoading} className={`w-full font-[0.9rem] text-color-cards bg-gradient-primary border-none leading-none flex items-center justify-center transition ease-in-out delay-150 ${className} `} >
            {isLoading ? <LoadingComponent  /> : label}
        </button>
    )
}

// color="#fff"

export default Button