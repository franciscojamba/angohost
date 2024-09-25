import { ComponentProps, forwardRef } from "react";

interface IInputFieldProps extends ComponentProps<'input'> {
    id: string;
    label: string;
    haveError?: boolean;
}

const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
    ({ id, label, haveError, ...inputProps }: IInputFieldProps, ref) => {
        return (
            <div className="inputField w-full sm:w-[300px] bg-transparent">
                <label htmlFor={id} className="text-[rgb(var(--foreground))] text-[0.8rem] font-medium" data-haveerror={haveError}>{label}</label>
                <input
                    id={id}
                    ref={ref} 
                    {...inputProps} 
                    className={`w-full px-3 py-2.5 rounded-lg bg-[var(--background-secondary)] border-[1px] border-solid outline-none text-[0.8rem] ${haveError ? 'border-red-500' : 'border-gray-300'}`}
                    data-haveerror={haveError}
                />
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;