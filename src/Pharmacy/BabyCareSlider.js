import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BabyCareSlider extends Component
{
    render()
    {
        return (
            <div id="baby_care">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="baby_care-title">
                <h2>category</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="main">
                <div className="slider slider-nav-baby">
                  <div className="col-md-4">
                    <div className="baby_care">
                    <Link as={Link} to="/allmedicine">
                      <a href="#">
                        <img src="assets/images/pharmacy-babycare.jpg" alt="" />
                      </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="baby_care">
                    <Link as={Link} to="/allmedicine">
                      <a href="#">
                        <img src="assets/images/pharmacy-babycare.jpg" alt="" />
                      </a>
                      </Link>                      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="baby_care">
                    <Link as={Link} to="/allmedicine">
                      <a href="#">
                        <img src="assets/images/pharmacy-babycare.jpg" alt="" />
                      </a>
                      </Link>                        
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="baby_care">
                    <Link as={Link} to="/allmedicine">
                      <a href="#">
                        <img src="assets/images/pharmacy-babycare.jpg" alt="" />
                      </a>
                      </Link>                      
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="baby_care">
                    <Link as={Link} to="/allmedicine">
                      <a href="#">
                        <img src="assets/images/pharmacy-babycare.jpg" alt="" />
                      </a>
                      </Link>                          
                    </div>
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
export default BabyCareSlider;