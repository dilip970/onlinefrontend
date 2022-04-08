import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import Testimonals from '../Consult/Testimonals';
import DiagnosticsBanner from '../Banners/DiagnosticsBanner';
import BabyCareSlider from '../Pharmacy/BabyCareSlider';
import DiagnosticSlider from './DiagnosticsSlider';
import TopDiagnosticSlider from './TopDiagnosticSlider';
import DiagnosticsCategories from './DiagnosticsCategories';
class Diagnostics extends Component
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
            <DiagnosticsBanner/>
            <DiagnosticsCategories/>
            <TopDiagnosticSlider/>
            <DiagnosticSlider/>
           <Testimonals/>
          
            <Footer/>
            </div>
        );
    }
}
export default Diagnostics;