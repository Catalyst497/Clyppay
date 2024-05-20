import Cards from "@/components/custom/onboarding/Cards"
import Header from "@/components/reusables/Header"
import { Fragment } from "react"
import { Card } from "@/components/shadcn/Card"
import { slides } from "@/pages/Onboarding/data";

function Onboarding() {
    return (
        <Fragment>
            <Header />
            <div className="flex h-[calc(100vh-96px)] justify-center">
                <Card className=" shadow-lg  mt-20 flex h-4/5 w-4/6 justify-center">
                    <div  className="absolute -translate-y-12 h-full w-fit">
                    <Cards slides={slides} />
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}

export default Onboarding
