import { useState } from "react";

import NavItems from "../data/navItems";

import { Logo, ItemList } from "./index";

const Navbar = () => {
    const [toggleMenuNavbar, setToggleMenuNavbar] = useState(false);

    const onClickOpenMenuHandler = () => setToggleMenuNavbar(prev => !prev);

    return (
        <nav className="w-screen py-2 px-0 fixed top-0 left-0 bg-black text-white z-[999]">
            <div className="container flex justify-between items-center">
                <Logo />

                <ul className="hidden md:flex items-center">
                    {
                        NavItems.map(({ id, itemText, itemLink }) => (
                            <ItemList key={id} itemLink={itemLink} itemText={itemText} />
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

            <ul className={`w-screen h-[97%] fixed top-[4rem] ${toggleMenuNavbar ? "left-0" : "-left-[150%]"} md:hidden flex flex-col justify-center items-center bg-black opacity-[0.99] transition-all duration-[1.1s] ease-out`}>
                {
                    NavItems.map(({ id, itemText, itemLink }) => (
                        <ItemList key={id} itemLink={itemLink} itemText={itemText} addStyles={`w-full my-3 text-center`} />
                    ))
                }
            </ul>
        </nav >
    )
}

export default Navbar;