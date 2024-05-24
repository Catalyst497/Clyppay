import React from "react";
import { QuickAction } from "@/components/custom/dashboard/QuickAction";

import SwipeCard from "@/components/custom/dashboard/SwipeCard";
import AccountTabs from "@/components/custom/dashboard/AccountTabs";
import TransactionHistory from "@/components/custom/dashboard/TransactionHistory";

import Portfolio from "@/components/custom/dashboard/Portfolio";

function HomeTab() {
  return (
    <div className="flex h-[calc(100vh-96px)] pb-10 space-x-10">
      <div className="flex-grow h-[100%] gap-10 flex-col">
      <div className="h-[50%]">
        {" "}
        <AccountTabs />
        <SwipeCard />
      </div>

      <div className="">
        <QuickAction />
      </div>
    </div>
      <Portfolio />
    </div>
  );
}

export default HomeTab;
