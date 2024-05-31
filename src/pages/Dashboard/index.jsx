import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Clyphub from "./Clyphub";
import HomeTab from "./HomeTab/HomeTab";
import StatisticsTab from "./StatisticsTab";
import { useAuth } from "@/context/AuthContext";



export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

  

    return (
        <div className="flex space-x-5">
            <Sidebar />
            <div className="ml-64 p-4  gap-4">
          
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
