import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Healthconcern extends Component
{
    render()
    {
        return (
            <div>
            <div className="container">
            <div className="row">
              <div className="col-md-12">
              <div className="pharmacy_product-title ">
                    <h2>Health Concern Products</h2>
                </div>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="shop_item">
            <div className="row">
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/body_care_200.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Covid</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/mom_baby_0.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Fever</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/skin_treatment.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Cough</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/shower_gels_body_wash.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Sugar</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/face-wash-cleansers_1.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Body Pains</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="personal_medi">
                  <a href="#">
                    <img src="assets/images/mom_baby_0.jpg" alt="" />
                  </a>
                  <div className="hc_tit">
                    <h3 className='heading-text'>Cold</h3>
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
export default Healthconcern;