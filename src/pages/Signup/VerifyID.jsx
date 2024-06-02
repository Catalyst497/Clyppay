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
    // Submit handler for the form
    const navigate = useNavigate()
    const onSubmit = async (values) => {

        
        // try {
        //   // Merge the form values with the existing formData
        //   const updatedFormData = { ...formData, ...values }
          
        //   // Perform API call to create the user
        //   console.log(updatedFormData)
        //   const response = await api.post("/register", updatedFormData)

            
        //     // Check if the API call was successful
        //     if (response.status === 200) {
        //         // Proceed to the next step
        //         // next();
        //         await updateAuthToken(response?.data?.token)
        //         navigate("/dashboard")
        //     } else {
        //         // Handle API error
        //         console.error("Error creating user:", response.data.error)
        //         console.log(updatedFormData)
        //         // Display error message to the user
        //         // You can also handle errors by setting formik errors
        //     }
        // } catch (error) {
        //     // Handle network error
        //     console.error("Network error:", error)
        //     // Display error message to the user
        //     // You can also handle errors by setting formik errors
        // }
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
                    <Select
                        name="nationality"
                        options={options}
                        value={options.find(
                            (option) =>
                                option.value === formik.values.nationality,
                        )}
                        onChange={(option) =>
                            formik.setFieldValue("nationality", option.value)
                        }
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.nationality &&
                        formik.touched.nationality && (
                            <div className="text-sm text-red-500">
                                {formik.errors.nationality}
                            </div>
                        )}
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
