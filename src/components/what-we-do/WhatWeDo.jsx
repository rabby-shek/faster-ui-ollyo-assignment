import React from "react";
import SunIcon from "../../assets/icons/SunIcon";
import StarIcon from "../../assets/icons/StarIcon";
import TvIcon from "../../assets/icons/TvIcon";
import VectorSmallIcon from "../../assets/icons/VectorSmallIcon";
import VectorBigIcon from "../../assets/icons/VectorBigIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import LockIcon from "../../assets/icons/LockIcon";
import WhatWeDoPhoto from "../../assets/images/what-we-do.png";
const WhatWeDo = () => {
  return (
    <section className="container what-we-do">
      <div className="section-title">What We Do</div>
      <div className="row mt-3">
        <div className="col-lg-9 col-sm-6">
          <div className="row g-4">
            <div className="col-lg-4">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title w-card-icon-container">
                  <SunIcon className="w-icon" />
                  </h5>
                  <h6 class="card-subtitle mb-2 w-card-title">Web Design</h6>
                  <p class="card-text w-text">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title w-card-icon-container"><StarIcon className="w-icon"  /></h5>
                  <h6 class="card-subtitle mb-2 w-card-title">UI/UX Design</h6>
                  <p class="card-text w-text">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title w-card-icon-container"><TvIcon className="w-icon"  /></h5>
                  <h6 class="card-subtitle mb-2 w-card-title">Responsive Design</h6>
                  <p class="card-text w-text">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div class="card h-100 py-2">
                <div class="card-body">
                 <div className="row h-100 g-3">
                  <div className="col-lg-6">
                  <h5 class="card-title w-card-icon-container"><VectorSmallIcon className="w-icon"  /></h5>
                  <h6 class="card-subtitle mb-2 w-card-title">Webflow</h6>
                  <p class="card-text w-text">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="vector-big-icon-container">
                    <VectorBigIcon className="w-big-icon"  />
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <h5 class="card-title w-card-icon-container">
                    <CodeIcon className="w-icon"  />
                  </h5>
                  <h6 class="card-subtitle mb-2 w-card-title">Custom Development</h6>
                  <p class="card-text w-text">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                  <VectorBigIcon  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div class="card h-100 py-2">
            <div class="card-body">
              <h5 class="card-title w-card-icon-container"><LockIcon className="w-icon"  /></h5>
              <h6 class="card-subtitle mb-2 w-card-title">E-commerce Solutions:</h6>
              <p class="card-text w-text">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </p>
              
            </div>
            <img src={WhatWeDoPhoto} alt="WhatWeDoPhoto" className="WhatWeDoPhoto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
