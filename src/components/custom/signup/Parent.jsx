import useMultistepForm from "@/hooks/useMultistepForm"
import { useState } from "react"


const steps = []
export default function Parent(){
    const [formData,setFormData] = useState({

    });

    const updateFields = (fields) => (
        setFormData((prev)=> ({...prev,...fields}))
    )
    const {currentStep} = useMultistepForm(steps)

    return(
        <>
          
        </>
    )
}