import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Doctors extends Component
{
    render()
    {
        return (
            <div className="home__doctors px-5 py-5">
        <div className="d-flex justify-content-between">
          <h2 className="ps-1">Meet the best doctors available on Pill</h2>
          <Link as={Link} to="/doctors-list">
          <a href="#">
            <div>
              <button className="btn theme__outline__button">View All</button>
            </div>
          </a>
          </Link>
        </div>
        <div className="row mt-3 m-0">
          <div className="col-lg-3">
            <div className="home__doctors__doctor d-flex p-3">
              <div className> <img className="home__doctors__image" src="assets/images/home-doctors-1.jpg" alt="doctor name" /> <br />
                <p className="mt-3 mb-0"><span className="home__doctors__doctor__specialization bg-secondary text-white rounded-3 px-1 py-1 text-nowrap">neurologist </span></p></div>
              <div className="mx-3">
                <h4 className="fw-normal mb-0">Dr.Nagaraju</h4>
                <p className="mb-0"><small>warangal</small></p>
                <link href="/consult/profile" />
                <button className="btn theme__button btn-sm mt-2">Consult Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home__doctors__doctor d-flex p-3">
              <div className> <img className="home__doctors__image" src="assets/images/home-doctors-1.jpg" alt="doctor name" /> <br />
                <p className="mt-3 mb-0"><span className="home__doctors__doctor__specialization bg-secondary text-white rounded-3 px-1 py-1 text-nowrap">neurologist </span></p></div>
              <div className="mx-3">
                <h4 className="fw-normal mb-0">Dr.Nagaraju</h4>
                <p className="mb-0"><small>warangal</small></p>
                <link href="/consult/profile" />
                <button className="btn theme__button btn-sm mt-2">Consult Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home__doctors__doctor  d-flex p-3">
              <div className> <img className="home__doctors__image" src="assets/images/home-doctors-1.jpg" alt="doctor name" /> <br />
                <p className="mt-3 mb-0"><span className="home__doctors__doctor__specialization bg-secondary text-white rounded-3 px-1 py-1 text-nowrap">neurologist </span></p></div>
              <div className="mx-3">
                <h4 className="fw-normal mb-0">Dr.Nagaraju</h4>
                <p className="mb-0"><small>warangal</small></p>
                <link href="/consult/profile" />
                <button className="btn theme__button btn-sm mt-2">Consult Now</button>
              </div>
            </div>
          </div> 
          <div className="col-lg-3">
            <div className="home__doctors__doctor d-flex p-3">
              <div className> <img className="home__doctors__image" src="assets/images/home-doctors-1.jpg" alt="doctor name" /> <br />
                <p className="mt-3 mb-0"><span className="home__doctors__doctor__specialization bg-secondary text-white rounded-3 px-1 py-1 text-nowrap">neurologist </span></p></div>
              <div className="mx-3">
                <h4 className="fw-normal mb-0">Dr.Nagaraju</h4>
                <p className="mb-0"><small>warangal</small></p>
                <link href="/consult/profile" />
                <button className="btn theme__button btn-sm mt-2">Consult Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Doctors;