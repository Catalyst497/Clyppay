import React from "react"
import useForm from "@/hooks/useForm"
import {
    FormCard,
    CardTitle,
    CardDescription,
    CardHeader,
} from "@/components/shared/shadcn/card"
import clyp from "@/assets/icons/logo_icon.svg"
import checkboxes from "@/assets/images/Checkboxes.svg"
import { Button } from "@/components/shared/shadcn/button"
import { useNavigate } from "react-router-dom"

const Success = ({ title,subtext,linkText, to, next, nextPage }) => {
    const navigate = useNavigate()
 


    return (
        <>
            <CardHeader className="flex flex-col items-center">
                {/* <div className="pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div> */}
                <img src={checkboxes} alt="success" width="150px" />

                <CardTitle className = "text-center pt-10"> {title} </CardTitle>
                <CardDescription className="text-center">
  {subtext}
                </CardDescription>
            </CardHeader>


            <Button
                type="button"
                size="full"
                className="mt-4"
                onClick={ () => nextPage ? next() : navigate(to)}
            >
             {linkText}
            </Button>
        </>
    )
}

export default Success
