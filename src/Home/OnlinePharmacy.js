import React, { Component } from 'react';
import Slider from "react-slick";
class OnlinePharmacy extends Component
{
    // render()
    // {
    //     return (
    //         <div className="row m-0">
    //     <div className="col-lg-12 col-md-12 ">
    //       <div className='midd-banner'>
    //       <img src="assets/images/medidrop1.jpg" alt="pharmacy" />
    //     </div>
    //     </div>
    //   </div>
    //     );
    // }
    render() {  
      var settings = {  
        infinite: true,  
        speed: 500,  
        slidesToShow: 2 ,  
        slidesToScroll: 1,
        autoplay: true,
        // arrows: true,
        responsive:[
          {
            breakpoint: 480,
            settings:{
              slidesToShow : 1,
            }
          }
        ]
        };  
        return (  
          <div className='container'>  
          {/* <div className='row'>
          <div className='col-md-12'>
                <div className="pharmacy_product-title title">
                    <h2>current offers</h2>
                </div>
            </div>
            </div> */}
          
          <Slider {...settings} > 
          <div className='midd-banner'>
          <img src="assets/images/offer_banner_bg.png" alt="pharmacy" />
        </div>

        <div className='midd-banner'>
          <img src="assets/images/offerbanner3_bg.png" alt="pharmacy" />
        </div>

        <div className='midd-banner'>
          <img src="assets/images/offer_banner2_bg.png" alt="pharmacy" />
        </div>
          </Slider>  
          </div>
        );  
      }  
}
export default OnlinePharmacy;