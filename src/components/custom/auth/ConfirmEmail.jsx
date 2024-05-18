import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import image from "@/assets/images/email_illustration.svg"
import { formSchema } from "../signup/Schema"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "../signup/useFormLogic"

export default function ConfirmEmail() {
    const { handleSubmit } = useFormLogic(formSchema)

    return (
        <Modal>
            <div className="flex h-1/2 w-full justify-center overflow-hidden md:h-3/5">
                <div className="grid w-1/2 place-content-center">
                    <img
                        src={image}
                        alt={"confirm email"}
                        className="object-contain"
                    />
                </div>
            </div>
            <CardHeader>
                <CardTitle>Confirm your email</CardTitle>
                <CardDescription>
                    We just sent you an email to Wavestores@gmail.com{" "}
                </CardDescription>
            </CardHeader>

            <Button size="full" className={`my-4`} onClick={handleSubmit}>
                Log in
            </Button>

            <div className="flex w-full justify-center space-x-3">
                <a className="text-primary">I didn’t receive </a>
                <span> any email</span>
            </div>
        </Modal>
    )
}
