import { useState } from "react";

import NavItems from "../data/navItems";

import { Logo } from "./index";

const Navbar = () => {
    const [toggleMenuNavbar, setToggleMenuNavbar] = useState(false);

    const onClickOpenMenuHandler = () => setToggleMenuNavbar(prev => !prev);

    return (
        <nav className="w-screen py-2 fixed top-0 left-0 bg-black text-white z-[999]">
            <div className="container flex justify-between items-center">
                <Logo />

                <ul className="hidden md:flex items-center">
                    {
                        NavItems.map(({ id, itemText, itemLink }) => (
                            <li key={id} className="ml-10 capitalize text-lg font-semibold">
                                <a href={`#${itemLink}`} className="block py-4 transition-all duration-[0.7s] hover:text-primary">{itemText}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className={`w-[2rem] md:w-[2.3rem] h-[1.4rem] relative flex flex-col justify-between items-center md:hidden cursor-pointer`}
                    onClick={onClickOpenMenuHandler}>
                    <span className={`toggle-line ${toggleMenuNavbar ? "-rotate-[45deg] translate-y-3" : "rotate-[0deg] translate-y-0"}`}></span>
                    <span className={`toggle-line ${toggleMenuNavbar ? "opacity-0 invisible translate-x-4" : "opacity-1 visible translate-x-0"}`}></span>
                    <span className={`toggle-line ${toggleMenuNavbar ? "rotate-[45deg] -translate-y-2" : "rotate-[0deg] translate-y-0"}`}></span>
                </div>
            </div>

            <ul className={`w-screen h-[97%] fixed top-[4rem] ${toggleMenuNavbar ? "left-0" : "-left-[100%]"} md:hidden flex flex-col justify-center items-center bg-black opacity-90 transition-all duration-[1.1s] ease-out`}>
                {
                    NavItems.map(({ id, itemText, itemLink }) => (
                        <li key={id} className="w-full my-3 text-center capitalize text-lg font-semibold">
                            <a href={`#${itemLink}`} className="block py-4 transition-all duration-[0.7s] hover:text-primary">{itemText}</a>
                        </li>
                    ))
                }
            </ul>
        </nav >
    )
}

export default Navbar;