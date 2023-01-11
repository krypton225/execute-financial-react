import { Link } from "react-scroll";

import LogoImage from "../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="w-[9rem] md:w-[13rem]">
            <Link to={`home`} activeClass="active" spy={true} smooth={true} duration={1200} href="#home">
                <img src={LogoImage} alt="Logo" className="w-full" draggable="false" />
            </Link>
        </div>
    )
}

export default Logo;