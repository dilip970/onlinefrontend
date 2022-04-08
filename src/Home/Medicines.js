import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default class Medicines extends Component
{
    render() {  
        var settings = {  
          infinite: true,  
          speed: 500,  
          // centerMode: true,  
          slidesToShow: 5 ,  
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
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
            <div className='row'>  
            <div className='col-md-12'>
            
            <div className="pharmacy_product-title title">
                    <h2>Medical Products</h2>
                    <Link as={Link} to={`/allmedicine/`}>
                      <a href="#">
                        <button className="theme__button btn button border-fade" style={{float:'right'}}>Viewall</button>
                     </a>
                    </Link>
                </div>
                
            </div>            
            </div>
            <Slider {...settings} > 
                
            <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/body_care_200.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                   </div>  

                   <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/mom_baby_0.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                   </div>
                   <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/skin_treatment.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                 </div>
                   <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil</h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                 </div>

                 <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil</h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                 </div>
                 <div className="personal_medi">
                     <a href="#">
                       <img src="assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                       <span>product Description</span>
                       <p><strong>Best Price:</strong>₹450-00</p>
                       <button className=" add_cart_btn">AddCart</button>
                     </div>
                 </div>
            </Slider>  
            </div>  
          );  
        }  
    // render() {
    //     const settings = {
    //         autoplay: true,
    //         infinite: true,
    //         dots: false,
    //         arrows: true,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 2,
    //         slidesToScroll: 1
        
    //     };
        
    //     return (
    //       <div>
    //           <div className="bc_shop">
    //         <div className="row">
    //           <div className="container ctn">
    //             <div className="col-md-12">
    //               <div className="shop_category_tit">
    //                 <h2>Top Brand Products</h2>
    //                 <p>Consult with top doctors across specialities</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //         <Slider {...settings}>

        
    //         <div className="container ctn">
    //         <div className="shop_item">
    //           <div className="row">
    //             <div className="col-md-3">
    //               <div className="personal_medi">
    //                 <a href="#">
    //                   <img src="assets/images/body_care_200.jpg" alt="" />
    //                 </a>
    //                 <div className="personal_medi_text">
    //                   <h4>Tattva Body Oil 200ml</h4>
    //                   <span>product Description</span>
    //                   <p><strong>Best Price:</strong>₹450-00</p>
    //                   <button className=" add_cart_btn">AddCart</button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-3">
    //               <div className="personal_medi">
    //                 <a href="#">
    //                   <img src="assets/images/mom_baby_0.jpg" alt="" />
    //                 </a>
    //                 <div className="personal_medi_text">
    //                   <h4>Tattva Body Oil 200ml</h4>
    //                   <span>product Description</span>
    //                   <p><strong>Best Price:</strong>₹450-00</p>
    //                   <button className=" add_cart_btn">AddCart</button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-3">
    //               <div className="personal_medi">
    //                 <a href="#">
    //                   <img src="assets/images/skin_treatment.jpg" alt="" />
    //                 </a>
    //                 <div className="personal_medi_text">
    //                   <h4>Tattva Body Oil 200ml</h4>
    //                   <span>product Description</span>
    //                   <p><strong>Best Price:</strong>₹450-00</p>
    //                   <button className=" add_cart_btn">AddCart</button>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-md-3">
    //               <div className="personal_medi">
    //                 <a href="#">
    //                   <img src="assets/images/shower_gels_body_wash.jpg" alt="" />
    //                 </a>
    //                 <div className="personal_medi_text">
    //                   <h4>Tattva Body Oil 200ml</h4>
    //                   <span>product Description</span>
    //                   <p><strong>Best Price:</strong>₹450-00</p>
    //                   <button className=" add_cart_btn">AddCart</button>
    //                 </div>
    //               </div>
    //             </div>
                
    //           </div> 
    //         </div>
    //       </div>

    //         </Slider>
    //       </div>
    //     );
    //   }
    }
