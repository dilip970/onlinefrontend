

import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import globalNames from '../Utils/globals';
import UserSidebar from './Sidebar';
import { Link } from 'react-router-dom';

class Changepassword extends Component

{
  constructor(props) {
    super(props);
    this.state = {
      ubit_old_password: '',
      ubit_new_password: '',
      ubit_confirmpassword : '',
      am_passwordChanged : '',
      message : '',
      ubit_id : localStorage.getItem('userid')
    };
}
handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
};
handleSubmit = e => {
    e.preventDefault();
    const { ubit_old_password, ubit_new_password, ubit_confirmpassword, ubit_id } = this.state;
    const passwords = {
      ubit_old_password,
      ubit_new_password,
      ubit_confirmpassword,
      ubit_id,
      ubit_token : localStorage.getItem("usertoken")
    };
    if(passwords.ubit_new_password!=passwords.ubit_confirmpassword)
    {
        alert("confirm Password should be same with New password!!");
        return false;
    }
    else if(passwords.ubit_new_password==passwords.ubit_old_password){
      alert("New Password do not match with old password!!");
      return false;
    };
    
    return axios
      .post(globalNames.APIURL+'/change-password/', { ...passwords })
      .then((res) => {
          console.log(res);
        if(res.data.status=="200"){
          this.setState({
            am_passwordChanged : "1",
            message : 'Password Changed Successfully...'
          })
        }else{
            this.setState({
                am_passwordChanged : "2",
                message : 'Old password is incorrect...'
            })
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

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

          <div className="col-md-10" style={{marginTop: '110px'}}>
        <div className="userprofile__apmnts__rightSide">
        <div className="row">
            <div className="col-sm-8">
            
        <div className="userprofile__apmnts__rightSide__uldetails">
            <h4>Change Password</h4>
          </div>
          {
                    (this.state.am_passwordChanged==2) ? <div class="alert alert-warning">
                    {this.state.message}
                    </div> 
                    : (this.state.am_passwordChanged==1) ? <div class="alert alert-success">
                    {this.state.message}
                    </div> 
                    : ''
                }
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <h6><span>Email:</span>  {localStorage.getItem("patientemail")}</h6>
          </div>
          </div>

          </div>
          <div className="userprofile__profileDetails">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlfor>Old Password</label>
                  <input id="first_name" type="password" name="ubit_old_password" minlength={8} title="Input allows minimum 8 characters" onChange={this.handleInputChange}  className="form-control fm" required/>
                </div>
              
                <div className="col-md-4">
                  <label htmlfor>New Password</label>
                  <input id="last_name" type="password" name="ubit_new_password" minlength={8} title="Input allows minimum 8 characters"  onChange={this.handleInputChange} className="form-control fm" required/>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                  <label htmlfor>Confirm Password</label>
                  <input id="last_name" type="password" name="ubit_confirmpassword" minlength={8} title="Input allows minimum 8 characters" onChange={this.handleInputChange} className="form-control fm" required/>
                </div>
                </div>
               
                <div className="row">
                <div className="col-md-12">
                <div className="savebutton">
                
                  <button type="submit" className="btn theme__button">SAVE CHANGES</button>
                </div>
                </div>
                
                </div>
              
            </form>
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
export default Changepassword;

