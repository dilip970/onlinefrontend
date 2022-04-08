import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Photo extends Component
{
    render()
    {
        return (
            <div class="pharmacy__add-sec">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="pharmacy__add-sec__image">
                        <img class="w-100 h-auto" src="assets/images/delivery1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}
export default Photo;