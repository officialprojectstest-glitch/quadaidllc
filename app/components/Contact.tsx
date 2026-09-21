export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-banner">
          <div className="contact-left">
            <p className="section-eyebrow">WHO NEEDS HELP?</p>
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-subtitle">Get in touch with our support team!</p>
          </div>
          
          <div className="vertical-divider" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          
          <div className="contact-right">
            <p className="contact-paragraph">
              If you have questions about how to set up, reach out to Quadaid&apos;s
              onboarding team. Contact us today, and let&apos;s start a conversation
              that can make a difference.
            </p>
            <a href="#contact" className="btn-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
