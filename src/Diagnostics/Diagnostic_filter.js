import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import axios from 'axios';
import globalNames from '../Utils/globals';

class DiagnosticFilter extends Component
{
  componentDidMount() {
    window.scrollTo(0, 0);
}

    render()
    {            
        return (
            <div>
                <Header/>
                <Location/>
                <div className="container-fluid">
        <div className="diagnostics__filter__fltr-ttl-sec">
          <div className>
            <div className="row m-0">
              <div className="col-md-3 ps-5">
              </div>
              <div className="col-md-9">
                <div className="row  bg-light pt-2 pb-2">
                 
                <div className="col-md-4">
                          <div className="diagnostics__filter__doctorCard rounded-3">
                            <a href="#">
                            </a><a>
                            </a><div className="diagnostics__filter__doctorCard__card"><a>
                                <img className="diagnostics__filter__doctorCard__card__image rounded-top" src="assets/images/vijaya_logo.png" alt="" />
                              </a><div className="diagnostics__filter__doctorCard__card__abtDiagnos"><a>
                                  <h3>Diagnostic Name: Vijaya Diagnostic</h3>
                                  <p>warangal</p>
                                  {/* <h4>Blood Test</h4> */}
                                </a><div className="d-flex justify-content-between"><a>
                                    {/* <p><b> ₹ 250 </b></p> */}
                                  </a>
                                  <Link as={Link} to="/diagnosticstestfilter">
                                  <a href="#">
                                    <button className="theme__button">View</button>
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
          </div>
        </div>
      </div>

                <Footer/>
            </div>

          
     
        );
    }
}
export default DiagnosticFilter;