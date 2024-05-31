import { Link, useNavigate } from "react-router-dom";
import {Analytics01Icon} from "hugeicons-react";
import { GrAppsRounded } from "react-icons/gr";


import { GrPower } from "react-icons/gr";


import { TiHome } from "react-icons/ti";


function MenuItem({ to, tabName, icon: Icon }) {
    return (
        <Link to={to} className="flex items-center space-x-3 p-2 hover:text-primary  rounded-md">
            <Icon className="w-6 h-6" />
            <span className="hover:text-primary">{tabName}</span>
        </Link>
    );
}

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add your logout logic here
        navigate("/onboarding");
    };

    const navItems = [
        {
            tabName: "Home",
            to: "home",
            icon: TiHome,
        },
        {
            tabName: "Statistics",
            to: "statistics",
            icon: Analytics01Icon,
        },
        {
            tabName: "Hub",
            to: "hub",
            icon: GrAppsRounded,
        },
    ];

    return (
        <aside className="h-[calc(100vh-96px)] w-64 bg-background">
            <nav className="flex flex-col justify-between h-full px-10 py-16">
                <ul className="space-y-7 text-md font-bold ">
                    {navItems.map((x, index) => (
                        <li key={index}>
                            <MenuItem {...x} />
                        </li>
                    ))}
                </ul>
                <div className="p-4">
                    <button onClick={handleLogout} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-md w-full">
                        <GrPower className="w-6 h-6 text-red-500" />
                        <span>Logout</span>
                    </button>
                </div>
            </nav>
        </aside>
    );
}

