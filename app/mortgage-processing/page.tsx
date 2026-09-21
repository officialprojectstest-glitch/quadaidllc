import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MortgageProcessing() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">SERVICES</p>
            <h2 className="section-heading">Mortgage Processing</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Our dedicated Mortgage Processing Team takes a comprehensive approach to ensure the 
              seamless handling of loans from registration to funding audit. This end-to-end service 
              encompasses every critical stage of the loan processing lifecycle, emphasizing precision, 
              efficiency, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Process Grid */}
      <section className="services-section section-padding" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            {/* Step 1 */}
            <div className="service-card active-card">
              <div className="service-number">01</div>
              <div className="service-card-accent" style={{ backgroundColor: 'var(--bg-white)' }}></div>
              <h3 className="service-title">Registration</h3>
              <p className="service-desc">
                Our process begins with registration, involving the import of xml data into the lenders portal. 
                This initial step includes a thorough verification of all information gathered from the borrower, 
                along with rate details provided by the loan officer. We communicate with the loan officer to review 
                the loan estimate, confirming that the fees discussed with the borrower matches with the loan estimate. 
                Once all details are validated, we will send the the initial disclosures to the borrower. Simultaneously, 
                our third-party team initiates the title order, and upon the signing of the 'intent to proceed,' 
                we proceed to order the appraisal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Document Verification</h3>
              <p className="service-desc">
                Thorough document verification is a key aspect of our service. Our team requests and reviews all necessary 
                documents, confirming compliance with regulatory requirements and lender guidelines. This helps prevent 
                delays and ensures a reliable foundation for the subsequent stages.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Submission</h3>
              <p className="service-desc">
                Our team reviews all documents, ensuring that the file is submitted for approval with minimal conditions. 
                Given that all our processors are trained in underwriting, they conduct a thorough review of all documents. 
                Any discrepancies identified are promptly communicated to the loan officer before the submission to underwriting.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Approval & Underwriting Support</h3>
              <p className="service-desc">
                Our team provides crucial support during the underwriting process, collaborating closely with underwriters 
                to address any additional documentation needs or queries. This collaborative approach ensures a thorough 
                evaluation of each loan application, contributing to faster decisions with minimal conditions.
              </p>
            </div>

            {/* Step 5 */}
            <div className="service-card">
              <div className="service-number">05</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Closing Coordination & Funding</h3>
              <p className="service-desc">
                As loans advance toward closure, our team takes charge of coordinating all closing activities. This involves 
                either sending out closing docs directly or collaborating with the lender's closer for the distribution of 
                closing docs. We proactively communicate with the borrower, loan officer, and title company regarding the 
                closing date and time. Additionally, we facilitate the necessary steps, such as requesting wires from lenders 
                when required, to ensure a timely and seamless closing and funding process.
              </p>
            </div>

            {/* Step 6 */}
            <div className="service-card">
              <div className="service-number">06</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Funding & Funding Audit</h3>
              <p className="service-desc">
                After closing, our team coordinates with the title company to ensure the loan is funded on time and requests 
                all closing documents for state audit purposes. Our QC team reviews the file in accordance with state 
                compliance regulations, preparing the file for state audit. We send the audit-ready package to the broker. 
                This package serves as a comprehensive set of documents for the state audit, if the auditor select the file for review.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Outro */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--primary-navy)', fontWeight: '500' }}>
              Throughout this journey, our Mortgage Processing Team is committed to maintaining open lines of communication, 
              providing regular updates, and offering proactive solutions to any challenges that may arise. By entrusting 
              your loan processing needs to us, you can focus on your core business activities, confident that our team is 
              dedicated to delivering a streamlined and reliable service from start to finish.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
