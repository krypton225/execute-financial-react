import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button, Title } from "./index";

import PersonImage from "../assets/images/john-doe.png";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);

    return (
        <section className="w-screen bg-white text-black" id="about">
            <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-6">
                <div className="w-[90%] md:w-[60%] lg:w-[70%] mx-auto" data-aos="fade-right" data-aos-easing="ease-in">
                    <img src={PersonImage} alt="John Doe" className="w-full object-cover" draggable="false" />
                </div>

                <div className="w-full" data-aos="fade-left" data-aos-easing="ease-in">
                    <Title>about</Title>

                    <div className="my-12 text-lg md:text-2xl">
                        <p>
                            Intense is an International Financial Planning company with offices in multiple jurisdictions over the world. Working with Intense gives me the ability to advise international expatriates living in the middle east from where I live in USA.
                        </p>

                        <p className="mt-8 font-semibold italic">
                            I am John Doe, a senior advisor for an independently owned financial planning company called Intense.
                        </p>

                        <Button customStyle="mt-8 px-10 bg-secondary text-white">
                            explore more
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;