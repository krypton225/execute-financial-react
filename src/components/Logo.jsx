import LogoImage from "../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="w-[9rem] md:w-[13rem]">
            <img src={LogoImage} alt="Logo" className="w-full" />
        </div>
    )
}

export default Logo;