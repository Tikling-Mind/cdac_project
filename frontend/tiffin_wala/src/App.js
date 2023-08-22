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
          <Route path="/" element={<VendorSignUpComponent />} ></Route>
          <Route path="/empadd" element={<VendorHome />} ></Route>
        </Routes>
        </Router>

        <FooterComponent />
      </header>
    </div>
  );
}

export default App;