import FloatingLabelInput from "@/components/shared/custom/FloatingLabelInput"
import { SelectField } from "@/components/shared/shadcn/select"
import * as Yup from "yup"
import useForm from "@/hooks/useForm"
import { Button } from "@/components/shared/shadcn/button"

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

export function SendForm({next}) {
    
    const onSubmit = async (values, { setErrors }) => {

        next();
        
        // try {
            //   const response = await api.post("/user-gateway/register", values);
            
            //   if (response.status === 201) {
        //     next();
        //     await updateAuthToken(response?.data?.token);
        //   } else {
        //     setErrors({ apiError: response.data.message });
        //   }
        // } catch (error) {
            //   setErrors({ apiError: error.response?.data?.message || "Network error" });
        // }
    };
    const { formik, isSubmitting } = useForm(initialValues, validationSchema, onSubmit);
    


    return (
        <form onClick={formik.handleSubmit} className="w-full">
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
          touched={formik.touched.wallet}

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

            <Button
                type="submit"
                size="full"
                className="mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending Crypto..." : "Send Crypto"}
            </Button>  
        </form>
    )
}

export default SendForm
