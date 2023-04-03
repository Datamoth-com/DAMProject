import React from 'react'
import { Link } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{fontFamily: 'Times New Roman', color: "crimson"}}>D.A.M.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/assetList">Assets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/history">History</Link>
                            </li>
                        </ul>
                        <Link to="/create">
                            <button className='btn btn-outline-success me-2'>Create</button>
                        </Link>
                        <ConnectWallet accentColor="#f213a4" colorMode="dark" />
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;