import React, { useState } from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import { Button } from "@/components/shared/shadcn/button"
import * as Yup from "yup"
import { FourDigitPassword } from "@/components/shared/shadcn/inputOtp"
import clyp from "@/assets/icons/logo_icon.svg"
import { api, updateAuthToken } from "@/api/axiosProvider"
import { useAuth } from "@/context/AuthContext"
import { activateUser, resetUser } from "@/api/apiRequests"

const summary = {
    network: "BSC",
    Address: "0sbfcjh879839239iihkshnc89w90euydhios909",
    Amount: "0.00005750 BTC",
    Fee: "0.00000011 BTC",
    Source: "Crypto Wallet",
    Date: "12-05-2024 | 09:33:00",
}

const Summary = ({ isReceipt = false,status,title }) => {
    // State to track OTP verification status
    const { setUser } = useAuth()

    // Submit handler for the OTP form (when user submits each step)

    const onSubmit = async (values, formik) => {
        // try {
        //     console.log("submitting..")
        //     next()

        //     // const data = response?.data
        //     // console.log(response)
        //     // if (data?.message === "success") {
        //     //     //sets token, verified status, success status and sets user in state
        //     //     setIsVerified(true)
        //     //     setUser(data?.user_data)
        //     //     formik.setStatus("success")
        //     //     updateAuthToken(data?.token)
        //     //     next()
        //     //     return { success: true }
        //     // } else {
        //     //     console.log(data)
        //     //     formik.setStatus("failed")
        //     //     formik.setErrors({ apiError: data?.details })
        //     //     return {
        //     //         success: false,
        //     //     }
        //     // }
        // } catch (error) {
        //     console.log(error)
        //     console.log(error?.response?.data?.error)
        //     formik.setStatus("failed")
        //     formik.setErrors({
        //         apiError:
        //             error?.response?.data?.details ||
        //             error?.response?.data?.error ||
        //             error?.message ||
        //             "Network Error",
        //     })
        //     return { success: false }
        // }
    }

    // Custom hook to handle form state and validation
    const successButtonStyles = 'bg-[#D6FFE2] text-[#008F2D]'
    const failureButtonStyles = 'bg-red-200 text-red-500'

    return (
        <div className="flex h-full flex-col justify-between">
            <CardHeader className="mt-5 flex flex-col items-center">
                <CardTitle className="text-center">
                  {!isReceipt  &&  title}  
                  {isReceipt  &&  status === "success" ?  "Transaction Success" : "Transaction Failure"}	  
                </CardTitle>
                {isReceipt && <button className= {`rounded-full py-2 px-6 text-xs ${ status === "success" ? successButtonStyles : failureButtonStyles}`} >{status}</button>}
                <b className="text-2xl font-bold">-0.00005739 BTC</b>
            </CardHeader>

            <ul className="pb-10">
                {Object.entries(summary).map(([key, value]) => (
                    <li key={key} className="mb-2 flex justify-between flex-wrap">
                        <span className="capitalize">{key}</span> <b>{value}</b>
                    </li>
                ))}
            </ul>

            {/* Render success message if OTP verified */}
            <Button
                size="full"
                className="mb-2 capitalize"
                // disabled={!isVerified}
                // onClick={formik.handleSubmit}
            >
                {isReceipt ? "Share receipt" : "Send crypto"}
            </Button>
        </div>
    )
}

export default Summary
