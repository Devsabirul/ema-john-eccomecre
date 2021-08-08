import React from 'react'
import Logo from '../../data/images/logo.png';
import '../header/header.css'

function Header() {
    return (
        <div>
            <header>
                <div className="header_top">
                    <a href="/shop"><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="/shop"> Shop </a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="manage">Manage Inventory</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;
