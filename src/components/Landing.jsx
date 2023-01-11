const Landing = () => {
    return (
        <section className={`w-screen h-screen relative bg-[url('/src/assets/images/hero.jpg')] bg-no-repeat bg-center`}>
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-80 z-[99]"></div>

            <div className="container text-white relative top-1/2 left-0 -translate-y-1/2 z-[100]">
                <p className="mb-2 capitalize text-lg">call us</p>

                <div className="text-xl md:text-4xl">
                    <p className="my-2 md:my-5">1-800-123-4567</p>
                    <p className="my-2 md:my-5 text-4xl md:text-5xl lg:text-7xl capitalize font-bold">because money</p>
                    <p className="italic">Doesn't come with instructions</p>
                </div>

                <button className="py-3 border-none rounded-lg text-base md:text-xl font-semibold uppercase transition-all duration-700 hover:opacity-60 bg-primary text-black mt-6 px-12">
                    free consultation
                </button>
            </div>
        </section>
    )
}

export default Landing;