import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import globalNames from '../Utils/globals';
import axios from 'axios';
class DoctorView extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      ubit_id :'',
      ubit_role_id :'',
      rbcm_name : '',
      ubit_country_id:'',
      ubit_district_id :'',
      ubit_state_id :'',
      ubit_owner_name : '',
      ubit_owner_file :'',
      ubit_owner_file1 : '',
      ubit_owner_file2 : '',
      ubit_establishment_name : '',
      ubit_license_file1 : '',
      ubit_license_file2 : '',
      ubit_full_address : '',
      ubit_mobile_number : '',
      ubit_description : '',
      ubit_experience_in_years : '',
      ubit_consultation_fee :''
    };
  }
  componentDidMount()
  {
    let apiBody = {
      ubit_id : this.props.match.params.ubit_id,
    };
      return axios.post(globalNames.APIURL+'/get-user-profile-by-user-id',apiBody)
      .then((userRes) => {
          let doctor = userRes.data.data.user_profile_data[0];
          this.getBase64FromUrl(globalNames.USERFILES+doctor.ubit_owner_file).then((resD1) => { 
        
            this.setState({
              ubit_owner_file         : resD1,
              ubit_id                 : doctor.ubit_id,
              ubit_owner_name         : doctor.ubit_owner_name,
              rbcm_name               : doctor.ubit_category_id,
              ubit_mobile_number      : doctor.ubit_mobile_number,
              ubit_email              : doctor.ubit_email,
              ubit_country_id         : doctor.ubit_country_id,
              ubit_state_id           : doctor.ubit_state_id,
              ubit_district_id        : doctor.ubit_district_id,
              ubit_full_address       : doctor.ubit_full_address,
              ubit_experience_in_years: doctor.ubit_experience_in_years,
              ubit_consultation_fee   : doctor.ubit_consultation_fee,            
            });
          })
        })
        }
        getBase64FromUrl = async (url) => {
          const data = await fetch(url);
          const blob = await data.blob();
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob); 
            reader.onloadend = () => {
              const base64data = reader.result;   
              resolve(base64data);
            }
          });
        }

    render()
    {
        return (
            <div>
                <Header/>
                <Location/>
                <div className="consultProfile__doctorProf">
        <div className="px-5">
          <div className="row">
            <div className="col-md-8">
              <div className="consultProfile__doctorProf__leftsec">
                <div className="row">
                  <div className="col-md-3">
                    <div className="consultProfile__doctorProf__image">
                    <img src={this.state.ubit_owner_file} />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="consultProfile__doctorProf__content">
                      <h3>{this.state.ubit_owner_name}</h3>
                      
                      <p><b>Specialization :{this.state.rbcm_name}</b></p>
                      <p><b>Experience :{this.state.ubit_experience_in_years} years</b></p>
                      <div className="consultProfile__doctorProf__price">
                        <h5>₹{this.state.ubit_consultation_fee}</h5>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-4">
                          <p><b>Mon - Sat</b></p>
                          <p>09:00 AM - 02:00 PM</p>
                          <p>06:00 PM - 09:00 PM</p>
                        </div>
                        <div className="col-md-8">
                          <p><b>Sun</b></p>
                          <p>10:30 AM - 03:00 PM</p>
                        </div>
                      </div>
                      <hr />
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sit error id aliquam unde, commodi blanditiis reprehenderit
                        velit eligendi nihil neque quam reiciendis libero impedit.
                        Aut in quas voluptate nobis fugiat.</p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sit error id aliquam unde</p>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sit error id aliquam unde</p>
                      <hr />
                      <div className="consultProfile__doctorProf__content__btn">
                      { localStorage.getItem("usertoken")!=undefined ? 
                      <Link as={Link} to={`/book-appointment/${this.state.ubit_id}`} >
                        <a href="#">
                          <button className="theme__button">Book Appointment</button>
                        </a>
                      </Link> :
                       <Link as={Link} to={"/login/"}>
                        <a href="#">
                          <button className="theme__button">Book Appointment</button>
                        </a>
                        </Link> }

                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="consultProfile__doctorProf__rightsec">
                <p>PICK A TIME SLOT</p>
                <h5>Aswini Clinic</h5>
                <p>Hanamkonda</p>
                <hr />
                <div className="d-flex justify-content-around consultProfile__doctorProf__rightsec__slotSec">
                  <p>Today <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__notavail">No Slots Available</span> </p>
                  <p>Tomarow <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__avail">14 Slots Available</span> </p>
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
      <Footer/>
      </div>
        );
    }
}
export default DoctorView;