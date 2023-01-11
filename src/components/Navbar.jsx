import NavItems from "../data/navItems";

import LogoImage from "../assets/images/logo.png";

const Navbar = () => {
    return (
        <nav className="w-screen py-2 fixed top-0 left-0 bg-black text-white">
            <div className="container flex justify-between items-center">
                <div className="w-[8rem] md:w-[13rem]">
                    <img src={LogoImage} alt="Logo" className="w-full" />
                </div>

                <ul className="flex items-center">
                    {
                        NavItems.map(({ id, itemText, itemLink }) => (
                            <li key={id} className="ml-10 capitalize text-lg font-semibold">
                                <a href={`#${itemLink}`} className="py-4 transition-all duration-[0.7s] hover:text-primary">{itemText}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;