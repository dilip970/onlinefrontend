import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import UserSidebar from './Sidebar';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';

class UserProfile extends Component

{
  constructor(props) {
    super(props);
    this.state = {
      ubit_role_id :'',
      ubit_category_id : '',
      countries : [],
      states :[],
      districts :[],
      ubit_country_id:'',
      ubit_district_id :'',
      ubit_state_id :'',
      ubit_owner_name : '',
      ubit_owner_file1 : '',
      ubit_owner_file2 : '',
      ubit_establishment_name : '',
      ubit_license_file1 : '',
      ubit_license_file2 : '',
      ubit_full_address : '',
      ubit_mobile_number : '',
      ubit_email : '',
      ubit_password : '',
      ubit_description : '',
      ubit_experience_in_years : '',
      ubit_consultation_fee :'',
      

    };
  }
  componentDidMount()
  {
      return axios.post(globalNames.APIURL+'/get-user-profile-by-user-id',{
            ubit_id : localStorage.getItem("userid"),

    }).then((userRes) => {
          let user = userRes.data.data.user_profile_data[0];
          return axios.get(globalNames.APIURL+'/countries').then((countriesRes) => {
            let countries = countriesRes.data.data.countries_data;
          
          return axios.post(globalNames.APIURL+'/states',{
            lsm_country_id : user.ubit_country_id }).then((stateRes)=>{
            let states = stateRes.data.data.states_data;

          return axios.post(globalNames.APIURL+'/districts',{
              ldm_state_id : user.ubit_state_id
            }).then((districtsRes)=>{
              let districts = districtsRes.data.data.districts_data;
            
            this.setState({
              ubit_owner_name         : user.ubit_owner_name,
              ubit_mobile_number      : user.ubit_mobile_number,
              ubit_email              : user.ubit_email,
              ubit_country_id         : user.ubit_country_id,
              ubit_state_id           : user.ubit_state_id,
              ubit_district_id        : user.ubit_district_id,
              ubit_role_id            : '5',
              ubit_owner_file         : user.ubit_owner_file,
              ubit_owner_file1        : '0',
              ubit_owner_file2        : '0',
              ubit_full_address       : user.ubit_full_address,
              ubit_description        : '0',
              countries               : countries,
              states                  : states,
              districts              : districts
              
            });
          })
        })
      
        });
      });
  }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,

      });
    };
    changeStates = async(event) => {
      const lsm_country_id = event.target.value;
      this.setState({
        ubit_country_id : lsm_country_id
      });
          return axios.post(globalNames.APIURL+'/states', {
            lsm_country_id : lsm_country_id
          }).then((statesData) => {
            let states = statesData.data.data.states_data;
                  this.setState({
                    states : states

                  });
              })
          }

  changeDistricts = async(event) => {
      const ldm_state_id = event.target.value;
       this.setState({
         ubit_state_id : ldm_state_id
       });
          return axios.post(globalNames.APIURL+'/districts',{
            ldm_state_id : ldm_state_id
          }).then((districtsData) => {
                let districts = districtsData.data.data.districts_data;
                  this.setState({
                    districts : districts
                  });
          });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { ubit_owner_name, ubit_mobile_number, ubit_email , ubit_country_id,ubit_district_id,ubit_full_address,ubit_state_id,ubit_owner_file,ubit_owner_file2} = this.state;

    var formData = { ubit_owner_name, ubit_mobile_number, ubit_email , ubit_country_id,ubit_district_id,ubit_full_address,ubit_state_id,ubit_owner_file,ubit_owner_file2,
      ubit_id : localStorage.getItem("userid"),
      ubit_token : localStorage.getItem("usertoken"),
      ubit_role_id:5,
      ubit_category_id : '1',
      ubit_owner_file1 : '0',
      //ubit_owner_file2 : '0',
      ubit_establishment_name : '0',
      ubit_license_file1 : '0',
      ubit_license_file2 : '0',
      ubit_full_address : '0',
      ubit_description : '0',
      ubit_experience_in_years : '0',
      ubit_consultation_fee :'0'
         
    };

    return axios
      .patch(globalNames.APIURL+'/update-user-by-user-id', { ...formData },{
      })
      .then((res) => {
        alert(res)
        console.log(res)
        if(res.data.status=="200"){
            // localStorage.removeItem("useremail");
            // localStorage.setItem("useremail",formData.ubit_email);
            alert("Profile Updated Successfully!!");
            window.location.reload();
        }
        else{
            alert("Profile Update Failed..");
            console.log(res);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleFileRead1 = async (event) => {
    const file = event.target.files[0]
    const base64 = await this.convertBase64(file)
    this.setState({
      ubit_owner_file2 : base64,
      ubit_owner_file : event.target.files[0].name
    });
  }

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
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
            <div className="col-md-10"  style={{marginTop: '110px'}}>
            <div className="userprofile__apmnts__rightSide">
            <div className="row">
            <div className="col-sm-8">
            
            <div className="userprofile__apmnts__rightSide__uldetails">
            <h4>Profile</h4>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="user_side_name">
          <img src={globalNames.USERFILES+this.state.ubit_owner_file} alt="" />
          <h6><span>Email:</span>{localStorage.getItem("patientemail")}</h6>
          </div>
          </div>

          </div>
         
          
          <div className="userprofile__profileDetails">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlfor>Full Name</label>
                  <input type="text" pattern="^[a-zA-z\s]+$" title="Input allows only Alphabets, Spaces.." value= {this.state.ubit_owner_name} className="form-control fm" name="ubit_owner_name" onChange={this.handleInputChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Mobile</label>
                  <input type="text"  maxLength={10} pattern="[1-9]{1}[0-9]{9}" title="Input allows exactly 10 numeric digits" value ={this.state.ubit_mobile_number} className="form-control fm" name="ubit_mobile_number" onChange={this.handleInputChange} required />
                </div>

                <div className="col-md-4">
                  <label htmlfor>Email Address</label>
                  <input type="email" value ={this.state.ubit_email} className="form-control fm"  name="ubit_email"  onChange={this.handleInputChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Gender</label>
                  <select name="gender" value ="" className="form-control fm" onChange="" id >
                    <option value>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlfor>Age</label>
                  <input type="text" value ="" className="form-control fm" name="dob" onChange="" />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Blood group</label>
                  <select name="bloodgroup" value ="" className="form-control fm" onChange="" >
                    <option value="">Group Type</option>
                    <option value="A +ve">A +ve</option>
                    <option value="A -ve">A -ve</option>
                    <option value="B +ve">B +ve</option>
                    <option value="B -ve">B -ve</option>
                    <option value="O +ve">O +ve</option>
                    <option value="O -ve">O -ve</option>
                    <option value="AB +ve">AB +ve</option>
                    <option value="AB -ve">AB -ve</option>
                  </select>
                </div>
                
                <div className="col-md-4">
                  <label htmlfor>House No./ Street Name/ Area</label>
                  <input type="text" value ="" className="form-control fm" name="houseno" onChange="" />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Colony / Street / Locality</label>
                  <input type="text" value ="" className="form-control fm" name="street" onChange="" />
                </div>
                <div className="col-md-4">
                  <label htmlfor>Country</label>
                  <select className="form-control fm" name="ubit_country_id" 
                   onChange={this.changeStates} value={this.state.ubit_country_id} required>
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
                  <select className="form-control fm" name="ubit_state_id" value={this.state.ubit_state_id} onChange={this.changeDistricts} required>
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
                  <select className="form-control fm" name="ubit_district_id" value={this.state.ubit_district_id} onChange={this.handleInputChange} required>
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
                  <input type="text" value ="" className="form-control fm" name="pincode" onChange=""  />
                </div>
               
                <div className="col-md-4">
                  <label htmlfor>Language</label>
                  <select name="language" value ="" className="form-control fm" onChange=""  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="telugu">Telugu</option>
                    <option value="tamil">Tamil</option>
                    <option value="malayalam">Malayalam</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlfor>Profile Picture</label>
                  <input type="file" className="form-control fm" name="profile_picture"  onChange={this.handleFileRead1} />
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
export default UserProfile;

