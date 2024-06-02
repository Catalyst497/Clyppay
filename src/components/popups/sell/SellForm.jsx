import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import { SelectField } from "@/components/shared/shadcn/select"
import * as Yup from "yup"

const CoinOptions = [
    { value: "coin1", label: "Coin1" },
    { value: "coin2", label: "Coin2" },
]

const NetworkOptions = [
    { value: "network1", label: "Network1" },
    { value: "network2", label: "Network2" },
]

const validationSchema = {
    wallet: Yup.string()
        // .email("Must be a valid email address")
        .required("Required"),
    amount: Yup.string().required("Required"),
}

const initialValues = {
    wallet: "",
    amount: "",
}

export function SellForm() {
    return (
        <>
            <SelectField placeholder="choose coin" options={CoinOptions} />
            <SelectField
                placeholder="choose network"
                options={NetworkOptions}
            />
            <FloatingLabelInput
                name="wallet"
                type="text"
                value={formik.values.wallet}
                label="Paste wallet address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.wallet}
            />
            <FloatingLabelInput
                name="amount"
                type="text"
                value={formik.values.amount}
                label="Enter Amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.amount}
            />

            <Button
                type="submit"
                size="full"
                className="mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending Crypto..." : "Send Crypto"}
            </Button>
        </>
    )
}

export default SellForm
