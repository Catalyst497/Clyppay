import React from "react"
import { QuickAction } from "@/components/dashboard/QuickAction"

import SwipeCard from "@/components/dashboard/SwipeCard"
// import TransactionHistory from "@/components/dashboard/TransactionHistory"

import Portfolio from "@/components/dashboard/Portfolio"
import { useAuth } from "@/context/AuthContext"
import { ButtonPill } from "@/components/shared/shadcn/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shared/shadcn/tabs"

function HomeTab() {
    const { user } = useAuth()

    return (
        <Tabs defaultValue="account" className="w-full">
            <h2 className="pb-2 text-lg">Hello {user?.name ?? "User"}</h2>
            <TabsList className="flex space-x-5">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
       
                <div className="grid grid-cols-2 space-x-10 pb-10">
                    <div className="col-span-1">
                        {" "}
                        <div>
                  
                            <SwipeCard />{" "}
                        </div>
                        <div className="">
                            <QuickAction />
                        </div>{" "}
                    </div>
                    <div className="col-span-1 max-w-md">
                        {" "}
                        <Portfolio />{" "}
                    </div>{" "}
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default HomeTab
