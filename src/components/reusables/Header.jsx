import Logo from "@/assets/icons/Logo.svg"
import PropTypes from 'prop-types';


import React from "react"

function Header({page}) {
    return (
        <div className="flex px-10  h-[96px] w-full items-center bg-background  shadow-md">
         
                <img src={Logo} alt="Clyppay" />
          
        </div>
    )
}

export default Header
