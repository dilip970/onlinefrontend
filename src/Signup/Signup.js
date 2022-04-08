import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
class Signup extends Component
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
      ubit_consultation_fee :''
    };
  }
  componentDidMount()
  {
        return axios.get(globalNames.APIURL+'/countries').then((countriesRes) => {
            let countries = countriesRes.data.data.countries_data;
            this.setState({
              countries : countries
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
      const { ubit_owner_name, ubit_mobile_number, ubit_email, ubit_password,ubit_confirmpassword,ubit_country_id,ubit_state_id,ubit_district_id} = this.state;
      
      const passwords = {
        ubit_password,
        ubit_confirmpassword,
    };
    if(passwords.ubit_password!=passwords.ubit_confirmpassword)
    {
        alert("confirm Password should be same with password!!");
        return false;
    }
      var formData = {
        ubit_owner_name,
        ubit_mobile_number,
        ubit_email,
        ubit_password,
        ubit_country_id,
        ubit_state_id,
        ubit_district_id,
        ubit_role_id:'5',
        ubit_category_id : '1',
        ubit_owner_file1 : '0',
        ubit_owner_file2 : '0',
        ubit_establishment_name : '0',
        ubit_license_file1 : '0',
        ubit_license_file2 : '0',
        ubit_full_address : '0',
        ubit_description : '0',
        ubit_experience_in_years : '0',
        ubit_consultation_fee :'0'
  
      };
      return axios
        .post(globalNames.APIURL+'/register', { ...formData })
        .then((res) => {
          if(res.data.status=="200"){
              alert("Your regsitartion is successfully completed....");
              window.location.href='/signup';
          }else if(res.data.status=="600"){
              alert("Password do not match....");
          }else{
            alert("Email already registered....")
          }
        })
        .catch(err => {
          console.error(err);
          alert(err);

        });
    };
    render()
    {
        return (
            <div>
            <Header/>
            {/* <div className="container-fluid"> */}
            <div className="login__wrapper bg-light row justify-content-center m-0 py-5">
        <div className="col-lg-5 bg-white shadow-sm rounded p-3">
          <div>
          <div className="d-flex justify-content-center">
              <div className="login__logo">
                <img src='assets/images/newlogo.png' />
              </div>
            </div>
            <br/>
            <h5 className="text-center fw-normal mt-2">Join Pill today!</h5>
            <div className="d-flex justify-content-center mt-4">
              <div className="col-10">
                <form onSubmit={(e)=>this.handleSubmit(e)} id="formElement">


                  <label htmlfor="login__name">Full Name</label>
                  <input onChange={this.handleInputChange} pattern="^[a-zA-z\s]+$" title="Input allows only Alphabets, Spaces.." className="form-control mb-2" type="text" name="ubit_owner_name" id="login__name" required />

                  <label htmlfor="login__name">Mobile</label>
                  <input onChange={this.handleInputChange} maxLength={10} pattern="[1-9]{1}[0-9]{9}" title="Input allows exactly 10 numeric digits" className="form-control mb-2" type="text" name="ubit_mobile_number" id="login__name" required />


                  <label htmlfor="login__email">Email</label>
                  <input className="form-control" onChange={this.handleInputChange} type="email" name="ubit_email" id="login__email" required />
                  <label htmlfor="login__password" className="mt-2">
                    Password
                  </label>
                  <input onChange={this.handleInputChange}  minlength={8} title="Input allows minimum 8 characters" className="form-control" type="password" name="ubit_password" id="login__password" required />
                  <label htmlfor="login__cpassword" className="mt-2">
                    Confirm Password
                  </label>
                  <input onChange={this.handleInputChange} minlength={8} className="form-control" type="password" name="ubit_confirmpassword" id="login__cpassword" required />

                  <label htmlfor>Country</label>
                  <select className="form-control " name="ubit_country_id" 
                   onChange={this.changeStates} required>
                        <option value="">Select Country</option>
                        {
                                this.state.countries.map((c,key) => {
                                    return <option value={c.lcm_id}>{c.lcm_name}</option>
                                })
                            }                
                      </select>

                    <label htmlfor>State</label>
                  <select className="form-control" name="ubit_state_id"
                   onChange={this.changeDistricts} required>
                        <option>Select State</option>
                        {
                                this.state.states.map((s,key) => {
                                    return <option value={s.lsm_id}>{s.lsm_name}</option>
                                })
                            }
                  </select>
                  
                  <label htmlfor>City</label>
                  <select className="form-control" name="ubit_district_id"  onChange={this.handleInputChange} required>
                      <option value="">Select City</option>
                      {
                                this.state.districts.map((d,key) => {
                                    return <option value={d.ldm_id}> {d.ldm_name}</option>
                                })
                            }             
                  </select>

                  <button type="submit" className="btn theme__button2 w-100 mt-3 py-2">
                    Create account
                  </button>
                  <p className="text-center cursor__pointer mt-2">
                    Already have an Account?<Link as={Link} to="/login" style={{textDecoration:"none"}}>
          <a href="#" > Login Here</a>
          </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>
      <Footer/>

      </div>
        );
    }
}
export default Signup;