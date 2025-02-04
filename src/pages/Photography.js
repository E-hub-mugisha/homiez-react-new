import React from 'react'

const Photography = () => {
  return (
    <div>
      <section className="container py-5 mt-5 mb-xl-3 mb-xxl-5">
        <div className="row pt-2">

          <div className="col-lg-6 d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
            <h1 className="display-1 text-uppercase fw-bold mt-auto mb-2">Creative <span className="fw-normal">solutions</span> studio<span className="d-none d-md-inline-block align-middle ms-4" style={{ width: '120px', height: '2px', backgroundColor: 'currentColor' }}></span></h1>
            <div className="d-flex align-items-center py-4 py-lg-5">
              <a className="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" href="#">Let&apos;s work together</a>
              <div className="flex-shrink-sm-0">
                <img className="d-dark-mode-none" src="assets/img/brands/clutch-rating-dark.svg" width="155" alt="Clutch" />
                <img className="d-none d-dark-mode-block" src="assets/img/brands/clutch-rating-light.svg" width="155" alt="Clutch" />
              </div>
            </div>
            <ul className="nav mt-auto mx-n2 pt-sm-3 pt-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link p-2" href="#">instagram</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link p-2" href="#">dribbble</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="#">behance</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="row row-cols-1 row-cols-sm-2 g-1">

              <div className="col">
                <a className="card-flip" href="#">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/01.jpg)' }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Strategy</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Strategy</h3>
                        <p className="text-body mb-3">Leo vitae sem eget eget at in vivamus placerat in sodales tristique a risusiis senectusic vitae sem eget eget at in vivamus placerat in sodales.</p>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col">
                <a className="card-flip" href="#">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/02.jpg)' }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Social</h3>
                        <ul className="text-body ps-4 mb-3">
                          <li className="mb-2">Social media posts</li>
                          <li className="mb-2">Content plan</li>
                          <li className="mb-2">Advertising launch</li>
                          <li className="mb-2">Photo and video content</li>
                          <li className="mb-1">Cases and portfolio</li>
                        </ul>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col order-sm-2">
                <a className="card-flip" href="#">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/04.jpg)' }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Web design</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Web design</h3>
                        <p className="text-body mb-3">Pharetra in morbi quis is massa maecenas arcu vulputate in pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col order-sm-1">
                <a className="card-flip" href="#">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/03.jpg)' }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Branding</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Branding</h3>
                        <ul className="text-body ps-4 mb-3">
                          <li className="mb-2">Identity design</li>
                          <li className="mb-2">Brand book creation</li>
                          <li className="mb-2">Colors and fonts</li>
                          <li className="mb-2">Banners and covers</li>
                          <li className="mb-1">Visual style</li>
                        </ul>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container py-md-4 py-lg-5 mb-xl-3 mb-xxl-5">
        <div className="row pt-sm-2">
          <div className="col-xl-10">
            <p className="fs-2 text-dark pb-md-2 mb-lg-5">From the first stages of developing a project plan idea, we pay special attention <span className="fw-semibold">to design solutions to existing problems,</span> create brands that become part of history, and create a digital skill that harnesses the power of <span className="fw-semibold">creativity and humanity.</span></p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-sm-4 col-lg-3 mb-3">
            <h3 className="display-1 mb-0 mb-sm-1">16</h3>
            <span className="fs-sm">Awards in various industries</span>
          </div>
          <div className="col-sm-4 col-lg-3 mb-3">
            <h3 className="display-1 mb-0 mb-sm-1">22</h3>
            <span className="fs-sm">Full time specialists</span>
          </div>
          <div className="col-sm-4 col-lg-3 mb-2 mb-sm-3">
            <h3 className="display-1 mb-0 mb-sm-1">205</h3>
            <span className="fs-sm">Happy clients all over the world</span>
          </div>
        </div>
      </section>


      <section className="container overflow-hidden pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div className="masonry-filterable">
          <div className="row pb-lg-4 mb-2 mb-sm-3">

            <div className="col-xxl-3 col-lg-4 text-center text-lg-start">
              <h1>Our Projects</h1>
              <p className="mb-4 mb-lg-0">We will put our industry expertise for creativity to work for your project</p>
            </div>

            <div className="col-xxl-9 col-lg-8 d-flex">
              <ul className="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto me-lg-0 pb-3" style={{ maxWidth: '456px' }}>
                <li className="nav-item mb-0">
                  <a className="nav-link border active" href="/contact" data-group="all">Work with us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="masonry-grid" data-columns="2">

            <article className="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["branding"]'>
              <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '500px' }}>
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/07.jpg" alt="Image" />
                  </div>
                </div>
                <div className="pt-4 mt-lg-2">
                  <h2 className="h4 mb-2">
                    <a className="stretched-link" href="portfolio-single-v2.html">Healthy Yellow</a>
                  </h2>
                  <div className="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Branding, Packaging</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["stationery"]'>
              <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '500px' }}>
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/08.jpg" alt="Image" />
                  </div>
                </div>
                <div className="pt-4 mt-lg-2">
                  <h2 className="h4 mb-2">
                    <a className="stretched-link" href="portfolio-single-v2.html">Sen Jonson</a>
                  </h2>
                  <div className="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Stationery design</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["branding"]'>
              <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '500px' }}>
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/07.jpg" alt="Image" />
                  </div>
                </div>
                <div className="pt-4 mt-lg-2">
                  <h2 className="h4 mb-2">
                    <a className="stretched-link" href="portfolio-single-v2.html">Healthy Yellow</a>
                  </h2>
                  <div className="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Branding, Packaging</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["stationery"]'>
              <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '500px' }}>
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/08.jpg" alt="Image" />
                  </div>
                </div>
                <div className="pt-4 mt-lg-2">
                  <h2 className="h4 mb-2">
                    <a className="stretched-link" href="portfolio-single-v2.html">Sen Jonson</a>
                  </h2>
                  <div className="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Stationery design</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center pb-sm-2 pb-md-4 mt-n1 mt-lg-n2">
            <a className="btn btn-lg btn-outline-dark rounded-0" href="#">Let&apos;s work together</a>
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
  )
}

export default Photography