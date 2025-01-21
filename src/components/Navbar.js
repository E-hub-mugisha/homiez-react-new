import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/*  Navbar.Remove 'fixed-top' class to make the navigation bar scrollable with the page */}
            <header class="navbar navbar-expand-lg fixed-top">
                <div class="container">

                    {/*  Navbar brand (Logo)  */}
                    <a class="navbar-brand pe-sm-3" href="/">
                        <img src='assets/img/homiez.png' alt="homiez" width={50} />
                    </a>

                    {/*  Theme switcher */}

                    <Link class="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" to="/Quote">
                        <i class="ai-cart fs-xl me-2 ms-n1"></i>
                        Get Quote
                    </Link>

                    {/* Mobile menu toggler (Hamburger) */}
                    <button class="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar collapse (Main navigation) */}
                    <nav class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav navbar-nav-scroll me-auto" style={{ '--ar-scroll-height': '520px' }}>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/videography">Videography</Link></li>
                                    <li><Link class="dropdown-item" to="/photography">Photography</Link></li>
                                    <li><Link class="dropdown-item" to="/web-services">Web Services</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Let's Talk</Link>
                            </li>
                        </ul>
                        <div class="d-sm-none p-3 mt-n3">
                            <Link class="btn btn-primary w-100 mb-1" to="/Quote">
                                <i class="ai-cart fs-xl me-2 ms-n1"></i>
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
