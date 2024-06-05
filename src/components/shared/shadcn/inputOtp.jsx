import React, { useState } from "react";
import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";

const InputOTPSlot = React.forwardRef(
  ({ index, className, isSuccessful, status, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-md border transition-all", // Make boxes completely rounded
          isActive &&
            "z-10 ring-2 ring-black ring-offset-background", // Black ring for active state when not successful
          // Red ring for error
          className
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
    );
  }
);
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTP = React.forwardRef(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50 justify-center my-8", // Center and add margin
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-4", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

const FourDigitPassword = ({
  previouslyFocused,
  onComplete,
  value,
  onChange,
  name,
  isSuccessful,
  error,
  onBlur,
  touched,
  apiError,
  status,
}) => {
  const [focused, setFocused] = useState(false);
  const handleChange = async (value) => {
    await onChange(name, value);
    if (value.length === 4) {
      onComplete(value);
    }
  };

  function handleBlur() {
    setFocused(true); //note this is to correct the behaviour of input-otp which is called when user clicks on the input and when user clicks out
    if (focused) return previouslyFocused();
  }

  return (
    <div>
  
      <InputOTP
        id={name}
        name={name}
        maxLength={4}
        value={value}
        pattern={REGEXP_ONLY_DIGITS}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} isSuccessful={isSuccessful} status={status} />
          <InputOTPSlot index={1} isSuccessful={isSuccessful} status={status} />
          <InputOTPSlot index={2} isSuccessful={isSuccessful} status={status} />
          <InputOTPSlot index={3} isSuccessful={isSuccessful} status={status} />
        </InputOTPGroup>
      </InputOTP>
      {touched && error && (
        <p className="text-xs text-center pl-5  pb-4 text-label">{error}</p>
      )}
      {touched && apiError && (
        <p className="text-xs pl-5 text-center pb-4 text-red-500">{apiError}</p>
      )}
    </div>
  );
};

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  FourDigitPassword,
};
