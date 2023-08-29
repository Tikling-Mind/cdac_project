import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item" style={{marginRight:"4rem"}}><a href="/home" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item" ><a href="/faq" className="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item" style={{marginLeft:"4rem"}}><a href="/about" className="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2023 TiffinWala</p>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;