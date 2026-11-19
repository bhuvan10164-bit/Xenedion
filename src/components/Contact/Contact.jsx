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
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight
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

  const locationCards = [
    {
      city: 'Paris, France',
      address: '12/A, New Parklin Tower, Commercial District',
      email: 'info@xenedion.com',
      phone: '+33 (0) 1 42 68 55 00',
      image: '/assets/images/connected-operations.jpg'
    },
    {
      city: 'New York, US',
      address: 'Into Tower, 5th Avenue, NYC 10018',
      email: 'contact@xenedion.com',
      phone: '+1 (212) 555-0199',
      image: '/assets/images/modern-manufacturing.jpg'
    },
    {
      city: 'Berlin, Germany',
      address: 'Gorik Street Hall, Mitte Tech District',
      email: 'enterprise@xenedion.com',
      phone: '+49 30 2095 8800',
      image: '/assets/images/inventory-fulfillment.jpg'
    }
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
        '.contact-location-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
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
          3-COLUMN LOCATION CARDS (Matching Video 00:26 - 00:27)
          -------------------------------------------------------------------- */}
      <section className="contact-locations-strip">
        <div className="container">
          <div className="contact-locations-grid">
            {locationCards.map((loc, idx) => (
              <div key={idx} className="contact-location-card">
                <div className="location-image-frame">
                  <img src={loc.image} alt={loc.city} className="location-img" />
                </div>
                <div className="location-card-content">
                  <h3 className="location-city-name">{loc.city}</h3>
                  <p className="location-meta-row location-email">
                    <Mail size={14} />
                    <span>{loc.email}</span>
                  </p>
                  <p className="location-meta-row location-phone">
                    <Phone size={14} />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="location-meta-row location-address">
                    <MapPin size={14} />
                    <span>{loc.address}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          SPLIT FORM & INTERACTIVE MAP SECTION (Matching Video 00:28 - 00:29)
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

            {/* Right: Interactive Location Map Card (Matching Video 00:28 - 00:29) */}
            <div className="contact-map-wrapper">
              <div className="map-card-container">
                <div className="map-card-top-bar">
                  <div className="map-indicator-dot" />
                  <span className="map-top-title">Global Enterprise Hub — Manhattan, NYC</span>
                </div>
                <div className="map-frame-box">
                  <iframe
                    title="XENedion Enterprise Center"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="map-card-info-footer">
                  <div className="map-info-item">
                    <Clock size={16} className="map-footer-icon" />
                    <span>Mon - Fri: 8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="map-info-item">
                    <CheckCircle size={16} className="map-footer-icon text-cyan" />
                    <span>Live Consultations Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}