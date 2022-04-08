import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserSidebar from './Sidebar';



class UserDashboard extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0);
        if(localStorage.getItem("usertoken")==undefined){
            window.location.href="/login";
        }
    }
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
            <div className="col-lg-10"  style={{marginTop: '10px'}}>
            
            <div className="row">
            <div className="col-sm-8">
            
        <div className="userprofile__apmnts__rightSide__uldetails">
            <h4>Dashboard</h4>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <h6><span>Email:</span>{localStorage.getItem("patientemail")}</h6>
          </div>
          </div>

          </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 p-2">
            <div className="dash">
              <div className="dash-text">
                <h1>10</h1>
                <h4>Appointments</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-2">
            <div className="dash">
             
              <div className="dash-text">
                <h1>25</h1>
                <h4>Medicines</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-2">
            <div className="dash">
              <div className="dash-text">
                <h1>5</h1>
                <h4>LabTests</h4>
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
export default UserDashboard;