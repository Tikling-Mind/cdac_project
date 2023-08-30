import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from "./components/Layout.jsx" ;
import NavbarComponent from './components/navbar/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';

// Common Routes
import Home from "./components/pages/common/Home"
import Login from "./components/pages/Login"
import SignUp from './components/pages/SignUp';
// Customer Routes
import CustomerHome from "./components/pages/customer/CustomerHome" ;
import CustomerAvailableTiffins from "./components/pages/customer/CustomerAvailableTiffins" ;
import CustomerProfile from "./components/pages/customer/CustomerProfile" ;
import CustomerUpdate from "./components/pages/customer/CustomerUpdate" ;
import CustomerDelete from "./components/pages/customer/CustomerDelete" ;
import CustomerTiffinList from "./components/pages/customer/CustomerTiffinList" ;
// Vendor routes
import VendorHome from "./components/pages/vendor/VendorHome"  ;
import CreateVendor from "./components/pages/vendor/CreateVendor"  ;
import VendorProfile from "./components/pages/vendor/VendorProfile"  ;
import VendorUpdate from "./components/pages/vendor/VendorUpdate"  ;
import VendorDelete from "./components/pages/vendor/VendorDelete"  ;
import VendorTiffinList from "./components/pages/vendor/VendorTiffinList"  ;
import AddTiffin from "./components/pages/vendor/AddTiffin"  ;
import UpdateTiffin from "./components/pages/vendor/UpdateTiffin"  ;
import OrderList from "./components/pages/vendor/OrderList"  ;
import OrderByCutomer from "./components/pages/vendor/OrderByCustomer"  ;
import CustomersByTiffin from "./components/pages/vendor/CustomerByTiffin"  ;

// Admin Routes
import AdminHome from "./components/pages/admin/AdminHome" ;
import ApprovedVendorsList from "./components/pages/admin/ApprovedVendorsList" ;
import UnApprovedVendorsList from "./components/pages/admin/UnApprovedVendorsList" ;
import BlockVendor from "./components/pages/admin/BlockVendor" ;
import BlockCustomer from "./components/pages/admin/BlockCustomer" ;
import CustomersList from "./components/pages/admin/CustomersList" ;
import BlockedCustomersList from "./components/pages/admin/BlockedCustomersList" ;
import BlockedVendorsList from "./components/pages/admin/BlockedVendorsList" ;

function App() {
  // state to store loggining status
  const [checkLoggedIn, setCheckLoggedIn] = useState();

  // Get user from sessionStorage
  useEffect(() => {
    let cust = JSON.parse(sessionStorage.getItem("customer"));
    let ven = JSON.parse(sessionStorage.getItem("vendor"));
    let adm = JSON.parse(sessionStorage.getItem("admin"));
    if (cust !== null || ven !== null || adm !== null) 
    	setCheckLoggedIn(true); // User logged in
    else 
		setCheckLoggedIn(false); // No user logged in
  }, []);

  const updateLogin = (val) => {
    setCheckLoggedIn(val);
  };
  return (
    <div >
      <header>
        <NavbarComponent />
        <Router>
          <Routes>
            {/* Layout will be have elements common to all Paths */}
            {/* <Route exact path='/' element={<Layout />} >   */}
            
              {/* Common Routes */}
              <Route index element={<Home />} />
              <Route path='/sign-in' element={<Login isLoggedIn={updateLogin}/>} />
              <Route path='sign-up' element={<SignUp />} />
              {/* <Route path='forgotPassword' element={<ForgotPassword />} /> */}
              {/* <Route path='changePassword' element={<ChangePassword />} /> */}
              
              {/* Customer Routes */}
              <Route path='customer/:id' element={<CustomerHome />} />
              <Route path='customer/availableTiffins' element={<CustomerAvailableTiffins />} />
              <Route path="customer/profile" element={<CustomerProfile />} />
              <Route path='customer/update' element={<CustomerUpdate />} />
              <Route path='customer/delete' element={<CustomerDelete />} />              
              <Route path='customer/customerTiffinList' element={<CustomerTiffinList />} />              
              
              {/* Vendor Routes  */}
              <Route path='vendor/:id' element={<VendorHome />} />
              <Route path="vendor/sign-up" element={<CreateVendor />} />
              <Route path="vendor/profile" element={<VendorProfile />} />
              <Route path='vendor/update' element={<VendorUpdate />} />
              <Route path='vendor/delete' element={<VendorDelete />} />
              <Route path='vendor/getAllTiffins' element={<VendorTiffinList/>} />
              <Route path='vendor/addTiffin' element={<AddTiffin/>} />
              <Route path='vendor/editTiffin' element={<UpdateTiffin />} />  
              <Route path='vendor/deleteTiffins' element={<UpdateTiffin/>} />            
              <Route path='vendor/orderList' element={<OrderList/>} />
              <Route path='vendor/orderByCustmer' element={<OrderByCutomer/>} />
              <Route path='vendor/customersByTiffin' element={<CustomersByTiffin/>} />

              {/* Admin Routes */}
              <Route path='/admin' element={<AdminHome/>} />
              <Route path='admin/getAllApprovedVendors' element={<ApprovedVendorsList/>} />             
              <Route path='admin/getAllUnApprovedVendors' element={<UnApprovedVendorsList/>} />
              <Route path='admin/getAllCustomers' element={<CustomersList/>} />
              <Route path='admin/getAllBlockedVendors' element={<BlockedVendorsList/>} />
              <Route path='admin/getAllBlockedCustomers' element={<BlockedCustomersList/>} />
              <Route path='admin/blockVendor' element={<BlockVendor/>} />
              <Route path='admin/blockCustomer' element={<BlockCustomer/>} />

            {/* </Route> */}
          </Routes>
        </Router>

        <FooterComponent />
      </header>
    </div>
  );
}

export default App;