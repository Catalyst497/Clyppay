import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import Header from "@/components/shared/custom/Header"
import Dashboard from "@/pages/Dashboard"
import Onboarding from "@/pages/Onboarding/Onboarding"
import { headerHeight } from "@/lib/Constants";
import Login from "@/pages/login/Login"


function App() {
    return (
        <Router>
            <Header />
            <div style = {{marginTop:headerHeight ,  minHeight: `calc(100vh - ${headerHeight})`}} className={` flex flex-col  pb-8 md:pb-16`}>
                <Routes>
                    <Route path="/" element={<Navigate to="/onboarding" />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
