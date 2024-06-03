import { Card } from "@/components/shared/shadcn/card"
import React from "react"
import send from "@/assets/icons/send.svg"
import buy from "@/assets/icons/buy.svg"
import receive from "@/assets/icons/receive.svg"
import sell from "@/assets/icons/sell.svg"
import swap from "@/assets/icons/swap.svg"
import { LuEye } from "react-icons/lu"
import { RiEyeCloseLine } from "react-icons/ri"
import DotNavigation from "@/components/shared/custom/DotNavigation"
import { useState } from "react"
import useSlideLogic from "@/hooks/useSlideLogic"
import { useModal } from "@/context/ModalContext"

function SwipeCard() {
    const [index, setCurrIndex] = useState(0)
    const { numSlides, activeIndex, goToNextSlide, goToPrevSlide } =
        useSlideLogic(<Crypto />, <Fiat />)

    const backgroundStyle = {
        backgroundImage: "url(./src/assets/icons/logo_icon.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundOpacity: "0.05",
        zIndex: -1,
    }
    return (
        <Card className="relative my-4 flex h-[60%] w-full flex-col self-end py-4">
            <div className="mx-auto w-[60%]">
                <div className="card-slide">
                    {activeIndex === 0 ? <Crypto /> : <Fiat />}
                </div>
                <div>
                    <DotNavigation
                        activeIndex={activeIndex}
                        numSlides={numSlides}
                    />
                </div>
            </div>
        </Card>
    )
}

export default SwipeCard

function Icon({ text, icon, modalName }) {
    const { setOpenModal } = useModal()

    return (
        <div className="flex items-center justify-center">
            <div
                onClick={() => setOpenModal(modalName)}
                className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-muted-lighter p-4"
            >
                <img className="h-9 w-9" src={icon} alt="icon" />
                <p className="text-foreground-bold mt-1 text-xs font-semibold capitalize">
                    {text}
                </p>
            </div>
        </div>
    )
}

function Crypto() {
    return (
        <>
            <div></div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-light">Total Crypto Balance</p>
                    <h3 className="text-xl font-bold text-primary">
                        0.000007123
                    </h3>
                </div>

                <div>
                    <LuEye size={24} />
                </div>
            </div>

            <div className="mt-2 flex items-center justify-center space-x-5">
                <Icon text="send" icon={send} modalName={"send"} />
                <Icon text="receive" icon={receive} modalName={"receive"} />
                <Icon text="buy" icon={buy} modalName={"buy"} />
                <Icon text="sell" icon={sell} modalName={"sell"} />
                <Icon text="swap" icon={swap} modalName={"swap"} />
            </div>
        </>
    )
}

function Fiat() {
    return (
        <>
            <div></div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-light">Total Crypto Balance</p>
                    <h3 className="text-xl font-bold text-primary">
                        0.000007123
                    </h3>
                    <div>
                        <LuEye size={20} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
                <div className="flex flex-col items-center overflow-hidden rounded-full bg-muted-lightest px-6 py-2">
                    <img className="w-[40px]" src={send} />
                    <p>Send</p>
                </div>
                <div className="flex flex-col items-center overflow-hidden rounded-full bg-muted-lightest px-6 py-2">
                    <img className="w-[40px]" src={receive} />
                    <p>Receive</p>
                </div>
                <div className="flex flex-col items-center overflow-hidden rounded-full bg-muted-lightest px-6 py-2">
                    <img className="w-[40px]" src={send} />
                    <p>Buy</p>
                </div>
                <div className="flex flex-col items-center overflow-hidden rounded-full bg-muted-lightest px-6 py-2">
                    <img className="w-[40px]" src={sell} />
                    <p>Sell</p>
                </div>
                <div className="flex flex-col items-center overflow-hidden rounded-full bg-muted-lightest px-6 py-2">
                    <img className="w-[40px]" src={swap} />
                    <p>Swap</p>
                </div>
            </div>
        </>
    )
}
