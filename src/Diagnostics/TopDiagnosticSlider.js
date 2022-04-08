import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopDiagnosticSlider extends Component
{
    render()
    {
        return (
            <div id="baby_care">
        <div className="container">
          <div className="row">
          <div class="col-md-12">
          <div className="pharmacy_product-title">
          <h2>TOP DIAGNOSTIC CENTERS</h2>
          </div>
        </div>
        </div>
        
            <div className="row">
                  <div className="col-md-3">
                    <div className="baby_care">
                    <Link as={Link} to="/diagnosticstestfilter">
                      <a href="#">
                        <img src="assets/images/apollo.jpg" alt="" />
                      </a>

                      </Link>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="baby_care">
                    <Link as={Link} to="/diagnosticstestfilter">
                      <a href="#">
                        <img src="assets/images/saidiagnostic.png" alt="" />
                      </a>
                      </Link>                      
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="baby_care">
                    <Link as={Link} to="/diagnosticstestfilter">
                      <a href="#">
                        <img src="assets/images/vijaya_logo.png" alt="" />
                      </a>
                      </Link>                        
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="baby_care">
                    <Link as={Link} to="/diagnosticstestfilter">
                      <a href="#">
                        <img src="assets/images/apollo.jpg" alt="" />
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
export default TopDiagnosticSlider;