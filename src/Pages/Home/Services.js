import React from 'react';
import Service from './Service';
import icon1 from '../../assets/images/fluoride.png'
import icon2 from '../../assets/images/cavity.png'
import icon3 from '../../assets/images/whitening.png'
import ServicesHero from './ServicesHero';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatement',
            description: 'lorem',
            img: icon1
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'lorem',
            img: icon2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'lorem',
            img: icon3
        }

    ]
    return (
        <div className='' >
            <div className='py-20 '>
                <h1 className='text-secondary text-center font-bold'>OUR SERVICES</h1>
                <h1 className='text-center text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-28 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='pb-20'>
                <ServicesHero></ServicesHero>
            </div>

        </div >
    );
};

export default Services;