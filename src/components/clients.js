import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
            easing: 'ease-out-back', // Default easing for animations
        });
    }, []);

    return (
        <div>
            {/*  Tools  */}
            <section className="container">
                <div className="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5 mb-5">
                    <div className="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
                        <div className="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
                            <h2 className="h1 mb-4">
                                The tools <br className="d-none d-lg-inline" />
                                we work with
                            </h2>
                            <p className="pb-3 mb-3 mb-lg-4">
                                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin
                                lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.
                            </p>
                            <a className="btn btn-primary d-none d-lg-inline-flex" href="#">
                                See all tools
                            </a>
                        </div>
                        <div className="order-lg-1 w-100 mx-auto mx-lg-0" style={{ maxWidth: '558px' }}>
                            <div className="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <img src="assets/img/landing/marketing-agency/tools/bing.svg" alt="Bing" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="500"
                                    >
                                        <img src="assets/img/landing/marketing-agency/tools/facebook.svg" alt="Facebook" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="200"
                                    >
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/microsoft-dark.svg"
                                            alt="Microsoft"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/microsoft-light.svg"
                                            alt="Microsoft"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="800"
                                    >
                                        <img src="assets/img/landing/marketing-agency/tools/google.svg" alt="Google" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light rounded-3" data-aos="zoom-in">
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/google-ads-dark.svg"
                                            alt="Google Ads"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/google-ads-light.svg"
                                            alt="Google Ads"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="600"
                                    >
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/admitad-dark.svg"
                                            alt="Admitad"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/admitad-light.svg"
                                            alt="Admitad"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/google-analytics-dark.svg"
                                            alt="Google Analytics"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/google-analytics-light.svg"
                                            alt="Google Analytics"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="700"
                                    >
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/instagram-dark.svg"
                                            alt="Instagram"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/instagram-light.svg"
                                            alt="Instagram"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div
                                        className="bg-light rounded-3"
                                        data-aos="zoom-in"
                                        data-aos-delay="100"
                                    >
                                        <img
                                            className="d-dark-mode-none"
                                            src="assets/img/landing/marketing-agency/tools/tiktok-dark.svg"
                                            alt="TikTok"
                                        />
                                        <img
                                            className="d-none d-dark-mode-block"
                                            src="assets/img/landing/marketing-agency/tools/tiktok-light.svg"
                                            alt="TikTok"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="d-lg-none text-center pt-4 mt-2 mt-md-3"
                                data-aos="zoom-in"
                                data-aos-delay="900"
                            >
                                <a className="btn btn-primary" href="#">
                                    See all tools
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
