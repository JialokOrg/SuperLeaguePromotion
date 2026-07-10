import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import useSeo from '../useSeo';
import '../css/main.css';
import bannerImage from '../asset/hero-bg.jpg';
import upYourGameImage from '../asset/IMG_8917.jpg';
import secondSectionImage from '../asset/IMG_1296.jpg';
import thirdSectionImage from '../asset/IMG_0986.jpg';

// Showcase images
import showcase1 from '../asset/1.jpg';
import showcase2 from '../asset/2.jpg';
import showcase3 from '../asset/3.jpg';
import showcase4 from '../asset/4.jpg';
import showcase5 from '../asset/5.jpg';
import showcase6 from '../asset/6.jpg';
import showcase7 from '../asset/7.jpg';

const Main = () => {
  useSeo({
    title: 'Super League Promotions',
    description:
      'Super League Promotions supplies premium British pool tables to bars, pubs and venues across the Klang Valley — zero upfront cost, a profit-sharing partnership, and authentic Hainsworth cloth from England.',
    path: '/',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseImages = [
    { src: showcase1 },
    { src: showcase2 },
    { src: showcase3 },
    { src: showcase4 },
    { src: showcase5 },
    { src: showcase6 },
    { src: showcase7 },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  // Scroll-reveal: fade/slide elements in as they enter the viewport
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ── Enquiry form → email (via Web3Forms) ────────────────
  // Paste the client's Web3Forms access key here (from web3forms.com).
  const WEB3FORMS_ACCESS_KEY = 'da95283d-bdef-46aa-9b07-dc803e63cbd7';

  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiry((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();

    if (!enquiry.name.trim() || !enquiry.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Enquiry from Superleague Website',
          from_name: 'Superleague Website',
          name: enquiry.name,
          email: enquiry.email || undefined,
          phone: enquiry.phone || 'Not provided',
          message: enquiry.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEnquiry({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="Main">
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Banner with Overlay */}
        <div className="hero-banner">
          <img src={bannerImage} alt="Super League Promotions" className="banner-image" />
          <div className="banner-overlay">
            <div className="banner-content">
              {/* <p className="banner-subtitle">DRIVE WITH CONFIDENCE</p> */}
              <h1 className="banner-title">
                <span className="banner-highlight">More Than</span>
                <br /> Just A Game<br />
                <span className="banner-highlight">Of Pool</span>
              </h1>
              <p className="banner-description">
                Whether it's friendly competition, memorable nights, or bringing customers back again, we help venues create entertainment experiences with our premium Superleague British Pool Tables and dedicated ongoing support.
              </p>
              <div className="banner-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('who-we-are')}>MAKE APPOINTMENT</button>
                <button className="btn-secondary" onClick={() => scrollToSection('services')}>READ MORE →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Cards Section - Overlapping */}
        <section className="cards-section">
          <div className="cards-container">
            <div className="info-card card-dark reveal">
              <div className="card-content">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="card-title">ZERO COST</h2>
                <p className="card-description">profit sharing partnership</p>
              </div>
            </div>

            <div className="info-card card-yellow reveal" style={{ transitionDelay: '0.12s' }}>
              <div className="card-content">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h2 className="card-title">30 years</h2>
                <p className="card-description">of experience</p>
              </div>
            </div>

            <div className="info-card card-teal reveal" style={{ transitionDelay: '0.24s' }}>
              <div className="card-content">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.2l5.9-.9L12 3z" />
                  </svg>
                </div>
                <h2 className="card-title">PREMIUM</h2>
                <p className="card-description">quality and service you can trust</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section 1 - Zero-Cost Partnership */}
        <section id="services" className="up-your-game-section">
          <div className="up-your-game-container">
            {/* Left Content */}
            <div className="up-your-game-content reveal">
              <span className="section-eyebrow">01 · Performance</span>
              <h2 className="up-your-game-title">Built for Performance.</h2>
              <p className="up-your-game-text">
                Every Superleague British Pool Table is built to deliver a smooth, consistent playing experience. Designed for commercial venues and fitted with premium components, our tables combine durability, precision, and professional craftsmanship to meet the demands of everyday play.
              </p>
              <ul className="feature-list">
                <li>Durable, commercial-grade build</li>
                <li>Smooth, consistent playing surface</li>
                <li>Premium components throughout</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="up-your-game-image-wrapper reveal">
              <div className="up-your-game-image-container">
                <img src={upYourGameImage} alt="Superleague British pool table in a venue" className="up-your-game-image" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section 2 - Expert Installation (tinted) */}
        <section className="up-your-game-section section-tinted">
          <div className="up-your-game-container">
            {/* Left Image */}
            <div className="up-your-game-image-wrapper reveal">
              <div className="up-your-game-image-container">
                <img src={secondSectionImage} alt="Superleague team fitting a British pool table" className="up-your-game-image" loading="lazy" />
              </div>
            </div>

            {/* Right Content */}
            <div className="up-your-game-content content-right reveal">
              <span className="section-eyebrow">02 · Craftsmanship</span>
              <h2 className="up-your-game-title">Where Quality Meets Expertise.</h2>
              <p className="up-your-game-text">
                Every Superleague British Pool Table comes fitted with premium Hainsworth cloth directly from England. Our experienced installation team ensures every table performs exactly as intended—tight, smooth, and tournament-ready. With decades of experience, we know that precision fitting is the difference between a good table and a great one.
              </p>
              <ul className="feature-list">
                <li>Certified, experienced installers</li>
                <li>Tournament-grade playing surface</li>
                <li>Meticulous, detail-driven finish</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section 3 - Ongoing Support */}
        <section className="up-your-game-section">
          <div className="up-your-game-container">
            {/* Left Content */}
            <div className="up-your-game-content reveal">
              <span className="section-eyebrow">03 · Partnership</span>
              <h2 className="up-your-game-title">More Than a Business Partner.</h2>
              <p className="up-your-game-text">
                At Super League Promotions, we believe great partnerships go beyond installation. We work closely with every venue, providing responsive support, professional advice, and dependable service to help create an entertainment experience that keeps customers coming back.
              </p>
              <ul className="feature-list">
                <li>Scheduled maintenance & re-clothing</li>
                <li>Fast, responsive support</li>
                <li>Long-term partnership, not a one-off sale</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="up-your-game-image-wrapper reveal">
              <div className="up-your-game-image-container">
                <img src={thirdSectionImage} alt="Superleague pool table in a partner venue" className="up-your-game-image" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Showcase Carousel */}
        <section className="showcase-section">
          <div className="showcase-header reveal">
            <h2 className="showcase-title">Showcase</h2>
            <p className="showcase-subtitle">Some of our tables across Klang Valley</p>
          </div>

          <div className="showcase-carousel">
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              ‹
            </button>

            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {showcaseImages.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image.src} alt={`Showcase ${index + 1}`} className="carousel-image" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
              ›
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="who-we-are" className="who-we-are-section">
          <div className="who-we-are-container">
            {/* Left Content */}
            <div className="who-we-are-content">
              <p className="who-we-are-label">READY TO GET STARTED?</p>
              <h2 className="who-we-are-title">
                Bring British Pool to Your Venue
              </h2>
              <p className="who-we-are-description">
                Whether you're opening a new venue or looking to upgrade your entertainment
                offerings, our team is here to help. With our profit-sharing British pool table
                programme, you can enhance your venue while we take care of everything—from
                professional installation to ongoing service and support.
              </p>
            </div>

            {/* Right Form & Image */}
            <div className="who-we-are-right">
              {/* Contact Form */}
              <form className="contact-form-card" onSubmit={handleEnquirySubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Your name here" value={enquiry.name} onChange={handleEnquiryChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-input" placeholder="Your email here" value={enquiry.email} onChange={handleEnquiryChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" className="form-input" placeholder="Your phone number" value={enquiry.phone} onChange={handleEnquiryChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-textarea" placeholder="Input Message Here" rows="4" value={enquiry.message} onChange={handleEnquiryChange}></textarea>
                </div>
                <button type="submit" className="form-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'SENDING…' : 'ENQUIRE NOW'}
                </button>

                {status === 'success' && (
                  <p className="form-status form-status-success">
                    ✓ Thank you! Your enquiry has been sent — we'll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-status form-status-error">
                    Please enter your name and message, then try again.
                  </p>
                )}
              </form>

              {/* Player Image */}
              <div className="player-image-container">
                {/* Image will be added here */}
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Main;