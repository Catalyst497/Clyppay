import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { evaluatePasswordStrength } from "@/lib/passwordStrengthChecker"
import { formSchema } from "./Schema"

const useFormLogic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(formSchema) })

    const [passwordStrength, setPasswordStrength] = useState({
        strength: "Weak",
        color: "red",
    })
    const [criteria, setCriteria] = useState({
        length: false,
        upperCase: false,
        special: false,
    })

    
    async function onSubmit(data) {
        // Your API call logic here
        console.log(data)
        try {
            // const response = await fetch("/api/endpoint", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // })
            // if (!response.ok) {
            //     throw new Error("Network response was not ok")
            // }
            // const result = await response.json()
            
            console.log(result)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    
    const handlePasswordChange = (e) => {
        const password = e.target.value
        const result = evaluatePasswordStrength(password)

        setPasswordStrength(result)

        const hasUpperCase = /[A-Z]/.test(password)
        const hasSpecialChar = /[!@#$%^&*]/.test(password)

        setCriteria({
            length: password.length >= 8,
            upperCase: hasUpperCase,
            special: hasSpecialChar,
        })
    }

    
    return {
        register,
        errors,
        passwordStrength,
        criteria,
        handlePasswordChange,
        handleSubmit: handleSubmit(onSubmit),

    }
}

export default useFormLogic
