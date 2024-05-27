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


function App() {
    return (
        <Router>
            <Header />
            <div style = {{marginTop:headerHeight }} className={` pb-8 md:pb-16`}>
                <Routes>
                    <Route path="/" element={<Navigate to="/onboarding" />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
