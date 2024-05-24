import React from "react"
import { QuickAction } from "@/components/custom/dashboard/QuickAction"
import TransactionHistory from "@/components/custom/dashboard/TransactionHistory"
import SwipeCard from "@/components/custom/dashboard/SwipeCard"
import AccountTabs from "@/components/custom/dashboard/AccountTabs"
import Portfolio from "@/components/custom/dashboard/Portfolio"


function HomeTab() {
    return (
        <div  className="flex h-full pb-10 space-x-10"> 
   
            <div className="flex-grow h-full gap-10 flex-col">
                <AccountTabs />
                <SwipeCard />
                <QuickAction />
            </div>
            <Portfolio />
        </div>
    )
}

export default HomeTab
