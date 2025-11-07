import React from 'react';
import Navbar from './navbar';
import '../css/main.css';
import bannerImage from '../asset/bannerHD.png';

const Main = () => {
  return (
    <div className="Main">
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Banner */}
        

        {/* Description Section */}
        <section className="description-section">
          <div className="description-container">
            <h1 className="section-title">Bentley Motors</h1>

            <p className="description-text">
              From W.O. Bentley, who founded Bentley Motors in 1919, to the current team of over 4,000 dedicated employees,
              the company's extraordinary cars have always been designed and built by exceptional people using only the finest
              of materials. They have always been driven by exceptional people, too. From the passionate Bentley Boys and Girls
              who raced the cars in the 1920s, encouraging W.O. Bentley to achieve ever greater feats of engineering, to the
              visionary Bentley owners of today, Bentley drivers help to shape the world around them.
            </p>

            <p className="description-text">
              In 2020 Bentley Motors launched the 'Beyond100' manifesto, which outlines our intention to become the most
              sustainable luxury automotive brand in the world. As a brand we are constantly looking forwards, using the
              links below you will find our technological innovations and future vision for Bentley.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;