import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import InputField from "@/components/ui/InputField"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "./useFormLogic"

export default function IdCardForm({ next, updateFields, formData, cardType }) {
    async function onSubmit(data) {
        // Your API call logic here
        console.log("login")
        updateFields(data)
        next();
    }

    const {
        register,
        handleSubmit,
        errors,
    } = useFormLogic(onSubmit)

    return (
        <>
            <CardHeader className = "pb-10">
                <CardTitle>National ID Card</CardTitle>
                <CardDescription>
                Please enter the field below                </CardDescription>
            </CardHeader>

            <InputField
            label = "National Id Number"
                name="idnumber"
                type="text"
                register={register}
                placeholder=""
                defaultValue={formData.idnumber || ""} // Prefill with existing form data
                errors={errors}
            />
            <InputField
                name="firstname"
                label = "First name"
                type="text"
                register={register}
                placeholder=""
                defaultValue={formData.firstname || ""} // Prefill with existing form data
                errors={errors}
            />
            <InputField
                name="lastname"
                label = "last name"
                type="text"
                register={register}
                placeholder=""
                defaultValue={formData.lastname || ""} // Prefill with existing form data
                errors={errors}
            />
         

        <p className="py-5">On clicking continue, you will be prompted to use your camera to capture a selfie of yourself and to provide your govt. issued ID for your account verification</p>
           {/*  */}


            {/* <Button size="full" className={`mt-4`} onClick={handleSubmit}>
                Capture
            </Button> */}
            <Button size="full" className={`mt-4`} onClick={onSubmit}>
                Capture
            </Button>

         
        </>
    )
}
