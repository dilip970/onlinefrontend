import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import Blogs_items from '../Blogs/Blog_items';
import SideBlogsCategories from './SideBlogs_Categories';
import axios from 'axios';
import globalNames from '../Utils/globals';

class Blogs extends Component
{
    render()
    {
        return (
            <div>
                <Header/>
                {/* <Location/> */}
          <div className="container-fluid">
          <div className="row">

          <div className="col-lg-3 col-md-4">
                <SideBlogsCategories/> 
            </div>
            </div>
            </div> 
              <Footer/>
            </div>
        );
    }
}
export default Blogs;