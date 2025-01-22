import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/*  Footer  */}
            <footer className="footer py-5">
                <div className="container pt-md-2 pt-lg-3 pt-xl-4">
                    <div className="row pb-5 pt-sm-2 mb-lg-2">
                        <div className="col-md-12 col-lg-3 pb-2 pb-lg-0 mb-4 mb-lg-0">
                            <a className="navbar-brand py-0 mb-3 mb-lg-4" href="/">
                                <img src='assets/img/homiez.png' alt="homiez" width={50} />
                            </a>
                            <p className="fs-sm pb-2 pb-lg-3 mb-3">At Homiez, we combine creativity, technology, and expertise to deliver outstanding solutions for your visual and digital needs.</p>
                            <div className="d-flex gap-3">
                                <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle" href="#" aria-label="Facabook">
                                    <i className="ai-facebook"></i>
                                </a>
                                <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle" href="#" aria-label="Instagram">
                                    <i className="ai-instagram"></i>
                                </a>
                                <a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="#" aria-label="LinkedIn">
                                    <i className="ai-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-2 offset-xl-1 mb-4 mb-sm-0">
                            <ul className="nav flex-column">
                                <li><Link className="nav-link py-1 px-0" to="/services">Services</Link></li>
                                <li><Link className="nav-link py-1 px-0" to="/about">About</Link></li>
                                <li><Link className="nav-link py-1 px-0" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="nav-link py-1 px-0" to="/contact">Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-lg-2 mb-4 mb-sm-0">
                            <ul className="nav flex-column">
                                <li><a className="nav-link py-1 px-0" href="mailto:contact@example.com">contact@example.com</a></li>
                                <li><a className="nav-link py-1 px-0" href="tel:+15262200459">+1&nbsp;526&nbsp;220&nbsp;0459</a></li>
                                <li><a className="nav-link py-1 px-0" href="tel:+15262200444">+1&nbsp;526&nbsp;220&nbsp;0444</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-5 col-lg-4 col-xl-3 offset-lg-1">
                            <h3 className="h6 mb-2">Stay up to date</h3>
                            <p className="fs-sm">Subscribe to our news and case studies</p>
                            <div className="input-group input-group-sm">
                                <input className="form-control" type="text" placeholder="Your email" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <p className="nav fs-sm mb-0">
                        <span className="text-body-secondary">&copy; All rights reserved. Made by</span>
                        <a className="nav-link d-inline fw-normal p-0 ms-1" href="/">HOMIEZ Team</a>
                    </p>
                </div>
            </footer>

            {/*  Back to top button  */}
            <a className="btn-scroll-top" href="#top" data-scroll aria-label="Scroll back to top">
                <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></circle>
                </svg>
                <i className="ai-arrow-up"></i>
            </a>
        </div>
    );
};

export default Footer;
