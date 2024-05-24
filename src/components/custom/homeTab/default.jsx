import { QuickAction } from "@/components/custom/dashboard/QuickAction";

import SwipeCard from "@/components/custom/dashboard/SwipeCard";
import AccountTabs from "@/components/custom/dashboard/AccountTabs";

export default function Default() {
  return (
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
  );
}
