import React from 'react'
import { Link } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbg  sticky-top  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{fontFamily: 'Times New Roman', color: "crimson",fontSize:'2rem'}}>D.A.M.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="NLink">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="NLink">
                                <Link className="nav-link active" aria-current="page" to="/assetList">Assets</Link>
                            </li>
                          
                            <li className="NLink">
                                <Link className="nav-link active" aria-current="page" to="/flist">Friends</Link>
                            </li>
                        </ul>
                        <Link to="/create">
                            <button className='btn btn-danger me-4'>Create</button>
                        </Link>
                        <ConnectWallet/>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;