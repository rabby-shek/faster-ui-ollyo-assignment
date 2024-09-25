import React from "react";

const Contact = () => {
  return (
    <section className="container contact">
      <div className="section-title text-center">Let’s Get in Touch</div>
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email 
          </label>
          <input
            type="email"
            className="form-control contact-form-input"
            id="email"
            aria-describedby="emailHelp"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control contact-form-input"
            id="name"
            placeholder="Full Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control contact-form-text-area"
            id="message"
            rows="3"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button type="submit" className="btn contact-submit-btn">
          Get in Touch
        </button>
      </form>
    </section>
  );
};

export default Contact;
