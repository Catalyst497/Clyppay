import Card from "../ui/Card";
import banking from "../../assets/agency-banking.svg";
import watch from "../../assets/watch_tutorial.svg";
import easy from "../../assets/easy_to_use.svg";
import savings from "../../assets/savings.svg";
import secure from "../../assets/Data_security.svg";
import assets from "../../assets/assets.svg";

import { useState } from "react";

function Cards() {
  const slides = [
    {
      id: 1,
      image: banking,
      title: "Crypto Agency Banking",
      body: "Receive cash payment for your crypto from POS point",
    },
    {
      id: 2,
      image: assets,
      title: "Trade and Swap Crypto Assets",
      body: "RBuy,sell and swap your crypto assets",
    },
    {
      id: 3,
      image: savings,
      title: "Cryptocurrency Savings",
      body: "Receive cash payment for your crypto from POS point",
    },
    {
      id: 4,
      image: secure,
      title: "Secure Marketplace",
      body: "Receive cash payment for your crypto from POS point",
    },
    {
      id: 5,
      image: easy,
      title: "Easy to use",
      body: "Receive cash payment for your crypto from POS point",
    },
    {
      id: 6,
      image: watch,
      title: "Watch tutorial",
      body: "Receive cash payment for your crypto from POS point",
    },
  ];

  return (
    <div className="grid place-items-center h-screen">
      <Card slides={slides} />
    </div>
  );
}

export default Cards;
