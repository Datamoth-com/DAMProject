import React from 'react'
import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
                            <button className='btn btn-danger me-2'>Create</button>
                        </Link>

               
                        
                           
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;