import LogoImage from "../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="w-[9rem] md:w-[13rem]">
            <a href="#home">
                <img src={LogoImage} alt="Logo" className="w-full" draggable="false" />
            </a>
        </div>
    )
}

export default Logo;