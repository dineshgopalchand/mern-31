import React from "react";
import Styles from "./Courses.module.css";


const Courses = (props) => {

  const { course } = props; // destructing props

  return (
    <div className={Styles.courseItem} >
      <h3>{course?.name}</h3>
      <p>{course?.details}</p>
    </div>
  );
};

export default Courses;
