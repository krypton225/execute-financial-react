const Button = ({ children = "", customStyle = "" }) => {
    return (
        <button
            className={`py-3 border-none rounded-lg text-base md:text-xl font-semibold uppercase 
            transition-all duration-700 hover:opacity-60 ${customStyle}`}>
            {children}
        </button>
    )
}

export default Button;