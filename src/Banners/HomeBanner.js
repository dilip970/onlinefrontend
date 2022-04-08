import React, { Component } from 'react';
class HomeBanner extends Component
{
    render()
    {
        return (
            <div id="lottie_section">
                <div className="row m-0 bg-hmclr px-5 py-3">
                  <div className="col-md-6 d-flex p-0">
                    <div className="my-auto">
                      <h1 className="home__main__heading display-4">Order with prescription</h1>
                      <p style={{color: '#fff'}}>Upload your prescription and we do the rest.</p>
                      <button type='file' className="btn btn-dark px-4">Upload nNow</button>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex">
                    <img src='assets/images/hm_baner.png' className='w-100'/>
                  </div>
                </div>
              </div>
        );
    }
}
export default HomeBanner;