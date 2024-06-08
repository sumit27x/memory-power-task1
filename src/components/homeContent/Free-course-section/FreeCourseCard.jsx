import React from "react";
import { CiStar } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./free-course.css";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">
          <Link to="/login" className="no-underline">Free</Link>
        </button>
      </div>

      <div className="free__course__details">
        <h4>{title}</h4>

        <div className="d-flex align-items-center gap-5">
          <span className="d-flex align-items-center gap-2" >
          <LuUser2 />
          {students}k</span>
          <span className="d-flex align-items-center gap-2">
          <CiStar />
          {rating}k</span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
