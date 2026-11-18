import React, { useState } from 'react';
import {
  Users,
  ClipboardList,
  Truck,
  Boxes,
  Warehouse,
  Coins,
  UserCheck,
  Navigation,
  BarChart4,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './Solutions.css';

export default function Solutions({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('crm');

  const solutionsData = [
    {
      id: 'crm',
      title: 'CRM & Sales Management',
      tagline: 'Build stronger customer relationships and manage your sales activities, opportunities, quotations and orders.',
      icon: Users,
      image: '/assets/images/crm-sales-analytics.jpg',
      keyCapabilities: [
        'End-to-end sales pipeline tracking and opportunity conversion.',
        'Instant quotation creation with pricing tier rules.',
        'Unified customer history, communication logs, and order records.',
        'Real-time sales performance metrics and revenue forecasts.'
      ]
    },
    {
      id: 'order',
      title: 'Order Management',
      tagline: 'Manage the complete order process, from order creation through processing and fulfillment.',
      icon: ClipboardList,
      image: '/assets/images/connected-operations.jpg',
      keyCapabilities: [
        'Centralized multichannel order capture and automatic verification.',
        'Real-time order status tracking from checkout to dispatch.',
        'Automated order routing, fulfillment allocation, and backorder handling.',
        'Seamless integration with customer accounts and invoicing.'
      ]
    },
    {
      id: 'procurement',
      title: 'Procurement & Vendor Management',
      tagline: 'Organize supplier relationships, purchasing activities, purchase orders and goods receipts.',
      icon: Truck,
      image: '/assets/images/procurement-coordination.jpg',
      keyCapabilities: [
        'Supplier lifecycle management and vendor rating audits.',
        'Purchase requisition workflows with automated approval hierarchies.',
        'Purchase order generation linked to real-time inventory demand.',
        'Three-way matching between POs, goods receipts, and vendor invoices.'
      ]
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      tagline: 'Maintain visibility into stock positions, movements and inventory transactions.',
      icon: Boxes,
      image: '/assets/images/inventory-fulfillment.jpg',
      keyCapabilities: [
        'Multi-location real-time stock levels and automated reorder points.',
        'Batch, lot, and serial number tracking with expiration alerts.',
        'Internal stock transfers, adjustments, and reconciliation workflows.',
        'Accurate inventory valuation (FIFO, Weighted Average, Standard Cost).'
      ]
    },
    {
      id: 'warehouse',
      title: 'Warehouse Management',
      tagline: 'Bring greater structure and control to warehouse operations, stock handling and goods movement.',
      icon: Warehouse,
      image: '/assets/images/inventory-fulfillment.jpg',
      keyCapabilities: [
        'Zone, aisle, and bin management for optimized pick-and-pack paths.',
        'Barcode scanning integration for inbound receiving and outbound dispatch.',
        'Cross-docking and wave picking workflows.',
        'Physical cycle counting and automated inventory variance logging.'
      ]
    },
    {
      id: 'finance',
      title: 'Finance & Accounts',
      tagline: 'Connect financial transactions with business operations and improve financial visibility.',
      icon: Coins,
      image: '/assets/images/crm-sales-analytics.jpg',
      keyCapabilities: [
        'Automated general ledger postings from operational transactions.',
        'Accounts receivable, automated invoicing, and credit control.',
        'Accounts payable, vendor disbursement, and bank reconciliation.',
        'Comprehensive financial statements (P&L, Balance Sheet, Cash Flow).'
      ]
    },
    {
      id: 'hr',
      title: 'Human Resource Management',
      tagline: 'Organize employee information and support structured human resource administration.',
      icon: UserCheck,
      image: '/assets/images/connected-operations.jpg',
      keyCapabilities: [
        'Centralized digital employee profiles and departmental directory.',
        'Attendance tracking, leave management, and holiday schedules.',
        'Structured payroll calculations integrated with accounting ledger.',
        'Role-based access permissions and company policy records.'
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics Management',
      tagline: 'Coordinate logistics-related activities and improve operational communication.',
      icon: Navigation,
      image: '/assets/images/inventory-fulfillment.jpg',
      keyCapabilities: [
        'Outbound shipping manifest generation and carrier coordination.',
        'Vehicle dispatch planning, delivery route tracking, and proof of delivery.',
        'Freight cost calculation and shipping document generation.',
        'Real-time communication across distribution centers and transport teams.'
      ]
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Reporting',
      tagline: 'Bring business information together to support monitoring, analysis and management decisions.',
      icon: BarChart4,
      image: '/assets/images/crm-sales-analytics.jpg',
      keyCapabilities: [
        'Executive visual dashboards uniting operations, sales, and finances.',
        'Drill-down reporting from high-level KPIs to underlying line transactions.',
        'Custom report builder with scheduled automated export to leadership.',
        'Cross-functional trend detection to identify cost drivers and bottlenecks.'
      ]
    }
  ];

  const currentSolution = solutionsData.find((s) => s.id === activeTab) || solutionsData[0];

  return (
    <div className="solutions-page-view">
      {/* 1. Header Section */}
      <section className="solutions-hero-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">One Platform. Multiple Business Functions.</span>
            <h1 className="section-title">
              Everything Your Business Needs to Operate Better.
            </h1>
            <div className="ribbon-gradient-bar ribbon-gradient-bar-center" />
            <p className="solutions-hero-lead">
              XENedion brings together the essential functions required to manage your business.
            </p>
          </div>

          {/* Interactive Function Navigator */}
          <div className="solutions-tabs-nav">
            {solutionsData.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`solutions-tab-pill ${isActive ? 'tab-pill-active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon size={18} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Solution Feature Spotlight */}
          <div className="solution-spotlight-card">
            <div className="spotlight-content">
              <div className="spotlight-badge">
                <span>Featured Capability</span>
              </div>
              <h2 className="spotlight-title">{currentSolution.title}</h2>
              <p className="spotlight-tagline">{currentSolution.tagline}</p>
              
              <div className="spotlight-capabilities-list">
                <h4 className="capabilities-label">Core Functional Highlights:</h4>
                <ul>
                  {currentSolution.keyCapabilities.map((cap, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="cap-check-icon" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="spotlight-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Solution Demo</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="spotlight-media">
              <div className="spotlight-media-frame">
                <img
                  src={currentSolution.image}
                  alt={currentSolution.title}
                  className="spotlight-img"
                  width="1000"
                  height="667"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. All 9 Functions Grid */}
      <section className="section-alt all-functions-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-tag">Comprehensive Module Suite</span>
            <h2 className="section-title">The Complete Integrated Ecosystem</h2>
            <p className="section-subtitle">
              Every transaction, document, and process harmonized across a single operating foundation.
            </p>
          </div>

          <div className="solutions-full-grid">
            {solutionsData.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <div key={sol.id} className="solution-grid-card">
                  <div className="solution-grid-card-top">
                    <div className="solution-grid-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="solution-grid-number">0{index + 1}</span>
                  </div>
                  <h3 className="solution-grid-title">{sol.title}</h3>
                  <p className="solution-grid-desc">{sol.tagline}</p>
                  
                  <div className="solution-grid-caps">
                    {sol.keyCapabilities.slice(0, 2).map((c, idx) => (
                      <div key={idx} className="grid-cap-bullet">
                        <span className="cap-bullet-dot" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  <div className="solution-grid-card-footer">
                    <button
                      type="button"
                      className="solution-select-btn"
                      onClick={() => {
                        setActiveTab(sol.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                    >
                      <span>Explore this module</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
