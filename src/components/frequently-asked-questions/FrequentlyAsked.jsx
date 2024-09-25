import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration
      easing: 'ease-in-out',  // Easing for smoothness
      once: true,  // Animation happens only once
    });
  }, []);

  const faqs = [
    {
      question: "How can I contact Inkyy Team?",
      answer: `You can reach us through our contact form on our website or by emailing us at <span>hello@inkyy.com</span>. We typically respond within 24 hours.`,
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 5-7 business days.",
    },
    {
      question: "Where are you located?",
      answer: "We are located in Dhaka, Bangladesh.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container frequently-asked">
      <div className="row">
        <div className="col-5">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="col-7">
          <div className="accordion" id="faqList">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-3"
                data-aos="fade-up"  // Animation for scrolling
                data-aos-delay={index * 100} // Stagger animation by index
              >
                <div
                  className="faq-question d-flex justify-content-between align-items-center py-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
                {activeIndex === index && (
                  <div
                    className="faq-answer py-2"
                    dangerouslySetInnerHTML={{ __html: faq.answer }} // Insert raw HTML
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
