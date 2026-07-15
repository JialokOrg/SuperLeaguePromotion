import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import useSeo from '../useSeo';
import '../css/faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does Super League Promotions do?",
      answer: "We specialize in supplying British pool tables to bars, pubs, and entertainment venues across Klang Valley. All our tables come equipped with Hainsworth Cuesport Cloth, tournament-grade and imported directly from England. We also sell Hainsworth cloth separately for table owners and venues."
    },
    {
      question: "What makes your pool tables different?",
      answer: "Our Superleague British Pool Tables are directly imported from UK are built to British standards, with premium craftsmanship, authentic parts, and Hainsworth® tournament-grade cloth. This combination ensures smooth play, consistency, and long-lasting durability."
    },
    {
      question: "Can I purchase just the Hainsworth cloth?",
      answer: "Absolutely. We are an authorized distributor of Hainsworth Cuesport Cloth in Malaysia. You can buy cloth by the roll or per table, and we offer installation services if needed."
    },
    {
      question: "How long does delivery of the cloth take?",
      answer: "Delivery times depends on your location. Typically, delivery is completed within 3–7 working days after order confirmation."
    },
    {
      question: "Do you provide profit-sharing pool tables for venues?",
      answer: "Yes, we offer profit-sharing partnerships where we provide the pool table, handle maintenance, and share the earnings with your venue — with no upfront cost to you."
    },
    {
      question: "How can I contact Super League Promotions?",
      answer: "You can reach us on WhatsApp or call 019-3312599 for any inquiries. We're happy to help you find the perfect setup for your venue."
    }
  ];

  useSeo({
    title: 'British Pool Table & Hainsworth Cloth FAQ | Malaysia',
    description:
      'FAQs on British pool table rental, profit-sharing and supply, plus Hainsworth pool & snooker cloth in Malaysia — Kuala Lumpur, Selangor and the Klang Valley.',
    path: '/faq',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <Navbar />

      {/* Main Content */}
      <div className="faq-content">
        <div className="faq-container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">Everything you need to know about our services and products</p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-number">{index + 1}.</span>
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h3>Still have questions?</h3>
            <p>Contact us directly</p>
            <a href="https://wa.me/60193312599" className="contact-button" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
