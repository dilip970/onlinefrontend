import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
 class Testimonals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonals: []
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { testimonals } = this.state.testimonals;
  }
  componentDidMount()
{
    return axios
    .post(globalNames.APIURL+'/get-testimonials',{
        t_status :1
    }).then((res) => {  
        this.setState({
            testimonals : res.data.data.testimonials_data
        });

    })
    .catch(err => {
      console.error(err);
    });
}
  render() {
    let style= {
      width : '100px',
      height : '100px'
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500, 
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
<div id="health_con">
<div className="container">
  <div className="row">
    <div className="col-md-12">
    <div className="pharmacy_product-title">
        <h2>Testimonals</h2>
      </div>
    </div>
    <div className="col-md-12">
      <div className="main">
        <div className="slider slider-nav">
        <Slider {...settings}>
          {this.state.testimonals.map(function(testimonals) {
            return (
                  <div className="col-md-12">
                        <div className="p-1">
                          <div className="consult__testimonials__content">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="consult__testimonials__content__image">
                                  <img src="assets/images/consult_user.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-10">
                                <div className="consult__testimonials__content__details">
                                  <h4>{testimonals.t_name}</h4>
                                  <p>{testimonals.t_designation}</p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="consult__testimonials__content__msg">
                                  <p>{testimonals.t_description} </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
            );
          })}
        </Slider>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Testimonals;