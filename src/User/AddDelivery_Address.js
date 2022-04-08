import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import UserSidebar from './Sidebar';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';

class AddDeliveryAddress extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        udai_name:'',
        udai_mobile:'',
        udai_full_address :'',
        udai_pincode:'',
        udai_country_id:'',
        udai_state_id:'',
        udai_district_id:'',
        countries : [],
        states :[],
        districts :[],
    };
  }
  componentDidMount()
  {
        return axios.get(globalNames.APIURL+'/countries').then((countriesRes) => {
            let countries = countriesRes.data.data.countries_data;
            this.setState({
              countries : countries,
              udai_country_id : countries.lcm_id
            });
        });
  }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,

      });
    };
    changeStates = async(event) => {
      const udai_country_id = event.target.value;
      this.setState({
        udai_country_id : udai_country_id
      });
          return axios.post(globalNames.APIURL+'/states', {
            lsm_country_id : udai_country_id
          }).then((statesData) => {
            let states = statesData.data.data.states_data;
                  this.setState({
                    states : states

                  });
              })
          }

  changeDistricts = async(event) => {
      const udai_state_id = event.target.value;
       this.setState({
        udai_state_id : udai_state_id
       });
          return axios.post(globalNames.APIURL+'/districts',{
            ldm_state_id : udai_state_id
          }).then((districtsData) => {
                let districts = districtsData.data.data.districts_data;
                  this.setState({
                    districts : districts
                  });
          });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { udai_name, udai_mobile, udai_country_id,udai_district_id,udai_full_address,udai_state_id,udai_pincode} = this.state;

    var formData = { 
        udai_name,
        udai_mobile,
        udai_country_id,
        udai_district_id,
        udai_full_address,
        udai_state_id,
        udai_pincode,
        ubit_id : localStorage.getItem("userid"),
        ubit_token : localStorage.getItem("usertoken"),
    };

    return axios
      .post(globalNames.APIURL+'save-user-delivery-address', { ...formData },{
      })
      .then((res) => {
        if(res.data.status=="200"){
            alert("user delivery address saved successfully");
            window.location.href='/addressbook/';

        }
        else{
            alert("user delivery address Failed..");
            console.log(res);
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
            <div className="col-md-10"  style={{marginTop: '110px'}}>
            <div className="userprofile__apmnts__rightSide">
            <div className="row">
            <div className="col-sm-8">
            
            <div className="userprofile__apmnts__rightSide__uldetails">
            <h4>Add Delivery Address</h4>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <h6><span>Email:</span>{localStorage.getItem("patientemail")}</h6>
          </div>
          </div>
          </div>
          
          <div className="userprofile__profileDetails">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlfor>Full Name</label>
                  <input type="text" pattern="^[a-zA-z\s]+$" title="Input allows only Alphabets, Spaces.." className="form-control fm" name="udai_name" onChange={this.handleInputChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Mobile</label>
                  <input type="text"  maxLength={10} pattern="[1-9]{1}[0-9]{9}" title="Input allows exactly 10 numeric digits"  className="form-control fm" name="udai_mobile" onChange={this.handleInputChange} required />
                </div>              
             
                <div className="col-md-4">
                  <label htmlfor>House No / Address</label>
                  <input type="text" className="form-control fm" name="udai_full_address" onChange={this.handleInputChange} required />
                </div>
                
                <div className="col-md-4">
                  <label htmlfor>Country</label>
                  <select className="form-control fm" name="udai_country_id" 
                   onChange={this.changeStates} required>
                        <option value="">Select Country</option>
                        {
                                this.state.countries.map((c,key) => {
                                    return <option value={c.lcm_id}>{c.lcm_name}</option>
                                })
                            }                
                      </select>
                </div>
                <div className="col-md-4">
                  <label htmlfor>State</label>
                  <select className="form-control fm" name="udai_state_id" onChange={this.changeDistricts} required>
                                <option value="">Select State</option>
                                {
                                this.state.states.map((s,key) => {
                                    return <option value={s.lsm_id}>{s.lsm_name}</option>
                                })
                            }       
                            </select>
                </div>
                <div className="col-md-4">
                  <label htmlfor>City</label>
                  <select className="form-control fm" name="udai_district_id"  onChange={this.handleInputChange} required>
                                <option value="">Select City</option>
                                {
                                this.state.districts.map((d,key) => {
                                    return <option value={d.ldm_id}>{d.ldm_name}</option>
                                })
                            }       
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlfor>Pincode</label>
                  <input type="text" className="form-control fm" name="udai_pincode" onChange={this.handleInputChange} required />
                </div>
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
export default AddDeliveryAddress;

