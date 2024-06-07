import React from "react"
import { AuthProvider as MyAuthProvider } from "./AuthContext"
import { ModalProvider } from "./ModalContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const Providers = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <MyAuthProvider>
                <ModalProvider>{children}</ModalProvider>
            </MyAuthProvider>
        </QueryClientProvider>
    )
}

export default Providers
