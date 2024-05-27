import React from "react";
import { QuickAction } from "@/components/dashboard/QuickAction";

import SwipeCard from "@/components/dashboard/SwipeCard";
import AccountTabs from "@/components/dashboard/AccountTabs";
import TransactionHistory from "@/components/dashboard/TransactionHistory";

import Portfolio from "@/components/dashboard/Portfolio";

function HomeTab() {
  return (
    <div className="grid grid-cols-2 pb-10 space-x-10">

      <div className="col-span-1">
      
        {" "}
      <div>
       <AccountTabs />
        <SwipeCard />
      </div>

      <div className="">
        <QuickAction />
      </div>
    </div>

 <div className="col-span-1 max-w-md">
      <Portfolio  />
 </div>
    </div>
  );
}

export default HomeTab;
