import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Clyphub from "./Clyphub";
import HomeTab from "./HomeTab/HomeTab";
import StatisticsTab from "./StatisticsTab";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import ReceiveModal from "@/components/popups/receive/ReceiveModalIndex";
import SendModal from "@/components/popups/send/SendModalIndex";
import BuyModal from "@/components/popups/buy/BuyModalIndex";
import SellModal from "@/components/popups/sell/SellModalIndex";
import SwapModal from "@/components/popups/swap/SwapModalIndex";
import { modalNames } from "@/lib/Constants";
import Modal from "@/components/shared/custom/Modal";

const modalComponents = {
    buyModal: BuyModal,
    sellModal: SellModal,
    sendModal: SendModal,
    receiveModal: ReceiveModal,
    swapModal: SwapModal,
};


export default function Dashboard() {
    const { openModal, setOpenModal } = useModal();


    function handleModalClose() {
        setOpenModal(null);
    }

    function renderModal() {
        const openModalKey = Object.keys(modalNames).find(key => modalNames[key] === openModal);
        if (openModalKey) {
            const ModalComponent = modalComponents[openModalKey];
            if (!ModalComponent) {
                console.error(`No modal component found for key: ${openModalKey}`);
                return null;
            }
            return (
                <Modal
                    isOpen={!!openModal}
                    closeModal={() => handleModalClose()}
                >
                    <ModalComponent />
                </Modal>
            );
        }
        return null;
    }



    return (
        <div className="flex space-x-5">
            <Sidebar />
            <div className="ml-64 p-4  gap-4">
          {openModal && renderModal()}
                <Routes>
                    <Route path="/*" element={<HomeTab />} />
                    <Route path="home/*" element={<HomeTab />} />
                    <Route path="statistics" element={<StatisticsTab />} />
                    <Route path="clyphub" element={<Clyphub />} />
                </Routes>
            </div>
        </div>
    );
}
