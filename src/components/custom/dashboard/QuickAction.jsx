import { Card, CardTitle } from "@/components/shadcn/Card";
import React from "react";
import money from "@/assets/icons/moneybag.svg";
import payout from "@/assets/icons/payout.svg";
import { CiCreditCard1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

function QuickAction() {
  return (
    <Card className="bg-background h-full flex flex-col  items-start p-4">
      <CardTitle> Quick actions </CardTitle>
      <div className="flex mt-2 mb-6 pb-24 gap-5">
        <div className="bg-muted-lighter rounded-xl flex gap-5 flex-col w-[150px] items-center justify-center py-2">
          <img src={money} alt="Loans" />
          <span className="font-bold"> Loans</span>
        </div>

        <div className="bg-muted-lighter rounded-lg flex gap-5 flex-col w-[150px] items-center justify-center py-2">
          <img src={payout} alt="Loans" />
          <span className="font-bold"> Large Payouts</span>
        </div>

        <div className="bg-muted-lighter rounded-lg flex gap-5 flex-col w-[150px] items-center justify-center py-2">
          <CiCircleInfo size={40} />
          <span className="font-bold"> AI Insights</span>
        </div>

        <div className="bg-muted-lighter rounded-lg flex gap-5 flex-col w-[150px] items-center justify-center py-2">
          <CiCreditCard1 size={40} />
          <span className="font-bold"> Gift Card</span>
        </div>
    </div>
      </Card>
  );
}

export { QuickAction };
