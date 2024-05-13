import Logo from "@/assets/Logo.svg"

import React from "react"

function Header() {
    return (
        <div className="  flex px-10  h-[96px] w-full items-center bg-background  shadow-md">
         
                <img src={Logo} alt="Clyppay" />
          
        </div>
    )
}

export default Header
