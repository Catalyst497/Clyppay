import Logo from "@/assets/icons/Logo.svg";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/assets/images/avatar.png";
import blueCircle from "@/assets/icons/blue_circle.svg";
import scan from "@/assets/icons/scan.svg";
import notifications from "@/assets/icons/notification.svg";

import React from "react";
import { Link } from "react-router-dom";

function Header({ page }) {
  const { user } = useAuth();
  return (
    <div className="flex h-[96px] w-full items-center  justify-between bg-background px-5 text-foreground shadow-md  md:px-10">
     <Link to = ""> <img src={Logo} alt="Clyppay" className="h-[40px] md:h-[50px]" />
     </Link >
      {/* left nav items */}
      {user && (
        <div className="flex space-x-20">
          {/* avatar */}
          <div className="flex items-center space-x-2">
            <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
              <img src={Avatar} alt="user photo" className="object-contain " />
            </div>
            <span className="font-bold ">Welcome {user?.name ?? "user"}</span>
          </div>
          {/* quick actions */}
          <div className="flex items-center space-x-4">
            <span>
              <img src={blueCircle} alt="" />
            </span>
            <span>
              <img src={scan} alt="scan" />
            </span>
            <span>
              <img src={notifications} alt="notifications" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
