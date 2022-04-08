import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PharmacyBanner from '../Banners/PharmacyBanner';
import Location from '../Location/Location';
import PharmacyCategories from './PharmacyCategories';
import BabyCareSlider from './BabyCareSlider';
import Photo from './Photo';
import PersonalCareEssential from './PersonalCareEssential';
import SafeDelivery from './SafeDelivery';
class Pharmacy extends Component
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
            <PharmacyBanner/>
            <PharmacyCategories/>
            <Photo/>
            <PersonalCareEssential/>
            <SafeDelivery/>
            <PersonalCareEssential/>
            <Footer/>
            </div>
        );
    }
}
export default Pharmacy;