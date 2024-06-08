import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "./../../../asset/image/web-development.png";
import courseImg02 from "./../../../asset/image/kids-learning.png";
import courseImg03 from "./../../../asset/image/seo.png";
import courseImg04 from "./../../../asset/image/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="free-course-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5" style={{textAlign:"center",marginBottom:"5px"}}>
            <h2 className="fw-bold ">Our Free Courses</h2>
          </Col>
        </Row>
        <div className="free-course-container">
          {freeCourseData.map((item) => (
            <FreeCourseCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FreeCourse;
