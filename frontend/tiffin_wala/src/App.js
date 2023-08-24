import logo from './logo.svg';
import './App.css';
import VendorHome from "./components/VendorHome"
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import VendorSignUpComponent from './components/VendorSignUpComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <header>
        <NavbarComponent />
        <Router>
          <Routes>
            {/* Layout will be have elements common to all Paths */}
            <Route path='/' element={<Layout />} >  
              
              {/* Common Routes */}
              <Route index element={<Home />} />
              <Route path='sign-in' element={<Login />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='forgotPassword' element={<ForgotPassword />} />
              <Route path='changePassword' element={<ChangePassword />} />
              
              {/* Customer Routes */}
              <Route path='customer' element={<CustomerHome />} />
              <Route path='customer/availableTiffins' element={<CustomerAvailableTiffins />} />
              <Route path="customer/profile" element={<CustomerProfile />} />
              <Route path='customer/update' element={<CustomerUpdate />} />
              <Route path='customer/delete' element={<CustomerDelete />} />
              <Route path='customer' element={<CustomerHome />} />
              
              
              {/* Vendor Routes  */}
              <Route path='vendor' element={<CustomerHome />} />
              <Route path="vendor/sign-up" element={<CreateVendor />} />
              <Route path="vendor/sign-up" element={<CreateVendor />} />
              <Route path="vendor/profile" element={<CustomerProfile />} />
              <Route path='vendor/update' element={<CustomerUpdate />} />
              <Route path='vendor/delete' element={<CustomerDelete />} />
              <Route path='vendor/getAllTiffins' element={<VendorTiffinList/>} />
              <Route path='vendor/addTiffin' element={<AddTiffin/>} />
              <Route path='vendor/editTiffin' element={<UpdateTiffin />} />  
              <Route path='vendor/deleteTiffins' element={<DeleteTiffin/>} />            
              <Route path='vendor/orderList' element={<OrderList/>} />
              <Route path='vendor/orderByCustmer' element={<OrderByCutomer/>} />
              <Route path='vendor/customersByTiffin' element={<CustomersByTiffin/>} />

              {/* Admin Routes */}
              <Route path='admin/' element={<Admin/>} />
              <Route path='admin/getAllApprovedVendors' element={<ApprovedVendorsList/>} />             
              <Route path='admin/getAllUnApprovedVendors' element={<UnApprovedVendors/>} />
              <Route path='admin/blockVendor' element={<BlockVendor/>} />
              <Route path='admin/blockCustomer' element={<BlockCustomer/>} />
              <Route path='admin/getAllCustomers' element={<CustomerList/>} />

            </Route>
          </Routes>
        </Router>

        <FooterComponent />
      </header>
    </div>
  );
}

export default App;