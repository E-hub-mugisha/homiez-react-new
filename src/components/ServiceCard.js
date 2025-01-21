import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="path/to/your-image.jpg" className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
