import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import Sidebar from "@/components/custom/dashboard/Sidebar"
import Clyphub from "./Clyphub"
import HomeTab from "./HomeTab"
import StatisticsTab from "./StatisticsTab"
import Header from "@/components/reusables/Header"

export default function Dashboard() {
    return (
        <div
            className="bg-muted-lightest
"
        >
            <Header />
            <div className="flex space-x-5">
                <Sidebar />
                <div className="ml-64 flex-grow p-4">
                    {" "}
                    {/* Adjusting margin and adding padding */}
                    <Routes>
                        <Route path="/" element={<HomeTab />} />
                        <Route path="home" element={<HomeTab />} />
                        <Route path="statistics" element={<StatisticsTab />} />
                        <Route path="clyphub" element={<Clyphub />} />
                    </Routes>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
