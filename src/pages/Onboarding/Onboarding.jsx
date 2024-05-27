import Cards from "@/components/onboarding/Cards"
import { Fragment } from "react"
import { Card } from "@/components/shared/shadcn/card"
import { slides } from "@/pages/Onboarding/data"

function Onboarding() {
    return (
        <div className="flex  justify-center">
            <Card className=" mt-20  flex h-4/5 w-4/6 justify-center shadow-lg">
                <div className="absolute h-full w-fit -translate-y-12">
                    <Cards slides={slides} />
                </div>
            </Card>
        </div>
    )
}

export default Onboarding
