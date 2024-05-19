import React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg relative  bg-card text-card-foreground shadow-md",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(
  function CardHeader({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 py-3", className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(
  function CardTitle({ className, ...props }, ref) {
    return (
      <h2
        ref={ref}
        className={cn(
          "text-lg md:text-xl relative text-foreground-bold  font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(
  function CardDescription({ className, ...props }, ref) {
    return (
      <p
        ref={ref}
        className={cn("text-sm lg:text-base font-normal", className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(
//   function CardContent({ className, ...props }, ref) {
//     return (
//       <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
//     );
//   }
// );
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef(
//   function CardFooter({ className, ...props }, ref) {
//     return (
//       <div
//         ref={ref}
//         className={cn("flex items-center p-6 pt-0", className)}
//         {...props}
//       />
//     );
//   }
// );
// CardFooter.displayName = "CardFooter";

export { Card, CardTitle, CardDescription, CardHeader }
