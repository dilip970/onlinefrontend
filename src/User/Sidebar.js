import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';

class UserSidebar extends Component

{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    render()
    {
        return (


        <div className="sidebar " >
          {/* <div className="toggle">
            <button className="btn theme__button" onclick="usersidebar()">Menu</button>
          </div> */}
          <div id="sidebar-wrapper">
            
            <ul className="sidebar-nav">
              <li>
                <a href="/userdashboard"  style={{paddingTop:"20px"}}>Dashboard</a>
              </li>
              <Link as={Link} to="/userappointment" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Appointments</a>
              </li>
              </Link>

              <Link as={Link} to="/userorders" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Medical Orders</a>
              </li>
              </Link>
              
              <Link as={Link} to="/userlabtest" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Lab Tests</a>
              </li>
              </Link>
              
              <Link as={Link} to="/profile" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Profile</a>
              </li>
              </Link>
              <Link as={Link} to="/addressbook" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Address Book</a>
              </li>
              </Link>

              <Link as={Link} to="/changepassword" style={{textDecoration:"none"}}>
              <li>
                <a href="#">Change Password</a>
              </li>
              </Link>
              <li>
                <a onClick={(e) => globalNames.userlogout(e)} href="#">Logout</a>
              </li>
            </ul>
          </div>
          </div>
         
        );
    }
}
export default UserSidebar;

