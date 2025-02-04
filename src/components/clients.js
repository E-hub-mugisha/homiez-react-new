import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation happens only once
            easing: 'ease-out-back',
        });

        axios.get("http://localhost:5000/clients")
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.log("Error fetching clients:", error);
            });
    }, []);

    return (
        <div>
            {/* Clients Section */}
            <section className="container">
                <div className="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5 mb-5">
                    <div className="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
                        <div className="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
                            <h2 className="h1 mb-4 text-white">
                                The clients <br className="d-none d-lg-inline" />
                                we work with
                            </h2>
                            <p className="pb-3 mb-3 mb-lg-4 text-white">
                                We are proud to collaborate with a diverse range of organizations that trust our expertise and services.
                                Our clients span various industries, from technology and healthcare to finance and education.
                            </p>
                            <a className="btn btn-primary d-none d-lg-inline-flex" href="#">
                                Let&apos;s work together
                            </a>
                        </div>
                        <div className="order-lg-1 w-100 mx-auto mx-lg-0" style={{ maxWidth: '558px' }}>
                            <div className="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4 clients-logo">
                                {clients.map((client, index) => (
                                    <div className="col" key={index}>
                                        <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-delay="300">
                                            {client.logo && (
                                                <img className="logo-img" src={client.logo} alt={client.name} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="d-lg-none text-center pt-4 mt-2 mt-md-3" data-aos="zoom-in" data-aos-delay="900">
                                <a className="btn btn-primary" href="#">
                                    Let&apos;s work together
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
