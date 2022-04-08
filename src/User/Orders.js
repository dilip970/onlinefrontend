import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import UserSidebar from './Sidebar';

class UserMedicialOrders extends Component

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
            <h4>Medicine Orders</h4>
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
        <th>Order ID</th>
        <th>Medicine Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>        
        <th>Order Date</th>
        <th>Pharmacy Name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
    <tr>
            <td>1</td>
            <td>P9235468</td>
            <td>ColdAct</td>
            <td>100</td>
            <td>10</td>
            <td>1000</td>
            <td>10-10-2021</td>
            <td>A to Z Medical Hall</td>
            <td>9876543210</td>
            <td>Warangal</td>
            <td>Delivered</td>

        
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
export default UserMedicialOrders;
