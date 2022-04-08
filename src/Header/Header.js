import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component
{
    render()
    {
      let user;
      let style = {
        display : "flex"
      }
      if(localStorage.getItem("usertoken")=='' || localStorage.getItem("usertoken")==undefined)
      {
        user = <div style={style}><li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link as={Link} to="/login">
          <a className="nav-link" href="#">Login </a>
          </Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link as={Link} to="/signup">
          <a className="nav-link" href="#"> Signup</a>
          </Link>
        </li>
        </div>;
      }else{
        user = <div  style={style}>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a className="nav-link" href="/userdashboard"> My Account</a>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a className="nav-link" href="/productcart"><span className="material-icons md-24 my-auto pe-1">shopping_cart</span></a>
        </li>
        
        </div>
      }
        return (
          <div>
          <div className='topsearch'>

            <div className="container">
                  <div className="row">
                  
                    <div className="col-md-3">
                      <div className='topform'>
                      <select className='form-control fmc'>
                        <option className='form-control fmc'>choose your location</option>
                      </select>
                </div>
                </div>

                <div className="col-md-5">
                      <div className='topform'>
                      <input className='form-control fmc' placeholder='search medicine'/>
                </div>
                </div>

                <div className="col-md-4">
                  <div className='topicons'>
                <a href='' className='fb'><i className="fa fa-facebook " aria-hidden="true"></i></a>
                <a href='' className='yu'><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href='' className='ins'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href='' className='tw'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                {/* <p>pillboxsupport@gmail.com</p> */}

                  </div>
                  </div>


                </div>
                </div>
               </div>
            <div className="navigation-wrap navbg-light start-header start-style">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-md navbar-light">
                      <Link as={Link} to="/"><a className="navbar-brand"><img src='Assets/images/newlogo.png' /></a></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ml-auto py-4 py-md-0">
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                            <Link as={Link} to="/">
                              <a className="nav-link">Home</a>
                            </Link>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <a className="nav-link" href="/consult">Consult</a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          
                              <a className="nav-link" href="/pharmacy">Pharmacy</a>
                             
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                              <a className="nav-link" href="/diagnostics">Diagnostics</a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                              <a className="nav-link" href="/blogs
                              ">Blogs</a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                              <a className="nav-link" href="faqs.html">Faq's</a>
                            </li>

                            {user}
                            


                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                  </div>
                </div>
           </div>  
        );
    }
}
export default Header;