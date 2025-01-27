import React from 'react'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    const isSuccess = Math.random() > 0.5; // Randomly simulate success or error
    if (isSuccess) {
      toast.success("Your quote request has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong! Please try again.");
    }
  };
  return (
    <div>
      <section className="bg-secondary py-5">
        <div className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Get our Quote
              </li>
            </ol>
          </nav>
          <div className="container mt-5">
            <ToastContainer />
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="text-center mb-4">Get a Quote</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quote