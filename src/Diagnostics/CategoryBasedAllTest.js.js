import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import axios from 'axios';
import globalNames from '../Utils/globals';
import SideDiagnosticsBar from './SideDiagnosticsBar';

class CategoryBasedAllTest extends Component
{
  constructor(props){
    super(props);
    this.state= {
      tests:[],
      dltm_category_id:'',
      dltm_image:'',
    }
  }
  componentDidMount() {
    let apiBody = {
      dltm_category_id : this.props.match.params.rbcm_id,
      dltm_status : 3
    };
    window.scrollTo(0, 0);
    return axios.post(globalNames.APIURL+"get-diagnostics-lab-tests-by-category-id", apiBody).then((res) => {  
    let tests = res.data.data.diagnostics_lab_tests
    console.log(globalNames.DIAGNOSTICSFILES+tests.dltm_image);
    this.getBase64FromUrl(globalNames.DIAGNOSTICSFILES+tests.dltm_image).then((resD1) => {
    this.setState({
        tests : tests,
        dltm_image : resD1,
      });
    });
  })
  .catch(err => {
    console.error(err);
  });
}

getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;   
      resolve(base64data);
    }
  });
}


    render()
    {
      let list = this.state.tests;
       if(this.state.tests){
            list = (
                        this.state.tests.map((tests,key) => {
                         return(
                          <div className="col-md-4">
                          <div className="diagnostics__filter__doctorCard rounded-3">
                            <a href="#">
                            </a><a>
                            </a><div className="diagnostics__filter__doctorCard__card"><a>
                                <img className="diagnostics__filter__doctorCard__card__image rounded-top" src={globalNames.DIAGNOSTICSFILES+tests.dltm_image} alt="" />
                              </a><div className="diagnostics__filter__doctorCard__card__abtDiagnos"><a>
                                  <h3>Test Name: {tests.dltm_name}</h3>
                              
                                
                                </a><div className="d-flex justify-content-between"><a>
                                    <p><b>₹ {tests.dltm_price}</b></p>
                                  </a>
                                  <Link as={Link} to={`/testdetails/${tests.dltm_id}`}>
                                  <a href="#">
                                    <button className="theme__button">View</button>
                                  </a>
                                 </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                         )
                        })
                        )
                      }
        return (


          <div>
          <Header/>
          <Location/>
          <div className="container-fluid">
  <div className="diagnostics__filter__fltr-ttl-sec">
    <div className>
      <div className="row m-0">
        <div className="col-lg-3 col-md-4 ps-5">
          <SideDiagnosticsBar/>
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="row  bg-light pt-2 pb-2">
           
          {list}
          
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
export default CategoryBasedAllTest;

