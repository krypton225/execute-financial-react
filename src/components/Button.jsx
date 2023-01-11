const Button = ({ children = "", customStyle = "" }) => {
    return (
        <button
            className={`py-2 flex justify-center items-center border-none rounded-lg text-base md:text-xl font-semibold uppercase transition-all duration-700 
            hover:brightness-125 ${customStyle}`}>
            {children}
        </button>
    )
}

export default Button;