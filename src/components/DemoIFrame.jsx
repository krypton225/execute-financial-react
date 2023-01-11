const DemoIFrame = ({ dataAOS }) => (
    <div className="w-full rounded-xl flex justify-start items-center" data-aos={dataAOS}>
        <iframe height="315" className="w-full md:w-1/2 lg:w-full rounded-xl" src="https://www.youtube.com/embed/ynRyoeSOoHw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
);

export default DemoIFrame;