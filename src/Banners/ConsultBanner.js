import React, { Component } from 'react';
class ConsultBanner extends Component
{
    render()
    {
        return (
            <div className="consult__banner_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="consult__banner_sec__content">
                    <h2>Skip the travel! <br />
                      Take Online Doctor Consultation
                    </h2>
                    <p>Private consultation + Audio call · Starts at just ₹199</p>
                    <div className="consult__banner_sec__cnslt-btn"> <a className="theme__button" href>Consult Now</a> </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <lottie-player src="https://assets8.lottiefiles.com/temp/lf20_qCBn5k.json" loop autoPlay style={{width: '100%'}} />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default ConsultBanner;