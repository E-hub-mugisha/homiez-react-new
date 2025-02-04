import React from 'react';

const Navbar = () => {
    return (
        <div>
            {/*  Navbar.Remove 'fixed-top' className to make the navigation bar scrollable with the page */}
            <header className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
                <div className="container">

                    {/*  Navbar brand (Logo)  */}
                    <a className="navbar-brand pe-sm-3" href="/">
                        <img src='assets/img/homiez.png' alt="homiez" width={50} />
                    </a>

                    {/*  Theme switcher */}

                    <a className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" href="/Quote">
                        <i className="ai-cart fs-xl me-2 ms-n1"></i>
                        Get Quote
                    </a>

                    {/* Mobile menu toggler (Hamburger) */}
                    <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar collapse (Main navigation) */}
                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-nav-scroll me-auto" style={{ '--ar-scroll-height': '520px' }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/videography">Videography</a></li>
                                    <li><a className="dropdown-item" href="/photography">Photography</a></li>
                                    <li><a className="dropdown-item" href="/web-services">Web Services</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Let&apos;s Talk</a>
                            </li>
                        </ul>
                        <div className="d-sm-none p-3 mt-n3">
                            <a className="btn btn-primary w-100 mb-1" href="/Quote">
                                <i className="ai-cart fs-xl me-2 ms-n1"></i>
                                Get Quote
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
