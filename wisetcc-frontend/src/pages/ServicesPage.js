import React from 'react';

const ServicesPage = () => {
  const services = [
    { title: 'Service A', description: 'Description for Service A' },
    { title: 'Service B', description: 'Description for Service B' },
    { title: 'Service C', description: 'Description for Service C' },
    { title: 'Service D', description: 'Description for Service D' },
    { title: 'Service E', description: 'Description for Service E' },
    { title: 'Service F', description: 'Description for Service F' },
  ];

  return (
    <div className="container">
      <div className="headertext"><h1>Services Provided</h1></div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;