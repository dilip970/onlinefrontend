import React, { Component } from 'react';
class Location extends Component
{
    render()
    {
        return (
            <div className="container-fluid" style={{marginTop: '80px'}}>
                <div className="row">
                  <div className="d-flex px-5 py-3">
                    <div className="col-md-4 col-lg-8 my-auto border rounded md_right py-2 ps-2 me-2">
                      <p className="mb-0 d-flex pt-1">
                        <span className="material-icons-outlined material-icons md-24 pe-1">
                          add_location
                        </span>
                        <span>Hyderabad</span>
                      </p>
                    </div>
                    <div className="col-md-8 col-lg-12 d-flex my-auto border rounded py-2 ps-2">
                      <span className="material-icons md-24 my-auto pe-1">search</span>
                      <input className="Doctornavbar__search d-flex w-100 border-0 ps-3" type="search" placeholder="Search for doctors" name id  style={{ outline:'none'}}/>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}
export default Location;