import { Input, Label, Fieldset } from "@/components/shadcn/Form"

export default function InputField({name,type, register,placeholder,onChange,errors}) {
    return (
        <Fieldset>
            <Label htmlFor={name}> Password </Label>
            <Input
                {...register(name)}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            {errors[name] && (
                <span className="text-sm text-red-500">
                    {errors[name].message}
                </span>
            )}
        </Fieldset>
    )
}
