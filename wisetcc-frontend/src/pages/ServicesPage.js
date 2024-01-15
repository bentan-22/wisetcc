import React from 'react';
import '../App.css';
import '../css/Services.css';

const ServicesPage = () => {
  const services = [
    { title: "CONSULTATION", image: "services_consultation.jpg" },
    { title: "TEMPLE VISITS", image: "services_temple_visits.jpeg" },
    { title: "EVENTS", image: "services_events.jpeg" },
  ];

  return (
    <div>
      <div className="servicespage-bg-img">
        <h1 className="headertext">SERVICES</h1>
      </div>
      <h1 className="headertext-no-shadow">SERVICES</h1>
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4 card services-card">
              <img className="card-img-top" src={`../src/assets/${service.image}`} alt="" style={{ display: 'none' }} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;