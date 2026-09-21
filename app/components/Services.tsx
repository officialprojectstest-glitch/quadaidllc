export default function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="services-header">
          <p className="section-eyebrow">SERVICES</p>
          <h2 className="section-heading">Services That We Offer</h2>
        </div>

        <div className="services-grid">
          {/* Card 1 - Active/Dark */}
          <div className="service-card active-card">
            <div className="service-number">01</div>
            <div className="service-card-accent"></div>
            <h3 className="service-title">Mortgage Processing in Texas and Colorado</h3>
            <p className="service-desc">
              Our dedicated Mortgage Processing Team takes a comprehensive
              approach to ensure the seamless handling of loans from registration
              to funding audit.
            </p>
            <a href="/mortgage-processing" className="service-link">
              Read More <span>→</span>
            </a>
          </div>

          {/* Card 2 
          <div className="service-card">
            <div className="service-number">02</div>
            <div className="service-card-accent"></div>
            <h3 className="service-title">Mortgage Underwriting</h3>
            <p className="service-desc">
              Mortgage underwriting is a critical step in the loan approval
              process where a lender assesses a borrower&apos;s eligibility.
            </p>
            <a href="/mortgage-underwriting" className="service-link">
              Read More <span>→</span>
            </a>
          </div>
          */}

          {/* Card 3
          <div className="service-card">
            <div className="service-number">03</div>
            <div className="service-card-accent"></div>
            <h3 className="service-title">Third party Desk</h3>
            <p className="service-desc">
              At Quadaid LLC, we pride ourselves on offering customizable a la
              carte services tailored to meet the unique needs of our clients.
            </p>
            <a href="/third-party-desk" className="service-link">
              Read More <span>→</span>
            </a>
          </div>
 */}
          {/* Card 4 
          <div className="service-card">
            <div className="service-number">04</div>
            <div className="service-card-accent"></div>
            <h3 className="service-title">Disclosure Desk</h3>
            <p className="service-desc">
              We also manage the disclosure process with a team well-trained in
              compliance and fees.
            </p>
            <a href="/disclosure-desk" className="service-link">
              Read More <span>→</span>
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
