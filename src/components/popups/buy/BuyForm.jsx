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

const CurrencyOptions = [
    { value: "currency1", label: "currency1" },
    { value: "currency2", label: "currency2" },
]

const validationSchema = {
    coin: Yup.string().required("Required"),
    currency: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
}

const initialValues = {
    coin: "",
    currency: "",
    amount: "",
}

export function BuyForm({ next, updateFields, prev }) {

    const onSubmit = async (values, { setErrors }) => {
        // try {
        //     updateFields({ ...values })
        //     console.log(values)
        //     next();

        //     return { success: true }
        // } catch (error) {
        //     console.log(error?.response?.data?.details || error?.message)
        //     setErrors({
        //         apiError:
        //             error?.response?.data?.details ||
        //             error?.response?.data?.error ||
        //             error?.message ||
        //             "Network Error",
        //     })
        //     return { success: false }
        // }
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
            <CardTitle>Buy Crypto</CardTitle>
            <SelectField
                name="coin"
                value={formik.values.coin}
                onChange={formik.setFieldValue}
                placeholder="choose coin"
                options={CoinOptions}
            />
            <SelectField
                name="currency"
                value={formik.values.currency}
                onChange={formik.setFieldValue}
                placeholder="choose rate currency"
                options={CurrencyOptions}
            />
          
            <FloatingLabelInput
                name="amount"
                type="text"
                value={formik.values.amount}
                label="Enter Amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.amount}
                touched={formik.touched.amount}
            />
            <Button size="full" variant="disabled" className="font-bold">
                Amount to be sent after fee is deducted
            </Button>
      
      <div         className="mt-10 w-full">
      <Button
                type="submit"
                size="full"
                
        
                disabled={isSubmitting}
            >
               Pay with Fiat Account 
            </Button>
            <Button size="full" variant="ghost" className="mt-4">
            Pay with Bank Transfer
            </Button>
      </div>
           
        </form>
    )
}

export default BuyForm
