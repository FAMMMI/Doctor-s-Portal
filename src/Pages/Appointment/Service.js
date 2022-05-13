import React from 'react';
import Button from '../Shared/Button';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body  text-center">
                <h2 className="card-title text-secondary text-2xl justify-center">{name}</h2>
                <p className='justify-center'>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No slot available</span>

                }

                </p>
                <p className='justify-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn btn-secondary  text-white uppercase bg-gradient-to-r from-secondary to-primary btn-sm">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;