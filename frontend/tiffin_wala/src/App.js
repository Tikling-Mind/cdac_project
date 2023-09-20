import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavbarComponent from './components/navbar/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';

import Home from './components/pages/common/Home';
import Faq from './components/pages/common/Faq';
import VendorsList from './components/pages/common/VendorsList';
import PrivacyPolicy from './components/pages/common/PrivacyPolicy';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

import CustomerHome from './components/pages/customer/CustomerHome';
import CustomerAvailableTiffins from './components/pages/customer/CustomerAvailableTiffins';
import CustomerProfile from './components/pages/customer/CustomerProfile';
import CustomerUpdate from './components/pages/customer/CustomerUpdate';
import CustomerDelete from './components/pages/customer/CustomerDelete';
import CustomerTiffinList from './components/pages/customer/CustomerTiffinList';
import TiffinOrderForm from './components/pages/customer/TiffinOrderForm';

import VendorHome from './components/pages/vendor/VendorHome';
import CreateVendor from './components/pages/vendor/CreateVendor';
import VendorProfile from './components/pages/vendor/VendorProfile';
import VendorUpdate from './components/pages/vendor/VendorUpdate';
import VendorDelete from './components/pages/vendor/VendorDelete';
import VendorTiffinList from './components/pages/vendor/VendorTiffinList';
import AddTiffin from './components/pages/vendor/AddTiffin';
import UpdateTiffin from './components/pages/vendor/UpdateTiffin';
import OrderList from './components/pages/vendor/OrderList';
import OrderByCustomer from './components/pages/vendor/OrderByCustomer';
import CustomersByTiffin from './components/pages/vendor/CustomerByTiffin';

import AdminHome from './components/pages/admin/AdminHome';
import ApprovedVendorsList from './components/pages/admin/ApprovedVendorsList';
import UnApprovedVendorsList from './components/pages/admin/UnApprovedVendorsList';
import CustomersList from './components/pages/admin/CustomersList';
import BlockedCustomersList from './components/pages/admin/BlockedCustomersList';
import BlockedVendorsList from './components/pages/admin/BlockedVendorsList';

// Import other components and routes here

const theme = createTheme({
  palette: {
    primary: {
      main: '#1de9b6', // Teal color
    },
    secondary: {
      main: '#26a69a',
    },
    text: {
      primary: '#00000', // White text color
    },
  },
});

function App() {
  const [checkLoggedIn, setCheckLoggedIn] = useState();

  useEffect(() => {
    let cust = JSON.parse(sessionStorage.getItem('customer'));
    let ven = JSON.parse(sessionStorage.getItem('vendor'));
    let adm = JSON.parse(sessionStorage.getItem('admin'));
    if (cust !== null || ven !== null || adm !== null)
      setCheckLoggedIn(true); // User logged in
    else setCheckLoggedIn(false); // No user logged in
  }, []);

  const updateLogin = (val) => {
    setCheckLoggedIn(val);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">TiffinWala.com</Typography>
            <Link href="/">Home</Link>
            <Link href="/faq">FAQ</Link>
          </Toolbar>
        </AppBar> */}
        <Container>
          <Router>
          <NavbarComponent />
            <Routes>
              {/* Common Routes */}
              <Route index element={<Home />} />
              <Route path="sign-in" element={<Login isLoggedIn={updateLogin} />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="faq" element={<Faq />} />
              <Route path="vendorsList" element={<VendorsList />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              {/* Add other common routes here */}
              {/* Customer Routes */}
              <Route path="customer" element={<CustomerHome />} />
              <Route path="customer/availableTiffins" element={<CustomerAvailableTiffins />} />
              <Route path="customer/profile" element={<CustomerProfile />} />
              <Route path="customer/update" element={<CustomerUpdate />} />
              <Route path="customer/delete" element={<CustomerDelete />} />
              <Route path="customer/customerTiffinList" element={<CustomerTiffinList />} />
              <Route path="customer/orderTiffin" element={<TiffinOrderForm />} />
              {/* Add other customer routes here */}
              {/* Vendor Routes */}
              <Route path="vendor" element={<VendorHome />} />
              <Route path="vendor/sign-up" element={<CreateVendor />} />
              <Route path="vendor/profile" element={<VendorProfile />} />
              <Route path="vendor/update" element={<VendorUpdate />} />
              <Route path="vendor/delete" element={<VendorDelete />} />
              <Route path="vendor/getAllTiffins" element={<VendorTiffinList />} />
              <Route path="vendor/addTiffin" element={<AddTiffin />} />
              <Route path="vendor/editTiffin" element={<UpdateTiffin />} />
              <Route path="vendor/deleteTiffins" element={<UpdateTiffin />} />
              <Route path="vendor/orderList" element={<OrderList />} />
              <Route path="vendor/orderByCustomer" element={<OrderByCustomer />} />
              <Route path="vendor/customersByTiffin" element={<CustomersByTiffin />} />
              {/* Add other vendor routes here */}
              {/* Admin Routes */}
              <Route path="admin" element={<AdminHome />} />
              <Route path="admin/getAllApprovedVendors" element={<ApprovedVendorsList />} />
              <Route path="admin/getAllUnApprovedVendors" element={<UnApprovedVendorsList />} />
              <Route path="admin/getAllCustomers" element={<CustomersList />} />
              <Route path="admin/getAllBlockedVendors" element={<BlockedVendorsList />} />
              <Route path="admin/getAllBlockedCustomers" element={<BlockedCustomersList />} />
              {/* Add other admin routes here */}
              {/* Import additional routes here */}
            </Routes>
          </Router>
        </Container>
        <FooterComponent theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
