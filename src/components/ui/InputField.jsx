import { Input, Label, Fieldset } from "@/components/shadcn/FormElements"

export default function InputField({
    name,
    label,
    type,
    register,
    placeholder,
    onChange,
    errors,
    defaultValue,
    ...props
}) {
    return (
        <Fieldset>
            <Label className="capitalize" htmlFor={name}>
                {" "}
                {label ? label : name}{" "}
            </Label>
            <Input
                {...register(name)}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="mt-2"
                // defaultValue  = {defaultValue}
                {...props}
            />
            {errors[name] && (
                <span className="text-sm text-red-500">
                    {errors[name].message}
                </span>
            )}
        </Fieldset>
    )
}
