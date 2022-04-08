import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Location from '../Location/Location';
import axios from 'axios';
import globalNames from '../Utils/globals';
import SideDoctorbar from '../Doctors/Sidedoctorbar';
class DoctorList_CategoryWise extends Component
{
    constructor(props){
        super(props);
        this.state= {
            doctors:[],
          ubit_category_id:'',
          ubit_owner_file:''
        }
      }
      componentDidMount() {
        let apiBody = {
            ubit_category_id : this.props.match.params.rbcm_id,
        };
        window.scrollTo(0, 0);
        return axios
      .post(globalNames.APIURL+"get-users-by-category-id", apiBody).then((res) => { 
        let doctors =  res.data.data.users_data;
        console.log(globalNames.USERFILES+doctors.ubit_owner_file);
        this.getBase64FromUrl(globalNames.USERFILES+doctors.ubit_owner_file).then((resD1) => {
            this.setState({
                ubit_owner_file : resD1,
               doctors : doctors
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
        let list = this.state.doctors;
        if(this.state.doctors){

             list = (this.state.doctors.map((doctors,key) => {
        return (
            <div>
                <div className="col-md-12">
                         <div className="cunsult__filter__doctorCard">
                           <div className="cunsult__filter__doctorCard__card">
                           <img className="cunsult__filter__doctorCard__card__image" src={globalNames.USERFILES+doctors.ubit_owner_file}  alt="" />
                             <div className="cunsult__filter__doctorCard__card__abtDoct">
                               <h3>{doctors.ubit_owner_name}</h3>
                               <p>Specialization</p>
                               <p>Experience : 5years</p>
                               <h4>Country : Counttry, State : State, City : City</h4>
                               <p>
                                 <b>Consulation Fee : 500 </b>
                               </p>
                             </div>
                             <div className="cunsult__filter__doctorCard__card__viewProf">
                             <Link as={Link} to={`/view-doctor/${doctors.ubit_id}`}>
                               <a href="#">
                                 <p>View Profile</p>
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
  return(
  <div>
       <Header/>
       <Location/>
     <div className="container-fluid">
     <div className="row">
     <div className="col-lg-3 col-md-4">
     <SideDoctorbar />
     </div>
     <div className="col-lg-9 col-md-8">
     <div className="row  bg-light pt-2 pb-2">
         
     {list}
     </div>
     </div>
     </div>
     </div>
     <Footer/>
     </div>        
  )
  }
        
}
                        
export default DoctorList_CategoryWise;