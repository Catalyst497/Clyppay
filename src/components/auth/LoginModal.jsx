import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import InputField from "@/components/ui/InputField"
import { formSchema } from "./Schema";

export default function LoginModal() {
    return (
        <Modal>
            <div className="mx-auto max-w-[90%] md:max-w-[70%] ">
                <CardHeader>
                    <CardTitle>Login your account</CardTitle>
                    <CardDescription>
                        To log in your account with Clyppay, please put in your
                        email address and password in the field below{" "}
                    </CardDescription>
                </CardHeader>

                <InputField
                    name={"email"}
                    type={"email"}
                    register={register}
                    placeholder={"example@gmail.com"}
                    errors={errors}
                />
            </div>
        </Modal>
    )
}
