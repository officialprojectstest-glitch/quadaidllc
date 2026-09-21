import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">TRANSPARENT FEES</p>
            <h2 className="section-heading">Our Pricing</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              We take pride in delivering a superior level of satisfaction to borrowers, mortgage brokers, 
              lenders, title companies, and all parties involved in loan transactions. Our commitment to 
              excellence is not only reflected in the quality of our services but also in the transparency 
              of our fee structure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            <div className="service-card" style={{ minHeight: 'auto', padding: '50px' }}>
              <div className="service-card-accent" style={{ marginBottom: '20px' }}></div>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Transparent Fee Structure</h3>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Our fees are structured in accordance with state laws, and they are paid by the borrower 
                in section B of Loan Estimate and Closing Disclosure.
              </p>
            </div>

            <div className="service-card" style={{ minHeight: 'auto', padding: '50px' }}>
              <div className="service-card-accent" style={{ marginBottom: '20px' }}></div>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Efficiency & Same-Day Handling</h3>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                One of our key strengths lies in our efficiency. We understand the time-sensitive nature of loans, 
                and as such, we have implemented a streamlined system to handle all tasks on the same day. 
                This rapid and responsive approach is a testament to our commitment to delivering a seamless 
                experience for our clients.
              </p>
            </div>

            <div className="service-card active-card" style={{ minHeight: 'auto', padding: '50px' }}>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--bg-white)' }}>
                Remarkable Turnaround Time
              </h3>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
                Furthermore, we take pride in our remarkable turnaround time. On average, our submissions to the 
                Clear to Close (CTC) stage take <strong>14 days or less</strong>. This swift processing timeline is a result of 
                our dedicated team's expertise, attention to detail, and efficient workflow. We recognize that 
                expeditious processing is crucial in the mortgage industry, and our ability to consistently meet 
                or exceed this 14-day timeframe underscores our commitment to timely and reliable service delivery.
              </p>
            </div>

            <div className="service-card" style={{ minHeight: 'auto', padding: '50px', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', fontStyle: 'italic', fontWeight: '500', color: 'var(--primary-navy)' }}>
                "In summary, our focus on client satisfaction, transparent fee structures, same-day task handling, 
                and a rapid average submission-to-CTC timeline collectively demonstrate our dedication to providing 
                a high-quality, efficient, and client-centric mortgage processing service."
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
