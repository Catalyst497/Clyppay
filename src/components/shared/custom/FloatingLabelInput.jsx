import { Input, Label, Fieldset } from "@/components/shared/shadcn/formElements"



export default function FloatingLabelInput({
    label, type, name, value, onChange,
    error,
    ...props
}) {
    return (
        <Fieldset className="relative">
            <Label className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          value ? '-translate-y-4 scale-75' : ''
        }`} htmlFor={name}>
                {" "}
                {label ? label : name}{" "}
            </Label>
            <Input
               
                name={name}
                type={type}
                onChange={onChange}
                className="mt-2 bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                // defaultValue  = {defaultValue}
                {...props}
            />
            {error && (
                <span className="text-sm text-input">
                    {error}
                </span>
            )}
        </Fieldset>
    )
}





