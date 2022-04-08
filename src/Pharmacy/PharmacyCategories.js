import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
export default class PharmacyCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { categories } = this.state.categories;
  }
  componentDidMount()
{
    return axios
    .post(globalNames.APIURL+'/get-role-based-categories',{
        rbcm_role_id: 3,
        rbcm_status :1
    }).then((res) => {  
        this.setState({
            categories : res.data.data.role_based_categories
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
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
<div id="health_con">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="pharmacy_product-title">
        <h2>Pharmacy Categories</h2>
      </div>
    </div>
    <div className="col-md-12">
      <div className="main">
        <div className="slider slider-nav">
        <Slider {...settings}>
          {this.state.categories.map(function(categories) {
            return (
              
              <div className="col-md-12">
                    <div className="cold_health">
                    <Link as={Link} to={`/products-by-pharmacy-category/${categories.rbcm_id}`}>
                    <a href="#">
                      {/* <img src={globalNames.RAWURL+slide.category_image} alt="" /> */}
                      <h5>{categories.rbcm_name}</h5>
                      </a>
                      </Link>
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