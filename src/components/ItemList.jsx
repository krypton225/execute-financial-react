import { Link } from "react-scroll";

const ItemList = ({ itemLink, itemText, addStyles = "", onCloseMenu }) => {
    return (
        <li className={`ml-10 capitalize text-lg font-semibold cursor-pointer ${addStyles}`}>
            <Link to={`${itemLink}`} activeClass="active" spy={true} smooth={true} duration={1200}
                className="block py-4 transition-all duration-[0.7s] hover:text-primary" onClick={onCloseMenu}>
                {itemText}
            </Link>
        </li>
    )
}

export default ItemList;