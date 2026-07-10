import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import useSeo from '../useSeo';
import '../css/aboutUs.css';

const AboutUs = () => {
  useSeo({
    title: 'About Us | Super League Promotions',
    description:
      'Founded in 1996, Super League Promotions introduced British Pool to Malaysia. Learn about our SEA Games heritage and our premium, Hainsworth-fitted pool tables across the Klang Valley.',
    path: '/about',
  });

  return (
    <div className="AboutUs">
      <Navbar />

      {/* Main Content */}
      <div className="about-content">
        <h1 className="sr-only">About Super League Promotions</h1>

        {/* Timeline Section */}
        <section className="about-timeline">

          {/* 1998 - The Beginning */}
          <div className="timeline-item">
            <div className="timeline-year">
              <span className="year-number">1996</span>
              <span className="year-label">The Beginning</span>
            </div>
            <div className="timeline-content">
              <h2 className="timeline-title">Where It All Started</h2>
              <p className="timeline-text">
                Super League Promotions was founded by <strong>M.S. Lim</strong>, a visionary who first introduced British Pool to Malaysia's bar and pub scene. What began as a personal passion for the game grew into a mission — to bring the authentic British Pool experience to venues across Klang Valley.
              </p>
              <p className="timeline-text">
                At a time when British Pool was virtually unknown in Malaysia, M.S. Lim saw its potential. He believed in the game's ability to bring people together, to create moments of connection and friendly competition in pubs and bars.
              </p>
            </div>
          </div>

          {/* Legacy of Excellence */}
          <div className="timeline-item timeline-item-alt">
            <div className="timeline-content">
              <h2 className="timeline-title">A Legacy of Excellence</h2>
              <p className="timeline-text">
                M.S. Lim's expertise extended beyond business — he served as a <strong>SEA Games coach</strong> for Malaysian cue sports. Under his guidance, <strong>Sam Chong</strong> achieved remarkable success, winning <strong>four gold medals</strong> for Malaysia on the international stage.
              </p>
              <p className="timeline-text">
                This commitment to excellence at the highest level reflects the standards we uphold in everything we do — from the tables we supply to the service we provide.
              </p>
            </div>
            <div className="timeline-highlight">
              <div className="highlight-card">
                <span className="highlight-number">4</span>
                <span className="highlight-label">SEA Games<br />Gold Medals</span>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="timeline-item">
            <div className="timeline-year">
              <span className="year-number">26+</span>
              <span className="year-label">Years of Excellence</span>
            </div>
            <div className="timeline-content">
              <h2 className="timeline-title">Premium British Pool Tables</h2>
              <p className="timeline-text">
                For over two decades, we've been supplying <strong>high-quality British pool tables</strong> to pubs and bars across Klang Valley. Each table is fitted with <strong>Hainsworth Cuesport Cloth</strong> — a tournament-grade cloth imported directly from England.
              </p>
              <p className="timeline-text">
                This premium cloth delivers professional performance, precision, and the signature smooth play that serious players appreciate. We're also <strong>authorized suppliers of Hainsworth cloth</strong>, trusted by venues and cue sport enthusiasts who value authentic quality.
              </p>
            </div>
          </div>

        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="mission-container">
            <h2 className="mission-title">Our Promise</h2>
            <div className="mission-statement">
              <p>
                "We don't just deliver pool tables — we bring the <strong>true British Pool experience</strong> to life, helping venues create spaces where people come together to play, connect, and enjoy the game."
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
