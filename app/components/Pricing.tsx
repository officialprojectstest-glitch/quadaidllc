import Link from "next/link";

export default function Pricing() {
  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="container pricing-container">
        <div className="pricing-left">
          <p className="section-eyebrow">PRICING</p>
          <h2 className="section-heading">
            Our Pricing and Turntimes
            <br />
            <span className="pricing-highlight">14 days or less</span>
            <br />
            from submission to CTC
          </h2>
        </div>
        
        <div className="vertical-divider"></div>
        
        <div className="pricing-right">
          <p className="section-paragraph">
            We deliver a high level of satisfaction to borrowers, mortgage brokers,
            lenders, title companies, and all parties involved in loan
            transactions. Our fee is paid by the borrower in section B of the Loan
            Estimate and Closing Disclosure, as permitted by state law. Quadaid
            averages 14 days or less submission to CTC.
          </p>
          <div className="btn-wrapper">
            <Link href="/pricing" className="btn-primary">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
