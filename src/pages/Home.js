import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/clients';
import Benefit from '../components/Benefit';
import Weare from '../components/Weare';

const Home = () => {
  return (
    <div>
      <Hero />

      <Weare />

      <section className="container mt-4">
        <div className="row">
          <div className="col-lg-4 pb-3 mb-3">
            <h2 className="h1">Our services</h2>
            <p className="pe-5 mb-0">
              At Homiez, we combine creativity, technology, and expertise to deliver outstanding solutions for your visual and digital needs.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col">
                <div className="card border-0 bg-secondary rounded-5 mb-4">
                  <div className="card-body pb-3">
                    <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <g className="text-primary">
                        <path d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <h3 className="h4">Videography</h3>
                    <p className="mb-0">
                      Bring your stories to life with our cinematic videography services. From events to promotional videos, we craft visuals that inspire.
                    </p>
                  </div>
                  <div className="card-footer border-0 pt-3 mb-3">
                    <a className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#" aria-label="Learn more">
                      <i className="ai-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="card border-0 bg-secondary rounded-5">
                  <div className="card-body pb-3">
                    <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <g className="text-info">
                        <path d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <h3 className="h4">Photography</h3>
                    <p className="mb-0">
                      Capture unforgettable moments with our professional photography services. We specialize in events, portraits, and product shoots.
                    </p>
                  </div>
                  <div className="card-footer border-0 pt-3 mb-3">
                    <a className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#" aria-label="Learn more">
                      <i className="ai-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 bg-secondary rounded-5 mb-4">
                  <div className="card-body pb-3">
                    <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <g className="text-primary">
                        <path d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <h3 className="h4">Web Hosting</h3>
                    <p className="mb-0">
                      Keep your website secure, fast, and always online with our reliable hosting solutions.
                    </p>
                  </div>
                  <div className="card-footer border-0 pt-3 mb-3">
                    <a className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#" aria-label="Learn more">
                      <i className="ai-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="card border-0 bg-secondary rounded-5">
                  <div className="card-body pb-3">
                    <svg className="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <g className="text-info">
                        <path d="M7.29328 16.1094H0.379453C0.131328 17.368 0 18.6684 0 19.9998C0 26.9291 3.52437 33.0348 8.87797 36.6237L18.3427 27.1589L7.29328 16.1094Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <h3 className="h4">Web Development & IT Support</h3>
                    <p className="mb-0">
                      From designing stunning websites to ensuring seamless IT operations, we&apos;re here to support your business&apos;s digital growth.
                    </p>
                  </div>
                  <div className="card-footer border-0 pt-3 mb-3">
                    <a className="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#" aria-label="Learn more">
                      <i className="ai-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Benefit />

      <Clients />

      <section className="position-relative mt-n5 mt-lg-0 mt-4">
        <div className="bg-secondary position-absolute bottom-0 start-0 w-100" style={{ height: 'calc(100% - 3rem)' }}></div>
        <div className="container position-relative z-2">
          <div className="row">
            <div className="col-lg-6 py-5 mb-sm-2 mb-md-3 mb-lg-5 mt-3 mt-sm-4 mt-md-5">
              <h2 className="h1 text-center text-lg-start pt-3 mt-3 mb-4">Work with a passionate team</h2>
              <div className="d-flex justify-content-between mx-auto mx-lg-0" style={{ maxWidth: '370px' }}>
                <ul className="ps-4 me-3">
                  <li className="mt-2">Videographer</li>
                  <li className="mt-2">Photographer</li>
                  <li className="mt-2"></li>
                </ul>
                <ul className="ps-4">
                  <li className="mt-2">Web Developer</li>
                  <li className="mt-2">IT Support Specialist</li>
                </ul>
              </div>
              <div className="text-center text-lg-start pt-4">
                <a className="btn btn-outline-dark" href="#">Free consultation</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-5 rounded-bottom-0 p-5">
                <div className="position-relative z-2 py-sm-3 py-md-4" style={{ maxWidth: '360px'}} data-bs-theme="dark">
                  <h2 className="h1">Let&apos;s Bring Your Vision to Life</h2>
                  <p className="text-body mb-0">Our experts in videography, photography, web development, and IT support are ready to help your business stand out.</p>
                  <div className="d-flex flex-column flex-sm-row align-items-center pt-3 mt-3 mt-lg-4">
                    <a className="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" to="/contact">Contact Us</a>
                    <a className="d-inline-block text-white fw-medium p-2" href="mailto:info@homie.rw">info@homie.rw</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
