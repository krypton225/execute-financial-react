import GenerateID from "../utils/generateIDs";

import PersonImage1 from "../assets/images/user1.jpeg"
import PersonImage2 from "../assets/images/user2.png"
import PersonImage3 from "../assets/images/user3.jpeg"

const testimonials = [
    {
        personPicture: PersonImage1,
        personName: "Johnson.M.J.",
        personJob: `Director of "Financial Times"`,
        comment: "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
    },
    {
        personPicture: PersonImage2,
        personName: "Carol Harper",
        personJob: "Director at Risktec Solutions Ltd",
        comment: "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
    },
    {
        personPicture: PersonImage3,
        personName: "Snow.J.R.",
        personJob: "Managing Director of BPW Global",
        comment: "A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.",
    },
];

(() => GenerateID(testimonials))();

export default testimonials;