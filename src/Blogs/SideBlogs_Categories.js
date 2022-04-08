import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';
class SideBlogsCategories extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      categories : [],
      wbc_status:'',
      wbc_id:''
   };

}

componentDidMount()
{
    return axios
    .post(globalNames.APIURL+'/get-web-blog-categories',{
        
        wbc_status :1
    }).then((res) => {  
      let categories = res.data.data.web_blog_category_data
        this.setState({
            categories : categories
        });

    })
    .catch(err => {
      console.error(err);
    });
}

    render()
    {
        return (
              <div className="blog_categories">
                <h2>BLOG CATEGORIES</h2>
                {
               this.state.categories.map((categories,key) => {
                  return  <a href={`/blogs-items/${categories.wbc_id}`}>
               <p>{categories.wbc_name}</p></a>
               
                })
            }
              </div>
           
        );
    }
}
export default SideBlogsCategories;