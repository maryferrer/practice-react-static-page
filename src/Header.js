import React from 'react';
import "./styles.css";

function Header() {
    return (
    <div>
        <header>
            <nav className="nav">
                <img src="./logo512.png" alt="React logo" className="logo-pic" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
    )
};

export default Header;