import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
import brandimage from '../Navbar/image.png'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={brandimage} alt="" width="50" height="50" />
                        Aryamitra Chaudhuri
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">Home.</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects.</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills.</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resume.
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/education">Education.</Link></li>
                                    <li><Link className="dropdown-item" to="/achievements">Achievements.</Link></li>
                                    <li><Link className="dropdown-item" to="/workexperience">Work Experience.</Link></li>
                                    <li><Link className="dropdown-item" to="/certificates">Certificates.</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact.</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar