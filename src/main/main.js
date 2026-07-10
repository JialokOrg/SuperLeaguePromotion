import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../css/main.css';
import bannerImage from '../asset/exp.jpg';
import upYourGameImage from '../asset/IMG_0986.jpg';
import secondSectionImage from '../asset/IMG_1126.jpg';
import thirdSectionImage from '../asset/IMG_8755.jpg';

// Showcase images
import showcase1 from '../asset/1.jpg';
import showcase2 from '../asset/2.jpg';
import showcase3 from '../asset/3.jpg';
import showcase4 from '../asset/4.jpg';
import showcase5 from '../asset/5.jpg';
import showcase6 from '../asset/6.jpg';
import showcase7 from '../asset/7.jpg';

const Main = () => {
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
                <span className="banner-highlight"> Premium British</span> 
                <br/> Pool Tables & Repair<br />
                <span className="banner-highlight">Solutions</span>
              </h1>
              <p className="banner-description">
Transform your venue with authentic British pool tables featuring premium Hainsworth cloth. Zero upfront investment - we provide the tables, you provide the space, and we share the profits together              </p>
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
            <div className="info-card card-dark">
              <div className="card-content">
                <p className="card-subtitle">More than</p>
                <h2 className="card-title">HUNDRED</h2>
                <p className="card-description">of client.</p>
              </div>
            </div>

            <div className="info-card card-yellow">
              <div className="card-content">
                <h2 className="card-number">20+</h2>
                <div className="card-text">
                  <p className="card-title-large">YEARS</p>
                  <p className="card-description">of Experience.</p>
                </div>
              </div>
            </div>

            <div className="info-card card-teal">
              <div className="card-content">
                <h2 className="card-title-emphasis">FIRST</h2>
                <p className="card-title-small">CLASS</p>
                <p className="card-description">on maintenance and services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Up Your Game */}
        <section id="services" className="up-your-game-section">
          <div className="up-your-game-container">
            {/* Left Content */}
            <div className="up-your-game-content">
              <h2 className="up-your-game-title">Trust & Expertise Focus</h2>

              <p className="up-your-game-text">
                Every Hainsworth cloth deserves expert installation. Our network of certified fitters ensures your table performs exactly as intended—tight, smooth, and tournament-ready. With decades of combined experience, our professionals understand that precision fitting is the difference between a good table and a great one.
              </p>
            </div>

            {/* Right Image */}
            <div className="up-your-game-image-wrapper">
              <div className="up-your-game-image-container">
                <img src={upYourGameImage} alt="Pool Table" className="up-your-game-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Section - Image Left, Content Right */}
        <section className="up-your-game-section">
          <div className="up-your-game-container">
            {/* Left Image */}
            <div className="up-your-game-image-wrapper">
              <div className="up-your-game-image-container">
                <img src={secondSectionImage} alt="Pool Table Service" className="up-your-game-image" />
              </div>
            </div>

            {/* Right Content */}
            <div className="up-your-game-content content-right">
              <h2 className="up-your-game-title">Process Focus</h2>

              <p className="up-your-game-text">
                Professional installation is more than just stretching cloth. It's understanding tension, alignment, and the unique characteristics of each table. Our trained fitters work meticulously to deliver a playing surface that meets the standards of world-class venues—right in your club, pub, or home.
              </p>
            </div>
          </div>
        </section>

        {/* Third Content Section - Text Left, Image Right */}
        <section className="up-your-game-section">
          <div className="up-your-game-container">
            {/* Left Content */}
            <div className="up-your-game-content">
              <h2 className="up-your-game-title">Technical Focus</h2>

              <p className="up-your-game-text">
                Professional installation is more than stretching cloth—it's about precision tension, perfect alignment, and understanding how every detail affects your game. Our network of trained fitters ensures your Hainsworth cloth performs exactly as intended, from the first break to the last frame.
              </p>
            </div>

            {/* Right Image */}
            <div className="up-your-game-image-wrapper">
              <div className="up-your-game-image-container">
                <img src={thirdSectionImage} alt="Pool Table Technical" className="up-your-game-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Showcase Carousel */}
        <section className="showcase-section">
          <div className="showcase-header">
            <h2 className="showcase-title">Our Customer Showcase</h2>
            <p className="showcase-subtitle">See our premium pool tables in action across Malaysia</p>
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
                    <img src={image.src} alt={`Showcase ${index + 1}`} className="carousel-image" />
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
              <p className="who-we-are-label">WHO WE ARE ?</p>
              <h2 className="who-we-are-title">
                Pool Table Services<br />
                You Can Rely On
              </h2>
              <p className="who-we-are-description">
                Proin id erat pharetra, consectetur est at, tincidunt turpis. Nullam ac purus velit.
                Curabitur a consectetur enim. Vestibulum feugiat quis nisi volutpat rhoncus. Nulla non
                augue neque. Pellentesque molestie tincidunt felis vel commodo.
              </p>

              {/* Progress Bar */}
              <div className="satisfaction-bar">
                <div className="satisfaction-header">
                  <span className="satisfaction-label">Client Satisfaction</span>
                  <span className="satisfaction-percentage">90%</span>
                </div>
                <div className="satisfaction-progress">
                  <div className="satisfaction-fill"></div>
                </div>
              </div>

              {/* Features */}
              <div className="who-we-are-features">
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div className="feature-text">
                    <h4>Professional &</h4>
                    <h4>Creative Staff</h4>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-text">
                    <h4>Warrantees &</h4>
                    <h4>Guarantees</h4>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="who-we-are-buttons">
                <a href="tel:+60193312599" className="who-phone-link">
                  📞 +6019-331 2599
                </a>
              </div>
            </div>

            {/* Right Form & Image */}
            <div className="who-we-are-right">
              {/* Contact Form */}
              <div className="contact-form-card">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your name here" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="Your email here" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Input Message Here" rows="4"></textarea>
                </div>
                <button className="form-submit-btn">REQUEST A SERVICE</button>
              </div>

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