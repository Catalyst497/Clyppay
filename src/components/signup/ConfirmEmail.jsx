import {
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import image from "@/assets/images/email_illustration.svg"
import { Button } from "@/components/shared/shadcn/button"

export default function ConfirmEmail({ formData,next }) {

    const handleResendEmail = () => {
        console.log("resend email..")
    }
    const handleSubmit = () => {
        //api request to confirm email.
        next();
    }
    


    return (
        <>
            
                
                    <div className="w-full">
                        <img
                            src={image}
                            alt={"confirm email"}
                            className="w-full md:w-2/3 mx-auto object-contain"
                        />
                    </div>
             
          
          
            <div className="  mt-5 md:mt-0 ">
                <CardHeader className = "text-center lg:text-left" >
                    <CardTitle>Confirm your email</CardTitle>
                    <CardDescription>
                    Input code sent to your email <b>{formData.email}</b>
                    </CardDescription>
                </CardHeader>

                <Button size="full" className={`my-4`} onClick={handleSubmit}>
                    Log in
                </Button>

                <div className="text-center text-sm md:text-sm">
                    <button className="text-primary mr-1" onClick={handleResendEmail}>I didn’t receive </button>
                    <span className=""> any email</span>
                </div>
            </div>
        </>
    )
}
