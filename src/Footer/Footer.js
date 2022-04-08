import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component
{
    render()
    {
        return (
            <div>
        {/* <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer_sec">
                  <h3>Pillbro</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, repellat. Accusantium quos ea doloribus? A sed beatae sapiente commodi nam ipsum dolor set.</p><br />
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer_one">
                  <h3>Useful Links</h3>
                  <ul>
                  <li>
                    <Link as={Link} to="/">
                              <a href="#">Home</a>
                      </Link>
                      </li>
                      <li> <a href="/consult">Consult</a></li>
                      <li>  <a href="/pharmacy">Pharmacy</a></li>
                      <li> <a href="/diagnostics">Diagnostics</a> </li>
                     
                      <li>
                      <Link as={Link} to="/blogs">
                              <a href="#">Blogs</a>
                      </Link>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_one">
                  <h3>Useful Links</h3>
                  <ul>
                   
                    <li><a href="#">Faq's</a></li>
                    <li><a href="#">Aboutus</a></li>
                    <li>
                    <Link as={Link} to="/contactus">
                              <a href="#">Contactus</a>
                      </Link>
                      </li>
                    <li>
                         <Link as={Link} to="/team">
                          <a href="#">Team</a>
                      </Link>
                      </li>

                    <li><a href="javascript:void(0);">Help &amp; Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_one follow">
                  <h3>Follow On</h3>
                  <div className="footer-icons">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true" /></a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="#" className="youtube">
                      <i className="fa fa-youtube-play" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sec-ele">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="final-four">
                  <p>2021 Pillbro. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
<div id="footer-id">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <div className="footer-about">
                <h3>PillBox</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                <a href="javascript:void(0);" className="facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                <a href="javascript:void(0);" className="twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                <a href="javascript:void(0);" className="instagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                <a href="javascript:void(0);" className="youtube"><i className="fa fa-youtube-play" aria-hidden="true" /></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-link">
                <h3>Useful Links</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Pharmacy</a></li>
                  <li><a href="#">LabTests</a></li>
                  <li><a href="#">Doctors</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-link">
                <h3>Products</h3>
                <ul>
                  <li><a href="#">Health Products</a></li>
                  <li><a href="#">Medicines</a></li>
                  <li><a href="#">Baby care Products</a></li>
                  <li><a href="#">Skin Products</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-link">
                <h3>Doctors</h3>
                <ul>
                  <li><a href="#">Specialists</a></li>
                  <li><a href="#">Home nursing</a></li>
                  <li><a href="#">Emergency </a></li>
                  <li><a href="#">Helpus</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="footer-block">
            <div className="row">
              <div className="col-md-4 ml">
                <div className="footer-mailicon">
                  <a href="javascript:void(0);"><i className="fa fa-phone" aria-hidden="true" /></a>
                </div>
                <div className="footer-mailtext">
                  <h4>+91 9876543210</h4>
                  <p>Make a call</p>  
                </div>
              </div>
              <div className="col-md-4 ml" style={{backgroundColor: '#e93e3e'}}>
                <div className="footer-mailicon">
                  <a href="javascript:void(0);"><i className="fa fa-envelope" aria-hidden="true" /></a>
                </div>
                <div className="footer-mailtext">
                  <h4>info@gmail.com</h4>
                  <p>Drop your line</p>  
                </div>
              </div>
              <div className="col-md-4 ml">
                <div className="footer-mailicon">
                  <a href="javascript:void(0);"><i className="fa fa-users" aria-hidden="true" /></a>
                </div>
                <div className="footer-mailtext">
                  <h4>order Now</h4>
                  <p>Delivery is available at your home</p>  
                </div>
              </div>
              <div className="col-md-12">
                <div className="futer">
                  <div className="futer-by1">
                    <p><i className="fa fa-copyright" aria-hidden="true" /> 2022<strong>PillBox</strong> All Rights Reserved.</p>
                  </div>
                  <div className="futer-by2">
                    <p> Designed By <a href="https://svapps.in/">  <strong> SVAPPS</strong></a></p> 
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
export default Footer;