import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import globalNames from '../Utils/globals';
class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pharmacycart: [],
      diagnosticscart: [],
      ubit_id: '',
      ubit_token: '',
      ucm_id: '',
      tpp_role_id: '',
      ucm_role_id: '',
      pharmacy_total_amount: [],
      diagnostics_total_amount: {},
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    return axios.post(globalNames.APIURL + "/cart-list", {
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken"),
    }).then((res) => {

      let pharmacycart = res.data.data.cart_items_data.pharmacy_cart_data;
      let diagnosticscart = res.data.data.cart_items_data.diagnostics_cart_data;

      this.setState({
        pharmacycart: pharmacycart,
        tpp_role_id: pharmacycart.tpp_role_id,
        diagnosticscart: diagnosticscart,
        pharmacy_total_amount: pharmacycart.tpp_price * pharmacycart.ucm_quantity,

      })
    })
  }
  handleClick = async (cartid) => {
    const ucm_id = cartid;
    if (window.confirm('Are you sure ?')) {
      return axios.post(globalNames.APIURL + '/delete-cart-item', {
        ubit_id: localStorage.getItem("userid"),
        ubit_token: localStorage.getItem("usertoken"),
        ucm_role_id: this.props.match.params.tpp_role_id,
        ucm_id: ucm_id

      }).then((responseData) => {
        if (responseData.status == "200") {
          alert("cart item deleted successfully");
          window.location.reload();
        } else {
          alert("Something went Wrong...");
        }
      });
    } else {
      window.location.reload();
    }
  };

  Increase = async (quanity) => {
    let ucm_id = quanity;
    return axios.post(globalNames.APIURL + '/increment-cart-item', {
      ucm_id: ucm_id,
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken"),
    }).then((responseData) => {
      if (responseData.status == "200") {
        alert("cart item incremented successfully")
        window.location.reload();
      }
      else {
        alert("something went wrong")
      }
    })
  }

  Decrease = async (quanity) => {
    let ucm_id = quanity;
    return axios.post(globalNames.APIURL + '/decrement-cart-item', {
      ucm_id: ucm_id,
      ubit_id: localStorage.getItem("userid"),
      ubit_token: localStorage.getItem("usertoken"),
    }).then((responseData) => {
      if (responseData.status == "200") {
        alert("Your cart item Decrement successfully")
        window.location.reload();
      }
      else {
        alert("something went wrong")
      }
    })
  }

  render() {
    // const total=(this.state.pharmacycart.reduce((total,item) =>  total = total + item.tpp_price , 0 ));
    // const quanity = (this.state.pharmacycart.reduce((total,item) => total = total + item.ucm_quantity,0));

    let list = this.state.pharmacycart
    const pharmacy_total = (this.state.pharmacycart.reduce((total, item) => total = total + item.tpp_price * item.ucm_quantity, 0));


    if (this.state.pharmacycart) {
      list = (
           <tbody>
          {
            this.state.pharmacycart.map((products, key) => {
              return <tr>
                <td>{++key}</td>
                <td>{products.tpp_name}</td>
                <td>
                  <button className="btn increase_button" onClick={() => this.Decrease(products.ucm_id)} style={{ padding: '6px 9px' }}>-</button>
                  <span>{products.ucm_quantity}</span>
                  <button className="btn increase_button" onClick={() => this.Increase(products.ucm_id)}>+</button>
                </td>
                <td>{products.tpp_price * products.ucm_quantity}</td>
                <td><i className="material-icons" onClick={() => this.handleClick(products.ucm_id)}>delete</i></td>

              </tr>
            })
          }
        </tbody>
      )
    }

    if (!this.state.pharmacycart.length) {
      list = (
        <tr align="center">
          <td colSpan="5">No Cart Products</td>
        </tr>
      )
    }

    const diagnostics_total = (this.state.diagnosticscart.reduce((total, item) => total = total + item.dltm_price * item.ucm_quantity, 0));

    const grand_total = pharmacy_total + diagnostics_total;
    localStorage.setItem("grand_total",grand_total)
    let list2 = this.state.diagnosticscart
    if (this.state.diagnosticscart) {
      list2 = (
        <tbody>
          {
            this.state.diagnosticscart.map((tests, key) => {
              return <tr>
                <td>{++key}</td>
                <td>{tests.dltm_name}</td>
                <td>
                  <button className="btn increase_button" onClick={() => this.Decrease(tests.ucm_id)} style={{ padding: '6px 9px' }}>-</button>
                  <span>{tests.ucm_quantity}</span>
                  <button className="btn increase_button" onClick={() => this.Increase(tests.ucm_id)}>+</button>
                </td>
                <td>{tests.dltm_price * tests.ucm_quantity}</td>
                <td><i className="material-icons" onClick={() => this.handleClick(tests.ucm_id)}>delete</i>
                </td>

              </tr>
            })
          }
        </tbody>
      )
    }


    if (!this.state.diagnosticscart.length) {
      list2 = (
        <tr align="center">
          <td colSpan="5">No Cart Tests</td>
        </tr>
      )
    }

    return (
      <div>
        <Header />
        <div className="contact__contct">
          <div className="container">
            <div className="section-title">
              <h3><span>YOUR CART</span></h3>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="col-md-12 php-email-form cart_table">
                  <div className="cart_table_header">
                    <h4>Pharmacy Products</h4>
                  </div>

                  <div className="contact__cart table-responsive">
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Product Name</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      {list}
                    </table>
                  </div>
                </div>
                <div className="col-md-12 php-email-form cart_table">
                  <div className="cart_table_header">
                    <h4>Diagnostics Tests</h4>
                  </div>
                  <div className="contact__cart table-responsive">
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Product Name</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      {list2}

                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 php-email-form">
                <h4>Price Chart</h4>
                <hr />
                <div className="d-flex justify-content-lg-between">
                  <p><b>Pharmacy Total</b></p>
                  <p><b>{pharmacy_total}</b></p>
                </div>
                <div className="d-flex justify-content-lg-between">
                  <p><b>Diagnostics Total</b></p>
                  <p><b>{diagnostics_total}</b></p>
                </div>

                {/* <p className="mb-1"><b>Preparation : </b></p>  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur saepe reiciendis</p> 
                  <div className="d-flex justify-content-lg-between">
                    <p className="mb-0"><b>Diagnostics Amount</b></p>
                    <p className="mb-0"><b>Rs. 300</b></p>           
                  </div> */}
                {/* <small>Free home Delivery for orders above ₹ 400</small><br /><br /> */}
                <br /><br />
                <div className="d-flex justify-content-lg-between btn-light p-2">
                  <p className="mb-0"><b>Grand Total</b></p>
                  <p><b>{grand_total}</b></p>
                </div>

                <Link as={Link} to="/buynow">
                  <div className="btn theme__button btn-sm mt-2">
                    <button>Checkout</button>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    );
  }
}
export default ProductCart;