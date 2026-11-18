import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Layers,
  Sparkles,
  BarChart3,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Truck,
  Factory,
  Scissors,
  Car,
  ChevronRight
} from 'lucide-react';
import './Home.css';

export default function Home({ onNavigate }) {
  const challengeConsequences = [
    'Disconnected systems and fragmented information.',
    'Repetitive data entry and manual processes.',
    'Limited visibility across departments.',
    'Delays in accessing critical business information.',
    'Inventory discrepancies and operational inefficiencies.',
    'Difficulty maintaining control as the business grows.'
  ];

  const xenBenefits = [
    'Connect business functions through integrated workflows.',
    'Improve coordination between departments.',
    'Reduce repetitive manual activities.',
    'Maintain better control over business processes.',
    'Access consolidated operational information.',
    'Make informed decisions with greater visibility.'
  ];

  const previewFunctions = [
    { title: 'CRM & Sales Management', desc: 'Build stronger customer relationships and manage your sales activities, opportunities, quotations and orders.' },
    { title: 'Order Management', desc: 'Manage the complete order process, from order creation through processing and fulfillment.' },
    { title: 'Procurement & Vendor Management', desc: 'Organize supplier relationships, purchasing activities, purchase orders and goods receipts.' },
    { title: 'Inventory Management', desc: 'Maintain visibility into stock positions, movements and inventory transactions.' },
    { title: 'Warehouse Management', desc: 'Bring greater structure and control to warehouse operations, stock handling and goods movement.' },
    { title: 'Finance & Accounts', desc: 'Connect financial transactions with business operations and improve financial visibility.' },
    { title: 'Human Resource Management', desc: 'Organize employee information and support structured human resource administration.' },
    { title: 'Logistics Management', desc: 'Coordinate logistics-related activities and improve operational communication.' },
    { title: 'Business Intelligence & Reporting', desc: 'Bring business information together to support monitoring, analysis and management decisions.' }
  ];

  const whyPoints = [
    { num: '01', title: 'Integrated Business Management', desc: 'Bring multiple business functions together rather than managing them through isolated applications.', icon: Layers },
    { num: '02', title: 'Greater Operational Control', desc: 'Establish structured processes, improve coordination and maintain better oversight of business activities.', icon: ShieldCheck },
    { num: '03', title: 'Business-Wide Visibility', desc: 'Access relevant information across departments to understand what is happening throughout your organization.', icon: BarChart3 },
    { num: '04', title: 'Improved Productivity', desc: 'Reduce repetitive work, streamline activities and help your teams focus on more valuable tasks.', icon: Zap },
    { num: '05', title: 'Better Decision-Making', desc: 'Make business decisions with a more connected view of operational information.', icon: TrendingUp },
    { num: '06', title: 'Built to Support Growth', desc: 'Create an integrated technology foundation that can support your organization as its requirements evolve.', icon: Cpu }
  ];

  const industriesList = [
    { name: 'Retail', icon: ShoppingBag, detail: 'Omnichannel sales, point-of-sale integration, and real-time inventory synchronization.' },
    { name: 'Distribution', icon: Truck, detail: 'Multi-location dispatch, warehouse replenishment, and optimized route fulfillment.' },
    { name: 'Manufacturing', icon: Factory, detail: 'Bill of materials, production scheduling, shop floor coordination, and quality control.' },
    { name: 'Garments', icon: Scissors, detail: 'Size/color matrices, style life cycles, textile procurement, and export packaging.' },
    { name: 'Automotive', icon: Car, detail: 'Serialized parts tracking, warranty records, assembly schedules, and dealership logistics.' }
  ];

  return (
    <div className="home-page-view">
      {/* 1. HERO SECTION */}
      <section className="home-hero-section">
        <div className="container">
          <div className="home-hero-grid">
            <div className="home-hero-text">
              <div className="home-hero-badge">
                <span className="badge-pulse-dot" />
                <span>Enterprise Resource Planning Platform</span>
              </div>

              <h1 className="home-hero-title">
                Your Business. Connected. Controlled. Informed.
              </h1>

              <div className="ribbon-gradient-bar" />

              <div className="home-hero-paragraphs">
                <p className="home-lead-text">
                  XENedion (XEN) is an integrated ERP platform designed to simplify business operations, connect processes and give you, the business owner or the business manager, complete visibility across your organization.
                </p>
                <p>
                  Managing a business shouldn't mean managing multiple applications, disconnected spreadsheets and endless manual processes.
                </p>
                <p>
                  XENedion brings your essential business functions together on one integrated platform, enabling your teams to work seamlessly, your processes to operate efficiently and your management to make informed decisions.
                </p>
              </div>

              <div className="home-hero-cta-group">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('solutions')}
                >
                  <span>Explore Solutions</span>
                </button>
              </div>
            </div>

            {/* Banner Image */}
            <div className="home-hero-banner-wrapper">
              <div className="banner-card-frame">
                <img
                  src="/assets/images/connected-operations.jpg"
                  alt="XENedion banner — Enterprise operational team collaborating on an integrated platform"
                  className="home-banner-img"
                  width="1200"
                  height="750"
                  loading="eager"
                />
                <div className="banner-gradient-overlay" />
                <div className="banner-floating-pill">
                  <span className="banner-pill-dot" />
                  <span>XENedion Integrated Business Architecture</span>
                </div>
              </div>
              <div className="banner-accent-ribbon" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS CHALLENGE */}
      <section className="home-section section-alt challenge-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">The Business Challenge</span>
            <h2 className="section-title">
              Your Business Has Evolved. Have Your Systems Kept Up?
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="challenge-lead-copy">
              As businesses expand, its operational complexity increases. Different departments adopt different applications, information gets scattered and business processes become increasingly difficult to coordinate.
            </p>
          </div>

          <div className="challenge-consequences-block">
            <h3 className="consequences-heading">The consequences are familiar:</h3>
            <div className="consequences-grid">
              {challengeConsequences.map((item, idx) => (
                <div key={idx} className="consequence-item">
                  <div className="consequence-icon-box">
                    <AlertCircle size={20} />
                  </div>
                  <p className="consequence-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="challenge-resolution-callout">
            <p className="resolution-statement">
              The real challenge isn't the number of applications you use. It's the lack of connection between them.
            </p>
            <p className="resolution-brand-accent">
              XEN brings your business together, seamlessly
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCING XENEDION */}
      <section className="home-section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-copy-column">
              <span className="section-tag">Introducing XENedion</span>
              <h2 className="section-title">
                One Business. One Integrated Platform.
              </h2>
              <div className="ribbon-gradient-bar" />
              
              <div className="intro-paragraphs">
                <p>
                  XENedion is an integrated Enterprise Resource Planning platform that connects the different functions of your business within a common business operating environment.
                </p>
                <p>
                  From managing customer relationships and sales orders to procurement, inventory, warehousing, finance and human resources, XEN helps bring your business processes together.
                </p>
                <p className="intro-highlight-text">
                  Instead of managing individual departments in isolation, you can manage your business as one connected organization.
                </p>
              </div>

              <div className="intro-cta-wrapper">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onNavigate('about')}
                >
                  <span>Discover XENedion</span>
                  <ArrowRight size={17} className="btn-icon" />
                </button>
              </div>
            </div>

            <div className="intro-benefits-column">
              <div className="benefits-card">
                <h3 className="benefits-card-title">With XEN, you can:</h3>
                <ul className="benefits-list">
                  {xenBenefits.map((benefit, i) => (
                    <li key={i} className="benefit-list-item">
                      <div className="benefit-icon-wrap">
                        <CheckCircle size={18} />
                      </div>
                      <span className="benefit-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ONE PLATFORM. MULTIPLE BUSINESS FUNCTIONS */}
      <section className="home-section section-alt functions-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h2 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h2>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="functions-lead-text">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          <div className="functions-editorial-grid">
            {previewFunctions.map((func, index) => (
              <div key={index} className="function-item-card">
                <div className="function-card-header">
                  <span className="function-badge-number">0{index + 1}</span>
                  <h3 className="function-card-title">{func.title}</h3>
                </div>
                <p className="function-card-desc">{func.desc}</p>
                <div className="function-card-footer">
                  <button
                    type="button"
                    className="function-learn-more"
                    onClick={() => onNavigate('solutions')}
                  >
                    <span>View capability</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="functions-cta-row">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('solutions')}
            >
              <span>Explore All Solutions</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY XENEDION? */}
      <section className="home-section why-home-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Why XENedion?</span>
            <h2 className="section-title">More Than Software.</h2>
            <p className="section-subtitle">
              A Better Way to Manage Your Business. It’s a businesses way of life.
            </p>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
          </div>

          <div className="why-home-grid">
            {whyPoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.num} className="why-home-card">
                  <div className="why-home-card-top">
                    <span className="why-home-num">{pt.num}</span>
                    <div className="why-home-icon-wrap">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="why-home-card-title">{pt.title}</h3>
                  <p className="why-home-card-desc">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DESIGNED FOR YOUR INDUSTRY */}
      <section className="home-section section-alt industry-home-section">
        <div className="container">
          <div className="industry-home-header">
            <span className="section-tag">Designed for Your Industry</span>
            <h2 className="section-title">
              Business Processes May Differ.<br />The Need for Integration Doesn't.
            </h2>
            <div className="ribbon-gradient-bar" />
            <p className="industry-home-lead">
              XENedion is designed to support businesses operating across different industries and business environments.
            </p>
          </div>

          <div className="industry-cards-grid">
            {industriesList.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="industry-home-card">
                  <div className="ind-icon-box">
                    <Icon size={26} />
                  </div>
                  <h3 className="ind-card-name">{ind.name}</h3>
                  <p className="ind-card-detail">{ind.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="industry-cta-row">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onNavigate('industries')}
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight size={17} className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. READY TO BRING YOUR BUSINESS TOGETHER? */}
      <section className="home-cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Ready to Bring Your Business Together?
              </h2>
              <p className="cta-banner-lead">
                Move beyond disconnected applications and fragmented processes. Discover how XENedion can help you manage your business with greater clarity, control and efficiency.
              </p>
              <div className="cta-banner-btn-wrapper">
                <button
                  type="button"
                  className="btn-primary btn-large-cta"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Personalized Product Demonstration</span>
                  <ArrowRight size={18} className="btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
