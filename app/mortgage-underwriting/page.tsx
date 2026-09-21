import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MortgageUnderwriting() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">SERVICES</p>
            <h2 className="section-heading">Mortgage Underwriting</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              We offer mortgage underwriting support for Correspondent Clients. Mortgage underwriting is a critical 
              step in the loan approval process where a lender assesses a borrower's eligibility, creditworthiness, 
              and the risk associated with a mortgage application. Here's an elaborate overview of the steps involved 
              in our mortgage underwriting.
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
              <h3 className="service-title">Loan Application & Initial Review</h3>
              <p className="service-desc">
                <strong>Receipt of Application:</strong> The process begins with the receipt of a complete mortgage loan 
                application from the borrower. This application typically includes details about the borrower's financial 
                history, income, assets, liabilities, and property information.<br /><br />
                <strong>Initial Screening:</strong> Our Underwriters conduct an initial screening to ensure that the 
                application is complete and meets basic eligibility criteria. This may involve checking for essential 
                documents, verifying income sources, and confirming the accuracy of the information provided.
              </p>
            </div>

            {/* Step 2 */}
            <div className="service-card">
              <div className="service-number">02</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Document Verification</h3>
              <p className="service-desc">
                <strong>Gathering Documentation:</strong> The underwriter with Processing Team's support collects and 
                reviews documentation provided by the borrower, such as pay stubs, tax returns, bank statements, employment 
                verification, and property appraisals.<br /><br />
                <strong>Verification of Information:</strong> The underwriter verifies the accuracy of the information 
                provided by the borrower. This includes confirming employment details, income sources, outstanding debts, 
                and other financial information.
              </p>
            </div>

            {/* Step 3 */}
            <div className="service-card">
              <div className="service-number">03</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Credit Check</h3>
              <p className="service-desc">
                <strong>Credit Report Review:</strong> The underwriter obtains the borrower's credit report and assesses 
                their credit history. This includes examining credit scores, outstanding debts, payment history, and any 
                derogatory marks.<br /><br />
                <strong>Credit Risk Evaluation:</strong> The underwriter evaluates the borrower's credit risk based on the 
                credit report and considers how it may impact the loan terms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="service-card">
              <div className="service-number">04</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Risk Assessment</h3>
              <p className="service-desc">
                <strong>Analysis of Risk Factors:</strong> The underwriter assesses various risk factors, including the 
                borrower's debt-to-income ratio, loan-to-value ratio, employment stability, and overall financial health.<br /><br />
                <strong>Underwriting Guidelines:</strong> The underwriter applies the Investor's underwriting guidelines 
                and policies to determine if the loan meets acceptable risk levels.
              </p>
            </div>

            {/* Step 5 */}
            <div className="service-card">
              <div className="service-number">05</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Decision Making</h3>
              <p className="service-desc">
                <strong>Conditional Approval or Denial:</strong> Based on the comprehensive analysis, the underwriter makes 
                a decision. The loan may be conditionally approved with specific requirements, or denied.<br /><br />
                <strong>Conditional Approval Conditions:</strong> If the loan receives conditional approval, the borrower 
                must satisfy certain conditions before final approval and closing. These conditions could involve providing 
                additional documentation or addressing specific issues.
              </p>
            </div>

            {/* Step 6 */}
            <div className="service-card">
              <div className="service-number">06</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Final Approval & Closing</h3>
              <p className="service-desc">
                <strong>Satisfaction of Conditions:</strong> The borrower fulfills any outstanding conditions outlined 
                during the conditional approval stage with the help of Processing.<br /><br />
                <strong>Final Approval:</strong> Once all conditions are met, the loan receives final approval, and the 
                underwriter issues a clear-to-close, indicating that the loan is ready for closing.<br /><br />
                <strong>Closing Process:</strong> The closing process involves finalizing the loan documents, signing 
                the mortgage note, and completing any remaining paperwork. The borrower receives the funds, and the 
                property officially changes hands.
              </p>
            </div>

            {/* Step 7 */}
            <div className="service-card">
              <div className="service-number">07</div>
              <div className="service-card-accent"></div>
              <h3 className="service-title">Quality Control & Post-Closing</h3>
              <p className="service-desc">
                <strong>Quality Control Checks:</strong> Underwriting QC will conduct quality control reviews to ensure 
                underwriting accuracy and adherence to internal policies.<br /><br />
                <strong>Post-Closing Review:</strong> After closing, Underwriting QC will perform a post-closing review 
                to confirm that all documents are accurate and complete.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
