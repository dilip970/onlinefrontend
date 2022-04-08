import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ConsultBanner from '../Banners/ConsultBanner';
import Location from '../Location/Location';
import Specialities from './Specialities';
import OurdoctorSlider from './Ourdoctorslick';
import CommonhealthSlider from './CommonhealthSlider.js';
import OfferSlider from './OffersSlider';
import CounterIcons from './CounterIcons';
import BenefitsInfo from './BenefitsInfo';
import Testimonals from './Testimonals';

class Consult extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render()
    {
        return (
            <div>
            <Header/>
            {/* <Location/> */}
            <ConsultBanner/>
            <Specialities />
            <OurdoctorSlider />
            <CommonhealthSlider />
            <OfferSlider />
            <CounterIcons/>
            <BenefitsInfo />
            <Testimonals/>
            <Footer/>
            </div>
        );
    }
}
export default Consult;