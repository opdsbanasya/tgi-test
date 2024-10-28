
const OtherFacilities = ({item}) => {
    return (
        <div key={item.id} className="md:w-[24%] w-[45%] flex flex-col items-center justify-center ">
            <img className="xl:size-28 md:size-20 size-16 aspect-square object-cover" src={item.img} alt={item.title} />
            <p>{item.title}</p>
        </div>
    );
}

export default OtherFacilities;
