import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import globalNames from '../Utils/globals';

class SideDoctorbar extends Component

{
  constructor(props) {
    super(props);
    this.state = {
      categories : [],
      rbcm_role_id:'',
      dltm_category_id:'',
      dltm_status:'',
      rbcm_status :'',
   };

}

componentDidMount()
{
    return axios
    .post(globalNames.APIURL+'/get-role-based-categories',{
        rbcm_role_id: 2,
        rbcm_status :1
    }).then((res) => {  
        this.setState({
            categories : res.data.data.role_based_categories
        });

    })
    .catch(err => {
      console.error(err);
    });
}
    render()
    {
        return (            
        <div className="sidedoctor_bar">
          <div className="doctor_bar_button">
          
          <Link as={Link} to="/doctors-list"><a><button className="btn theme__button">All Doctors</button></a></Link>
          {
               this.state.categories.map((categories,key) => {
                  return  <a href={`/doctorlist_categorywise/${categories.rbcm_id}`}>
                    <button className="btn theme__button">{categories.rbcm_name}</button></a>
                })
            }
           
          </div>
          </div>
         
        );
    }
}
export default SideDoctorbar;

