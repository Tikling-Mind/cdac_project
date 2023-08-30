// import React, { useState, useEffect } from 'react';
// import swal from "sweetalert" ;
// import UserWelcome from "../common/UserWelcome" ;
// import CustomerTiffinList from "./CustomerTiffinList.jsx" ;
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import CustomerService from "../../../service/CustomerService" ;



// const CustomerHome = ()=>{
//     // hook to store customer details
//     const [customer, setCustomer ] = useState({
//         id : "",
//         firstName : "",
//         lastName : "", 
//         email : "",
//         jwt : ""
//     }) ;

//     const {id} = useParams() ;
//     const [loggedIn, setLoggedIn] = useState(false) ;

//     const navigate  = useNavigate() ;

//     // Get Data from backend and set them in customer object
//     useEffect(() => {
//         let cust = JSON.parse(sessionStorage.getItem("customer")) ;
//         // if (cust == null){
//         //     swal("Not Authorized", "", "error") ;
//         // }else{
//             CustomerService.getCustomer(id)
//             // axios.get("http://localhost:8080/customer/"+id)  
//                 .then ((res) => {
//                     console.log(res.data) ;
//                     setLoggedIn(true) ;
//                     setCustomer({
//                         id : res.data.id,
//                         firstName : res.data.firstName,
//                         lastName : res.data.lastName,
//                         email : res.data.email
//                     })
//                 })
//                 .catch ((error) => {
//                     console.log(error) ;
//                     swal(error) ;
//                 });
//         //}
//     },[] ) ;

//     return (<div>
//         <h2> In Customer Home </h2>
//          {/* a welcome message to the user */}
//             <UserWelcome user={customer} />

//         {/* Tiffins subscribed the the Customer */}
//             {/* <CustomerTiffinList />  */}
//         </div>
//     );


// };

// export default CustomerHome ;