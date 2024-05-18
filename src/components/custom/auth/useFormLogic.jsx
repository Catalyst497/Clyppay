import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { evaluatePasswordStrength } from "@/lib/passwordStrengthChecker"

const useFormLogic = (formSchema, onSubmit) => {
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
        handleSubmit,
    }
}

export default useFormLogic
