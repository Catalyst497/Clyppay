import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import { Button } from "@/components/shared/shadcn/button"
import Select from "react-select"
import countryList from "react-select-country-list"
import * as Yup from "yup"
import clyp from "@/assets/icons/logo_icon.svg"
import { Fieldset } from "@/components/shared/shadcn/formElements"
import { Label } from "@radix-ui/react-label"
import { useNavigate } from "react-router-dom"
import { SelectField } from "@/components/shared/shadcn/select"
import { useEffect,useState } from "react"
import { api, updateAuthToken } from "@/lib/axiosProvider"



// Validation schema for the form
const validationSchema = {
  nationality: Yup.string().required("Required"),
  verificationMethod: Yup.string().required("Required"),
}

// Initial values for the form
const initialValues = {
  nationality: "",
  verificationMethod: "",
}



// Options for the verification methods
const verificationMethods = [
  { value: "passport", label: "Passport" },
    { value: "nationalId", label: "National ID" },
    { value: "driverLicense", label: "Driver's License " },
  ]
  
  const VerifyID = ({ next, prev, updateFields, formData }) => {
    const [countries, setCountries] = useState([])
    // Submit handler for the form
    const navigate = useNavigate()
  
    useEffect( async() => {
        const response = await api.get("/user-gateway/get-available-countries")
        console.log(response)
    }, [])
    
    const onSubmit = async (values, { setErrors }) => {
    //     try {
        
    //         const response = await api.get("/user-gateway/get-available-countries", values)
            
    //         updateFields({...values,id: response?.data?.user.id})
    //         next();
    //         console.log(response.data)

    //         return { success: true }
    //     } catch (error) {
    //         console.log(
    //             error?.response?.data?.details || error?.message, // status and reason
    //         ) // return { success: false, message: error?.message || "Network error" }

    //         setErrors({
    //             apiError:
    //                 error?.response?.data?.details ||error?.response?.data?.error ||
    //                 error?.message ||
    //                 "Network Error",
    //         })
    //         return { success: false }
    //     }
    }

    // Custom hook to handle form state and validation
    const { formik, isSubmitting } = useForm(
        initialValues,
        validationSchema,
        onSubmit,
    )

    // Get country options
    const options = countryList().getData()

    return (
        <FormCard>
            <CardHeader className="flex flex-col items-center">
                <div className="pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <CardTitle>Complete registration</CardTitle>
                <CardDescription className="">
                    We are required by law to verify your identity by collecting
                    your ID and selfie{" "}
                </CardDescription>
            </CardHeader>

            <form onSubmit={formik.handleSubmit}>
                {/* Nationality selection dropdown */}
                <Fieldset>
                    <Label className="">Enter your location</Label>
                </Fieldset>

                <div className="mb-4">
                    <SelectField   placeholder="Select nationality" options={[]} />
                   
                </div>

                {/* Verification method radio buttons */}
                <div className="mb-4">
                    {verificationMethods.map((method) => (
                        <div
                            key={method.value}
                            className="mb-2 flex items-center"
                        >
                            <input
                                type="radio"
                                name="verificationMethod"
                                value={method.value}
                                checked={
                                    formik.values.verificationMethod ===
                                    method.value
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label className="ml-2">{method.label}</label>
                        </div>
                    ))}
                    {formik.errors.verificationMethod &&
                        formik.touched.verificationMethod && (
                            <div className="text-sm text-red-500">
                                {formik.errors.verificationMethod}
                            </div>
                        )}
                </div>

                <Button
                    type="submit"
                    size="full"
                    className="mt-4"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Verifying..." : "Continue"}
                </Button>
            </form>
        </FormCard>
    )
}

export default VerifyID
