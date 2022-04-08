import React, { Component, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import axios from 'axios';
import globalNames from '../Utils/globals';
import ReactDOM from 'react-dom';


class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctortimings: [],
      user: [],
      ubit_owner_name: '',
      ubit_mobile_number: '',
      ubit_email: '',
      ubit_description: '',
      ubit_experience_in_years: '',
      ubit_consultation_fee: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    return axios.post(globalNames.APIURL + 'doctor-consulation-timings', {
      ubit_id: this.props.match.params.ubit_id
    }).then((res) => {

      let doctortimings = res.data.data.doctor_consulation_timings
      return axios.post(globalNames.APIURL + '/get-user-profile-by-user-id', {
        ubit_id: localStorage.getItem("userid"),
        ubit_id: this.props.match.params.ubit_id
      }).then((userRes) => {

        let user = userRes.data.data.user_profile_data[0];
        this.setState({
          doctortimings: doctortimings,
          user: user,
          ubit_owner_name: user.ubit_owner_name,
          ubit_mobile_number: user.ubit_mobile_number,
          ubit_email: user.ubit_email,
          ubit_description: user.ubit_description,
          ubit_experience_in_years: user.ubit_experience_in_years,
          ubit_consultation_fee: user.ubit_consultation_fee

        })
      })
    })
  }

  self1(event) {
    event.preventDefault();
    //event.target.reset();
    let selfform = (
      <form onsubmit className="php-email-form" id="formElement">
        <div className="form-group">
          <input type="text" className="form-control" name="ubit_owner_name" placeholder="Patient's Name" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="ubit_mobile_number" id="phone" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="ubit_email" placeholder="Email" />
        </div>
        <div className="form-group">
          <select name="gender" id className="form-control">
            <option value>Select Gender</option>
            <option value>Male</option>
            <option value>Female</option>
            <option value>Others</option>
          </select>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="age" id="age" placeholder="Age" />
        </div>
        <div className="form-group">
          <select name="gender" id className="form-control">
            <option value="">Select Date</option>
            {
              this.state.doctortimings.map((dt, key) => {
                return <option value={dt.dct_id}>{dt.dct_date}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <select name="gender" id className="form-control">
            <option value="">Select Time</option>
            {
              this.state.doctortimings.map((dt, key) => {
                return <option value={dt.dct_id}>{dt.dct_time}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="medical_Problem" id="Problem" placeholder="Medical Problem" />
        </div>
        <button type="submit" className="btn theme__button ">Send Message</button>
      </form>
    );
    ReactDOM.render(selfform, document.getElementById('selfandfamilymember'));
  }

  familymember(event) {
    event.preventDefault();
    let familymemberform = (
      <form onsubmit className="php-email-form" id="formElement">
        <div className="form-group">
          <input type="text" className="form-control" name="patient_name" placeholder=" Family member Patient's Name" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="mobile_no" id="phone" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="ubit_email1" placeholder="Email" />
        </div>
        <div className="form-group">
          <select name="gender1" id className="form-control">
            <option value>Select Gender</option>
            <option value>Male</option>
            <option value>Female</option>
            <option value>Others</option>
          </select>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" name="age1" id="age" placeholder="Age" />
        </div>
        <div className="form-group">
          <select name="gender1" id className="form-control">
            <option value="">Select Date</option>
            {
              this.state.doctortimings.map((dt, key) => {
                return <option value={dt.dct_id}>{dt.dct_date}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <select name="gender1" id className="form-control">
            <option value="">Select Time</option>
            {
              this.state.doctortimings.map((dt, key) => {
                return <option value={dt.dct_id}>{dt.dct_time}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="medical_Problem1" id="Problem" placeholder="Medical Problem" />
        </div>
        <button type="submit" className="btn theme__button ">Send Message</button>
      </form>

    )
    ReactDOM.render(familymemberform, document.getElementById('selfandfamilymember'));
  }

  render() {
    // let timings = this.state.doctortimings
    // if(this.state.doctortimings){
    //   timings =(this.state.doctortimings.map((doctortimings,key)=>{
    //     return(
    //       <div>
    //           <div className="form-group">
    //             <select name="gender" id className="form-control">
    //               <option value>Select Gender</option>
    //               <option value>Male</option>
    //               <option value>Female</option>
    //               <option value>Others</option>
    //             </select>
    //           </div> 

    //       </div>
    //     )
    //   })
    //   )
    // }
    return (
      <div>
        <Header />
        <Location />
        <div className="contact__contct">
          <div className="container">
            <div className="section-title">
              <h3>
                <span>BOOK APPOINTMENT</span>
              </h3>
              <div className="book-button" style={{ display: 'flex' }}>
                <div className="mt-4">
                  <button className="btn theme__button" style={{ marginRight: '5px' }} onClick={this.self1.bind(this)}>
                    self
                  </button>
                </div>
                <div className="mt-4">
                  <button className="btn theme__button" style={{ marginRight: '5px' }} onClick={this.familymember.bind(this)}>
                    family member
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8" id="selfandfamilymember">
                <form onsubmit className="php-email-form" id="formElement">
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.ubit_owner_name} name="ubit_owner_name" placeholder="Patient's Name" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" value={this.state.ubit_mobile_number} name="ubit_mobile_number" id="phone" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="ubit_email" value={this.state.ubit_email} placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <select name="gender" id className="form-control">
                      <option value>Select Gender</option>
                      <option value>Male</option>
                      <option value>Female</option>
                      <option value>Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" name="age" id="age" placeholder="Age" />
                  </div>
                  <div className="form-group">
                    <select name="gender" id className="form-control">
                      <option value="">Select Date</option>
                      {
                        this.state.doctortimings.map((dt, key) => {
                          return <option value={dt.dct_id}>{dt.dct_date}</option>
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="gender" id className="form-control">
                      <option value="">Select Time</option>
                      {
                        this.state.doctortimings.map((dt, key) => {
                          return <option value={dt.dct_id}>{dt.dct_time}</option>
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="medical_Problem" id="Problem" placeholder="Medical Problem" />
                  </div>
                  <button type="submit" className="btn theme__button ">Send Message</button>
                </form>
              </div>
              <div className="col-lg-4 php-email-form">
                <h4>Checkout Details</h4>
                <hr />
                <div className="d-flex justify-content-lg-between">
                  <p>
                    <b>Amount</b>
                  </p>
                  <p>
                    <b>Rs. {this.state.ubit_consultation_fee}</b>
                  </p>
                </div>
                <div className="d-flex justify-content-lg-between btn-light p-2">
                  <p className="mb-0">
                    <b>Total</b>
                  </p>
                  <p className="mb-0">
                    <b>Rs. {this.state.ubit_consultation_fee}</b>
                  </p>
                </div>
                <div>
                  <button className="btn theme__button btn-sm mt-4">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Appointment;