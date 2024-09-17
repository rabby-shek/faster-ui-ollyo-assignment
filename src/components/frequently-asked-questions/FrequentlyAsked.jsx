import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Plus and minus icons for expand/collapse

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day refund policy for unused products.",
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
    <section className="container frequently-asked my-5">
      <div className="row">
        <div className="col-5">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="col-7">
          <div className="accordion" id="faqList">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <div
                  className="faq-question d-flex justify-content-between align-items-center py-2"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    padding: "20px",
                    height: "70px",
                    borderRadius: "10px",
                  }} // Added subtle bottom border only
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
                {activeIndex === index && (
                  <div
                    className="faq-answer py-2"
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      height: "70px",
                      borderRadius: "10px",
                      marginTop: "-10px",
                    }}
                  >
                    {faq.answer}
                  </div>
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
