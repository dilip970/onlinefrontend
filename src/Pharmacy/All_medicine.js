import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import globalNames from '../Utils/globals';


class Allmedicine extends Component
{
  constructor(props){
    super(props);
    this.state= {
      medicine:[],
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    return axios.get(globalNames.APIURL+"getmedicine").then((res) => {  
      let medicine = res.data.data.product;
      this.setState({
        medicine : medicine,
      })
      console.log(medicine);
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

     render()
     {
      let list = this.state.medicine;
       
            list = (
                        this.state.medicine.map((medicine,key) => {
                         return(
                            <div className="pharmacyfilter_products-page_product col-md-3 col-sm-6">
                            <div className="pharmacyfilter_products-page_product-inner">
                            <Link as={Link} to={`/product-details/${medicine.tpp_id}`}>
                              <a href ="#">
                              <img src='' />
                                <div className="copy-content">
                                  <h5>{medicine.tpp_name}</h5>
                                  <p>₹ {medicine.tpp_price-(medicine.tpp_discount_percentage*medicine.tpp_price/100)} <del>₹ {medicine.tpp_price}</del></p> 
                                </div>
                                </a>
                                </Link>
                             
                              <div className="cart">  
                                <Link as={Link} to={`/product-details/${medicine.tpp_id}`}>
                                <a href="#">
                                  <button className="theme__button btn button">View</button>
                                </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                         )
                        })
            )

        return (
           <div>
               <Header />
            <div className="container pharmacyfilter">
            <div className="row">
              <div className="col-lg-12 text-left">
              <div className="pharmacy_product-title title">
                    <h2>All Medicine</h2>
                </div>
              </div>
            </div>
            <div className="row">
           {list}
           
            </div>
          </div>  
          <Footer/>
          </div>
         );

        }
}
export default Allmedicine;