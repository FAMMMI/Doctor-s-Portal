import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center my-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                <h2 className='text-3xl text-white py-2'>Make an appointment today</h2>
                <p className='text-white py-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam assumenda accusantium, dolorem, earum sint dicta inventore labore deleniti dolor qui recusandae voluptate, nulla culpa velit. Magni fuga autem ipsum dicta tempora eos quisquam, explicabo recusandae deleniti repellat, error iste quibusdam.</p>
                <Button>GET STARTED</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;