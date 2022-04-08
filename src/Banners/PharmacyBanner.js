import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class PharmacyBanner extends Component
{
    render()
    {
        return (
        <div className="pharmacy__home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pharmacy__home__titles">
                <h2>Skip the travel! <br />
                  Take Online Booking
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non, ullam autem hic quas fuga minus obcaecati labore atque inventore. </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className>
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_jcsfwbvi.json" loop autoPlay style={{maxWidth: '100%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        );
    }
}
export default PharmacyBanner;