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

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Navigate to="/onboarding" />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default App
