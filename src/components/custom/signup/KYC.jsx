import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "./useFormLogic"
import SelectField from "@/components/ui/SelectField"
import RadioField from "@/components/ui/RadioField"


export default function KYC({ next, updateFields, formData }) {
    async function onSubmit(data) {
        // Your API call logic here
        updateFields(data)
        console.log(data)
        next()
    }

    const {
        register,
        handleSubmit,
        errors,
        passwordStrength,
        criteria,
        handlePasswordChange,
    } = useFormLogic(onSubmit)

    return (
        <>
            <CardHeader>
                <CardTitle>Complete registration</CardTitle>
                <CardDescription>
                    We are required by law to verify your identity by collecting
                    your ID and selfie
                </CardDescription>
            </CardHeader>

           <SelectField label = "Enter your location" name = "location"/>

          <RadioField />
         

            <Button size="full" className={`mt-4`} onClick={handleSubmit}>
                Proceed
            </Button>

        </>
    )
}
