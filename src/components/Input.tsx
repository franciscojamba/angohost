
import { InputProps } from './../interfaces/input';

const Input = ({ hasLabel, name, type, placeholder, className, text, value, onChange }: InputProps) => {
    return (
        <div className={`w-full flex flex-col gap-2 ${className}`}>
            {hasLabel && <label
                className='w-full  text-black text-[14px]'
                htmlFor={name}
            >{text}</label>
            }
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='p-3 text-[12px] border rounded-lg'
            />
        </div>
    )
}


export default Input