
const Service = ({ service, about }) => {

    return (
        <div className={`w-full h-[50%] flex flex-col-reverse bg-zinc-200 md:bg-transparent rounded-lg overflow-hidden md:py-10  justify-center items-center md:gap-10 lg:gap-20 gap-5 
            ${[service?.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", !about && "lg:px-32 md:px-20"].join(" ")
            }`}>
            <div className="md:w-1/2 px-5 md:space-y-5 space-y-3 pb-3">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-justify">{service?.title}</h2>
                <p className="text-sm text-justify font-light">{service?.description}</p>
            </div>
            <div className="md:w-1/2 overflow-hidden md:shadow-xl shadow-none md:rounded-lg">
                <img className=" scale-105 w-full lg:aspect-[5/3] aspect-[4/3]" src={service?.img}></img>
            </div>
        </div>
    );
}

export default Service;