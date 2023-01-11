import { Title } from "./index";

import TestimonialsData from "../data/testimonials";

const Testimonials = () => {
    return (
        <section className="w-screen h-screen relative">
            <Title>testimonials</Title>

            <div className="container mt-24 lg:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-4">
                {
                    TestimonialsData.map(({ id, personPicture, personName, personJob, comment }) => (
                        <div key={id} className="w-full relative pt-12 pb-6 px-4 rounded-xl border-[1px] border-[#DDD] shadow-xl">
                            <div className="w-[4.8rem] h-[4.8rem] p-1 absolute -top-10 left-4 flex justify-center items-center rounded-full">
                                <img src={personPicture} alt="Person" className="w-full object-cover rounded-full border-4 border-white" />
                            </div>

                            <p>{comment}</p>

                            <p className="my-3 text-secondary font-semibold">{personName}</p>

                            <p>{personJob}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Testimonials;