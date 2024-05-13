// // import { Form } from "@/components/ui/library/Form";
// import Modal from "@/components/ui/Modal"
// import {
//     CardTitle,
//     CardDescription,
//     CardHeader,
// } from "@/components/ui/library/Card"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Input } from "@/components/ui/library/Input"
// import { zodResolver } from "@hookform/resolvers/zod";

// export default function SignupModal() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         setError,
//     } = useForm({
//         resolver: zodResolver(UserSchema), 
//       })

//     const onSubmit = async (data) => {
//         console.log("SUCCESS", data)
//     }
//     const formSchema = z.object({
//         email: z.string().email(),
//         password: z
//             .string()
//             .min(8, { message: "Password is too short" })
//             .max(20, { message: "Password is too long" }),
//     })
//     const form = useForm()
//     return (
//         <Modal>
//             <div className="mx-auto max-w-[90%] md:max-w-[70%]">
//                 <CardHeader>
//                     <CardTitle>Create your account</CardTitle>
//                     <CardDescription>
//                     To create an account with Clyppay, please put in your email address in the field below
//                     </CardDescription>
//                 </CardHeader>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="col-auto grid">
//                     <h1 className="mb-4 text-3xl font-bold">
//                         Zod & React-Hook-Form
//                     </h1>
//                     <FormField
//                         type="email"
//                         placeholder="Email"
//                         name="email"
//                         register={register}
//                         error={errors.email}
//                     />
//                 </div>
//             </form>
//         </Modal>
//     )

//     //

//     // <FormField
//     //   control={form.control}
//     //   name="username"
//     //   render={({ field }) => (
//     //     <FormItem>
//     //       <FormLabel>Username</FormLabel>
//     //       <FormControl>
//     //         <Input placeholder="shadcn" {...field} />
//     //       </FormControl>
//     //       <FormDescription>This is your public display name.</FormDescription>
//     //       <FormMessage />
//     //     </FormItem>
//     //   )}
//     // />
// }
