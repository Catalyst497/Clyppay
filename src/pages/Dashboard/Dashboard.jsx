import SignupParent from "@/components/custom/signup/Parent"
import LoginForm from "@/components/custom/login/LoginForm"

export default function Dashboard(){
    return(
<div className="flex flex-col gap-4">
<SignupParent />
<LoginForm />

</div>

    )
}