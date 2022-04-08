import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';

class Contactus extends Component
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
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3><span>Contact Us</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="info-box mb-4">
              <i className="material-icons">pin_drop </i>
              <h3>Our Address</h3>
              <p>Karimnagar</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="info-box  mb-4">
              <i className="material-icons">email</i>
              <h3>Email Us</h3>
              <p><a href>contact@example.com</a></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="info-box  mb-4">
              <i className="material-icons">phone_enabled</i>
              <h3>Call Us</h3>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form action method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="number" className="form-control" name="phone number" id="number" placeholder="Your Phone Number" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
              </div>
              <div className="btn theme__button btn-sm mt-2"><button type="submit">Send Message</button></div>
            </form>
            <br />
          </div>
          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60561.2358308573!2d79.09812862424027!3d18.434801839390584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd910bcf48931%3A0x4889b0398ed69f07!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1617454069601!5m2!1sen!2sin" style={{width: '100%', height: '384px'}} />
          </div>
        </div>
      </div>
            
            <Footer/>
            </div>
        );
    }
}
export default Contactus;