import { Card } from "@/components/shared/shadcn/card";
import React from "react";
import send from "@/assets/icons/send.svg";
// import buy from "@/assets/icons/send.svg"
import receive from "@/assets/icons/receive.svg";
import sell from "@/assets/icons/sell.svg";
import swap from "@/assets/icons/swap.svg";
import { LuEye } from "react-icons/lu";
import { RiEyeCloseLine } from "react-icons/ri";
import DotNavigation from "@/components/shared/custom/DotNavigation";
import { useState } from "react";
import useSlideLogic from "@/hooks/useSlideLogic";

function SwipeCard() {
  const [index, setCurrIndex] = useState(1);
  const { numSlides, activeIndex, goToNextSlide, goToPrevSlide } =
    useSlideLogic(<Crypto />, <Fiat />);

  const backgroundStyle = {
    backgroundImage: "url(./src/assets/icons/logo_icon.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundOpacity: "0.05",
    zIndex: -1,
  };
  return (
    <Card className="flex flex-col self-end relative h-[60%] my-4 w-full py-4">
      <div className="mx-auto w-[60%]">
        <div className="card-slide">
          {activeIndex === 0 ? <Crypto /> : <Fiat />}
        </div>
        <div>
          <DotNavigation activeIndex={activeIndex} numSlides={numSlides} />
        </div>
      </div>
    </Card>
  );
}

export default SwipeCard;

function Crypto() {
  return (
    <>
      <div></div>
      <div className="flex items-center justify-between">
        <div>
       
          <p className="text-sm font-light">Total Crypto Balance</p>
          <h3 className="text-xl font-bold text-primary">0.000007123</h3>
          </div>
         
          <div>
            <LuEye size={24} />
          </div>
       
      </div>

      <div className="flex items-center justify-center space-x-5">
        <div className="bg-muted flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          {/* <img className="w-[40px]" src={send} /> */}
          <p>Send</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          {/* <img className="w-[40px]" src={receive} /> */}
          <p>Receive</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          {/* <img className="w-[40px]" src={send} /> */}
          <p>Buy</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          {/* <img className="w-[40px]" src={sell} /> */}
          <p>Sell</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          {/* <img className="w-[80px]" src={swap} /> */}
          <p>Swap</p>
        </div>
      </div>
    </>
  );
}

function Fiat() {
  return (
    <>
      <div></div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-light">Total Crypto Balance</p>
          <h3 className="text-xl font-bold text-primary">0.000007123</h3>
          <div>
            <LuEye size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          <img className="w-[40px]" src={send} />
          <p>Send</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          <img className="w-[40px]" src={receive} />
          <p>Receive</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          <img className="w-[40px]" src={send} />
          <p>Buy</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          <img className="w-[40px]" src={sell} />
          <p>Sell</p>
        </div>
        <div className="bg-muted-lightest flex flex-col items-center overflow-hidden rounded-full px-6 py-2">
          <img className="w-[40px]" src={swap} />
          <p>Swap</p>
        </div>
      </div>
    </>
  );
}
