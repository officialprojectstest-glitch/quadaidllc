import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">TERMS AND CONDITIONS</p>
            <h2 className="section-heading">Legal Disclaimer</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              We hereby authorize you to view and print information on this website subject to it 
              being used for informational and non-commercial purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="service-card" style={{ minHeight: 'auto', padding: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  The information contained in this website is believed to be reliable, but we do not warrant 
                  its completeness, timeliness or accuracy. The information on this website is not intended as 
                  an offer or solicitation for any mortgage product or any financial instrument. The information 
                  and materials contained in this website - and the terms and conditions of the access to and 
                  use of such information and materials - are subject to change without notice. Products and 
                  services described may differ among geographic locations, offices and as a result of individual 
                  conditions. Not all products and services are offered at all locations. In no event will we be 
                  liable for any loss or damage including without limitation, indirect or consequential loss or 
                  damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, 
                  or in connection with, the use of this website.
                </p>

                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  It is our intention that data provided on a subject is of a general nature. Our website does 
                  not represent an exhaustive treatment of subjects nor is the information intended to constitute 
                  accounting, tax, legal, consulting or other professional advice.
                </p>

                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '500', color: 'var(--primary-navy)' }}>
                  Prior to making any decision or taking any action we kindly request you to contact your tax 
                  or legal advisors.
                </p>

                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Please use this document and information at your own risk. The content of this site is 
                  copyrighted and therefore any unauthorized use of any materials on this website may violate 
                  copyright, trademark, and other laws.
                </p>

                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Materials on this website may not be modified, reproduced, or publicly displayed, distributed 
                  or performed for any public or commercial purposes prior to our approval.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
