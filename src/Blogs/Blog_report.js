import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';
import axios from 'axios';
import globalNames from '../Utils/globals';

class Blogs_report extends Component
{
  constructor(props){
    super(props);
    this.state ={
      wbim_id:'',
      wbim_title : '',
      wbim_image : '',
      wbim_content : '',
      bloginformation:''
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    return axios.get(globalNames.APIURL+'/get-blog-information-by-id/'+this.props.match.params.wbim_id).then((Res)=>{
      let bloginformation = Res.data.data.blog_info_data[0]
      this.getBase64FromUrl(globalNames.BLOGFILES+bloginformation.wbim_image).then((resD1) => { 
      this.setState({
        wbim_image : resD1,
        wbim_title : bloginformation.wbim_title,
        wbim_content : bloginformation.wbim_content
      })
    })
    })
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
        return (
          <div>
             <Header/>
            <Location/>
          <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="blogDetails__inner-sec">
                <img src={this.state.wbim_image} alt="" />
                <div className="blogDetails__inner-sec__contnt">
                  <p className="blogDetails__inner-sec__contnt__small">Coronavirus Updates</p>
                  <h3 className="blogDetails__inner-sec__contnt__hdr">{this.state.wbim_title}</h3>
                  <p className="blogDetails__inner-sec__contnt__dtls">{this.state.wbim_content}</p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogDetails__rightSec">
                <h2>SUBSCRIBE TO PILL BRO BLOG</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus similique minima
                  iusto beatae excepturi ipsa repellat? Provident reprehenderit sed iste ullam.
                </p>
                <div className="d-flex blogDetails__rightSec__formSec">
                  <input type="text" placeholder="Enter Email" />
                  <button className="btn theme__button btn-sm">SUBSCRIBE</button>
                </div>
              </div>
              <div className="blogDetails__rightSec__archives">
                <h2>PILL BRO BLOG ARCHIVES</h2>
                <p>March-2021 (3)</p>
                <p>February-2021 (4)</p>
                <p>January-2021 (3)</p>
                <p>December-2020 (5)</p>
                <p>November-2020 (2)</p>
                <p>October-2020 (7)</p>
                <p>September-2020 (7)</p>
                <p>August-2020 (7)</p>
                <p>July-2020 (7)</p>
                <p>June-2020 (7)</p>
                <p>May-2020 (7)</p>
                <p>April-2020 (7)</p>
                <p>March-2020 (7)</p>
                <p>February-2020 (7)</p>
                <p>January-2020 (7)</p>
              </div>
            </div>
          </div>
        </div>     
        <Footer/>
        </div>
           );
    }
}
export default Blogs_report;