import {
    CardTitle,
    CardDescription,
    CardHeader,
    FormCard,
} from "@/components/shared/shadcn/card"
import clyp from "@/assets/icons/logo_icon.svg"
import front from "@/assets/images/front.svg"
import { Button } from "@/components/shared/shadcn/button"
import React, { useState } from "react"
export default function UploadDocuments({
    next,
    updateFields,
    formData,
    title,
    subtext,
    imageBody,
    imageTitle,
    image,
}) {
    function handleCapture() {
        next()
    }

    function handleRetake() {}
    return (
        <FormCard>
            <CardHeader className="flex flex-col ">
                <div className="self-center pb-5">
                    <img src={clyp} alt="Clyp" width="40px" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                   {subtext}
                </CardDescription>
            </CardHeader>

            <div className="flex flex-col items-center">
                <h2 className="text-lg font-semibold text-foreground-bold">
                    {imageTitle}
                </h2>
                <p>
                    {imageBody}
                </p>
                <img src={image} alt={imageTitle} className="my-5 w-[300px]" />
            </div>

            <Button size="full" className={`my-4`} onClick={handleCapture}>
                Capture
            </Button>
        </FormCard>
    )
}
