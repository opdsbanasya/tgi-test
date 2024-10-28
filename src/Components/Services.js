import React from 'react';
import { SERVICES } from '../utils/constants';
import Service from './Service';

const Services = ({about}) => {
    console.log(SERVICES);

    return (
        <div className={`md:w-full w-[85%] mx-auto flex flex-col gap-5 lg:min-h-screen min-h-[25vh] ${about ? "pt-16 w-full":"pb-5"}`}>
            {about ? (
                <Service key={SERVICES[0].id} service={SERVICES[0]} about={about && about} />
            ):(
                SERVICES.map((service) => (
                    <Service key={service.id} service={service}/>
                ))
            )}
        </div>
    );
}

export default Services;