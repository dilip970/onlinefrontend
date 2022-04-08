import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OurdoctorSlider extends Component
{
    render()
    {
        return (
            <div className="consult__doctors">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="pharmacy_product-title">
                  <h2>Our Doctors</h2>
                </div>
                </div>
                      <div className="col-md-3">
                        <div className="consult__doctors__sldr-sec">
                          <a href="#">
                            <img src="assets/images/consult-doctor.svg" className="consult__doctors__sldr-sec__image" alt="" />
                          </a>
                          <div className="consult__doctors__sldr-sec__conslt-cnt">
                            <h4>Dr.Nagaraju</h4>
                            <p>MBBS</p>
                            <a className="theme__button">Consult Now</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="consult__doctors__sldr-sec">
                          <a href="#">
                            <img src="assets/images/consult-doctor.svg" className="consult__doctors__sldr-sec__image" alt="" />
                          </a>
                          <div className="consult__doctors__sldr-sec__conslt-cnt">
                            <h4>Dr.Nagaraju</h4>
                            <p>MBBS</p>
                            <a className="theme__button">Consult Now</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="consult__doctors__sldr-sec">
                          <a href="#">
                            <img src="assets/images/consult-doctor.svg" className="consult__doctors__sldr-sec__image" alt="" />
                          </a>
                          <div className="consult__doctors__sldr-sec__conslt-cnt">
                            <h4>Dr.Nagaraju</h4>
                            <p>MBBS</p>
                            <a className="theme__button">Consult Now</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="consult__doctors__sldr-sec">
                          <a href="#">
                            <img src="assets/images/consult-doctor.svg" className="consult__doctors__sldr-sec__image" alt="" />
                          </a>
                          <div className="consult__doctors__sldr-sec__conslt-cnt">
                            <h4>Dr.Nagaraju</h4>
                            <p>MBBS</p>
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
export default OurdoctorSlider;