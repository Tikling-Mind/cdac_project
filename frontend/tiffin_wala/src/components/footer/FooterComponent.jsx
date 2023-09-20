import React, { Component } from 'react';
import { Typography, Link } from '@mui/material';

class FooterComponent extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: this.props.theme.palette.primary.main, color: this.props.theme.palette.text.primary }} className="py-3 my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Typography variant="h6">Contact Us</Typography>
                            <ul className="list-unstyled">
                                <li>Email: admin@tiffinwala.com</li>
                                <li>Phone: +91-123-456-7890</li>
                                <li>42, Mallikarjun, Baner, Pune-411007</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <Typography variant="h6">Quick Links</Typography>
                            <ul className="list-unstyled">
                                <li><Link href="http://localhost:3000" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                                <li><Link href="http://localhost:3000/faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQs</Link></li>
                                <li><Link href="http://localhost:3000/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center">
                            <Typography variant="h6">© 2023 TiffinWala.com. All rights reserved.</Typography>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
