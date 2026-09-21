import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DisclosureDesk() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">SERVICES</p>
            <h2 className="section-heading">Disclosure Desk</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              As part of our customizable à la carte services, we also manage the disclosure process. We have a dedicated 
              team, well-trained in compliance and fees, specifically handling disclosures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '40px' }}>
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            
            {/* Wholesale Loans */}
            <div className="service-card" style={{ minHeight: 'auto', padding: '50px' }}>
              <div className="service-card-accent" style={{ marginBottom: '20px' }}></div>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Wholesale Loans</h3>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--primary-navy)' }}>Loan Registration:</strong> The Disclosures Team initiates 
                the loan registration process for wholesale loans, ensuring accurate and timely entry into the system.
              </p>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--primary-navy)' }}>Fee Update:</strong> All associated fees are reviewed and 
                updated as necessary to reflect the most current and accurate information.
              </p>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--primary-navy)' }}>Disclosure Sending:</strong> Utilizing the Lender portal, 
                the team sends out disclosures to the borrower.
              </p>
            </div>
            
            {/* Correspondent Loans */}
            <div className="service-card" style={{ minHeight: 'auto', padding: '50px' }}>
              <div className="service-card-accent" style={{ marginBottom: '20px' }}></div>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Correspondent Loans</h3>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--primary-navy)' }}>Disclosures via LOS System:</strong> For correspondent loans, 
                the team seamlessly integrates with the Client's Loan Origination System to send out the Disclosures.
              </p>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Leveraging the LOS system, the Disclosures Team sends out necessary disclosures to the borrower. This method 
                ensures alignment with the Correspondent Client's specific processes and systems.
              </p>
            </div>
            
          </div>
          
          <div style={{ maxWidth: '900px', margin: '40px auto 0' }}>
            {/* Additional Service Feature */}
            <div className="service-card active-card" style={{ display: 'block', minHeight: 'auto', padding: '50px' }}>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--bg-white)' }}>
                Additional Service Feature: Free State Audit Package Preparation
              </h3>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'rgba(255,255,255,0.9)' }}>
                <strong>Post-Funding State Audit Package:</strong> After the loan has been funded, the service goes a step 
                further by preparing a state audit package at no additional cost.
              </p>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
                <strong>Thorough Documentation:</strong> The team compiles all necessary documentation in accordance with 
                state audit requirements, ensuring completeness and accuracy.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </>
  );
}
