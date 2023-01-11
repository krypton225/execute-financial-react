const Title = ({ children }) => {
    return (
        <h3 className="py-3 relative text-5xl capitalize font-semibold text-center">
            <div className="w-[3rem] h-[0.1975rem] absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary"></div>
            {children}
        </h3>
    )
}

export default Title;