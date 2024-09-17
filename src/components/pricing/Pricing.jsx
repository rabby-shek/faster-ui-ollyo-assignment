import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Pricing = () => {
  return (
    <section className="container pricing">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title">Pricing</div>
          <p>
            Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online.
          </p>
          <div>
            <div className="pricing-title">Let’s Schedule a Meeting</div>
            <button className="btn btn-primary w-100">Schedule Meeting</button>
          </div>
        </div>
        <div className="col-lg-7">
          <div>Unlimited Services</div>
          <p>
            Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>ultimate request</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>ultimate request</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">$3,250 /mo</div>
            <div className="col-6">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
