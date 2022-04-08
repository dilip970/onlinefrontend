import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SafeDelivery extends Component
{
    render()
    {
        return (
            <div className="pharmacy__delivery-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="pharmacy__delivery-sec__content">
                        <h2>Safe Delivery</h2>
                        <h4>Whithin 2 Hours</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quisquam possimus
                          doloremque, facere ducimus temporibus quam laboriosam deleniti facilis fugit officia,
                          a iusto ipsa commodi. A, veritatis? Ratione, accusantium dicta?
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pharmacy__delivery-sec__images-sec">
                        <img className="w-100 h-auto" src="assets/images/delivery.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}
export default SafeDelivery;