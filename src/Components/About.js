import Banner from './Banner';
import Gallery from './Gallery';
import Services from './Services';

const About = () => {
    return (
        <div className="w-screen min-h-[50vh] px-5 md:px-10 lg:px-20 xl:px-28 lg:pb-10 py-7">
            <Banner />
            <Services about={true} />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold xl:-mt-28 pb-5 mt-5 font-serif">
                Photo Gallery
            </h2>
            <Gallery />
        </div>
    );
}

export default About;
