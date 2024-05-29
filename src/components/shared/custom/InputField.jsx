import { Input, Label, Fieldset } from "@/components/shared/shadcn/formElements"

export default function InputField({
    name,
    label,
    type,

    placeholder,
    onChange,
    error,
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
               
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="mt-2"
                // defaultValue  = {defaultValue}
                {...props}
            />
            {error && (
                <span className="text-xs text-muted">
                    {error}
                </span>
            )}
        </Fieldset>
    )
}
