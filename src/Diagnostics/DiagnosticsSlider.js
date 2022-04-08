import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class DiagnosticSlider extends Component
{
    render()
    {
        return (
          
      <div id="cart-id">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="pharmacy_product-title">
             <h2>Health Checkups and Screenings For</h2>
          </div>
          </div>

                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <a href="medicine_details.html">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <Link as={Link} to="/diagnosticstestfilter">
                    <a href="#">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <Link as={Link} to="/diagnosticstestfilter">
                    <a href="#">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <Link as={Link} to="/diagnosticstestfilter">
                    <a href="#">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>  
                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <Link as={Link} to="/diagnosticstestfilter">
                    <a href="#">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>  
                <div className="col-md-2">
                  <div className="diagnostics_product">
                    <Link as={Link} to="/diagnosticstestfilter">
                    <a href="#">
                      <img src="assets/images/consult-stethoscope.svg" alt="" />
                      <div className="add-cart dcart">
                        <h4>Vijaya Diagnostics</h4>
                        <h6>Warangal</h6>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>                
              </div>
            </div>
          </div>
       
        );
    }
}
export default DiagnosticSlider;