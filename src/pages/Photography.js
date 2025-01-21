import React from 'react'

const Photography = () => {
  return (
    <div>
      <section class="container py-5 mt-5 mb-xl-3 mb-xxl-5">
        <div class="row pt-2">

          <div class="col-lg-6 d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
            <h1 class="display-1 text-uppercase fw-bold mt-auto mb-2">Creative <span class="fw-normal">solutions</span> studio<span class="d-none d-md-inline-block align-middle ms-4" style={{ width: '120px', height: '2px', backgroundColor: 'currentColor' }}></span></h1>
            <div class="d-flex align-items-center py-4 py-lg-5">
              <a class="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" href="#">Let's work together</a>
              <div class="flex-shrink-sm-0">
                <img class="d-dark-mode-none" src="assets/img/brands/clutch-rating-dark.svg" width="155" alt="Clutch" />
                <img class="d-none d-dark-mode-block" src="assets/img/brands/clutch-rating-light.svg" width="155" alt="Clutch" />
              </div>
            </div>
            <ul class="nav mt-auto mx-n2 pt-sm-3 pt-lg-0">
              <li class="nav-item me-3">
                <a class="nav-link p-2" href="#">instagram</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link p-2" href="#">dribbble</a>
              </li>
              <li class="nav-item">
                <a class="nav-link p-2" href="#">behance</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-6">
            <div class="row row-cols-1 row-cols-sm-2 g-1">

              <div class="col">
                <a class="card-flip" href="#">
                  <div class="card-flip-inner">
                    <div class="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/01.jpg)' }}>
                      <div class="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 class="fs-lg fw-normal mb-0 mt-auto">Strategy</h2>
                      </div>
                    </div>
                    <div class="card-flip-back bg-secondary">
                      <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 class="h4">Strategy</h3>
                        <p class="text-body mb-3">Leo vitae sem eget eget at in vivamus placerat in sodales tristique a risusiis senectusic vitae sem eget eget at in vivamus placerat in sodales.</p>
                        <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i class="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col">
                <a class="card-flip" href="#">
                  <div class="card-flip-inner">
                    <div class="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/02.jpg)' }}>
                      <div class="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 class="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                      </div>
                    </div>
                    <div class="card-flip-back bg-secondary">
                      <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 class="h4">Social</h3>
                        <ul class="text-body ps-4 mb-3">
                          <li class="mb-2">Social media posts</li>
                          <li class="mb-2">Content plan</li>
                          <li class="mb-2">Advertising launch</li>
                          <li class="mb-2">Photo and video content</li>
                          <li class="mb-1">Cases and portfolio</li>
                        </ul>
                        <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i class="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col order-sm-2">
                <a class="card-flip" href="#">
                  <div class="card-flip-inner">
                    <div class="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/04.jpg)' }}>
                      <div class="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 class="fs-lg fw-normal mb-0 mt-auto">Web design</h2>
                      </div>
                    </div>
                    <div class="card-flip-back bg-secondary">
                      <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 class="h4">Web design</h3>
                        <p class="text-body mb-3">Pharetra in morbi quis is massa maecenas arcu vulputate in pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
                        <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i class="ai-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col order-sm-1">
                <a class="card-flip" href="#">
                  <div class="card-flip-inner">
                    <div class="card-flip-front" style={{ backgroundImage: 'url(assets/img/landing/creative-agency/services/03.jpg)' }}>
                      <div class="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 class="fs-lg fw-normal mb-0 mt-auto">Branding</h2>
                      </div>
                    </div>
                    <div class="card-flip-back bg-secondary">
                      <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 class="h4">Branding</h3>
                        <ul class="text-body ps-4 mb-3">
                          <li class="mb-2">Identity design</li>
                          <li class="mb-2">Brand book creation</li>
                          <li class="mb-2">Colors and fonts</li>
                          <li class="mb-2">Banners and covers</li>
                          <li class="mb-1">Visual style</li>
                        </ul>
                        <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i class="ai-arrow-right"></i>
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


      <section class="container py-md-4 py-lg-5 mb-xl-3 mb-xxl-5">
        <div class="row pt-sm-2">
          <div class="col-xl-10">
            <p class="fs-2 text-dark pb-md-2 mb-lg-5">From the first stages of developing a project plan idea, we pay special attention <span class="fw-semibold">to design solutions to existing problems,</span> create brands that become part of history, and create a digital skill that harnesses the power of <span class="fw-semibold">creativity and humanity.</span></p>
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-sm-4 col-lg-3 mb-3">
            <h3 class="display-1 mb-0 mb-sm-1">16</h3>
            <span class="fs-sm">Awards in various industries</span>
          </div>
          <div class="col-sm-4 col-lg-3 mb-3">
            <h3 class="display-1 mb-0 mb-sm-1">22</h3>
            <span class="fs-sm">Full time specialists</span>
          </div>
          <div class="col-sm-4 col-lg-3 mb-2 mb-sm-3">
            <h3 class="display-1 mb-0 mb-sm-1">205</h3>
            <span class="fs-sm">Happy clients all over the world</span>
          </div>
        </div>
      </section>


      <section class="container overflow-hidden pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div class="masonry-filterable">
          <div class="row pb-lg-4 mb-2 mb-sm-3">

            <div class="col-xxl-3 col-lg-4 text-center text-lg-start">
              <h1>Our Projects</h1>
              <p class="mb-4 mb-lg-0">We will put our industry expertise for creativity to work for your project</p>
            </div>

            <div class="col-xxl-9 col-lg-8 d-flex">
              <ul class="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto me-lg-0 pb-3" style={{ maxWidth: '456px' }}>
                <li class="nav-item mb-0">
                  <a class="nav-link border active" href="#" data-group="all">All</a>
                </li>
                <li class="nav-item mb-0">
                  <a class="nav-link border" href="#" data-group="branding">Branding</a>
                </li>
                <li class="nav-item mb-0">
                  <a class="nav-link border" href="#" data-group="stationery">Stationery</a>
                </li>
                <li class="nav-item mb-0">
                  <a class="nav-link border" href="#" data-group="web">Web</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="masonry-grid" data-columns="2">

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["branding"]'>
              <div class="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '512px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/07.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">Healthy Yellow</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Branding, Packaging</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["stationery"]'>
              <div class="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '704px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/08.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">Sen Jonson</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Stationery design</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["branding"]'>
              <div class="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '467px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/09.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">Gradient</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Branding, Packaging</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["stationery"]'>
              <div class="zoom-effect position-relative border-bottom ms-auto pb-3" style={{ maxWidth: '605px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/10.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">D.G.Vent</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Stationery design</span>
                    <span>2021</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["stationery"]'>
              <div class="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: '550px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/11.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">Doe design</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Branding, Stationery</span>
                    <span>2021</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" data-groups='["web"]'>
              <div class="zoom-effect position-relative border-bottom mx-auto pb-3" style={{ maxWidth: '470px' }}>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="assets/img/portfolio/grid/12.jpg" alt="Image" />
                  </div>
                </div>
                <div class="pt-4 mt-lg-2">
                  <h2 class="h4 mb-2">
                    <a class="stretched-link" href="portfolio-single-v2.html">The Studio</a>
                  </h2>
                  <div class="d-flex justify-content-between fs-lg text-body-secondary">
                    <span>Web design</span>
                    <span>2020</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="text-center pb-sm-2 pb-md-4 mt-n1 mt-lg-n2">
            <a class="btn btn-lg btn-outline-dark rounded-0" href="#">Let's work together</a>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Photography