import React from 'react';
import Testimonial from './Testimonial';
import patient1 from '../../assets/images/people1.png';
import patient2 from '../../assets/images/people2.png';
import patient3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';


const HomeTestimonial = () => {
    const testimonials = [
        {
            _id: 1,
            img: patient1,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
        },
        {
            _id: 2,
            img: patient2,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
        },
        {
            _id: 3,
            img: patient3,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
        },
    ]
    return (
        <div
        >
            <div className='flex justify-between pb-6 gap-4 px-12'>
                <div className='pb-20'>
                    <h1 className='text-secondary font-bold'>Testimonial</h1>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-28 px-12'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default HomeTestimonial;