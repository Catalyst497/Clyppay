import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput";
import { SelectField } from "@/components/shared/shadcn/select";
import * as Yup from "yup";
import useForm from "@/hooks/useForm";
import { Button } from "@/components/shared/shadcn/button";
import { CardTitle } from "@/components/shared/shadcn/card";

const CoinOptions = [
    { value: "coin1", label: "Coin1" },
    { value: "coin2", label: "Coin2" },
];

const NetworkOptions = [
    { value: "network1", label: "Network1" },
    { value: "network2", label: "Network2" },
];

const validationSchema = {
    wallet: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
    coin: Yup.string().required("Required"),
    network: Yup.string().required("Required"),
};

const initialValues = {
    wallet: "",
    amount: "",
    coin: "",
    network: "",
};

export function SendForm({ next, updateFields, prev }) {
    console.log(next,updateFields, prev)
    const onSubmit = async (values, { setErrors }) => {
        try {
            updateFields({ ...values });
            console.log(values)
            // next();
            
            return { success: true };
        } catch (error) {
            console.log(
                error?.response?.data?.details || error?.message
            );
            setErrors({
                apiError:
                    error?.response?.data?.details ||error?.response?.data?.error ||
                    error?.message ||
                    "Network Error",
            })
            return { success: false };
        }
    };

    const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);

    return (
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
            <CardTitle>Send Crypto</CardTitle>
            <SelectField placeholder="choose coin" options={CoinOptions} />
            <SelectField placeholder="choose network" options={NetworkOptions} />
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
            <p className="font-bold my-4">or</p>
            <Button size="full" variant="outline">
                Scan QR code
            </Button>
            <Button
                type="submit"
                size="full"
                className="mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending Crypto..." : "Send Crypto"}
            </Button>
        </form>
    );
}

export default SendForm;
