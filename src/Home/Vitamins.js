import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Vitamins extends Component
{
    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render()
    {
        return (
            <div className='container'>
                <div className='row'>
                <div className='col-md-12'>
                <div className="pharmacy_product-title title">
                    <h2>Multi Vitamins</h2>
                </div>
            </div>
            
            <div className='col-lg-6 col-md-6'>
            <div className='multi_vitamins'>
            <img alt='' src='assets/images/pharmacy_pp-1.jpg'/>
            <div className="text-center ">
                    <h3 className='heading-text' data-aos='fade-up'>Covid</h3>
                  </div>

                
            </div>
            </div>

            <div className='col-lg-6 col-md-6'>
            <div className='row'>

            <div className='col-sm-6'>
            <div className='sub_multi'  data-aos="fade-left">
            <img alt='' src='assets/images/oil.jpg'/>
            <div className="text-center">
                    <h3 className='heading-text' data-aos='fade-up'>Covid</h3>
                  </div>

            </div>
            </div>
            <div className='col-sm-6'>
            <div className='sub_multi'  data-aos="fade-left">
            <img alt='' src='assets/images/salpainrelif.jpg'/>
            <div className="text-center">
                    <h3 className='heading-text' data-aos='fade-up'>Covid</h3>
                  </div>

            </div>
            </div>
            <div className='col-sm-6'>
            <div className='sub_multi'  data-aos="fade-left">
            <img alt='' src='assets/images/sirup.jpg'/>
            <div className="text-center">
                    <h3 className='heading-text' data-aos='fade-up'>Covid</h3>
                  </div>

            </div>
            </div>

            <div className='col-sm-6'>
            <div className='sub_multi'  data-aos="fade-left">
            <img alt='' src='assets/images/dettollemon.jpg'/>
            <div className="text-center">
                    <h3 className='heading-text' data-aos='fade-up'>Covid</h3>
                  </div>

            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

         );
    }
}
export default Vitamins;