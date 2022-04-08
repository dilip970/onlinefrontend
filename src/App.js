import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Logins/Login';
import Signup from './Signup/Signup';
import Pharmacy from './Pharmacy/Pharmacy';
import DoctorView from './Doctors/DoctorView';
import Appointment from './Appointment/Appointment';
import Blogs from './Blogs/Blogs';
import Blogs_report from './Blogs/Blog_report';
import Consult from './Consult/Consult';
import Diagnostics from './Diagnostics/Diagnostics';
import Contactus from './Contactus/Contactus';
import DiagnosticFilter from './Diagnostics/Diagnostic_filter';
import MedicineDetails from './Pharmacy/MedicineDetails';
import ProductCart from './cart/ProductCart';
import Team from './Team/Team';
import DiagnosticDetails from './Diagnostics/DiagnosticsDetials';
import TestDetails from './Diagnostics/TestDetails';
import CategoryBasedAllTest from './Diagnostics/CategoryBasedAllTest.js';
import UserProfile from './User/Profile';
import Changepassword from './User/Changepassword';
import UserAppointment from './User/Appointment';
import UserDashboard from './User/Dashboard';
import UserLabTest from './User/LabTests';
import UserMedicialOrders from './User/Orders';
import Allmedicine from './Pharmacy/All_medicine';
import Blogs_items from './Blogs/Blog_items';
import DoctorList_CategoryWise from './Doctors/DoctorList_CategoryWise';
import AddressBook from './User/AddressBook';
import AddDeliveryAddress from './User/AddDelivery_Address';
import EditDeliveryAddress from './User/EditDeliveryAddress';
import BuyNow from './cart/BuyNow';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class App extends Component
{
  constructor(props) 
  {
    super(props);
  }
  
   render()
   {
     return (
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/pharmacy" component={Pharmacy} />
      <Route exact path="/view-doctor/:ubit_id" component={DoctorView} />
      <Route exact path="/book-appointment/:ubit_id" component={Appointment} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/blogs_report/:wbim_id" component={Blogs_report} />
      <Route exact path="/consult" component={Consult} />
      <Route exact path="/diagnostics" component={Diagnostics} />
      <Route exact path="/contactus" component={Contactus} />
      <Route exact path="/diagnosticfilter" component={DiagnosticFilter} />
      <Route exact path="/product-details/:tpp_id" component={MedicineDetails} />
      <Route exact path="/productcart" component={ProductCart} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/diagnosticdetails" component={DiagnosticDetails} />
      <Route exact path="/testdetails/:dltm_id" component={TestDetails} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/changepassword" component={Changepassword} />
      <Route exact path="/userappointment" component={UserAppointment} />
      <Route exact path="/userdashboard" component={UserDashboard} />
      <Route exact path="/userorders" component={UserMedicialOrders} />
      <Route exact path="/userlabtest" component={UserLabTest} />
      <Route exact path="/allmedicine" component={Allmedicine} />
      <Route exact path="/categorybasedalltest/:rbcm_id" component={CategoryBasedAllTest} />
      <Route exact path="/blogs-items/:wbc_id" component={Blogs_items} />
      <Route exact path="/doctorlist_categorywise/:rbcm_id" component={DoctorList_CategoryWise} />
      <Route exact path="/doctors-list" component={DoctorList_CategoryWise} />
      <Route exact path="/addressbook" component={AddressBook} />
      <Route exact path="/add-delivery-address" component={AddDeliveryAddress} />
      <Route exact path="/edit-delivery-address/:udai_id" component={EditDeliveryAddress} />
      <Route exact path="/buynow" component={BuyNow} />
      
      </BrowserRouter>
     );
   }
}
export default App;
