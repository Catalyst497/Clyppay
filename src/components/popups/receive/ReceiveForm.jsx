import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import { SelectField } from "@/components/shared/shadcn/select"
import * as Yup from "yup"
import useForm from "@/hooks/useForm"
import { Button } from "@/components/shared/shadcn/button"
import { CardTitle } from "@/components/shared/shadcn/card"

const CoinOptions = [
    { value: "coin1", label: "Coin1" },
    { value: "coin2", label: "Coin2" },
]

const NetworkOptions = [
    { value: "network1", label: "Network1" },
    { value: "network2", label: "Network2" },
]

const validationSchema = {
    wallet: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
    coin: Yup.string().required("Required"),
    network: Yup.string().required("Required"),
}

const initialValues = {
    wallet: "",
    amount: "",
    coin: "",
    network: "",
}

export function ReceiveForm({ next, updateFields, prev }) {

    const onSubmit = async (values, { setErrors }) => {
        try {
            updateFields({ ...values })
            console.log(values)
            next();

            return { success: true }
        } catch (error) {
            console.log(error?.response?.data?.details || error?.message)
            setErrors({
                apiError:
                    error?.response?.data?.details ||
                    error?.response?.data?.error ||
                    error?.message ||
                    "Network Error",
            })
            return { success: false }
        }
    }

    const { formik, isSubmitting } = useForm(
        initialValues,
        validationSchema,
        onSubmit,
    )
console.log(formik.values)
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="flex w-full flex-col items-center"
        >
            <CardTitle>Receive Crypto</CardTitle>
            <SelectField
                name="coin"
                value={formik.values.coin}
                onChange={formik.setFieldValue}
                placeholder="choose coin"
                options={CoinOptions}
            />
            <SelectField
                name="network"
                value={formik.values.network}
                onChange={formik.setFieldValue}
                placeholder="choose network"
                options={NetworkOptions}
            />
            <FloatingLabelInput
                name="wallet"
                type="text"
                label="Paste wallet address"
                value={formik.values.wallet}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.wallet}
                touched={formik.touched.wallet}
                className="w-full"
            />
           
          
            <p className="my-4 font-bold">or</p>
            <Button size="full" variant="default">
                Generate QR code
            </Button>
            
        </form>
    )
}

export default ReceiveForm
