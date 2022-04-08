import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import axios from 'axios';
import globalNames from '../Utils/globals';
class TestDetails extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      test : [],
      ucm_quantity:'',
      ucm_item_id:'',
      ucm_role_id:'',
      dltm_role_id:'',
    };
  }
 
  componentDidMount() {
    window.scrollTo(0, 0);
      return axios
    .get(globalNames.APIURL+"/get-diagnostic-lab-test-by-id/"+this.props.match.params.dltm_id)
    .then((res) => {  
      let test = res.data.data.diagnostic_lab_test_by_id[0]
      this.getBase64FromUrl(globalNames.DIAGNOSTICSFILES+test.dltm_image).then((resD1) => {
        this.setState({
          dltm_image : resD1,
          test : test,
          dltm_role_id : test.dltm_role_id
    })
  })
})
    .catch(err => {
      console.error(err);
    });
  }

  getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,

    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { ucm_quantity} = this.state;

    var formData = {
      ucm_quantity:1,
      ucm_role_id: this.state.dltm_role_id,              
      ucm_item_id: this.props.match.params.dltm_id,
      ubit_id : localStorage.getItem("userid"),
      ubit_token : localStorage.getItem("usertoken"), 
    };

    return axios
      .post(globalNames.APIURL+'/add-item-to-cart', { ...formData },{
      })
      .then((res) => {
        console.log(res)
        if(res.data.status=="200"){
            alert("item added to cart successfully");
        }
        else{
            alert("item added Failed..");
            console.log(res);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };


    render()
    {
      let testdetails = this.state.test;
      if(this.state.test){
        return (
            <div>
                <Header/>
                <Location/>
                <div className="container-fluid">
                <div className="tests__details">
        <div className="px-5">
          <div className="row">
            <div className="col-md-3">

              <div className="tests__details__imageSec">
                <img src={globalNames.DIAGNOSTICSFILES+testdetails.dltm_image}  alt="" />
              </div>
            </div>
            <div className="col-md-5">
                 <form onSubmit={(e)=>this.handleSubmit(e)}>
              <div className="tests__details__content">
                  <h2>{testdetails.dltm_name}</h2>

                <h3>{testdetails.dltm_diagnostic_id}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias natus nam eum ipsum asperiores sit quae placeat cupiditate, facilis, expedita id, minus optio repellat delectus itaque eligendi animi provident!</p>
                <p><b>Certified Labs</b></p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Free Home Sample Pickup on orders above ₹ 400</p>
                <p>E-Reports in 2 days</p>
                <p>book your slots</p>
              </div>
              <div className="tests__details__pricesec">
                <p><b> {testdetails.dltm_price} </b></p>
                {/* <select className="dropdown--box a u-p-l--10 u-p-r--10 heading-delta" name="ucm_quantity" onChange={this.handleInputChange} required>
                            <option value="0">select Quantity</option>
                             <option value="1">Qty 1</option>
                  </select> */}
                <p>+ 10% Health cashback* T&amp;C </p>
                <Link as={Link} to="/book-appointment">
                <div className="u-padding ml-left">
                <a href="#">
                  <button className="btn button btn-primary">Book Now</button>
                </a>
                </div>
             </Link>
             <div className="u-padding ml-left">
                        <button type="submit" className="btn button btn-primary">Add to cart</button>              
                    </div>    
              </div>                           
            </form>
            </div>
            
            <div className="col-md-4"> 
              <div className="consultProfile__doctorProf__rightsec">
                <p>PICK A TIME SLOT</p>
                <hr />
                <div className="d-flex justify-content-between consultProfile__doctorProf__rightsec__slotSec">
                  <span className="material-icons">chevron_left</span>
                  <p>Today <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__notavail">No Slots Available</span> </p>
                  <p>Tomarow <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__avail">14 Slots Available</span> </p>
                  <p>Fri 19 Mar <br /> <span className="consultProfile__doctorProf__rightsec__slotSec__avail">14 Slots Available</span> </p>
                  <span className="material-icons">chevron_right</span>
                </div>
                <h2>Morning <span> (4 slots) </span></h2>
                <div className="d-flex consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>
                </div>
                <h2>Afternoon <span> (8 slots) </span></h2>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>  
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                                      
                </div>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>  
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                                      
                </div>
                <h2>Evening <span> (2 slots) </span></h2>
                <div className="d-flex  consultProfile__doctorProf__rightsec__slotSec__time">
                  <span>10:30 AM</span>
                  <span>10:30 AM</span>                      
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
}
export default TestDetails;