import React from "react";
const courseCard = {
  border: "1px solid gray",
  borderRadius: "5px",
  marginBottom: "2px",
};

const Courses = (props) => {

  const { course } = props; // destructing props

  return (
    <div className="course-item" style={courseCard}>
    {/* <div className="course-item" style={
      {
        border:'1px solid gray',
        borderRadius:"5px",
        marginBottom:"2px"
      }
    }> */}
      <h3>{course?.name}</h3>
      <p>{course?.details}</p>
    </div>
  );
};

export default Courses;
