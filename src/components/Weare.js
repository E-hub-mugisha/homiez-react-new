import React from 'react'

const Weare = () => {
    return (
        <div>
            <section className="overflow-hidden pb-5 mt-5">
                <div className="container pb-sm-3 mb-md-2 mb-lg-3">
                    <div className="row g-4">
                        <div className="col-md-7 aos-init aos-animate" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
                            <img className="object-fit-cover w-100 h-100 rounded-3" src="assets/img/about/about_bg.jpg" alt="Videography and Photography" />
                        </div>
                        <div className="col-md-5 aos-init aos-animate" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
                            <div className="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                                <h2 className="mb-xl-4">Creative Media and Web Solutions</h2>
                                <p className="mb-4 mb-xl-5">Bring your ideas to life with our professional videography, photography, web development, and hosting services. Whether you’re looking to capture special moments, elevate your brand, or establish an impactful online presence, we offer tailored solutions designed to meet your needs and exceed expectations.</p>
                                <ul className="list-unstyled mb-4 mb-xl-5">
                                    <li className="d-flex pb-2 mb-1">
                                        <span className="bg-primary mt-2 me-2" style={{ width: '10px', height: '10px', borderRadius: '2px' }}></span>
                                        Professional videography for events and promotions
                                    </li>
                                    <li className="d-flex pb-2 mb-1">
                                        <span className="bg-primary mt-2 me-2" style={{ width: '10px', height: '10px', borderRadius: '2px' }}></span>
                                        High-quality photography for personal and commercial use
                                    </li>
                                    <li className="d-flex pb-2 mb-1">
                                        <span className="bg-primary mt-2 me-2" style={{ width: '10px', height: '10px', borderRadius: '2px' }}></span>
                                        Custom web development to bring your vision online
                                    </li>
                                    <li className="d-flex pb-2 mb-1">
                                        <span className="bg-primary mt-2 me-2" style={{ width: '10px', height: '10px', borderRadius: '2px' }}></span>
                                        Reliable and secure hosting for seamless performance
                                    </li>
                                </ul>
                                <div className="mt-auto">
                                    <a className="btn btn-outline-primary" href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Weare