import {
    CardTitle,
    CardDescription,
    CardHeader,
    FormCard,
} from "@/components/shared/shadcn/card"
import clyp from "@/assets/icons/logo_icon.svg"
import back from "@/assets/images/back.svg"
import back from "@/assets/images/back.svg"
import { Button } from "@/components/shared/shadcn/button"
import React, { useState } from "react"
export default function UploadDocuments({
    next,
    updateFields,
    formData,
}) {
    function handleCapture() {}

    function handleRetake() {}
    return (
        <FormCard>
            <CardHeader  className="flex flex-col ">
                <div className="pb-5 self-center">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <CardTitle>Upload documents</CardTitle>
                <CardDescription>
                    We are required by law to verify your identity by collecting
                    your ID and selfie
                </CardDescription>
            </CardHeader>

        <div className="flex-col flex items-center">
        <h2 className="text-lg font-semibold text-foreground-bold">Front of ID</h2>
            <p>Take a photo of the back of your ID in full showing all details</p>
        <img src = {front} alt = "Back of ID" className="my-5 w-[300px]"/>

        </div>
            
            <Button size="full" className={`my-4`} onClick={handleCapture}>
                Capture
            </Button>
        </FormCard>
    )
}
