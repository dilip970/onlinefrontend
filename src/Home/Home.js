import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeBanner from '../Banners/HomeBanner';
import Services from './Services';
import OnlinePharmacy from './OnlinePharmacy';
import Healthconcern from './Healthconcern';
import Medicines from './Medicines';
import Vitamins from './Vitamins';
class Home extends Component
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
            <HomeBanner/>
            <Services/>
            <OnlinePharmacy/>
            <Healthconcern/>
            <Vitamins/>
            <Medicines/>
            <Footer/>
            </div>
        );
    }
}
export default Home;