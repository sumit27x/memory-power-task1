import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt={title} className="w-100" />
      </div>
      <div className="course__details">
        <h3 className="course__title mb-4">{title}</h3>
        <div  style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>
          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>
          <p className="enroll d-flex align-items-center gap-1">
            <a href="#">Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
