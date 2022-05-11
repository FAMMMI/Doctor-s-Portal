import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import HomeTestimonial from './HomeTestimonial';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <HomeTestimonial></HomeTestimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;