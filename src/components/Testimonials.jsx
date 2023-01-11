import { CardTestimonials, Title } from "./index";

import TestimonialsData from "../data/testimonials";

const Testimonials = () => {
    return (
        <section className="w-screen relative" id="testimonials">
            <Title>testimonials</Title>

            <div className="container mt-24 lg:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-4">
                {
                    TestimonialsData.map(({ id, personPicture, personName, personJob, comment, timeDelayAOS }) => (
                        <CardTestimonials key={id} personPicture={personPicture} personName={personName}
                            personJob={personJob} comment={comment} timeDelayAOS={timeDelayAOS} />
                    ))
                }
            </div>

        </section>
    )
}

export default Testimonials;