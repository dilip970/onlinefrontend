import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BenefitsInfo extends Component
{
    render()
    {
        return (
            <div className="consult__benifits">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="pharmacy_product-title">
                 <h2>Benefits of Online Consultation</h2>
            </div>
            </div>
            <div className="col-md-5">
              <div className="consult__benifits__image-sec">
                <img src="assets/images/consult_benfits.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="consult__benifits__content">
                <h4>1. Consult Top Doctors 24x7</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo
                  veniam fugit ab maxime!</p>
                <h4>2. Convenient and Easy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo
                  veniam fugit ab maxime!</p>
                <h4>4. 100% Safe Consultations</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo
                  veniam fugit ab maxime!</p>
                <h4>5. Similar Clinic Experience</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo
                  veniam fugit ab maxime!</p>
                <h4>6. Free Follow-up</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illo
                  veniam fugit ab maxime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      );
    }
}
export default BenefitsInfo;