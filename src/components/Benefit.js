import React from 'react'

const Benefit = () => {
  return (
    <div>
      <section className="bg-secondary pt-5 pb-4 mt-5 mb-5">
        <div className="container py-lg-2 py-xl-4 py-xxl-5">
          <div className="row mt-1 pt-sm-2 pt-md-3 pt-lg-4">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="h1">Why Choose Us?</h2>
              <p className="pb-1 pb-md-0 mb-4 mb-md-5">Experience a seamless blend of creativity, technology, and reliability with our comprehensive services.</p>
              <h3 className="mb-4">Get in Touch!</h3>

              <form className="needs-validation row g-4" noValidate="">
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="name">Name</label>
                  <input className="form-control form-control-lg" type="text" placeholder="Your name" required="" id="name" />
                  <div className="invalid-feedback">Please enter your name!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="email">Email</label>
                  <input className="form-control form-control-lg" type="email" placeholder="Email address" required="" id="email" />
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" htmlFor="message">Message</label>
                  <textarea className="form-control form-control-lg" placeholder="Your message" rows="4" required="" id="message"></textarea>
                  <div className="invalid-feedback">Please write your message!</div>
                </div>
                <div className="col-lg-10">
                  <button className="btn btn-lg btn-dark rounded-pill mt-2" type="submit">Send request</button>
                </div>
              </form>
            </div>

            <div className="col-lg-7 col-xl-6 offset-xl-1">
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col">

                  <div className="card border-0 mb-4">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#F8B400" />
                        <path d="M10 18L18 10L26 18L18 26L10 18Z" fill="#fff" />
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px'}}>Creative Videography</h3>
                      <p className="card-text fs-sm">Capture your vision with our dynamic videography solutions tailored to your needs.</p>
                    </div>
                  </div>

                  <div className="card border-0 bg-primary text-light" data-bs-theme="dark">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#1E90FF" />
                        <path d="M12 12H24V24H12V12Z" fill="#fff" />
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px'}}>Exceptional Photography</h3>
                      <p className="card-text fs-sm">Delivering high-quality images that bring your moments and ideas to life.</p>
                    </div>
                  </div>

                </div>
                <div className="col d-flex flex-column pt-4 mt-sm-3">

                  <div className="card border-0 order-sm-2 mb-4 mb-sm-0">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#34C759" />
                        <path d="M12 18H24V24H12V18Z" fill="#fff" />
                        <path d="M12 12H24V15H12V12Z" fill="#fff" />
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px'}}>Web Development & Hosting</h3>
                      <p className="card-text fs-sm">Modern, responsive websites and reliable hosting to support your online presence.</p>
                    </div>
                  </div>

                  <div className="card border-0 bg-primary order-sm-1 mb-sm-4 text-light" data-bs-theme="dark">
                    <div className="card-body">
                      <svg className="d-block mb-3" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#FF3B30" />
                        <path d="M18 12L12 24H24L18 12Z" fill="#fff" />
                      </svg>
                      <h3 className="h4" style={{ maxWidth: '180px'}}>IT Support</h3>
                      <p className="card-text fs-sm">Dependable IT support to keep your systems running smoothly and securely.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Benefit