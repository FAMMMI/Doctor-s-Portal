import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';


const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center'>
                <h2 className='text-secondary font-bold text-lg pt-20 '>Contact US</h2>
                <h1 className='text-white font-medium text-3xl pb-12'>Stay Connected With Us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5 pb-8'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
            </div>
            <div className='text-center pb-10'>
                <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary px-6 py-0">Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;