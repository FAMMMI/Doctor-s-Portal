import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{testimonial.review}</p>
            </div>
            <div className='flex items-center gap-4 px-8 pb-4'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={testimonial.img} />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{testimonial.name}</h1>
                    <p className='font-semibold'>{testimonial.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;