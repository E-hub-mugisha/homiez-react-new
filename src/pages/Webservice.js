import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Webservice = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should run only once
      easing: "ease-in-out",
    });

    new Swiper(".swiper", {
      spaceBetween: 24,
      loop: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid py-5 mt-4 px-sm-4 px-md-5">
        <div
          className="bg-dark rounded-5 position-relative overflow-hidden py-5 px-3 px-sm-4 px-xl-5 mt-2 mx-md-n3 mx-lg-auto"
          style={{ maxWidth: "1660px" }}
          data-aos="fade-up"
        >
          <div
            className="jarallax position-absolute top-0 start-0 w-100 h-100 mt-5"
            data-jarallax
            data-speed="0.6"
          >
            <div
              className="jarallax-img position-absolute w-100 h-100"
              style={{
                backgroundImage: "url(assets/img/landing/web-studio/hero-wave.png)",
              }}
            ></div>
          </div>
          <div
            className="bg-white position-absolute top-0 start-0 w-100 h-100"
            style={{ opacity: "2%" }}
          ></div>
          <div className="container position-relative z-2 pt-xl-4 pt-xxl-5 pb-sm-2">
            <div className="row pt-md-3 pt-lg-5">
              <div className="col-lg-6 col-xxl-5 pb-lg-5 mb-xl-5">
                <h1 className="display-1 text-center text-lg-start mb-xxl-5 text-white">
                  Web studio of effective{" "}
                  <span style={{ color: '#e92b2b', fontWeight: 'bold' }}>development</span>
                </h1>
              </div>
              <div className="col-lg-5 col-xl-4 offset-lg-1 offset-xxl-2 d-flex flex-column pt-2 pt-md-4">
                <p className= "fs-xl text-white text-center text-lg-start pb-2 pb-md-0 mb-4 mb-md-5">
                  We build websites, tools, and applications that offer beautiful
                  web presence and ultimate user experience.
                </p>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start pb-3 pb-sm-5">
                  <a
                    className="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto me-sm-3 me-xl-4 mb-2 mb-sm-0"
                    href="#"
                  >
                    Let&apos;s partner
                  </a>
                  <a
                    className="btn btn-lg btn-link text-white w-100 w-sm-auto px-2"
                    href="portfolio-list-v2.html"
                  >
                    View Case Studies
                    <i className="ai-arrow-right ms-2"></i>
                  </a>
                </div>
                <ul className="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
                  <li className="d-inline-flex align-items-center text-nowrap pt-1 me-4">
                    <i className="ai-check-alt text-white fs-xl me-2"></i>
                    make a great move with our services.
                  </li>
                  <li className="d-inline-flex align-items-center text-nowrap pt-1">
                    <i className="ai-check-alt text-white fs-xl me-2"></i>
                    Flexible work terms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="container pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5 mt-xxl-4 pb-lg-2 pb-xl-4 pb-xxl-5">
        <h2 className="h1 text-center pb-3 pb-lg-4">Our Services</h2>
        <div className="swiper" data-swiper-options='{
    "spaceBetween": 24,
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },
    "breakpoints": {
      "576": { "slidesPerView": 2 },
      "992": { "slidesPerView": 3 }
    }
  }'>
          <div className="swiper-wrapper">
            {/* Service 1 */}
            <div className="swiper-slide h-auto">
              <a className="card bg-secondary border-0 h-100 text-center text-decoration-none" href="#">
                <div className="card-body">
                  <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-warning" d="..."></path>
                    <path className="text-primary" d="..."></path>
                  </svg>
                  <h3>Web Development</h3>
                  <p className="card-text">High-quality web development services tailored to your business needs.</p>
                </div>
                <div className="card-footer border-0 px-0 pt-0 pb-4 mb-3">
                  <div className="btn btn-icon btn-outline-primary rounded-circle stretched-link">
                    <i className="ai-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

            {/* Service 2 */}
            <div className="swiper-slide h-auto">
              <a className="card bg-secondary border-0 h-100 text-center text-decoration-none" href="#">
                <div className="card-body">
                  <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-primary" d="..."></path>
                    <path className="text-warning" d="..."></path>
                  </svg>
                  <h3>Mobile App Development</h3>
                  <p className="card-text">Custom mobile applications to elevate your digital presence.</p>
                </div>
                <div className="card-footer border-0 px-0 pt-0 pb-4 mb-3">
                  <div className="btn btn-icon btn-outline-primary rounded-circle stretched-link">
                    <i className="ai-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

            {/* Service 3 */}
            <div className="swiper-slide h-auto">
              <a className="card bg-secondary border-0 h-100 text-center text-decoration-none" href="#">
                <div className="card-body">
                  <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-primary" d="..."></path>
                    <path className="text-warning" d="..."></path>
                  </svg>
                  <h3>UI/UX Design</h3>
                  <p className="card-text">Intuitive and user-centered design solutions htmlFor your applications.</p>
                </div>
                <div className="card-footer border-0 px-0 pt-0 pb-4 mb-3">
                  <div className="btn btn-icon btn-outline-primary rounded-circle stretched-link">
                    <i className="ai-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

            {/* Service 4 */}
            <div className="swiper-slide h-auto">
              <a className="card bg-secondary border-0 h-100 text-center text-decoration-none" href="#">
                <div className="card-body">
                  <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-primary" d="..."></path>
                    <path className="text-warning" d="..."></path>
                  </svg>
                  <h3>Digital Marketing</h3>
                  <p className="card-text">Boost your online presence with our effective marketing strategies.</p>
                </div>
                <div className="card-footer border-0 px-0 pt-0 pb-4 mb-3">
                  <div className="btn btn-icon btn-outline-primary rounded-circle stretched-link">
                    <i className="ai-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

            {/* Additional services */}
            <div className="swiper-slide h-auto">
              <a className="card bg-secondary border-0 h-100 text-center text-decoration-none" href="#">
                <div className="card-body">
                  <svg className="d-block mx-auto mb-4" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="text-primary" d="..."></path>
                  </svg>
                  <h3>Branding</h3>
                  <p className="card-text">Create a unique brand identity to stand out in the market.</p>
                </div>
                <div className="card-footer border-0 px-0 pt-0 pb-4 mb-3">
                  <div className="btn btn-icon btn-outline-primary rounded-circle stretched-link">
                    <i className="ai-arrow-right"></i>
                  </div>
                </div>
              </a>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!-- Portfolio --> */}
      <section className="container pt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <h2 className="h1 text-center">Recent case studies</h2>
        <p className="pb-4 mb-md-2 mb-lg-3 text-center">Below you&apos;ll find handpicked recent projects we are most proud of</p>

        {/* <!-- Item --> */}
        <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative" href="portfolio-single-v1.html">
              <div className="bg-info rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img className="d-block position-relative z-2 mx-auto" src="assets/img/portfolio/web/connector.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
              <img className="d-block d-dark-mode-none mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-dark.svg" alt="Champion" />
              <img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion" />
              <h2 className="h4">connector online booking system and management tool designed to help service providers</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">We are an online booking system and management tool designed to help service providers to control, run, grow and manage their business better while customers find & book their favorite services online no matter where they are or when they want to book. </p>
              <a className="btn btn-sm btn-outline-dark rounded-pill" href="portfolio-single-v1.html">Read the full story</a>
            </div>
          </div>
        </div>

        {/* <!-- Item --> */}
        <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative" href="portfolio-single-v1.html">
              <div className="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img className="d-block position-relative z-2 mx-auto" src="assets/img/portfolio/web/healthy.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
              <img className="d-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/foster-green.svg" alt="Foster" />
              <h2 className="h4">The Healthy Living Organization (HLO) </h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">The Healthy Living Organization (HLO) is a reputable non-profit organization dedicated to promoting health and well-being in communities.</p>
              <a className="btn btn-sm btn-outline-dark rounded-pill" href="portfolio-single-v1.html">Read the full story</a>
            </div>
          </div>
        </div>

        {/* <!-- Item --> */}
        <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative" href="portfolio-single-v1.html">
              <div className="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img className="d-block position-relative z-2 ms-auto" src="assets/img/portfolio/web/rncda.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
            </a>
          </div>
          <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
              <img className="d-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/boost.svg" alt="Boost" />
              <h2 className="h4 mb-lg-4">Landing page htmlFor a marketing agency Boost</h2>
              <ul className="list-unstyled pb-1 pb-lg-2 mb-3">
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                  Faucibus sit est dui id gravida
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                  Lectus in sem eu facilisis ornare
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                  Massa maecenas cras vivamus
                </li>
              </ul>
              <a className="btn btn-sm btn-outline-dark rounded-pill" href="portfolio-single-v1.html">Read the full story</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact form + Benefits --> */}
      <section className="bg-secondary pt-5 pb-4">
        <div className="container py-lg-2 py-xl-4 py-xxl-5">
          <div className="row mt-1 pt-sm-2 pt-md-3 pt-lg-4">

            {/* <!-- Contact Form --> */}
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up">
              <h2 className="h1">Why choose us?</h2>
              <p className="pb-1 pb-md-0 mb-4 mb-md-5">We offer the best solutions tailored to your needs with unmatched quality and professionalism.</p>
              <h3 className="mb-4">Send us your request!</h3>

              {/* <!-- Contact form --> */}
              <form className="needs-validation row g-4" noValidate>
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="name">Name</label>
                  <input className="form-control form-control-lg" type="text" placeholder="Your name" required id="name" />
                  <div className="invalid-feedback">Please enter your name!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="email">Email</label>
                  <input className="form-control form-control-lg" type="email" placeholder="Email address" required id="email" />
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="message">Message</label>
                  <textarea className="form-control form-control-lg" placeholder="Your message" rows="4" required id="message"></textarea>
                  <div className="invalid-feedback">Please write your message!</div>
                </div>
                <div className="col-lg-10">
                  <button className="btn btn-lg btn-dark rounded-pill mt-2" type="submit">Send request</button>
                </div>
              </form>
            </div>

            {/* <!-- Benefits --> */}
            <div className="col-lg-7 col-xl-6 offset-xl-1" data-aos="fade-up" data-aos-delay="300">
              <div className="row row-cols-1 row-cols-sm-2">

                {/* <!-- Card 1 --> */}
                <div className="col" data-aos="fade-up" data-aos-delay="100">
                  <div className="card border-0 mb-4">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="text-warning" d="M31.5412 14.6389C30.9843 23.6874 23.7303 30.927 14.6641 31.4828V35.9999H36.0671V14.6389H31.5412Z" fill="currentColor"></path>
                        <path className="text-primary" d="M13.5469 27.0373C21.0277 27.0373 27.0922 20.9848 27.0922 13.5186H13.5469V27.0373Z" fill="currentColor"></path>
                        <path className="text-warning" d="M26.3276 9.03734C24.475 3.77395 19.4522 0 13.5453 0C6.06443 0 0 6.0525 0 13.5187C0 19.4139 3.78139 24.4269 9.05514 26.2758V9.03734H26.3276Z" fill="currentColor"></path>
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px' }}>Work Across Time Zones</h3>
                      <p className="card-text fs-sm">Seamless communication, no matter where you or your clients are. We operate across all time zones.</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="col" data-aos="fade-up" data-aos-delay="200">
                  <div className="card border-0 bg-primary" data-bs-theme="dark">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7496 11.4756C25.3743 8.85089 25.3743 4.59539 22.7496 1.97068C20.1249 -0.654032 15.8694 -0.654033 13.2447 1.97068C10.6199 4.59539 10.6199 8.85089 13.2447 11.4756C15.8694 14.1003 20.1249 14.1003 22.7496 11.4756Z" fill="white"></path>
                        <path className="text-warning" d="M13.2173 26.3746C14.0903 24.3107 15.2282 22.395 16.6119 20.6516C12.48 16.1818 6.56698 13.3827 0 13.3827V36H11.2733C11.2733 32.6628 11.9274 29.4243 13.2173 26.3746Z" fill="currentColor"></path>
                        <path className="text-warning" d="M36.0001 36.0001V13.3828C23.5089 13.3828 13.3828 23.5089 13.3828 36.0001H36.0001Z" fill="currentColor"></path>
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px' }}>Flexible Work Terms</h3>
                      <p className="card-text fs-sm">We offer flexible work terms, adapting to your schedule htmlFor the best collaboration experience.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row row-cols-1 row-cols-sm-2">
                {/* <!-- Card 3 --> */}
                <div className="col" data-aos="fade-up" data-aos-delay="400">
                  <div className="card border-0 mb-4">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="text-warning" d="M31.5412 14.6389C30.9843 23.6874 23.7303 30.927 14.6641 31.4828V35.9999H36.0671V14.6389H31.5412Z" fill="currentColor"></path>
                        <path className="text-primary" d="M13.5469 27.0373C21.0277 27.0373 27.0922 20.9848 27.0922 13.5186H13.5469V27.0373Z" fill="currentColor"></path>
                        <path className="text-warning" d="M26.3276 9.03734C24.475 3.77395 19.4522 0 13.5453 0C6.06443 0 0 6.0525 0 13.5187C0 19.4139 3.78139 24.4269 9.05514 26.2758V9.03734H26.3276Z" fill="currentColor"></path>
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px' }}>Comprehensive Service</h3>
                      <p className="card-text fs-sm">A full spectrum of services to cater to all your needs in one place.</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="col" data-aos="fade-up" data-aos-delay="500">
                  <div className="card border-0 bg-primary" data-bs-theme="dark">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4844 22.4814H36.0031V36.0001H22.4844V22.4814Z" fill="white"></path>
                        <path className="text-warning" d="M8.96266 18C8.96266 13.0088 13.0088 8.96266 18 8.96266C22.9912 8.96266 27.0373 13.0088 27.0373 18H36C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36V27.0373C13.0088 27.0373 8.96266 22.9912 8.96266 18Z" fill="currentColor"></path>
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px' }}>Challenges? We Solve Them</h3>
                      <p className="card-text fs-sm">Nothing is too difficult htmlFor us. We rise to every challenge to bring you the best results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="bg-primary py-5" data-bs-theme="dark">
        <div className="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
          <div className="row pt-sm-3 pt-md-4">
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <h2 className="display-3">Ready to take your online presence to the next level?</h2>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
              <p className="text-body fs-xl pb-4 mb-2 mb-lg-3">At Homiez, we combine creativity, technology, and expertise to deliver outstanding solutions for your visual and digital needs.</p>
              <button className="btn btn-danger" type="button">Book a call</button>              
            </div>
          </div>
          <div className="d-none d-md-block text-center mt-n5">
            <svg className="text-danger ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webservice;
