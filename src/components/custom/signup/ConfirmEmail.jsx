import Modal from "@/components/ui/Modal"
import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/Card"
import image from "@/assets/images/email_illustration.svg"
import { formSchema } from "./Schema"
import { Button } from "@/components/shadcn/Button"
import useFormLogic from "./useFormLogic"

export default function ConfirmEmail({ formData }) {
    const { handleSubmit } = useFormLogic(formSchema)

    return (
        <div className="flex  flex-col justify-between">
            
                
                    <div className="w-full">
                        <img
                            src={image}
                            alt={"confirm email"}
                            className="w-full md:w-2/3 mx-auto object-contain"
                        />
                    </div>
             
          
          
            <div className="text-center mt-5 md:mt-0 lg:text-left ">
                <CardHeader>
                    <CardTitle>Confirm your email</CardTitle>
                    <CardDescription>
                        We just sent you an email to {formData.email}
                    </CardDescription>
                </CardHeader>

                <Button size="full" className={`my-4`} onClick={handleSubmit}>
                    Log in
                </Button>

                <div className=" text-sm md:text-sm">
                    <a className="text-primary mr-1">I didn’t receive </a>
                    <span className=""> any email</span>
                </div>
            </div>
        </div>
    )
}
