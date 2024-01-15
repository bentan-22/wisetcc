// ... (import statements)

const ServicesPage = () => {
  const services = [
    { title: "Consultation" },
    { title: "Temple Visits" },
    { title: "Events" },
  ];

  return (
    <div>
      <div className="servicespage-bg-img">
        <h1 className="headertext">Services</h1>
      </div>
      <h1 className="headertext-no-shadow">Services</h1>
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className={`col-md-4 mb-4 card card${index + 1}`}>
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