// src/CardContainer.js
import React from "react";
import Card from "./Card";
import "./style.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        title="All Courses"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque maximus eros risus, eu blandit purus consectetur et. 
        Phasellus consequat justo sit amet nunc malesuada mattis. Cras eget mi eu odio."
        link="Browse all courses"
      />
      <Card
        title="Our teams"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque maximus eros risus, eu blandit purus consectetur et.
         Phasellus consequat justo sit amet nunc malesuada mattis. Cras eget mi eu odio."
        link="Browse all teams"

      />
      <Card
        title="Get to know us"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque maximus eros risus, eu blandit purus consectetur et.
         Phasellus consequat justo sit amet nunc malesuada mattis. Cras eget mi eu odio."
        link="Browse all Community"
      />
    </div>
  );
};

export default CardContainer;
