import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavbarComponent extends Component {
    handleSubmit = () => {
        window.location.href = "http://localhost:3000/vendorsList";
      };
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" style={{fontSize:35}}>TiffinWala.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000#about-us">About us</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/sign-up">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/sign-in">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000#footer">Contact us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Enter your pincode" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.handleSubmit} >Find Delivery partners near you</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarComponent;