import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import { Link } from 'react-router-dom';

class Team extends Component

{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render()
    {
        return (
            <div>
                <Header/>
                <Location/>
           
                <div className="container">
        <div className="team__mainsec">
          <div className="row">
            <div className="col-md-12">
              <div className="team__section-title">           
                <h3><span>Our Team</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__member">
                <img src="assets/images/team.jpg" className="img-fluid" alt="" />
                <div className="team__member-content">
                  <h4>Sai</h4>
                  <span>Web Development</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__member">
                <img src="assets/images/team.jpg" className="img-fluid" alt="" />
                <div className="team__member-content">
                  <h4>Syed</h4>
                  <span>Web Designer</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__member">
                <img src="assets/images/team.jpg" className="img-fluid" alt="" />
                <div className="team__member-content">
                  <h4>Sridhar</h4>
                  <span>Web Designer</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur 
                  </p>               
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team__member">
                <img src="assets/images/team.jpg" className="img-fluid" alt="" />
                <div className="team__member-content">
                  <h4>Sadguna</h4>
                  <span>Web Designer</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                  </p>               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Footer/>
          </div>
        );
    }
}
export default Team;