import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Send,
  CheckCircle,
  Building,
  User,
  Briefcase,
  Mail,
  Phone,
  Layers,
  Users2,
  Settings,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    businessEmail: '',
    contactNumber: '',
    industry: '',
    numberOfEmployees: '',
    currentSystem: '',
    whatToImprove: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const industryOptions = [
    'Retail',
    'Distribution',
    'Manufacturing',
    'Garments',
    'Automotive',
    'Other Enterprise Sector'
  ];

  const employeeRanges = [
    '1 - 20 employees',
    '21 - 50 employees',
    '51 - 200 employees',
    '201 - 500 employees',
    '500+ employees'
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header-block',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.contact-main-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: 'power3.out' }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-page-view" ref={contactRef}>
      {/* ====================================================================
          CONTACT HEADER
          (PDF 1 Page 4)
          ==================================================================== */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="section-header-centered contact-header-block">
            <span className="section-tag">Contact Us</span>
            <h1 className="section-title">
              Let's Talk About Your Business
            </h1>
            <p className="contact-subtitle">
              Looking to Simplify Your Business Operations?
            </p>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="contact-lead-prose">
              Discover how XENedion can bring your business functions together into a single, unified operating system.
            </p>
            <p className="contact-sublead-prose">
              Schedule a personalized consultation and product demonstration tailored to your industry and operational requirements.
            </p>
          </div>

          {/* Form Card */}
          <div className="contact-card-wrapper">
            <div className="contact-main-card">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-bubble">
                    <CheckCircle size={48} className="success-check-icon" />
                  </div>
                  <h3 className="success-title">Enquiry Submitted Successfully</h3>
                  <p className="success-desc">
                    Thank you for reaching out. An enterprise implementation consultant will review your business operational profile and contact you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-pill-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        designation: '',
                        businessEmail: '',
                        contactNumber: '',
                        industry: '',
                        numberOfEmployees: '',
                        currentSystem: '',
                        whatToImprove: '',
                        message: ''
                      });
                    }}
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form-grid" onSubmit={handleSubmit}>
                  {/* Field 1: Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User size={18} className="field-icon" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 2: Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Building size={18} className="field-icon" />
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Enterprises Ltd"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 3: Designation */}
                  <div className="form-group">
                    <label htmlFor="designation" className="form-label">
                      Designation <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Briefcase size={18} className="field-icon" />
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Managing Director / Operations Head"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 4: Business Email */}
                  <div className="form-group">
                    <label htmlFor="businessEmail" className="form-label">
                      Business Email <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Mail size={18} className="field-icon" />
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="john.doe@company.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 5: Contact Number */}
                  <div className="form-group">
                    <label htmlFor="contactNumber" className="form-label">
                      Contact Number <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Phone size={18} className="field-icon" />
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 6: Industry */}
                  <div className="form-group">
                    <label htmlFor="industry" className="form-label">
                      Industry <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Layers size={18} className="field-icon" />
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select your industry</option>
                        {industryOptions.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 7: Number of Employees */}
                  <div className="form-group">
                    <label htmlFor="numberOfEmployees" className="form-label">
                      Number of Employees <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Users2 size={18} className="field-icon" />
                      <select
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        value={formData.numberOfEmployees}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="">Select workforce size</option>
                        {employeeRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 8: Current Business Management System */}
                  <div className="form-group">
                    <label htmlFor="currentSystem" className="form-label">
                      Current Business Management System
                    </label>
                    <div className="input-with-icon">
                      <Settings size={18} className="field-icon" />
                      <input
                        type="text"
                        id="currentSystem"
                        name="currentSystem"
                        value={formData.currentSystem}
                        onChange={handleChange}
                        placeholder="e.g. Spreadsheets, Legacy ERP, Standalone Apps"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Field 9: What Would You Like to Improve? */}
                  <div className="form-group form-group-full">
                    <label htmlFor="whatToImprove" className="form-label">
                      What Would You Like to Improve?
                    </label>
                    <input
                      type="text"
                      id="whatToImprove"
                      name="whatToImprove"
                      value={formData.whatToImprove}
                      onChange={handleChange}
                      placeholder="e.g. Cross-departmental coordination, inventory tracking, financial visibility"
                      className="form-input"
                    />
                  </div>

                  {/* Field 10: Your Message */}
                  <div className="form-group form-group-full">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <div className="textarea-with-icon">
                      <MessageSquare size={18} className="textarea-icon" />
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share any specific operational requirements, timeline, or questions you have..."
                        className="form-textarea"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-pill-primary btn-submit-large"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
