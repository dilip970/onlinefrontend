import React, { Component } from 'react';
class DiagnosticsBanner extends Component
{
    render()
    {
        return (
          <div className="diagnostics__home">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="diagnostics__home__titles">
                  <h2>Get lab tests and full body checkups from the comfort of your home.
                  </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non, ullam autem hic quas fuga minus obcaecati labore atque inventore. </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className>
                  <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_vPnn3K.json" loop autoPlay style={{maxWidth: '100%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        );
    }
}
export default DiagnosticsBanner;