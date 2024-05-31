import { Fieldset } from "@/components/shared/shadcn/formElements"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const FloatingLabelInput = ({
    label,
    name,
    type,
    value, 
    onBlur,
    onChange,
    error,
    touched,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)

   

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    return (
        <Fieldset className="relative mb-5">
            <input
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value} // Bind value attribute to formik value
                onChange={onChange}
                onBlur={onBlur}
                className={`border-1 peer block   w-full appearance-none rounded-full border border-input bg-transparent px-2.5 py-7 pb-2.5 indent-1.5  text-sm  text-black focus:border-border focus:outline-none focus:ring-0  dark:focus:border-blue-500`}
                placeholder=" "
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute top-6 right-0 flex items-center pr-3"
                >
                    {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                    )}
                </button>
            )}
            {touched && error && <p className="text-xs pl-5 pt-2">{error}</p>}
            <label
                htmlFor={name}
                className="absolute start-4 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-input rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
                {label}
            </label>
        </Fieldset>
    )
}
export default FloatingLabelInput
