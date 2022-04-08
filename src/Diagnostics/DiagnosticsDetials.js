import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';

class DiagnosticDetails extends Component
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
                <div className="tests__details">
        <div className="px-5">
          <div className="row">
            <div className="col-md-3">
              <div className="tests__details__imageSec">
                <img src="assets/images/filter.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="tests__details__content">
                <h3>Radar diagnostics Center</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias natus nam eum ipsum asperiores sit quae placeat cupiditate, facilis, expedita id, minus optio repellat delectus itaque eligendi animi provident!</p>
                <p><b>Certified Labs</b></p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Free Home Sample Pickup on orders above ₹ 400</p>
                <p>E-Reports in 2 days</p>
                <p>book your slots</p>
              </div>
              <div className="tests__details__pricesec">
                <p><b> ₹ 250 </b></p>
                <p>+ 10% Health cashback* T&amp;C </p>
                <Link as={Link} to="/book-appointment">
                <a href="#">
                  <button className="theme__button tests__details__pricesec__btn">Book Now</button>
                </a>
             </Link>
                
              </div>                           
            </div>
            <div className="col-md-4"> 
              <div className="consultProfile__doctorProf__rightsec">
                <p>PICK A TIME SLOT</p>
                <hr />
                <div className="d-flex justify-content-between consultProfile__doctorProf__rightsec__slotSec">
                  <span className="material-icons">chevron_left</span>
                  <p>Today <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__notavail">No Slots Available</span> </p>
                  <p>Tomarow <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__avail">14 Slots Available</span> </p>
                  <p>Fri 19 Mar <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__avail">14 Slots Available</span> </p>
                  <span className="material-icons">chevron_right</span>
                </div>
                <h2>Morning <span> (4 slots) </span></h2>
                <div className="d-flex consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                </div>
                <h2>Afternoon <span> (8 slots) </span></h2>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>  
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                                      
                </div>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>  
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                                      
                </div>
                <h2>Evening <span> (2 slots) </span></h2>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                      
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
export default DiagnosticDetails;