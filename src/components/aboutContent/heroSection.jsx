import React from "react";
import "./about.css";
import Creater1 from "./../../asset/create/portrait-professional-elegant-businessman.jpg"
import Creater2 from "./../../asset/create/press-reporter-fallowing-leads-case.jpg"

function heroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-text ">
        <h3>Meet our Founders</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          congue quam. Nullam in aliquam urna. Cras scelerisque ultrices
          laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque
          ultrices laoreet.
        </p>
        <a href="#">Find your people, your answers, your path to growth</a>
      </div>
      <div className="hero-section-second">
        <div className="hero-section-image">
          <img src={Creater1} alt=""  />
          <h3>Sophia Patel</h3>
          <p>CO-FOUNDER & CO-CEO</p>
        </div>

        <div className="hero-section-image">
          <img src={Creater2} alt=""  />
          <h3>Benjamin Harrison</h3>
          <p>Chairman</p>
        </div>
      </div>
    </div>
  );
}

export default heroSection;
