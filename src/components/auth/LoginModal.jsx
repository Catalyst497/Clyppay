// import { Form } from "@/components/ui/library/Form";
import Modal from "@/components/ui/Modal";
import { CardTitle, CardDescription, CardHeader } from "@/components/ui/library/Card";
import { useForm } from "react-hook-form";
import { z } from "zod"
 

export default function LoginModal(){
    const formSchema = z.object({
      email: 
    })
    const form = useForm()
    return(
        <Modal>
            <div className="max-w-[90%] md:max-w-[70%] mx-auto"> 
            <CardHeader>
                <CardTitle>Login your account</CardTitle>
                <CardDescription>To log in your account with Clyppay, please put in your email address and password in the field below</CardDescription>
            </CardHeader>
            </div>
           
        </Modal>
    )

//   
 
// <FormField
//   control={form.control}
//   name="username"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Username</FormLabel>
//       <FormControl>
//         <Input placeholder="shadcn" {...field} />
//       </FormControl>
//       <FormDescription>This is your public display name.</FormDescription>
//       <FormMessage />
//     </FormItem>
//   )}
// />
  
}