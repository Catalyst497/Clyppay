import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"

import Clock from "@/assets/icons/Clock.svg"
import { FourDigitPassword } from "@/components/shared/shadcn/inputOtp"
import { useEffect, useState } from "react"
export default function EnterOtp({ formData, next }) {
    const [isSuccessful, setIsSuccessful] = useState(false)
    const [canResendCode, setCanResendCode] = useState(false)
    const [countdown, setCountdown] = useState(30)
    const [resendMessage, setResendMessage] = useState("Resend code in 00:30")

    const handleResendEmail = () => {
        console.log("resend email..")
        setCountdown(30)
        setCanResendCode(false)
    }

    useEffect(() => {
        let timer
        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1)
                setResendMessage(
                    `Resend code in 00:${String(countdown).padStart(2, "0")}`,
                )
            }, 1000)
        } else {
            setCanResendCode(true)
            setResendMessage("Resend code")
        }

        return () => clearTimeout(timer)
    }, [countdown])

    const handleComplete = async (otp) => {
        console.log("checking otp")

        setIsSuccessful(true)
        setResendMessage("Code successful")
        setTimeout(() => {
            next()
        }, 3000)
        // try {
        //   const response = await axios.post("/api/confirm-email", {
        //     email: formData.email,
        //     otp,
        //   });

        //   if (response.status === 200) {
        //     setIsSuccessful(true);
        
        //     setTimeout(() => {
        //       next();
        //     }, 3000);
        //   } else {
        //     // Handle error
        //   }
        // } catch (error) {
        //   console.error("Error confirming email:", error);
        // }
    }

    return (
        <>
            <CardHeader>
                <CardTitle>4 Digit Code</CardTitle>
                <CardDescription>
                    Please enter the code we sent to your email address <br />
                    <b>{formData?.email}</b>
                </CardDescription>
            </CardHeader>

      

            <div className="w-full flex justify-center text-sm md:text-sm">
            <div className="flex w-full justify-center items-center">
            {!canResendCode && !isSuccessful && (  <img src={Clock} className="h-6 w6-6 mr-1" alt="Clock icon" /> )}
            <span>{isSuccessful ? "Code Successful" : resendMessage}</span>
            </div>


             
               
               
          
             
            </div>
        </>
    )
}
