import { QuickAction } from "@/components/dashboard/QuickAction";

import SwipeCard from "@/components/dashboard/SwipeCard";
import AccountTabs from "@/components/dashboard/AccountTabs";

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
