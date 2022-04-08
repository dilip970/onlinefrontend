import React, { Component } from 'react';
class Services extends Component
{
    render()
    {
        return (
        //   <div className="container">
        //   <div className="row servic_top">
        //     <div className="col-md-3">
        //       <div className="services_block">
        //         <img src="assets/images/doct5.jpg" alt="" />
        //         <div className="service_content">
        //           <h3>Doctor Consult</h3>
        //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="col-md-3">
        //       <div className="services_block">
        //         <img src="assets/images/medibottle.jpg" alt="" />
        //         <div className="service_content">
        //           <h3>Medicines</h3>
        //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="col-md-3">
        //       <div className="services_block">
        //         <img src="assets/images/labtest.jpg" alt="" />
        //         <div className="service_content">
        //           <h3>Labtest</h3>
        //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="col-md-3">
        //       <div className="services_block">
        //         <img src="assets/images/nursing.jpg" alt="" />
        //         <div className="service_content">
        //           <h3>Home Nursing Care &amp; Services</h3>
        //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div id='service_id'>
        <div className='container'>
                    <div className='row'>
                <div className='col-md-12'>
                <div className="pharmacy_product-title title">
                    <h2>Our Services</h2>
                </div>
      
        </div>

                <div className='col-md-2 col-6'>
            <div className='services'>
            <img alt='' src='assets/images/doctor.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Doctors</h5>
            </div>
            </div>

            <div className='col-md-2 col-6'>
            <div className='services'>
            <img alt='' src='assets/images/pills.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Medicines</h5>
            </div>
            </div>

            <div className='col-md-2 col-6'>
            <div className='services'>
            <img alt='' src='assets/images/flask.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Lab Tests</h5>
            </div>
            </div>

            <div className='col-md-2 col-6'>
            <div className='services'>
            <img alt='' src='assets/images/medical-doctor.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Covid Support</h5>
            </div>
            </div>

            <div className='col-md-2 col-6'>
            <div className='services center'>
            <img alt='' src='assets/images/pharmacy.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Health Products</h5>
            </div>
            </div>

            <div className='col-md-2 col-6'>
            <div className='services'>
            <img alt='' src='assets/images/hot-deal.png'/>
                
            </div>
            <div className='ser_text text-center'>
                <h5>Best Deals</h5>
            </div>
            </div>

            </div >
        </div>
        </div>
        );
    }
}
export default Services;