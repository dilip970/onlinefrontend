import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OfferSlider extends Component
{
    render()
    {
        return (
          <div className="consult__offers">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <div className="pharmacy_product-title">
                <h2>Offers</h2>
            </div>
              </div>
                    <div className="col-md-4">
                      <div className="consult__offers__content"> <a href className="consult__offers__content__offers-btn">Offers</a>
                        <h4>Download the App get ₹100 HealthCash</h4> <a className="consult__offers__content__downldapp-btn theme__button" href>Download App</a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="consult__offers__content"> <a href className="consult__offers__content__offers-btn">Offers</a>
                        <h4>Download the App get ₹100 HealthCash</h4> <a className="consult__offers__content__downldapp-btn theme__button" href>Download App</a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="consult__offers__content"> <a href className="consult__offers__content__offers-btn">Offers</a>
                        <h4>Download the App get ₹100 HealthCash</h4> <a className="consult__offers__content__downldapp-btn theme__button" href>Download App</a>
                      </div>
                    </div>

                  </div>
                </div>
              
            <div>
          </div> 
        </div>    
        );
    }
}
export default OfferSlider;