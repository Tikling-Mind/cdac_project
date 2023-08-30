import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item" style={{marginRight:"4rem"}}><a href="http://localhost:3000" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item" ><a href="http://localhost:3000/faq" className="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item" style={{marginLeft:"4rem"}}><a href="  http://localhost:3000/privacy" className="nav-link px-2 text-muted">Privacy Policy</a></li>

                    </ul>
                    <p className="text-center text-muted">2023 TiffinWala.com. All rights reserved.</p>
                    <div className="text-center text-muted"><h3>Contact Us</h3>
                        <div>Email: admin@tiffinwala.com</div>
                        <div>Phone: +91-123-456-7890</div>
                        <div>42, Mallikarjun, Baner, Pune-411007</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;