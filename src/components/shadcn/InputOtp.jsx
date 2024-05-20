"use client"

import * as React from "react"
import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS } from "input-otp"
import { Dot } from "lucide-react"
import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef(
    ({ className, containerClassName, ...props }, ref) => (
        <OTPInput
            ref={ref}
            containerClassName={cn(
                "flex items-center gap-2 has-[:disabled]:opacity-50 justify-center my-8", // Center and add margin
                containerClassName,
            )}
            className={cn("disabled:cursor-not-allowed", className)}
            {...props}
        />
    ),
)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
        {...props}
    />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef(
    ({ index, className, isSuccessful, ...props }, ref) => {
        const inputOTPContext = React.useContext(OTPInputContext)
        const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-md border transition-all", // Make boxes completely rounded
                    isActive &&
                        !isSuccessful &&
                        "z-10 ring-2 ring-black ring-offset-background", // Black ring for active state when not successful
                    isSuccessful && "border-green-700", // Green border if successful
                    className,
                )}
                {...props}
            >
                {char}
                {hasFakeCaret && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                    </div>
                )}
            </div>
        )
    },
)
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
        <Dot />
    </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

const FourDigitPassword = ({ onComplete, isSuccessful }) => {
    const handleChange = (value) => {
        if (value.length === 4) {
            onComplete(value)
        }
    }
    return (
        <InputOTP
            maxLength={4}
            pattern={REGEXP_ONLY_DIGITS}
            onChange={handleChange}
        >
            <InputOTPGroup>
                <InputOTPSlot index={0} isSuccessful={isSuccessful} />
                <InputOTPSlot index={1} isSuccessful={isSuccessful} />
                <InputOTPSlot index={2} isSuccessful={isSuccessful} />

                <InputOTPSlot index={3} isSuccessful={isSuccessful} />
            </InputOTPGroup>
        </InputOTP>
    )
}
export {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
    FourDigitPassword,
}
