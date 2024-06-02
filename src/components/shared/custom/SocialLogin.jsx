import { FaFacebookF } from "react-icons/fa";
import AppleIcon from "@/assets/images/Vector1.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import { Link } from "react-router-dom";
import { initialModalState, modalNames } from "@/lib/Constants";
import PropTypes from "prop-types";

function SocialLoginSection({ tagline, showOptions = false, linkText, to }) {
  return (
    <div className="align-center flex w-full flex-col justify-center gap-5 text-center">
     {showOptions && (
<>      <div className="mt-4 flex items-center">
        <div className="flex-grow border-t border-card-foreground"></div>
        <div className="mx-4 text-card-foreground">or continue with</div>
        <div className="flex-grow border-t border-card-foreground"></div>
      </div>
    
      <div className="align-center flex justify-center gap-6">
        <span className="hover:cursor-pointer">
          <div className="rounded-full bg-[#3b5998] p-2.5">
            <FaFacebookF color="white" size={14} />
          </div>{" "}
        </span>
        <span className="translate-y-1 hover:cursor-pointer">
          <img src={GoogleIcon} alt="Google" />
        </span>
        <span className="hover:cursor-pointer">
          <img src={AppleIcon} alt="Apple" />
        </span>
      </div></>
     )}

      <div className="pt-5">
        {tagline}
        <Link to={to} className="font-light text-primary ml-1">
          {linkText}
        </Link>
      </div>
    </div>
  );
}



export default SocialLoginSection;
