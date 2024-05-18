import React from "react"
import { cn } from "@/lib/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

const Input = React.forwardRef(
    ({ type, className, placeholder, ...props }, ref) => {
        return (
            <>
                <input
                    type={type}
                    className={cn(
                        "focus-visible:ring-ring flex h-10 w-full rounded-full border border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                    )}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                />
            </>
        )
    },
)
Input.displayName = "Input"

const labelVariants = cva(
    "text-sm pl-2 pb-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName

const fieldsetVariants = cva("mb-4 ")

const Fieldset = React.forwardRef(
    ({ className, children, legend, ...props }, ref) => {
        return (
            <fieldset
                ref={ref}
                className={cn(fieldsetVariants(), className)}
                {...props}
            >
                {legend && (
                    <legend className="text-lg font-medium">{legend}</legend>
                )}
                {children}
            </fieldset>
        )
    },
)
Label.displayName = "Fieldset"

const Checkbox = React.forwardRef(function ({ className, ...props }, ref) {
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "focus-visible:ring-ring peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                className,
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName



export { Label, Checkbox, Input, Fieldset }
