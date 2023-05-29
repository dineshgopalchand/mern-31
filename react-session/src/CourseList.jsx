import React from "react";
import Courses from "./Courses";

const CourseList = () => {
  const title = "Courses List";
  const courseList = [
    {
      id: 1,
      name: "HTML 5",
      details: "This is HTML course",
    },
    {
      id: 2,
      name: "CSS",
      details: "This is CSS course",
    },
    {
      id: 3,
      name: "Javascript",
      details: "This is Javascript course",
    },
    {
      id: 4,
      name: "React JS",
      details: "This is React JS course",
    },
    {
      id: 5,
      name: "Angular ",
      details: "This is Angular course",
    },
    {
      id: 6,
      name: "Nodejs",
      details: "This is Nodejs course",
    },
    {
      id: 7,
      name: "MongoDB",
      details: "This is MongoDB course.",
    },
  ];
  const courseListEle = courseList.map((course) => {
    return <Courses course={course} key={course.id} />;
  });
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <div>This is a course details block</div>
      {/* {courseList.map((course) => {
        return <Courses course={course} />;
      })} */}
      {courseListEle}
    </div>
  );
};

export default CourseList;
