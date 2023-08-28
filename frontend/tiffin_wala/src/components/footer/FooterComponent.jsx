import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item" style={{marginRight:"4rem"}}><a href="/home" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item" ><a href="/faq" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item" style={{marginLeft:"4rem"}}><a href="/about" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p class="text-center text-muted">© 2023 TiffinWala</p>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;