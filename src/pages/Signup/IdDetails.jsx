import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import { Button } from "@/components/shared/shadcn/button"

import * as Yup from "yup"
import clyp from "@/assets/icons/logo_icon.svg"
import { Fieldset } from "@/components/shared/shadcn/formElements"
import { Label } from "@radix-ui/react-label"
import { SelectField } from "@/components/shared/shadcn/select"
import { api ,returnApiError} from "@/api/axiosProvider"
import { useCountries } from "@/api/apiQueries/getHooks"
import passport from "@/assets/icons/passport-biometric.svg"
import nationalId from "@/assets/icons/id-card.svg"
import driverLicense from "@/assets/icons/license.svg"
import { RadioGroup, RadioGroupItem } from "@/components/shared/shadcn/radio"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"

// Validation schema for the form
const validationSchema = {
    id_number : Yup.string().required("Required"),
    first_name :  Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    
}

// Initial values for the form
const initialValues = {
    id_number : "",
    first_name : "",
    last_name: "",
}

// Options for the verification methods
const verificationMethods = [
    { icon: nationalId, value: "NIN", label: "National ID Card" },
    { icon: passport, value: "PASSPORT", label: "Passport" },
    { icon: driverLicense, value: "DRIVERS", label: "Driver's License" },
]

const IdDetails = ({ next, prev, updateFields, formData }) => {
    const { data, isLoading, isError } = useCountries()
   
    const onSubmit = async (values, {setErrors}) => {
        console.log(values)
        console.log(data)
        try {
     
            const modifiedData = {
              ...formData,...values
               
            }
            updateFields(modifiedData)
            const response = await api.default.post("/user-gateway/kyc-validation", modifiedData)
           
            console.log(response)
            if ( response?.data.message === "success") {
                // Update the necessary states or perform navigation here
                console.log( response?.data)
                return { success: true }
            } else {
       
               setErrors({ apiError:returnApiError (data) });
                return { success: false }
            }
        } catch (error) {
            setErrors({
                apiError: returnApiError(error),
            })

            return { success: false }
        }
    }

    const { formik, isSubmitting } = useForm(
        initialValues,
        validationSchema,
        onSubmit,
    )


    return (
        <FormCard>
            <CardHeader className="flex flex-col items-center">
                <div className="pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <CardTitle>Complete registration</CardTitle>
                <CardDescription className="">
                    We are required by law to verify your identity by collecting your ID and selfie
                </CardDescription>
            </CardHeader>

            <form onSubmit={formik.handleSubmit}>
                

                <div className="mb-4">
                <FloatingLabelInput
                    name="first_name"
                    type="text"
                    label="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.errors.first_name}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.first_name}
                />
                <FloatingLabelInput
                    name="last_name"
                    type="text"
                    label="Last name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.errors.last_name}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.last_name}
                />
                   
                </div>
               

                <Button
                    type="submit"
                    size="full"
                    className="mt-4"
                    disabled={isSubmitting}
                >
                    Proceed
                </Button>
            </form>
        </FormCard>
    )
}

export default IdDetails
