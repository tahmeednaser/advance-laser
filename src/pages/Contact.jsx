function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p className="page-intro">
        Get in touch with Advance Laser & Fabrication to discuss your project,
        request a quote, or ask questions about our capabilities. Our team is
        ready to support your fabrication needs with reliable service and
        expert guidance.
      </p>

      <div className="page-card contact-card">
        <img
          src="map.png"
          alt="Advance Laser & Fabrication facility"
          className="contact-image"
        />

        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            <strong>Email:</strong> infotoalfi@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> (416) 274-8400
          </p>

          <p>
            <strong>Address: </strong>
             2380 Speers Road, Oakville, L6L 5M2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
