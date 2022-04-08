import React, { Component } from 'react';
class Download extends Component
{
    render()
    {
        return (
            <div className="home__download row m-0 px-5 py-3">
                <div className="col-md-7">
                  <img className="w-100 h-auto" src="assets/images/home-download.png" alt="download app" />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div>
                    <h2>Download the App now</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vitae a delectus! Sequi quaerat animi omnis aut praesentium. Deserunt quod nostrum reprehenderit consectetur, sint voluptatum fugiat perferendis laborum alias modi!</p>
                    <div className="dwn-iconss">
                      <a href="/"><img src="assets/images/android.png" alt="android icon" /></a>
                      <a href="/"> <img src="assets/images/apple.png" alt="apple store icon" /></a>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}
export default Download;