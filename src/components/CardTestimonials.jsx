const CardTestimonials = ({ personPicture, personName, personJob, comment }) => {
    return (
        <div className="w-full relative pt-12 pb-6 px-4 rounded-xl border-[1px] border-[#DDD] shadow-xl">
            <div className="w-[4.8rem] h-[4.8rem] p-1 absolute -top-10 left-4 flex justify-center items-center rounded-full">
                <img src={personPicture} alt="Person" className="w-full object-cover rounded-full border-4 border-white" draggable="false" />
            </div>

            <p>{comment}</p>

            <p className="my-3 text-secondary font-semibold">{personName}</p>

            <p>{personJob}</p>
        </div>
    )
}

export default CardTestimonials;