import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
class Login extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      ubit_email : '',
      ubit_password : '',
      ubit_role_id :'5'
    };
  }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      const { ubit_email, ubit_password,ubit_role_id } = this.state;
      var formData = {
        ubit_role_id:'5',
        ubit_email,
        ubit_password
      };
      return axios
        .post(globalNames.APIURL+'/login', { ...formData })
        .then((res) => {
          if(res.data.status=="200"){
            let userRes = res.data.data.user_data[0];
              localStorage.clear();
              localStorage.setItem("usertoken",userRes.ubit_token);
              localStorage.setItem("patientemail",userRes.ubit_email);
              localStorage.setItem("userid",userRes.ubit_id);

              window.location.href='/userdashboard';
          }else{
            alert("Login Failed... Please check username and password")
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
            <h5 className="text-center fw-normal">
              Login into your Account
            </h5>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="d-flex justify-content-center mt-4">
              <div className="col-10">
                <label htmlfor="login__email">Email</label>
                <input className="form-control" onChange={this.handleInputChange} type="email" name="ubit_email" id="login__email" required />
                <label htmlfor="login__password" className="mt-2">
                  Password
                </label>
                <input className="form-control" onChange={this.handleInputChange} type="password" name="ubit_password" id="login__password" required />
                <p className="text-end mt-2 mb-0">
                  <a href="/forgotpassword">Forgot Password?</a>
                </p>
                <button className="btn theme__button2 w-100 mt-2 py-2" type="submit"> Login
                </button>
                <p onclick className="text-center cursor__pointer mt-2">
                  Do not have an account? <Link as={Link} to="/signup" style={{textDecoration:"none"}}>
          <a href="#" > Signup</a>
          </Link>
                </p>
              </div>
            </div>
            </form>
          </div>
          
          <div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer/>

      </div>
        );
    }
}
export default Login;