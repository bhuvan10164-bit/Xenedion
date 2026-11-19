import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  MessageSquare
} from 'lucide-react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

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
    // Simulate professional form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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

  const improvementGoals = [
    'Cross-departmental visibility and workflow connectivity',
    'Inventory accuracy and warehouse fulfillment control',
    'Procurement coordination and supplier lead-time management',
    'Eliminating repetitive data entry and manual spreadsheets',
    'Financial consolidation and real-time operational reporting',
    'General ERP modernization / New implementation'
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-banner',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.contact-split-container',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: 'power3.out' }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-page-view" ref={contactRef}>
      {/* --------------------------------------------------------------------
          HERO BANNER: Vibrant Cobalt/Blue Canvas (Matching Video 00:25)
          -------------------------------------------------------------------- */}
      <section className="contact-hero-banner">
        <div className="container contact-hero-container">
          <div className="contact-header-block">
            <span className="contact-tag-pill">CONTACT US</span>
            <h1 className="contact-hero-title">
              Let's Talk About Your Business.
            </h1>
            <p className="contact-hero-subtitle">
              Looking to Simplify Your Business Operations?
            </p>
            <div className="contact-hero-paragraphs">
              <p>
                Whether you are evaluating ERP software, planning to upgrade your existing systems or exploring opportunities to become a XENedion partner, we would be happy to hear from you.
              </p>
              <p className="contact-callout-text">
                Connect with our team to understand how XENedion can support your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          CONTACT ENQUIRY FORM SECTION
          -------------------------------------------------------------------- */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-split-container">
            {/* Left: Form Container */}
            <div className="contact-form-wrapper">
              <div className="form-heading-group">
                <span className="section-tag">Let's Talk To Us</span>
                <h2 className="form-sub-headline">Let us know how can we help you</h2>
              </div>

              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-box">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="success-title">Thank You for Reaching Out</h3>
                  <p className="success-desc">
                    Your enquiry has been received. A senior XENedion enterprise solution specialist will review your business requirements and connect with you shortly.
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
                <form onSubmit={handleSubmit} className="enterprise-contact-form" noValidate>
                  <div className="form-grid">
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        <User size={15} />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="form-input"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="form-group">
                      <label htmlFor="companyName" className="form-label">
                        <Building size={15} />
                        <span>Company Name *</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Solutions"
                        className="form-input"
                      />
                    </div>

                    {/* Designation */}
                    <div className="form-group">
                      <label htmlFor="designation" className="form-label">
                        <Briefcase size={15} />
                        <span>Designation *</span>
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Operations Director / Managing Director"
                        className="form-input"
                      />
                    </div>

                    {/* Business Email */}
                    <div className="form-group">
                      <label htmlFor="businessEmail" className="form-label">
                        <Mail size={15} />
                        <span>Business Email *</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        required
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="form-input"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="form-group">
                      <label htmlFor="contactNumber" className="form-label">
                        <Phone size={15} />
                        <span>Contact Number *</span>
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        required
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="form-input"
                      />
                    </div>

                    {/* Industry */}
                    <div className="form-group">
                      <label htmlFor="industry" className="form-label">
                        <Layers size={15} />
                        <span>Industry *</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select your industry sector</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Number of Employees */}
                    <div className="form-group">
                      <label htmlFor="numberOfEmployees" className="form-label">
                        <Users2 size={15} />
                        <span>Number of Employees *</span>
                      </label>
                      <select
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        required
                        value={formData.numberOfEmployees}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select organizational scale</option>
                        {employeeRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Current Business Management System */}
                    <div className="form-group">
                      <label htmlFor="currentSystem" className="form-label">
                        <Settings size={15} />
                        <span>Current Business Management System</span>
                      </label>
                      <input
                        type="text"
                        id="currentSystem"
                        name="currentSystem"
                        value={formData.currentSystem}
                        onChange={handleChange}
                        placeholder="e.g. Spreadsheets / Legacy Software / Disconnected Apps"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* What Would You Like to Improve? */}
                  <div className="form-group form-group-full">
                    <label htmlFor="whatToImprove" className="form-label">
                      <span>What Would You Like to Improve?</span>
                    </label>
                    <select
                      id="whatToImprove"
                      name="whatToImprove"
                      value={formData.whatToImprove}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select primary operational goal</option>
                      {improvementGoals.map((goal) => (
                        <option key={goal} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Your Message */}
                  <div className="form-group form-group-full">
                    <label htmlFor="message" className="form-label">
                      <MessageSquare size={15} />
                      <span>Your Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your operational challenges, timelines, or partner objectives..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-pill-primary form-submit-btn"
                    >
                      <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
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