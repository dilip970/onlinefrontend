import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CounterIcons extends Component
{
    render()
    {
        return (
            <div className="consult__stats">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="consult__stats__stat">
                    <span className="material-icons consult__stats__stat__icon">people</span>
                    <h4>2,20,300</h4>
                    <p>Happy Users</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="consult__stats__stat">
                    <span className="material-icons consult__stats__stat__icon">person</span>
                    <h4>25000</h4>
                    <p>Verified Doctors</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="consult__stats__stat">
                    <span className="material-icons consult__stats__stat__icon">medication</span>
                    <h4>28+</h4>
                    <p>Specialities</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="consult__stats__stat">
                    <span className="material-icons consult__stats__stat__icon">offline_share</span>
                    <h4>4.8 / 5</h4>
                    <p>App Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          );
    }
}
export default CounterIcons;