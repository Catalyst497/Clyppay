import { Card } from '@/components/shadcn/Card';
import React from 'react'
import { LiaCoinsSolid } from "react-icons/lia";
import { CiCircleInfo } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";

function ActionBox({icon: Icon,text}) {
  return (
    <div className='bg-muted-lighter rounded-lg flex w-[150px] flex-col'>
        <Icon fill = "none" color = "black" />
        <p>{text}</p>
    </div>
  )
}

export  {ActionBox};


function QuickAction() {
  return (
   <Card className = "flex-wrap">
        <ActionBox icon = {FaSackDollar} text= "Loans"/>
        <ActionBox icon = {LiaCoinsSolid} text= "Large Payouts"/>
        <ActionBox icon = {CiCircleInfo} text= "AI insight"/>
        <ActionBox icon = {CiCreditCard1} text= "Gift Card"/>
    </Card>
  )
}

export  {QuickAction}