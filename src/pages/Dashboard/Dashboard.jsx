import SignupParent from "@/components/custom/signup/SignupParent"
import LoginForm from "@/components/custom/login/LoginForm"
import ForgotParent from "@/components/custom/forgot/ForgotParent"
import ResetForm from "@/components/custom/reset/ResetForm"

export default function Dashboard(){
    return(
<div className="flex flex-col gap-4">
<SignupParent />
<LoginForm />
<ForgotParent />
<ResetForm />

</div>

    )
}