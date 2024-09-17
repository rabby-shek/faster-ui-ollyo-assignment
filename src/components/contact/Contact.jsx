import React from "react";

const Contact = () => {
  return (
    <section className="container contact">
      <div className="section-title text-center">Let’s Get in Touch</div>
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control contact-form-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control contact-form-input"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control contact-form-text-area"
            id="exampleFormControlTextarea1"
            rows="3"
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
