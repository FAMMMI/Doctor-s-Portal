import React from 'react';
import Button from '../Shared/Button';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body  text-center">
                <h2 class="card-title text-secondary text-2xl justify-center">{name}</h2>
                <p className='justify-center'>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No slot available</span>

                }

                </p>
                <p className='justify-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                <div class="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        for="booking-modal" class="btn btn-secondary  text-white uppercase bg-gradient-to-r from-secondary to-primary btn-sm">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;