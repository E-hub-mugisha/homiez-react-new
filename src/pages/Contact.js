import React, {useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Simulate form submission
        const isSuccess = Math.random() > 0.5; // Randomly simulate success or error
        if (isSuccess) {
          toast.success("Your quote request has been submitted successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        } else {
          toast.error("Something went wrong! Please try again.");
        }
      };
    return (
        <div>
            <section className="bg-secondary py-5">
                <div className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
                    <nav aria-label="breadcrumb">
                        <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Let&apos;s Talk
                            </li>
                        </ol>
                    </nav>

                    <h1 className="display-2">Let&apos;s Talk</h1>
                    <p className="fs-lg pb-4 mb-2 mb-sm-3">
                        Get in touch with us by completing the below form or call us now
                    </p>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
                        {/* Address Section */}
                        <div className="col">
                            <div className="card border-0 h-100">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Address</h4>
                                    <p className="fs-lg fw-medium pb-3 mb-3">
                                        Norrsken house. KN 78 St, Kigali City Rwanda
                                    </p>
                                    <a className="btn btn-sm btn-outline-primary" href="#">
                                        <i className="ai-map-pin me-1"></i>
                                        Get directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="col">
                            <div className="card border-0 h-100">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Phone</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2">
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                Main office
                                            </span>
                                            <a className="nav-link fs-lg p-0" href="tel:+250789963931">
                                                +250&nbsp;789&nbsp;963&nbsp;931
                                            </a>
                                        </li>
                                        <li>
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                Support room
                                            </span>
                                            <a className="nav-link fs-lg p-0" href="tel:+250782390919">
                                                +250&nbsp;782&nbsp;390&nbsp;919
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Schedule Section */}
                        <div className="col">
                            <div className="card border-0 h-100">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Schedule</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2">
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                Mon - Thu
                                            </span>
                                            <div className="d-flex align-items-center">
                                                <span className="text-nav fs-lg fw-medium">10:00</span>
                                                <span
                                                    className="border-top mx-4"
                                                    style={{ width: '36px', height: '1px' }}
                                                ></span>
                                                <span className="text-nav fs-lg fw-medium">22:00</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                Fri - Sat
                                            </span>
                                            <div className="d-flex align-items-center">
                                                <span className="text-nav fs-lg fw-medium">10:00</span>
                                                <span
                                                    className="border-top mx-4"
                                                    style={{ width: '36px', height: '1px' }}
                                                ></span>
                                                <span className="text-nav fs-lg fw-medium">20:00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="col">
                            <div className="card border-0 h-100">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Email</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li className="pb-1 mb-2">
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                Main office
                                            </span>
                                            <a
                                                className="nav-link fs-lg p-0"
                                                href="mailto:info@homiez.rw"
                                            >
                                                info@homiez.rw
                                            </a>
                                        </li>
                                        <li>
                                            <span className="d-block fs-sm text-body-secondary mb-1">
                                                support room
                                            </span>
                                            <a
                                                className="nav-link fs-lg p-0"
                                                href="mailto:support@homiez.rw"
                                            >
                                                support@homiez.rw
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '250px' }}></div>
            </section>

            <section
                className="container"
                style={{ marginTop: '-260px' }}
                data-bs-theme="dark"
            >
                <ToastContainer />
                <div className="card border-0 bg-primary position-relative py-lg-4 py-xl-5">
                    <div className="card-body position-relative z-2 py-5">
                        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
                            <h2 className="h1 card-title text-center pb-4">
                                Get a free consultation
                            </h2>
                            <div className="row g-4">
                                {/* Input Fields */}
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        id="name"
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="company">
                                        Company
                                    </label>
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Your company name"
                                        id="company"
                                        name='company'
                                        value={formData.company}
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="form-control form-control-lg"
                                        type="email"
                                        placeholder="Email address"
                                        required
                                        id="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Phone number"
                                        id="phone"
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label fs-base" htmlFor="message">
                                        How can we help?
                                    </label>
                                    <textarea
                                        className="form-control form-control-lg"
                                        rows="6"
                                        placeholder="Enter your message here..."
                                        required
                                        id="message"
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="seo"
                                            name='seo'
                                            value={formData.seo}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label fs-base" htmlFor="seo">
                                            SEO Website Audit
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="email-marketing"
                                            
                                            name='email-marketing'
                                            value={formData.emailMarketing}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="form-check-label fs-base"
                                            htmlFor="email-marketing"
                                        >
                                            Email Marketing
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="social"
                                            name='social'
                                            value={formData.social}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label fs-base" htmlFor="social">
                                            Social Networks
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="content-marketing"
                                            name='content-marketing'
                                            value={formData.contentMarketing}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="form-check-label fs-base"
                                            htmlFor="content-marketing"
                                        >
                                            Content Marketing
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center pt-4">
                                    <button className="btn btn-lg btn-light" type="submit">
                                        Send a request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
