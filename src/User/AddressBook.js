import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import UserSidebar from './Sidebar';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';

class AddressBook extends Component
{
  constructor(props) {
    super(props);
    this.state = {
     useraddress :[]
    };
  }
  componentDidMount()
  {
      return axios.post(globalNames.APIURL+'/get-user-delivery-addresses-by-user-id',{
            ubit_id : localStorage.getItem("userid"),
            ubit_token : localStorage.getItem("usertoken")

    }).then((userRes) => {
          let useraddress = userRes.data.data.user_delivery_addresses_data
            
            this.setState({
              useraddress : useraddress
            });
          })
  }
  handleClick = async(udaiid)=>{
    const udai_id = udaiid;
    alert("Are You want to delete Delivery address?")
    return axios.delete(globalNames.APIURL+"delete-user-delivery-address-by-id/"+udai_id,{
      ubit_id : localStorage.getItem("userid"),
      ubit_token : localStorage.getItem("usertoken"),

    }).then((res)=>{
      if(res.status=="200"){
        alert("user delivery address deleted successfully")
        // window.location.reload();
      }
      else{
        alert("Something went Wrong...")
      }
    })
  }

    render()
    {
      let list = this.state.useraddress;
      if (this.state.useraddress){
        list = (
          this.state.useraddress.map((useraddress,key) =>{
            return(
              <div className="col-sm-4">
            <div className="address_list">
              <h3> Delivery Address</h3>  
              <div className="table table-borderless delivery-table">
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name:</b></td>
                      <td>{useraddress.udai_name}</td>
                    </tr>
                    <tr>
                      <td><b> Mobile:</b></td>
                      <td>{useraddress.udai_mobile}</td>
                    </tr>
                    <tr>
                      <td><b> House No:</b></td>
                      <td>{useraddress.udai_full_address}</td>
                    </tr>
                    <tr>
                      <td> <b> City:</b></td>
                      <td>{useraddress.ldm_name}</td>
                    </tr>
                    <tr>
                      <td> <b> State:</b></td>
                      <td>{useraddress.lsm_name}</td>
                    </tr>
                    <tr>
                      <td><b> Country:</b></td>
                      <td>{useraddress.lcm_name}</td>
                    </tr>
                    <tr>
                      <td><b> Pincode:</b></td>
                      <td>{useraddress.udai_pincode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>   
              <Link as={Link} to= {`/edit-delivery-address/${useraddress.udai_id}`} style={{textDecoration:"none"}}>
            <button className="btn theme__button ">Edit</button>
            </Link>
              <button className="btn theme__button " onClick={()=> this.handleClick(useraddress.udai_id)}>Delete</button>
            </div>
          </div>
            )
          })
        )
      }
        return (
            
            <div>
            <Header/>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
            <UserSidebar/>
            </div>
            <div className="col-md-10"  style={{marginTop: '110px'}}>
            <div className="userprofile__apmnts__rightSide">
            <div className="row">
            <div className="col-sm-8">
            
            <div className="userprofile__apmnts__rightSide__uldetails">
            <Link as={Link} to="/add-delivery-address" style={{textDecoration:"none"}}>
            <button className="btn theme__button ">Add Delivery Address</button>
            </Link>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <h6><span>Email:</span>{localStorage.getItem("patientemail")}</h6>
          </div>
          </div>

          </div>

        <div className="row">
          {list}
          {/* <div className="col-sm-4">
            <div className="address_list">
              <h3> Delivery Address</h3>  
              <div className="table table-borderless delivery-table">
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td>Dilip</td>
                    </tr>
                    <tr>
                      <td><b> Mobile</b></td>
                      <td>9876543210</td>
                    </tr>
                    <tr>
                      <td><b> Email</b></td>
                      <td>dilip@yopmail.com</td>
                    </tr>
                    <tr>
                      <td><b> House No</b></td>
                      <td>20-98</td>
                    </tr>
                    <tr><td> <b> Landmark</b></td>
                      <td>near hotel</td>
                    </tr><tr>
                      <td> <b> City </b></td>
                      <td>warangal</td>
                    </tr>
                    <tr>
                      <td> <b> State</b></td>
                      <td>telangana</td>
                    </tr>
                    <tr>
                      <td><b> Country</b></td>
                      <td>India</td>
                    </tr>
                    <tr>
                      <td><b> Pincode</b></td>
                      <td>506002</td>
                    </tr>
                  </tbody>
                </table>
              </div>   
              <Link as={Link} to="/edit-delivery-address" style={{textDecoration:"none"}}>
            <button className="btn theme__button ">Edit</button>
            </Link>
              <button className="btn theme__button ">Delete</button>
            </div>
          </div> */}
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
export default AddressBook;

