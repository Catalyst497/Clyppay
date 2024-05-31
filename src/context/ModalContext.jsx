import React, { createContext, useState, useContext } from "react"
const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <ModalContext.Provider
            value={{
                openModal,
                setOpenModal,
                setIsSidebarOpen,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
