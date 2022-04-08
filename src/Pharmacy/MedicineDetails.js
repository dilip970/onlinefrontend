import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import globalNames from '../Utils/globals';
import Slider from "react-slick";

class MedicineDetails extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      product : [],
    };
  }
  
    componentDidMount() {
      window.scrollTo(0, 0);
        return axios
      .get(globalNames.APIURL+"/product-details/"+this.props.match.params.tpp_id+'/')
      .then((res) => {  
        let product = res.data.data.product[0];
          this.setState({
            product : product,
        });
      })
      .catch(err => {
        console.error(err);
      });
    }
    getBase64FromUrl = async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = () => {
          const base64data = reader.result;   
          resolve(base64data);
        }
      });
    }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,

      });
    };

    handleSubmit = e => {
      e.preventDefault();
      const { ucm_quantity,ubit_role_id} = this.state;
  
      var formData = {
        ucm_quantity,
        ucm_role_id: this.state.tpp_role_id,
        ubit_role_id :5,              
        ucm_item_id: this.props.match.params.tpp_id,
        ubit_id : localStorage.getItem("userid"),
        ubit_token : localStorage.getItem("usertoken"), 
        
      };
  
      return axios
        .post(globalNames.APIURL+'/add-item-to-cart', { ...formData },{
        })
        .then((res) => {
          console.log(res)
          if(res.data.message == "token verification failed" && res.data.status == "400"){
            alert("Please Login")
            window.location.href='/login/';
          }
           else if(res.data.status=="200"){
              alert("item added to cart successfully");
          }
          else{
              alert("item added Failed..");
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  
    
    render()
    {
      var settings = {  
        infinite: true,  
        speed: 500,  
        // centerMode: true,  
        slidesToShow: 6 ,  
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

      let product = this.state.product;
      if(this.state.product){
        return (
          <div>
              <Header/>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <div className="pharmacy_product-title title">
                    <h2>Medicine Details</h2>
                </div>
            </div>


                <div className="col-lg-5 fixed">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                  <div className="productdetails-container_page-product-image">
                    <div className="image-wrapper">
                    <img src='' />
                    
                    </div>

                    <div className="d-flex ml-left  price-details">
                    <span>₹ {product.tpp_price}</span> 
                      
                      <span className="u-margin text-green">
                        <span>5% off</span>
                      </span>
                    </div>
                    <div className="product-boxes row col-lg-12 d-flex">
                      {/* <div className="col-lg-6">
                        <div className="heading ml-left">
                          pack-size
                        </div>
                        <div className="ml-left u-mg-t">
                          <div className="dropdown--box">
                            12 tablets, acid floic
                          </div>
                        </div>
                      </div> */}
                      <div className="col-lg-6">
                        <div className="heading ml-left">
                          Quantity
                        </div>
                        <div className="ml-left u-mg-t">
                          <div>
                            <select className="dropdown--box a u-p-l--10 u-p-r--10 heading-delta" name="ucm_quantity" onChange={this.handleInputChange} required>
                            <option value="0">select Quantity</option>
                             <option value="1">Qty 1</option>
                             <option value="2">Qty 2</option>                             
                              </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 cart-btn">                    
                    <div className="u-padding ml-left">
                        { localStorage.getItem("usertoken")!=undefined ?  <button type="submit" className="btn button btn-primary">Add to cart</button> : <a className="btn button btn-primary" href="/login">Add to Cart</a> }
                    </div>
                    </div>
                    
                    </div>
                  </div>
                  
                  </form>
                </div>
                <div className="col-lg-7">
                  <div className="productdetails-container_page_product-description">
                    <div>
                      <div className="productdetails-container_page_product-description-Desrpt col-lg-12">
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h1 className="heading">{product.tpp_name}</h1>
                          
                        </div>
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h4 className="heading-alpha">Description</h4>
                          <p>{product.tpp_description}</p>
                          
                        </div>
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h4 className="heading-alpha">Composition</h4>
                          <p>{product.composition}</p>
                        </div>
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h4 className="heading-alpha">Indications</h4>
                          <p>{product.indications}</p>
                        </div>
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h4 className="heading-alpha">Direction of usage</h4>
                          <p>{product.usages}</p>
                        </div>
                        <div className="productdetails-container_page_product-description-Desrpt_prdct_head ">
                          <h4 className="heading-alpha">Storage</h4>
                          <p>{product.storage_info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
            </div>
          </div>

          <div className='row'>  
            <div className='col-md-12'>
            
            <div className="pharmacy_product-title title">
                    <h2>Similar Products</h2>
                </div>
                
            </div>            
            </div>
            <Slider {...settings} > 
                
            <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/body_care_200.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                     </div>
                   </div>  

                   <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/mom_baby_0.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                     </div>
                   </div>

                   <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/mom_baby_0.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                     </div>
                   </div>

                   <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/skin_treatment.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                     </div>
                 </div>
                   <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil</h4>
                     </div>
                 </div>

                 <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil</h4>
                     </div>
                 </div>
                 <div className="personal_medi">
                     <a href="#">
                       <img src="Assets/images/shower_gels_body_wash.jpg" alt="" />
                     </a>
                     <div className="personal_medi_text">
                       <h4 className='heading-text'>Tattva Body Oil </h4>
                     </div>
                 </div>
            </Slider>

        </div>
        <Footer/>
        </div>
      );
      }
    }
}
export default MedicineDetails;