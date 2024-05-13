import Logo from "@/assets/Logo.svg"

import React from "react"

function Header() {
    return (
        <div className="h-20  w-full  bg-background">
            <img src={Logo} alt="Clyppay" />
        </div>
    )
}

export default Header
