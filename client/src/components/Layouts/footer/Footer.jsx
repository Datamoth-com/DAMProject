import React from 'react'

import {Link} from "react-router-dom";

// CSS Imports
import "./footer.css";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="leftFooter">
                <Link to="/" style={{textDecoration: "none", color: 'white'}}>
                    <p>HOME</p>
                </Link>
                <Link to="/assetList" style={{textDecoration: "none", color: 'white'}}><p>ASSETS</p></Link>
                <Link to="/history" style={{textDecoration: "none", color: 'white'}}><p>HISTORY</p></Link>
                <Link to="/create" style={{textDecoration: "none", color: 'white'}}><p>CREATE</p></Link>
            </div>
            <div className="midFooter">
                <h1>D.A.M.</h1>
                <br />
                <h2>Decentralized Asset Manager</h2>
                <p>Copyright 2023 &copy; DataMoth.com</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://ibrahimhz.com">Instagram</a>
                <a href="https://ibrahimhz.com">Youtube</a>
                <a href="https://ibrahimhz.com">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer;
