import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CommonhealthSlider extends Component
{
    render()
    {
        return (
          <div className="consult__common_health_concerns">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="pharmacy_product-title">
            <h2>Common Health Concerns</h2>
            
            </div>
            </div>
                  <div className="col-md-3">
                    <div className="consult__common_health__sldr-sec">
                      <a href="#">
                        <img src="assets/images/consult_cold&cough.jpg" className="consult__cold__sldr-sec__image" alt="" />
                      </a>
                      <div className="consult__commonhealth__sldr-sec__conslt-cnt">
                        <h4>Cold &amp; Cough</h4>
                        <p>₹199</p>
                        <a className="theme__button">Consult Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="consult__common_health__sldr-sec">
                      <a href="#">
                        <img src="assets/images/consult_cold&cough.jpg" className="consult__cold__sldr-sec__image" alt="" />
                      </a>
                      <div className="consult__commonhealth__sldr-sec__conslt-cnt">
                        <h4>Cold &amp; Cough</h4>
                        <p>₹199</p>
                        <a className="theme__button">Consult Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="consult__common_health__sldr-sec">
                      <a href="#">
                        <img src="assets/images/consult_cold&cough.jpg" className="consult__cold__sldr-sec__image" alt="" />
                      </a>
                      <div className="consult__commonhealth__sldr-sec__conslt-cnt">
                        <h4>Cold &amp; Cough</h4>
                        <p>₹199</p>
                        <a className="theme__button">Consult Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="consult__common_health__sldr-sec">
                      <a href="#">
                        <img src="assets/images/consult_cold&cough.jpg" className="consult__cold__sldr-sec__image" alt="" />
                      </a>
                      <div className="consult__commonhealth__sldr-sec__conslt-cnt">
                        <h4>Cold &amp; Cough</h4>
                        <p>₹199</p>
                        <a className="theme__button">Consult Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            
          );
    }
}
export default CommonhealthSlider;