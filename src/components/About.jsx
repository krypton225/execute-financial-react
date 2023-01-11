import { Button } from "./index";

import PersonImage from "../assets/images/john-doe.png";

const About = () => {
    return (
        <section className="w-screen bg-white text-black">
            <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-6">
                <div className="w-[90%] md:w-[60%] lg:w-[70%] mx-auto">
                    <img src={PersonImage} alt="John Doe" className="w-full object-cover" />
                </div>

                <div className="w-full">
                    <h3 className="py-3 relative text-5xl capitalize font-semibold text-center">
                        <div className="w-[3rem] h-[0.1975rem] absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary"></div>
                        about
                    </h3>

                    <div className="my-12 text-lg md:text-2xl">
                        <p>
                            Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise international expatriates living in the middle east from where I live in USA.
                        </p>

                        <p className="mt-8 font-semibold italic">
                            I am John Doe, a senior advisor for an independently owned financial planning company called Intense.
                        </p>
                    </div>

                    <Button customStyle="px-10 bg-secondary text-white">
                        explore more
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default About;