
import Address from "./Address";
import Carousel from "./Carousel";
import Pricing from "./Pricing";
import Services from "./Services";

const Body = () => {
    return (
        <div className="overflow-hidden w-screen">
            <Carousel />
            <Address />
            <Services />
            <Pricing />
        </div>
    );
}

export default Body;
