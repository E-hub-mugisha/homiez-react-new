import React from 'react';

const Hero = () => {
  return (
    <div>
      {/*  Hero  */}
      < section className="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5" >
        <div className="container d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
          <div className="row align-items-center pt-5 mt-4 mt-xxl-0">

            {/*  Video + Parallax  */}
            <div className="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
              <div className="parallax mx-auto mx-lg-0" style={{ maxWidth: '582px' }}>
                <div className="parallax-layer z-3" data-depth="0.1">
                  <div className="position-relative bg-dark mx-auto" style={{
                    maxWidth: '61%',
                    padding: '.3125rem',
                    marginBottom: '9.9%',
                    borderRadius: 'calc(var(--ar-border-radius) * 2.125)',
                  }}>
                    <div className="position-absolute start-50 translate-middle-x" style={{ top: '4.4%', width: '85%' }}>
                      <div className="row row-cols-4 gx-2 mb-3">
                        <div className="col">
                          <div className="border-white border opacity-80"></div>
                        </div>
                        <div className="col">
                          <div className="border-white border opacity-80"></div>
                        </div>
                        <div className="col">
                          <div className="border-white border opacity-80"></div>
                        </div>
                        <div className="col position-relative">
                          <div className="position-absolute top-0 start-0 w-100 border-white border opacity-30"></div>
                          <div className="position-absolute top-0 start-0 w-50 border-white border opacity-80"></div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <img className="rounded-circle" src="assets/img/landing/marketing-agency/hero/avatar.jpg" width="35" alt="Avatar" />
                        <div className="fs-xs ps-2" data-bs-theme="light">
                          <span className="text-nav fw-bold me-1">Lonoi@1</span>
                          <span className="text-body-secondary">12 min</span>
                        </div>
                      </div>
                    </div>
                    <video className="d-block w-100" autoplay loop muted style={{ borderRadius: 'calc(var(--ar-border-radius) * 1.875)' }}>
                      <source src="assets/img/landing/marketing-agency/hero/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="parallax-layer" data-depth="0.3">
                  <img src="assets/img/landing/marketing-agency/hero/shape01.svg" alt="Background shape" />
                </div>
                <div className="parallax-layer z-2" data-depth="-0.1">
                  <img src="assets/img/landing/marketing-agency/hero/shape02.svg" alt="Background shape" />
                </div>
                <div className="parallax-layer" data-depth="-0.15">
                  <img src="assets/img/landing/marketing-agency/hero/shape03.svg" alt="Background shape" />
                </div>
                <div className="parallax-layer z-2" data-depth="-0.25">
                  <img src="assets/img/landing/marketing-agency/hero/shape04.svg" alt="Background shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-2 pb-3 mb-4"><span className="fw-normal">Full servises</span> marketing agency</h1>
              <div className="row row-cols-3">
                <div className="col">
                  <i className="ai-bulb-alt d-block fs-1 text-dark mb-2 pb-1"></i>
                  <p className="mb-0">Individual approach to the brand</p>
                </div>
                <div className="col">
                  <i className="ai-rocket d-block fs-2 text-dark mb-3"></i>
                  <p className="mb-0">We guarantee the result after a month</p>
                </div>
                <div className="col">
                  <i className="ai-circle-check-filled d-block fs-3 text-dark mb-3"></i>
                  <p className="mb-0">Completing tasks exactly on time</p>
                </div>
              </div>
              <div className="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
                <a className="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" href="#">Get in touch</a>
                <a className="btn btn-lg btn-link" href="#">
                  Our case studies
                  <i className="ai-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Hero;
