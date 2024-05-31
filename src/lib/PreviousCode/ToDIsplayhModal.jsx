import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Clyphub from "./Clyphub";
import HomeTab from "./HomeTab/HomeTab";
import StatisticsTab from "./StatisticsTab";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import LoginForm from "@/components/login/LoginForm";
import ForgotForm from "@/components/forgot/ForgotForm";
import SignupForm from "@/components/signup/SignupForm";
import ResetForm from "@/components/reset/ResetForm";
import Modal from "@/components/shared/custom/Modal"; // Adjust the import path as necessary

const modalComponents = {
    loginModal: LoginForm,
    signupModal: SignupForm,
    forgotModal: ForgotForm,
    resetModal: ResetForm,
};

export default function Dashboard() {
    const { user } = useAuth();
    const { setOpenModals, openModals } = useModal();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            setOpenModals((prev) => ({ ...prev, loginModal: true }));
        }
    }, [user, setOpenModals]);

    function handleModalClose(modalName) {
        setOpenModals((prev) => ({ ...prev, [modalName]: false }));
        if (modalName === 'loginModal') {
            navigate("/onboarding");
        }
    }

    function renderModal() {
        const openModalKey = Object.keys(openModals).find(key => openModals[key]);
        if (openModalKey) {
            const ModalComponent = modalComponents[openModalKey];
            if (!ModalComponent) {
                console.error(`No modal component found for key: ${openModalKey}`);
                return null;
            }
            return (
                <Modal
                    isOpen={openModals[openModalKey]}
                    closeModal={() => handleModalClose(openModalKey)}
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
                {renderModal()}
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
