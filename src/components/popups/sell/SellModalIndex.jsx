import React, { useState } from "react"
import useMultistepForm from "@/hooks/useMultistepForm"
import Form from "./SellForm"
// import TransactionPin from "@/components/shared/custom/EnterPin"
// import Details from "@/components/shared/custom/Summary"
// import Success from "@/components/shared/custom/Success"
// import Receipt from "@/components/shared/custom/Summary"

// Define the steps of the multi-step form
const steps = [
    (props) => <Form {...props} />,
    // (props) => (
    //     <TransactionPin
    //         title="Create Transaction Pin"
    //         subtext="Create transaction pin to complete transaction."
    //         buttonText="Create Pin"
    //         {...props}
    //     />
    // ),
    // (props) => <Details {...props} />,
    // (props) => (
    //     <Success
    //         {...props}
    //         title="Transaction Successful!"
    //         subtext="Hi Mary, you have successfully sent 0.00005739 BTC"
    //         nextPage={true}
    //         linkText="View Receipt"
    //     />
    // ),
    // (props) => (
    //     <Receipt
    //         {...props}
    //        isReceipt = {true}
    //        status = "success"
    //     />
    // ),
]

function SellModalIndex() {
    const [formData, setFormData] = useState({})

    const updateFields = (fields) => {
        setFormData((prev) => ({ ...prev, ...fields }))
    }

    const { currentStep, goToNextStep, goToPreviousStep } =
        useMultistepForm(steps)

    return (
        <div className="h-full w-full">
            {currentStep({
                updateFields,
                formData,
                next: goToNextStep,
                prev: goToPreviousStep,
            })}
        </div>
    )
}

export default SellModalIndex
