import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// import { CardElement, Elements, useElements, useStripe } from '../../src';



const stripePromise = loadStripe('pk_test_51L0X16GyPcxXGcIb1S8LZhIvSuikfSzmwReeMi6qIA9RC6ZwRNcesH7i43S4nDNg1NgdKIXnFlNEDrU50acK08lh006JF1d8aN');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>


            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-accent text-xl font-bold">Hello ! {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-bold text-accent text-lg'>{appointment.date}</span> at <span className='font-bold text-neutral text-xl'>{appointment.slot}</span> </p>
                    <p>Please pay : <span className='font-bold text-neutral text-xl'>${appointment.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            appointment={appointment}
                        />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;