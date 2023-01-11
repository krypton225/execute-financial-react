const ItemList = ({ itemLink, itemText, addStyles = "" }) => {
    return (
        <li className={`ml-10 capitalize text-lg font-semibold ${addStyles}`}>
            <a href={`#${itemLink}`} className="block py-4 transition-all duration-[0.7s] hover:text-primary">{itemText}</a>
        </li>
    )
}

export default ItemList;