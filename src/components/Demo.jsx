import { Button } from "./index";

const Demo = () => {
    return (
        <section className="w-screen relative">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-4">
                <div className="w-full">
                    <p className="italic capitalize">more than 100 financial planners,</p>

                    <p className="my-4 capitalize text-3xl font-semibold">one philosophy</p>

                    <p className="mb-4">
                        Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.
                    </p>

                    <Button customStyle="px-10 bg-secondary text-white">
                        get your free financial analysis
                    </Button>
                </div>

                <div className="w-full rounded-xl flex justify-start items-center">
                    <iframe height="315" className="w-full md:w-1/2 lg:w-full rounded-xl" src="https://www.youtube.com/embed/ynRyoeSOoHw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Demo;