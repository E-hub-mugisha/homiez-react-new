import React from "react";
import Benefit from "../components/Benefit";
import Weare from "../components/Weare";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-10 position-relative py-5">
        <div
          className="d-none position-absolute top-0 start-0 w-100 h-100"></div>
        <div
          className="container position-relative z-2 py-5 mb-4 mb-sm-5"
          data-bs-theme="dark"
        >
          <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
            <div className="col-lg-10 col-xl-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb pt-lg-3 pb-lg-4 pb-2">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ol>
              </nav>
              <h1 className="display-2 pb-2 pb-sm-3">
                We believe in the success of every business
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Weare />

      {/* Add the remaining sections similarly */}
      <Benefit />
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="bg-primary rounded-5 overflow-hidden mt-2 mt-sm-4 mt-lg-5">
          <img className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block" src="assets/img/landing/yoga-studio/cta/bg.svg" width="186" alt="Background flower"/>
          <div className="row position-relative z-2 align-items-center">
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="text-center text-md-start py-5 px-4 px-sm-5 pe-md-0 ps-lg-4 ps-xl-5">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                  <span className="bg-white opacity-70 me-2 d-none d-md-block" style={{ width: '40px', height: '1px', marginTop: '-1px' }}></span>
                  <span className="fs-xs fw-semibold text-white opacity-70 text-uppercase">Special offer</span>
                </div>
                <h2 className="h1 text-white pb-2 pb-sm-3">Get 30% off when you work with us</h2>
                <a className="btn btn-outline-light fs-base" href="#">Reach out us</a>
              </div>
            </div>
            <div className="col-md-6">
              <img className="d-block mx-auto mx-md-0 mt-n4 mt-md-0" src="assets/img/about/cta.png" width="534" alt="Image"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;