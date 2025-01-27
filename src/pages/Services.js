import React, { useEffect } from 'react';
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Services = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      spaceBetween: 24,
      loop: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });
  }, []);
  return (
    <div>
      <section className="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">

        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">What we do</li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-lg-4 pb-3 mb-3">
            <h2 className="h1">What we do</h2>
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

      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5">
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="card border-0 h-100 bg-size-cover bg-position-center" style={{ backgroundImage: 'url(assets/img/about/photo.jpg)' }}>
              <div className="d-none d-sm-block d-md-none" style={{ height: '450px' }}></div>
              <div className="d-sm-none" style={{ height: '350px' }}></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">Benefits <br />of working with us</h2>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="text-body-secondary pt-1">01</div>
                <div className="ps-3">
                  <h3 className="h5">Creative Videography</h3>
                  <p className="mb-0">Capture your vision with our dynamic videography solutions tailored to your needs.</p>
                </div>
              </div>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="text-body-secondary pt-1">02</div>
                <div className="ps-3">
                  <h3 className="h5">Exceptional Photography</h3>
                  <p className="mb-0">Delivering high-quality images that bring your moments and ideas to life.</p>
                </div>
              </div>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="text-body-secondary pt-1">03</div>
                <div className="ps-3">
                  <h3 className="h5">Web Development & Hosting</h3>
                  <p className="mb-0">Modern, responsive websites and reliable hosting to support your online presence.</p>
                </div>
              </div>
              <div className="d-flex mb-2 mb-xl-3">
                <div className="text-body-secondary pt-1">04</div>
                <div className="ps-3">
                  <h3 className="h5">IT Support</h3>
                  <p className="mb-0">Dependable IT support to keep your systems running smoothly and securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-secondary py-sm-2 py-lg-3 py-xl-4 py-xxl-5">
        <div className="container py-5">
          <h2 className="h1 text-center pt-1 pt-sm-2 pt-lg-3 pb-3 pb-lg-4">Testimonials</h2>

          <div className="swiper pb-2 pb-sm-3 pb-lg-4" data-swiper-options='{
            "spaceBetween": 24,
            "loop": true,
            "autoHeight": true,
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

              <div className="swiper-slide">
                <div className="card border-0 mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/22.jpg" width="60" alt="Jane Cooper" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Jane Cooper</div>
                        <div className="fs-sm text-body-secondary">Medical Assistant</div>
                      </div>
                    </div>
                    <p className="card-text">Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.</p>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/25.jpg" width="60" alt="Cameron Williamson" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Cameron Williamson</div>
                        <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                      </div>
                    </div>
                    <p className="card-text">Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card border-0 mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/23.jpg" width="60" alt="Wade Warren" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Wade Warren</div>
                        <div className="fs-sm text-body-secondary">President of Sales</div>
                      </div>
                    </div>
                    <p className="card-text">Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.</p>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/26.jpg" width="60" alt="Leslie Alexander" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Leslie Alexander</div>
                        <div className="fs-sm text-body-secondary">CEO, Divi</div>
                      </div>
                    </div>
                    <p className="card-text">Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card border-0 mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3"><img className="rounded-circle" src="assets/img/avatar/24.jpg" width="60" alt="Esther Howard" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Esther Howard</div>
                        <div className="fs-sm text-body-secondary">CEO, Slack</div>
                      </div>
                    </div>
                    <p className="card-text">Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.</p>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/27.jpg" width="60" alt="Brooklyn Simmons" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Brooklyn Simmons</div>
                        <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                      </div>
                    </div>
                    <p className="card-text">In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="card border-0 mb-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/28.jpg" width="60" alt="Fannie Summers" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Fannie Summers</div>
                        <div className="fs-sm text-body-secondary">VP of Sales</div>
                      </div>
                    </div>
                    <p className="card-text">In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.</p>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img className="rounded-circle" src="assets/img/avatar/29.jpg" width="60" alt="Robert Fox" />
                      <div className="ps-3">
                        <div className="h6 mb-1">Robert Fox</div>
                        <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                      </div>
                    </div>
                    <p className="card-text">At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4"></div>
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

export default Services;
