import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import UserSidebar from './Sidebar';
class UserAppointment extends Component

{
   
    render()
    {
        return (         
            <div>
            <Header/>
            <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
            <UserSidebar/>
            </div>
            <div className="col-md-10"  style={{marginTop: '110px'}}>
            {/* <div className="userAppointments__apmnts__rightSide"> */}
            <div className="row">
            <div className="col-sm-8">
            
        <div className="userprofile__apmnts__rightSide__uldetails">
            <h4>Appointments</h4>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <h6><span>Email:</span>{localStorage.getItem("patientemail")}</h6>
          </div>
          </div>

          </div>
          <div class="table-responsive">
          <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Appointment ID</th>
        <th>Medicial Problem</th>
        <th>Doctor Name</th>
        <th>Clinic Name</th>
        <th>Address</th>
        <th>Fee</th>
        <th>Date</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
    <tr>
            <td>1</td>
            <td>Dilip Kumar</td>
            <td>Fever</td>
            <td>Dr.Nagaraju</td>
            <td>Laxmi Clinic</td>
            <td>Warangal</td>
            <td>500</td>
            <td>10-10-2021</td>
            <td>Visited</td>
        
</tr>
    </tbody>
  </table>
  </div>
            </div>
        </div>
            </div>
            {/* </div> */}
            <Footer/>
            </div>
        );
    }
}
export default UserAppointment;
