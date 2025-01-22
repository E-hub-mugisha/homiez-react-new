import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/*  Navbar.Remove 'fixed-top' className to make the navigation bar scrollable with the page */}
            <header className="navbar navbar-expand-lg fixed-top">
                <div className="container">

                    {/*  Navbar brand (Logo)  */}
                    <a className="navbar-brand pe-sm-3" href="/">
                        <img src='assets/img/homiez.png' alt="homiez" width={50} />
                    </a>

                    {/*  Theme switcher */}

                    <Link className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" to="/Quote">
                        <i className="ai-cart fs-xl me-2 ms-n1"></i>
                        Get Quote
                    </Link>

                    {/* Mobile menu toggler (Hamburger) */}
                    <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar collapse (Main navigation) */}
                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-nav-scroll me-auto" style={{ '--ar-scroll-height': '520px' }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/videography">Videography</Link></li>
                                    <li><Link className="dropdown-item" to="/photography">Photography</Link></li>
                                    <li><Link className="dropdown-item" to="/web-services">Web Services</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Let&apos;s Talk</Link>
                            </li>
                        </ul>
                        <div className="d-sm-none p-3 mt-n3">
                            <Link className="btn btn-primary w-100 mb-1" to="/Quote">
                                <i className="ai-cart fs-xl me-2 ms-n1"></i>
                                Get Quote
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
