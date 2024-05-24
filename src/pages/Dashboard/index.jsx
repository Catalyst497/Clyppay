import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from "@/components/custom/Sidebar";
import Clyphub from "./Clyphub";
import HomeTab from "./HomeTab";
import StatisticsTab from "./StatisticsTab";

export default function Dashboard() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "200px", padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<HomeTab />} />
                    <Route path="home" element={<HomeTab />} />
                    <Route path="statistics" element={<StatisticsTab />} />
                    <Route path="clyphub" element={<Clyphub />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    );
}
