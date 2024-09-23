import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Pricing = () => {
  return (
    <section className="container pricing">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title">Pricing</div>
          <p className="pricing-left-text">
            Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online.
          </p>
          <div className="card pricing-left-card">
            <div className="pricing-title">
              Let’s Schedule <br /> a Meeting
            </div>
            <button className="btn meeting-btn">Schedule Meeting</button>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card h-100 pricing-right-card">
            <div className="pricing-right-card-title">Unlimited Services</div>
            <p className="pricing-right-card-text">
              Take a look at some of our recent projects to see how <br /> we've
              helped businesses like yours succeed online.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>ultimate request</li>
                  <li>ultimate request</li>
                  <li>ultimate request</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>ultimate request</li>
                  <li>ultimate request</li>
                  <li>ultimate request</li>
                </ul>
              </div>
            </div>
            <div className="row price-right-container">
              <div className="col-6"><span className="price">$3,250</span><span className="month">/mo</span></div>
              <div className="col-6">
                <div className="h-100 d-flex justify-content-end align-items-center p-3 b"><FaArrowRightLong /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
