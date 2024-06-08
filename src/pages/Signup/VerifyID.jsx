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
import { api, returnApiError } from "@/api/axiosProvider"
import { useCountries } from "@/api/apiQueries/getHooks"
import passport from "@/assets/icons/passport-biometric.svg"
import nationalId from "@/assets/icons/id-card.svg"
import driverLicense from "@/assets/icons/license.svg"
import { RadioGroup, RadioGroupItem } from "@/components/shared/shadcn/radio"
import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"

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
    { icon: nationalId, value: "NIN", label: "National ID Card" },
    { icon: passport, value: "PASSPORT", label: "Passport" },
    { icon: driverLicense, value: "DRIVERS", label: "Driver's License" },
]

const VerifyID = ({ next, prev, updateFields, formData }) => {
    const { data, isLoading, isError } = useCountries()

    const onSubmit = async (values, { setErrors }) => {
        try {
            const modifiedData = {
                identifier: formData.id,
                type: values.verificationMethod,
                country: values.nationality,
                country_id:
                    data?.countries.find((x) => x.name === values.nationality)
                        ?.id || null,
            }
            updateFields((prev) => ({ ...prev, ...modifiedData }))
            next()
            console.log(modifiedData)
        } catch (error) {
            console.error(error)
            setErrors(returnApiError(error))
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
                    We are required by law to verify your identity by collecting
                    your ID and selfie.
                </CardDescription>
            </CardHeader>

            <form onSubmit={formik.handleSubmit}>
                <Fieldset>
                    <Label htmlFor="nationality" className="">
                        Enter your location
                    </Label>
                    <SelectField
                        onChange={formik.setFieldValue}
                        name={"nationality"}
                        placeholder="Select nationality"
                        options={data?.countries}
                        valueKey={"name"}
                        alt={data?.countries?.countryCode}
                        id={data?.countries?.id}
                        isLoading={isLoading}
                        iconKey={"image"}
                    />
                </Fieldset>
                <Fieldset>
                    <Label htmlFor="verificationMethod" className="pt-4">
                        Choose verification method
                    </Label>
                    <RadioGroup
                        value={formik.values.verificationMethod}
                        onValueChange={(value) =>
                            formik.setFieldValue("verificationMethod", value)
                        }
                    >
                        {verificationMethods.map((option) => (
                            <RadioGroupItem
                                key={option.value}
                                value={option.value}
                                imageSrc={option.icon}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                </Fieldset>

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

export default VerifyID
