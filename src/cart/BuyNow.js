import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Location from '../Location/Location';
import globalNames from '../Utils/globals';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

class BuyNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: localStorage.getItem("grand_total"),
      uoim_order_type: '',
      uoim_razorpay_order_id: '',
      uoim_razorpay_payment_id: '',
      udai_id: '',
      
    }

    this.showRazorpay = this.showRazorpay.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return axios.post(globalNames.APIURL + '/get-user-delivery-addresses-by-user-id', {
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken")

    }).then((userRes) => {
      let useraddress = userRes.data.data.user_delivery_addresses_data
      this.setState({
        useraddress: useraddress,
      });
    })
  }

  Submit(){
    var radios = document.querySelectorAll('input[name="udai_id"]:checked');
    var value = radios.length > 0 ? radios[0].value : null;
    if (value == null) {
      alert("Please select address");
      return false;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {udai_id, uoim_order_type} = this.state

    var formData = {
      udai_id,
      uoim_order_type,
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken")
    }
    return axios.post(globalNames.APIURL + '/place-order', { ...formData })
      .then((res) => {
        if (res.data.status == "200") {
          alert("order placed successfully")
          window.location.reload();
        }
      }).catch(err => {
        alert(err);
      })
  };


  showRazorpay() {
    var radios = document.querySelectorAll('input[name="udai_id"]:checked');
    var value = radios.length > 0 ? radios[0].value : null;
    if (value == null) {
      alert("Please select address");
      return false;
    }

    var radios2 = document.querySelectorAll('input[name="uoim_order_type"]:checked');
    var value2 = radios2.length > 0 ? radios2[0].value : null;
    if (value2 == null) {
      alert("Please select payment type");
      return false;
    }

    let address_id = document.getElementById('udai_id').value
    let paymentype_id = document.getElementById('paymenttype_id').value
    const options = {
      key: "rzp_test_r17OmDaPcM9SVR",
      currency: "INR",
      amount: 0,
      order_id: "",
      name: "Pillbro",
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)

        axios.post(globalNames.APIURL + 'place-order', {
          uoim_razorpay_order_id: response.razorpay_order_id,
          uoim_razorpay_payment_id: response.razorpay_payment_id,
          ubit_id: localStorage.getItem("userid"),
          ubit_token: localStorage.getItem("usertoken"),
          udai_id: address_id,
          uoim_order_type: paymentype_id
        }).then((res) => {
          if (res.data.status == "200") {
            alert("order placed successfully")
            window.location.reload();
          }
        }).catch(err => {
          alert(err)
        })
      },
      prefill: {
        name: "Pillbro",
        email: "anudeep0@gmail.com",
        phone_number: "9876543210",
      },
      notes: {
        "address": "Pillbro"
      },
      theme: {
        "color": "#528ff0"
      }
    };
    axios.post(globalNames.APIURL + '/create-new-razorpay-order-id', {
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken"),
      amount: localStorage.getItem("grand_total")*100
    })
      .then(res => {
        let data = res.data.response
        options.order_id = data.id;
        options.amount = data.amount;
        console.log(options)

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch(e => console.log(e))

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  handleInputChange = e => {

    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.value == 1) {
           ReactDOM.render(<p onClick={(e) => { this.showRazorpay(this.state.amount) }}>Place Order</p>, document.getElementById('order'));      
    }

    if (e.target.value == 2) {
      ReactDOM.render(<button type="submit" onClick={(e)=>this.Submit()}>Place Crder</button>, document.getElementById('order'));
    }
  };

  render() 
  {
    let list = this.state.useraddress;
    if (this.state.useraddress) {
      list = (
        this.state.useraddress.map((useraddress, key) => {
          return (
            <div className="table table-borderless delivery_check ">
              <table>
                <tobody>
                  <tr>
                    <td> <input type="radio" className="udai" id="udai_id" name="udai_id" onChange={this.handleInputChange}
                      value={useraddress.udai_id} required/> &nbsp;</td>

                    <td> <h5> {++key} &nbsp; {useraddress.udai_name}<span>+91 {useraddress.udai_mobile}</span></h5></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{useraddress.udai_full_address},{useraddress.ldm_name}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{useraddress.lsm_name},{useraddress.lcm_name},{useraddress.udai_pincode} </td>
                  </tr>
                </tobody>
              </table>
            </div>
          )
        })
      )
    }
    return (
      <div>
        <Header />
        <Location />
        <div className="contact__contct">
          <div className="container">
            {/* <div className="section-title">           
                <h3><span>Buy Now</span></h3>          
              </div>    */}
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="row">

                <div className="col-lg-8">
                  <div className="col-md-12 php-email-form">
                    <div className="row">
                      <div className="col-sm-6 buynow_header">
                        <h4>Delivery Address</h4>
                      </div>

                      <div className="col-sm-6 buynow_add">
                        <Link as={Link} to="/add-delivery-address" style={{ textDecoration: "none" }}>
                          <button className="btn theme__button">Add Address</button>
                        </Link>
                      </div>
                      {list}
                    </div>
                  </div>

                </div>
                <div className="col-lg-4 php-email-form">

                  <h4>Billing Information</h4>
                  <hr />
                  <div className="d-flex justify-content-lg-between">
                    <p><b>Sub Total</b></p>
                    <p><b>Rs. {this.state.amount}</b></p>
                  </div>
                  <br /><br />
                  <div className="d-flex justify-content-lg-between btn-light p-2">
                    <p className="mb-0"><b>Total Amount</b></p>
                    <p className="mb-0"><b>Rs. {this.state.amount}</b></p>
                  </div>

                  <h6 style={{ marginTop: '10px' }}> <input type="radio" id="paymenttype_id" name="uoim_order_type" onClick={this.handleInputChange}
                    value="1" required defaultChecked /> Online Payment</h6>

                  <h6> <input type="radio" id="paymenttype_id" name="uoim_order_type" value="2" onClick={this.handleInputChange} required /> Cash On Delivery </h6>


                  <div className="btn theme__button_pay btn-sm mt-2" id="order">
                     <p  onClick={(e)=>{this.showRazorpay(this.state.amount)}}>Place Order</p>
                    </div> 

                </div>

              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BuyNow;