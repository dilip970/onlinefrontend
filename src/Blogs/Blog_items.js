import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
import SideBlogsCategories from './SideBlogs_Categories';
import Header from '../Header/Header';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';

class Blogs_items extends Component
{
  constructor(props){
    super(props);
    this.state= {
      bloglist:[],
      wbim_category_id:'',
      wbim_status:'',
      wbim_image :'',
      wbim_content :''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    
    return axios.post(globalNames.APIURL+"blog-list",{
    wbim_category_id : this.props.match.params.wbc_id,
    wbim_status:1
    }).then((res) => {  
      let bloglist = res.data.data.blog_list
      this.getBase64FromUrl(globalNames.BLOGFILES+bloglist.wbim_image).then((resD1) => { 

      this.setState({
        wbim_image : resD1,
        bloglist : bloglist,
        wbim_content : bloglist.wbim_content,
        wbim_image : bloglist.wbim_image,
      });
    })
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
      let list = this.state.bloglist;
      if(this.state.bloglist){

           list = (this.state.bloglist.map((bloglist,key) => {
        return (
          
              <div className="col-md-4">
                <div className="blog__inner-sec">
                <Link as={Link} to={`/blogs_report/${bloglist.wbim_id}`}>
                 <a  href="#">
                  <img src={globalNames.BLOGFILES+bloglist.wbim_image} alt="" />
                  </a>
              
                  <div className="blog__inner-sec__contnt">
                    <p className="blog__inner-sec__contnt__small">Coronavirus Updates</p>
                    <h3 className="blog__inner-sec__contnt__hdr">{bloglist.wbim_title}</h3>
                    <p className="blog__inner-sec__contnt__dtls">{bloglist.wbim_content}</p>
                  </div>
                  </Link>

                 
                </div>
                
              </div>
            
        );
        })
          )
          }
        return (
          <div>
        <Header/>
        <Location/>
          <div className="container-fluid">
          <div className="row">

          <div className="col-lg-3 col-md-4">
            <SideBlogsCategories/>
          </div>
        
        
            <div className="col-lg-9 col-md-8">
            <div className="row">
            {list}
            </div>
            </div>

          </div>
          </div>
          <Footer/>
         
        </div>
      );
    }
}
export default Blogs_items;