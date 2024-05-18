import { Input, Label, Fieldset } from "@/components/shadcn/FormElements"



export default function InputField({name,type, register,placeholder,onChange,errors}) {
    return (
        <Fieldset>
            <Label className = "capitalize" htmlFor={name}> {name} </Label>
            <Input
                {...register(name)}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className = "mt-2"
            />
            {errors[name] && (
                <span className="text-sm text-red-500">
                    {errors[name].message}
                </span>
            )}
        </Fieldset>
    )
}
