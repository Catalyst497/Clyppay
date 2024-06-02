import Logo from "@/assets/icons/Logo.svg";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/assets/images/avatar.png";
import blueCircle from "@/assets/icons/blue_circle.svg";
import scan from "@/assets/icons/scan.svg";
import notifications from "@/assets/icons/notification.svg";
import { headerHeight } from "@/lib/Constants";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const { user } = useAuth();
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed left-0 top-0 right-0 z-10 bg-background">
            <div
                style={{ height: headerHeight }}
                className={`flex w-full items-center justify-between bg-background px-5 text-foreground ${
                    hasScrolled ? "shadow-md" : ""
                } md:px-10`}
            >
                <Link to="">
                    <img src={Logo} alt="Clyppay" className="h-[40px] md:h-[50px]" />
                </Link>
                {/* left nav items */}
                {user?.id && (
                    <div className="flex flex-row-reverse justify-between w-[30%]">
                        {/* avatar */}
                        <div className="flex items-center space-x-2">
                            <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                <img src={Avatar} alt="user photo" className="object-contain " />
                            </div>
                           
                        </div>
                        {/* quick actions */}
                        <div className="flex items-center space-x-10">
                            <span className="cursor-pointer">
                                <img src={blueCircle} alt="" />
                            </span>
                            <span className="cursor-pointer">
                                <img src={scan} alt="scan" />
                            </span>
                            <span className="cursor-pointer">
                                <img src={notifications} alt="notifications" />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
