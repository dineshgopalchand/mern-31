import React from "react";

const Courses = (props) => {
//   console.log(props);
  // const courseName=props.courseName;
  const { course } = props; // destructing props
//   console.log(course);
  return (
    <div>
      <h3>{course?.name}</h3>
      <p>{course?.details}</p>
    </div>
  );
};

export default Courses;
