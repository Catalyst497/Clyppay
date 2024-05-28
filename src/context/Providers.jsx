import React from "react"
import { AuthProvider as MyAuthProvider } from "./AuthContext"
import { ModalProvider } from "./ModalContext"

const Providers = ({ children }) => {
    return (
        <MyAuthProvider>
            <ModalProvider>{children}</ModalProvider>
        </MyAuthProvider>
    )
}

export default Providers
