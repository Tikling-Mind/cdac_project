import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'; // Import your CSS file

class NavbarComponent extends Component {
    state = {
        isMenuOpen: false,
    };

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    handleSubmit = () => {
        window.location.href = "http://localhost:3000/vendorsList";
    };

    render() {
        const { isMenuOpen } = this.state;

        return (
            <div >
                <nav className={`navbar navbar-expand-lg navbar-light`} style={{ backgroundColor: '#1de9b6' }}>
                    <a className="navbar-brand" href="#" style={{ fontSize: 35, background: '#1de9b6' }}>TiffinWala.com</a>
                    <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link darker-link" href="http://localhost:3000" onClick={this.toggleMenu}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link darker-link" href="http://localhost:3000#about-us" onClick={this.toggleMenu}>About us</a>
                            </li>
                            <li className="nav-ite m">
                                <a className="nav-link darker-link" href="http://localhost:3000/sign-up" onClick={this.toggleMenu}>Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link darker-link" href="http://localhost:3000/sign-in" onClick={this.toggleMenu}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link darker-link" href="http://localhost:3000#footer" onClick={this.toggleMenu}>Contact us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Enter your pincode" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.handleSubmit} style={{ backgroundColor: '#32cd32', color:'#333' }}>Find Delivery partners near you</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarComponent;
